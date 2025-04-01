import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-grow bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            二十七宿鑑定
          </h1>
          <p className="text-xl leading-8 text-gray-700 mb-8 max-w-2xl mx-auto">
            あなたの誕生日から宿星を算出し、性格や運勢を鑑定します。
            <br />
            古代インドの叡智に基づいた、あなただけの宿星を見つけましょう。
          </p>
          <Link
            href="/calculate"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            宿星を計算する
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">
              宿星とは
            </h3>
            <p className="text-gray-600 leading-7">
              二十七宿は、古代インドの占星術で使用される27の星宿です。
              <br />
              あなたの誕生日から特定される宿星は、あなたの性格や運命を表します。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">
              鑑定内容
            </h3>
            <p className="text-gray-600 leading-7">
              基本的な性格傾向や特徴を無料で鑑定できます。
              <br />
              より詳細な相性鑑定は有料で承っております。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">
              ご利用方法
            </h3>
            <p className="text-gray-600 leading-7">
              1. 誕生日を入力 <br />
              2. 宿星を確認 <br />
              3. 性格診断を読む <br />
              4. 必要に応じて詳細鑑定を依頼
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
