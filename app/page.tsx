import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          AI智能塔羅牌占卜
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          融合AI技術與傳統塔羅智慧，為您提供專業、個性化的塔羅指引
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/tarot-reading"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            開始占卜
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI塔羅牌占卜 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-2">AI塔羅牌占卜</h3>
              <p className="text-gray-600 mb-4">智慧推薦最適合的塔羅牌陣，多風格AI塔羅師解讀</p>
              <Link href="/tarot-reading" className="text-indigo-600 hover:text-indigo-700">
                立即占卜 →
              </Link>
            </div>

            {/* 是否塔羅占卜 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">是否塔羅占卜</h3>
              <p className="text-gray-600 mb-4">快速獲得是/否指引，簡單直觀的答案</p>
              <Link href="/yes-or-no-tarot" className="text-indigo-600 hover:text-indigo-700">
                快速占卜 →
              </Link>
            </div>

            {/* 每日塔羅運勢 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-4">🌅</div>
              <h3 className="text-xl font-semibold mb-2">每日塔羅運勢</h3>
              <p className="text-gray-600 mb-4">每日更新運勢指引，個性化運勢解讀</p>
              <Link href="/fortune/daily" className="text-indigo-600 hover:text-indigo-700">
                查看運勢 →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">塔羅耳語 © 2024 版權所有</p>
          <div className="flex justify-center space-x-4">
            <Link href="/feedback" className="hover:text-gray-300">
              問題反饋
            </Link>
            <Link href="/card_meanings" className="hover:text-gray-300">
              塔羅牌義
            </Link>
            <a href="mailto:andy@tarotap.com" className="hover:text-gray-300">
              聯絡我們
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}