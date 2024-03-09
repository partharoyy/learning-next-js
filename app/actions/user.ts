'use server';

import client from '@/db';
import { json } from 'stream/consumers';

export async function signup(email: string, password: string) {
  try {
    const res = await client.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return { res: JSON.stringify({ res }) };
  } catch (e) {
    return { message: 'Invalid request' };
  }
}
