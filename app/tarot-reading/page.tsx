import PageLayout from "../components/PageLayout";
import Link from "next/link";

// 塔罗师数据
const tarotReaders = [
  {
    id: 1,
    name: "智慧女神",
    description: "專注於事業和人生方向的指引",
    style: "理性分析型",
    image: "/readers/reader1.jpg",
  },
  {
    id: 2,
    name: "星月精靈",
    description: "擅長情感和關係問題解讀",
    style: "溫和同理型",
    image: "/readers/reader2.jpg",
  },
  {
    id: 3,
    name: "命運之眼",
    description: "深入解讀潛意識和靈性指引",
    style: "直覺洞察型",
    image: "/readers/reader3.jpg",
  },
];

export default function TarotReading() {
  return (
    <PageLayout
      title="AI塔羅牌占卜"
      description="選擇您喜歡的AI塔羅師，開始您的占卜之旅"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {tarotReaders.map((reader) => (
          <div
            key={reader.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="aspect-w-3 aspect-h-4 relative">
              <div className="h-48 bg-gray-200">
                {/* 预留放置塔罗师图片的位置 */}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{reader.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{reader.style}</p>
              <p className="text-gray-600 mb-4">{reader.description}</p>
              <Link
                href={`/tarot-reading/${reader.id}`}
                className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                選擇此塔羅師
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}