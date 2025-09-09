import Link from 'next/link';
import React from 'react';

export default function DashboardHomePage() {
  return (
    <div>
      <Link
        className="flex items-center justify-center "
        href="/dashboard/products"
      >
        products To edit
      </Link>
    </div>
  );
}
