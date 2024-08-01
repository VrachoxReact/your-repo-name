import TodoList from "./components/TodoList";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>
      {session ? (
        <TodoList />
      ) : (
        <div>
          <p className="mb-4">Please log in or sign up to manage your todos.</p>
          <div className="flex space-x-4">
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
