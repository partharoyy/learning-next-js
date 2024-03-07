import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='border-b p-1 text-center'>20% off on membership</div>
      {children}
    </>
  );
}
