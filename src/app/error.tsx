'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function EroorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center px-4">
      <h1 className="text-3xl font-bold text-red-700 mb-4">
        مشکلی پیش آمده 😢
      </h1>
      <p className="text-red-600 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        خانه
      </button>
      <button
        onClick={() => router.push('/')}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        خانه
      </button>
    </main>
  );
}

export default EroorPage;
