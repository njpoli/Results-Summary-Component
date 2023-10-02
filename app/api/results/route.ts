import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request: Request) {
  const filePath = path.resolve('.', 'app/assets/data.json');
  try {
    const data = await fs.readFile(filePath);
    const jsonData = data.toString();
    return new NextResponse(jsonData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new NextResponse(
      `Error: ${e instanceof Error ? e.message : 'Something went wrong!'}`,
      {
        status: 400,
      }
    );
  }
}
