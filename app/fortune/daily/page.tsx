'use client';

import { useState } from 'react';
import PageLayout from "../../components/PageLayout";

export default function DailyFortune() {
  const [name, setName] = useState('');
  const [hasDrawn, setHasDrawn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasDrawn(true);
  };

  return (
    <PageLayout
      title="每日塔羅運勢"
      description="探索今日的能量，獲取個性化的塔羅指引"
    >
      <div className="max-w-2xl mx-auto">
        {!hasDrawn ? (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  您的名字
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="請輸入您的名字..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors"
              >
                領取今日運勢
              </button>
            </form>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">每日運勢特色</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 每日更新的塔羅指引</li>
                <li>• 根據您的名字生成個性化解讀</li>
                <li>• 包含愛情、事業、財運等多個面向</li>
                <li>• 每24小時可重新抽取一次</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* 这里添加运势结果展示的内容 */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">您的今日運勢</h2>
              {/* TODO: 添加运势内容 */}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}