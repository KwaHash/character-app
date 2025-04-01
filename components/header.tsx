import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-50 via-white to-purple-50 shadow-lg border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4 group">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-105 hover:from-purple-600 hover:to-purple-900">
              二十七宿鑑定
            </span>
            <span className="hidden md:inline-block text-base md:text-lg text-purple-600 font-bold transform transition-all duration-300 group-hover:translate-x-1 opacity-90 group-hover:opacity-100">
              古代インドの叡智
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/calculate"
              className="px-6 py-2.5 rounded-full bg-purple-100 text-purple-900 hover:bg-purple-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:text-purple-700 relative overflow-hidden before:absolute before:inset-0 before:bg-purple-200 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 before:-z-10"
            >
              <span className="relative inline-block animate-pulse font-bold">
                鑑定を始める
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
