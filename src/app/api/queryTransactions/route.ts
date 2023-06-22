import { NextResponse } from 'next/server'
import { queryTransactionsByMethod } from '@/handlers/contractHandler';

export const dynamic = 'force-dynamic'

// API endpoint that returns array of JSON objects for a specific topic0 (function call in contract)
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const method = searchParams.get('method');
        const response = await queryTransactionsByMethod(`${method}`)
        return NextResponse.json( response );
    } catch (err) {
        return NextResponse.json({ error: `err` });
    }
}
