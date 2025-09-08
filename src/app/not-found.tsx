import { Button } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <Button asChild>
        <Link href="/">Go Back to Home</Link>
      </Button>
    </main>
  );
}

export default NotFound;
