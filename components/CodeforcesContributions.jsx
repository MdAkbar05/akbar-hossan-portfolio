"use client";

import { useEffect, useState } from "react";

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
const ACTIVITY_LEVELS = [
  "bg-slate-100 dark:bg-slate-800",
  "bg-sky-200 dark:bg-sky-900",
  "bg-sky-400 dark:bg-sky-700",
  "bg-blue-500 dark:bg-blue-500",
  "bg-blue-700 dark:bg-blue-300",
];

function getActivityLevel(count) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

function createCalendar(activity) {
  const today = new Date();
  const endDate = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
  );
  const firstDate = endDate - 364 * DAY_IN_MILLISECONDS;
  const calendarStart =
    firstDate - new Date(firstDate).getUTCDay() * DAY_IN_MILLISECONDS;
  const activityByDate = new Map(
    activity.map(({ date, count }) => [date, count]),
  );

  return Array.from({ length: 371 }, (_, index) => {
    const date = new Date(calendarStart + index * DAY_IN_MILLISECONDS);
    const dateLabel = date.toISOString().slice(0, 10);
    const count = activityByDate.get(dateLabel) ?? 0;

    return {
      date: dateLabel,
      count,
      isFuture: date.getTime() > endDate,
      level: getActivityLevel(count),
    };
  });
}

export default function CodeforcesContributions() {
  const [activity, setActivity] = useState(null);
  const [solvedCount, setSolvedCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadActivity() {
      try {
        const response = await fetch("/api/codeforces-submissions", {
          signal: controller.signal,
        });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Could not load Codeforces activity.",
          );
        }

        setActivity(result.activity);
        setSolvedCount(result.solvedCount);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          setError(loadError.message);
        }
      }
    }

    loadActivity();
    return () => controller.abort();
  }, []);

  const calendar = activity ? createCalendar(activity) : [];
  const totalSubmissions = activity?.reduce(
    (total, day) => total + day.count,
    0,
  );

  return (
    <section
      id="codeforces-contributions"
      className="container mx-auto px-4 py-6 normalFont text-primary dark:text-quarterary"
    >
      <header className="mx-auto max-w-2xl py-6 text-center md:py-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
          Competitive programming
        </p>
        <h2 className="titleFont text-3xl font-bold tracking-tight md:text-5xl">
          Codeforces Activity
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          My public problem submission activity over the last year, based on up
          to my 10,000 most recent submissions.
        </p>
      </header>
      <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-6">
        {error ? (
          <p
            role="alert"
            className="py-8 text-center text-sm text-slate-500 dark:text-slate-400"
          >
            Codeforces activity could not be loaded.{" "}
            <a
              href="https://codeforces.com/profile/akbarhossan05"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 underline dark:text-sky-300"
            >
              View my Codeforces profile
            </a>
          </p>
        ) : activity === null ? (
          <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Loading Codeforces activity…
          </p>
        ) : (
          <>
            <div className="overflow-x-auto pb-2">
              <div
                aria-label="Codeforces submissions by day over the last year"
                className="grid w-max grid-flow-col grid-rows-7 gap-1"
              >
                {calendar.map((day) => (
                  <span
                    key={day.date}
                    title={
                      day.isFuture
                        ? ""
                        : `${day.count} submission${day.count === 1 ? "" : "s"} on ${day.date}`
                    }
                    aria-label={
                      day.isFuture
                        ? undefined
                        : `${day.count} submission${day.count === 1 ? "" : "s"} on ${day.date}`
                    }
                    className={`h-3 w-3 rounded-sm ${day.isFuture ? "invisible" : ACTIVITY_LEVELS[day.level]}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <span>{totalSubmissions} submissions in the last year.</span>
                <span>
                  {solvedCount} unique problems solved
                  <span className="ml-1 text-slate-400 dark:text-slate-500">
                    (latest 10,000 submissions)
                  </span>
                </span>
              </div>
              <div
                className="flex items-center gap-2"
                aria-label="Activity levels"
              >
                <span>Less</span>
                {ACTIVITY_LEVELS.map((level) => (
                  <span
                    key={level}
                    aria-hidden="true"
                    className={`h-3 w-3 rounded-sm ${level}`}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </>
        )}
        <a
          href="https://codeforces.com/profile/akbarhossan05"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300"
        >
          Visit Codeforces profile →
        </a>
      </div>
    </section>
  );
}
