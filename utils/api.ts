import type { ReadingResult, DailyFortune } from '@/types';

export const api = {
  async getTarotReading(question: string, readerId: number): Promise<ReadingResult> {
    const response = await fetch('/api/tarot-reading', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, readerId }),
    });

    if (!response.ok) {
      throw new Error('Tarot reading failed');
    }

    return response.json();
  },

  async getYesNoReading(question: string) {
    const response = await fetch('/api/yes-no-tarot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error('Yes/No reading failed');
    }

    return response.json();
  },

  async getDailyFortune(name: string): Promise<DailyFortune> {
    const response = await fetch('/api/daily-fortune', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error('Daily fortune failed');
    }

    return response.json();
  },
};