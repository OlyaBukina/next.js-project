import React from 'react';
import Sidebar from '@/app/components/sidebar';

export interface LyaoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LyaoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
