import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://www.prudentmedia.in/_index.php?page=1&__amp_source_origin=https%3A%2F%2Fwww.prudentmedia.in');
  const data = await res.json();
  return NextResponse.json(data);
}
