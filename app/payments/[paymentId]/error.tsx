'use client';

import Link from "next/link";
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function Error({error}: {error: Error}) {
  return (
    <div className="flex flex-col items-center justify-center">
    
      <FaceFrownIcon className="w-10 text-red-500 mb-4" />
      <h2 className="text-center text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="font-bold text-lg mb-6">Error: {error.message}</p>
      <Link
        href="/payments"
        className="rounded-md bg-red-500 px-4 font-bold py-2 text-sm text-white transition-colors hover:bg-red-800"
      >
        Go back /payments page
      </Link>
    </div>
    
  );
}