import { MonitorSmartphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui';

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <span>welcome to</span>
      <div className="flex items-center gap-2">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-gray-800">DGShap</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href="/products">Go To Products</Link>
      </Button>
    </div>
  );
}

export default Welcome;
