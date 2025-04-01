'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '@/hooks/use-local-storage'
import { type Nakshatra, calculateNakshatra } from '@/lib/nakshatra-data'

export default function ResultPage() {
  const router = useRouter()
  const [nakshatra, setNakshatra] = useState<Nakshatra | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedDate, _] = useLocalStorage('selectedDate')

  useEffect(() => {
    const birthDate = selectedDate.data as string
    if (!birthDate) {
      router.push('/calculate')
      return
    }

    setNakshatra(calculateNakshatra(new Date(birthDate)))
    setLoading(false)
  }, [router, selectedDate])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center">
        <div className="text-xl text-purple-900">計算中...</div>
      </div>
    )
  }

  if (!nakshatra) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">
            あなたの宿星
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            {/* Header section */}
            <div className="text-center mb-12 relative">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3">
                {nakshatra.japaneseName}
              </h2>
              <p className="text-2xl text-gray-600">
                {nakshatra.name} <span className="text-purple-500">•</span>{' '}
                {nakshatra.symbol}
              </p>
            </div>

            {/* Basic info grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { label: '守護神', value: nakshatra.deity },
                { label: '元素', value: nakshatra.element },
                { label: '支配惑星', value: nakshatra.ruling_planet },
                { label: '度数範囲', value: nakshatra.degree_range },
                { label: '黄道位置', value: nakshatra.zodiac_position },
                { label: '動物シンボル', value: nakshatra.animal_symbol },
                { label: '性別', value: nakshatra.gender },
                { label: 'ガナ（性質）', value: nakshatra.gana },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Characteristics sections */}
            <div className="space-y-10">
              {[
                { title: '性格の特徴', items: nakshatra.personalityTraits },
                {
                  title: 'ポジティブな資質',
                  items: nakshatra.positiveQualities,
                },
                { title: '課題', items: nakshatra.challenges },
                {
                  title: '適性のあるキャリア',
                  items: nakshatra.careerAptitudes,
                },
                { title: '健康面', items: nakshatra.healthAspects },
              ].map((section, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {section.title}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Description sections */}
            <div className="mt-10 space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  宿星の説明
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {nakshatra.description}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  詳細な説明
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {nakshatra.detailedDescription}
                </p>
              </div>
            </div>

            {/* Action button */}
            <div className="mt-12 text-center">
              <button
                onClick={() => router.push('/calculate')}
                className="inline-flex items-center justify-center bg-purple-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                もう一度計算する
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
