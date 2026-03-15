import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex min-h-screen bg-transparent">
        {/* Sidebar */}
        <aside className="w-64 dark:bg-gray-900 dark:text-white bg-quarterary border-r border-gray-300 dark:border-gray-600 text-primary p-6">
          <h2 className="text-xl font-bold mb-8">Dashboard</h2>

          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="dark:hover:bg-gray-800 hover:bg-white px-4 py-2 rounded"
            >
              Home
            </Link>

            <Link
              href="/panel?secret=667466"
              className="dark:hover:bg-gray-800 hover:bg-white px-4 py-2 rounded"
            >
              Panel
            </Link>

            <Link
              href="/panel/add?secret=667466"
              className="dark:hover:bg-gray-800 hover:bg-white px-4 py-2 rounded"
            >
              Add Project
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col w-full">{children}</main>
      </div>
    </>
  );
}
