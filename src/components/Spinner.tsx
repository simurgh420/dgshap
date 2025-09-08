import React from 'react';

type SpinnerProps = {
  size?: number;
  className?: string;
};

export default function Spinner({ size = 24, className = '' }: SpinnerProps) {
  const dimension = `${size}px`;
  return (
    <span
      role="status"
      aria-label="loading"
      className={`inline-block align-middle ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      <span
        className="block rounded-full border-2 border-solid border-gray-300 border-t-transparent animate-spin"
        style={{ width: '100%', height: '100%' }}
      />
    </span>
  );
}
