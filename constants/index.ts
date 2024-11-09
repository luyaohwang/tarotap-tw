export const TAROT_READERS = [
    {
      id: 1,
      name: "智慧女神",
      description: "專注於事業和人生方向的指引",
      style: "理性分析型",
      image: "/readers/reader1.jpg",
      isAvailable: true,
      isFree: true,
    },
    {
      id: 2,
      name: "星月精靈",
      description: "擅長情感和關係問題解讀",
      style: "溫和同理型",
      image: "/readers/reader2.jpg",
      isAvailable: true,
      isFree: false,
    },
    // ... 更多塔罗师
  ];
  
  export const CARD_POSITIONS = {
    PAST: '過去',
    PRESENT: '現在',
    FUTURE: '未來',
    CHALLENGE: '挑戰',
    ADVICE: '建議',
  };
  
  export const API_ENDPOINTS = {
    TAROT_READING: '/api/tarot-reading',
    YES_NO_TAROT: '/api/yes-no-tarot',
    DAILY_FORTUNE: '/api/daily-fortune',
  };