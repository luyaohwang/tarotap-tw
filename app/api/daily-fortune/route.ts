import { NextResponse } from 'next/server';
import type { DailyFortune } from '@/types';

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // TODO: 实现每日运势逻辑
    const mockFortune: DailyFortune = {
      date: new Date().toISOString().split('T')[0],
      card: {
        id: 1,
        name: '太陽',
        nameEn: 'The Sun',
        image: '/cards/the-sun.jpg',
        uprightMeaning: '正位含义...',
        reversedMeaning: '逆位含义...',
        keywords: ['光明', '希望', '活力']
      },
      generalReading: '整體運勢解讀...',
      loveReading: '感情運勢解讀...',
      careerReading: '事業運勢解讀...',
      healthReading: '健康運勢解讀...',
      luckyNumbers: [3, 7, 9],
      luckyColors: ['金色', '橙色']
    };

    return NextResponse.json(mockFortune);

  } catch (error) {
    console.error('Daily fortune error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}