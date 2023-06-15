import { NextResponse } from 'next/server'
import { logContractFunctionCalls } from '@/handlers/contractHandler';

// API endpoint that returns array of JSON objects for a specific topic0 (function call in contract)
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const topic = searchParams.get('topic');
        const response = await logContractFunctionCalls(`${topic}`)
        return NextResponse.json( response );
    } catch (err) {
        return NextResponse.json({ error: 'Error fetching API' });
    }
}