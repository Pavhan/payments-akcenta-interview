import Link from 'next/link'
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaceFrownIcon className="w-10 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold mb-4">404 Not Found</h2>
      <p className='mb-8'>Could not find the requested Payment</p>
      <Link
        href="/"
        className="rounded-md bg-blue-500 px-4 font-bold py-2 text-sm text-white transition-colors hover:bg-blue-800"
      >
        Go back to home
      </Link>
    </div>
  )
}