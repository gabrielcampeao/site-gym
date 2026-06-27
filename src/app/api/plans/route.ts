import { NextResponse } from 'next/server'
import plans from '@/data/plans.json'

export async function GET() {
  return NextResponse.json({ success: true, data: plans })
}
