'use client'

import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import useLocalStorage from '@/hooks/use-local-storage'
import 'dayjs/locale/ja'

export default function CalculatePage() {
  const router = useRouter()
  const [birthDate, setBirthDate] = useState<dayjs.Dayjs | null>(dayjs())
  const [_, setSelectedDate] = useLocalStorage(
    'selectedDate',
    dayjs().toISOString()
  )
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!birthDate) {
      setError('誕生日を入力してください')
      return
    }

    if (!birthDate.isValid()) {
      setError('有効な日付を入力してください')
      return
    }

    setSelectedDate(birthDate.toISOString())
    router.push('/result')
  }

  return (
    <div className="flex-grow bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">
            誕生日を入力
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-2xl font-bold text-purple-900 mb-5"
                >
                  あなたの運命の日
                </label>
                <div className="relative group">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="ja"
                  >
                    <DatePicker
                      value={birthDate}
                      onChange={(newValue) => setBirthDate(newValue)}
                      maxDate={dayjs()}
                      format="YYYY年MM月DD日"
                      views={['year', 'month', 'day']}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: {
                            '& input': {
                              fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", Verdana, Meiryo, "M+ 1p", sans-serif`,
                              fontWeight: '500',
                              fontSize: '18px',
                            },
                          },
                          inputProps: {
                            'aria-label': '誕生日',
                          },
                        },
                        popper: {
                          sx: {
                            '& .MuiPaper-root': {
                              backgroundColor: 'white',
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-center animate-bounce">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white 
                  py-4 px-6 rounded text-lg font-semibold 
                  hover:from-purple-700 hover:to-purple-600 
                  transition-all duration-300 
                  transform hover:scale-[1.02] hover:shadow-lg
                  focus:ring-4 focus:ring-purple-300
                  active:scale-95"
              >
                ✨ 宿星を解き明かす ✨
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 leading-7">
                あなたの生まれた日から、運命の星が導かれます。 <br />
                神秘の計算により、あなたの宿星が明らかになります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
