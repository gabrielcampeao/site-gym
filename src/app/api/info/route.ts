import { NextResponse } from 'next/server'
import info from '@/data/info.json'

export async function GET() {
  return NextResponse.json({ success: true, data: info })
}
