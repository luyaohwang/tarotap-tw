// 塔罗师类型
export interface TarotReader {
    id: number;
    name: string;
    description: string;
    style: string;
    image: string;
    isAvailable: boolean;
    isFree: boolean;
  }
  
  // 塔罗牌类型
  export interface TarotCard {
    id: number;
    name: string;
    nameEn: string;
    image: string;
    uprightMeaning: string;
    reversedMeaning: string;
    keywords: string[];
  }
  
  // 占卜结果类型
  export interface ReadingResult {
    id: string;
    question: string;
    cards: {
      position: string;
      card: TarotCard;
      isReversed: boolean;
    }[];
    interpretation: string;
    timestamp: string;
  }
  
  // 每日运势类型
  export interface DailyFortune {
    date: string;
    card: TarotCard;
    generalReading: string;
    loveReading: string;
    careerReading: string;
    healthReading: string;
    luckyNumbers: number[];
    luckyColors: string[];
  }