import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    message: 'you are logged in!',
  });
}
