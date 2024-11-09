import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              塔羅耳語
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/tarot-reading" className="text-gray-600 hover:text-gray-900">
              AI塔羅占卜
            </Link>
            <Link href="/yes-or-no-tarot" className="text-gray-600 hover:text-gray-900">
              是否占卜
            </Link>
            <Link href="/fortune/daily" className="text-gray-600 hover:text-gray-900">
              每日運勢
            </Link>
            <Link href="/card_meanings" className="text-gray-600 hover:text-gray-900">
              塔羅牌義
            </Link>
            <Link href="/feedback" className="text-gray-600 hover:text-gray-900">
              反饋建議
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}