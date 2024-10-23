import Link from "next/link"
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <FaceFrownIcon className="w-10 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold mb-4">404 Not Found</h2>
      <p className="text-lg mb-6">Could not find the requested Payment ID</p>
      <Link
        href="/"
        className="rounded-md bg-blue-500 inline-block px-4 no-underline font-bold py-2 text-sm text-white transition-colors hover:bg-blue-800"
      >
        Go back to home
      </Link>
    </div>
  )
}