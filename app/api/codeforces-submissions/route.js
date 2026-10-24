import { NextResponse } from "next/server";

const DAY_IN_SECONDS = 24 * 60 * 60;
const ACTIVITY_WINDOW_IN_DAYS = 365;
const MAX_SUBMISSIONS = 10000;

export async function GET() {
  try {
    const url = new URL("https://codeforces.com/api/user.status");
    url.searchParams.set("handle", "akbarhossan05");
    url.searchParams.set("from", "1");
    url.searchParams.set("count", String(MAX_SUBMISSIONS));

    const response = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      next: { revalidate: 21600 },
    });

    if (!response.ok) {
      console.error("Codeforces API returned an HTTP error:", response.status);
      return NextResponse.json(
        { message: "Codeforces activity is temporarily unavailable." },
        { status: 502 },
      );
    }

    const result = await response.json();
    if (result.status !== "OK" || !Array.isArray(result.result)) {
      console.error("Codeforces API returned an invalid response.");
      return NextResponse.json(
        { message: "Codeforces activity is temporarily unavailable." },
        { status: 502 },
      );
    }

    const today = Math.floor(Date.now() / (DAY_IN_SECONDS * 1000));
    const firstDay = today - ACTIVITY_WINDOW_IN_DAYS + 1;
    const dailyCounts = new Map();
    const solvedProblems = new Set();

    for (const submission of result.result) {
      if (
        typeof submission.creationTimeSeconds !== "number" ||
        typeof submission.verdict !== "string" ||
        typeof submission.problem?.contestId !== "number" ||
        typeof submission.problem?.index !== "string"
      ) {
        continue;
      }

      if (submission.verdict === "OK") {
        solvedProblems.add(
          `${submission.problem.contestId}-${submission.problem.index}`,
        );
      }

      const submissionDay = Math.floor(
        submission.creationTimeSeconds / DAY_IN_SECONDS,
      );
      if (submissionDay < firstDay || submissionDay > today) continue;

      const date = new Date(submissionDay * DAY_IN_SECONDS * 1000)
        .toISOString()
        .slice(0, 10);
      dailyCounts.set(date, (dailyCounts.get(date) ?? 0) + 1);
    }

    const activity = Array.from(
      { length: ACTIVITY_WINDOW_IN_DAYS },
      (_, index) => {
        const date = new Date(
          (firstDay + index) * DAY_IN_SECONDS * 1000,
        )
          .toISOString()
          .slice(0, 10);

        return { date, count: dailyCounts.get(date) ?? 0 };
      },
    );

    return NextResponse.json({
      activity,
      solvedCount: solvedProblems.size,
    });
  } catch (error) {
    console.error("Error fetching Codeforces submissions:", error);
    return NextResponse.json(
      { message: "Codeforces activity is temporarily unavailable." },
      { status: 502 },
    );
  }
}
