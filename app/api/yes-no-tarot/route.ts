import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    // TODO: 实现是否占卜逻辑
    const mockResult = {
      answer: Math.random() > 0.5 ? 'yes' : 'no',
      card: {
        id: 1,
        name: '命運之輪',
        image: '/cards/wheel-of-fortune.jpg',
        interpretation: '占卜解释...'
      },
      explanation: '详细解释...'
    };

    return NextResponse.json(mockResult);

  } catch (error) {
    console.error('Yes/No tarot error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}