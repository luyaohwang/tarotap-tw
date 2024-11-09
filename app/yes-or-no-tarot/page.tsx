'use client';

import { useState } from 'react';
import PageLayout from "../components/PageLayout";

export default function YesNoTarot() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: 实现占卜逻辑
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <PageLayout
      title="是否塔羅占卜"
      description="快速獲得是與否的指引，為您的問題找到答案"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="question" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                您的問題
              </label>
              <textarea
                id="question"
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="請輸入一個可以用是或否回答的問題..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-md text-white font-medium 
                  ${isLoading 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                  } transition-colors`}
              >
                {isLoading ? '占卜中...' : '開始占卜'}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">使用說明</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 請確保您的問題可以用"是"或"否"回答</li>
              <li>• 問題越具體，得到的指引越準確</li>
              <li>• 建議在平靜的心態下進行占卜</li>
              <li>• 同一個問題建議間隔一段時間再次占卜</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}