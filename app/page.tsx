import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import client from '@/db';

export async function getUserDetails() {
  const user = await client.user.findFirst();

  return {
    email: user?.email,
    name: 'partha',
  };
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center border p-8 rounded'>
        {userData?.email}, {userData?.name}
      </div>
    </div>
  );
}
