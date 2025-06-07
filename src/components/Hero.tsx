import { Button } from "@/components/ui/button";

interface HeroProps {
  onStealClick: () => void;
}

const Hero = ({ onStealClick }: HeroProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-purple-400">BloxHack</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Roblox Account Tools
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Профессиональные инструменты для работы с аккаунтами Roblox. Быстро
            и безопасно.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-400">Надежная защита данных</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Скорость</h3>
              <p className="text-gray-400">Мгновенная обработка</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Точность</h3>
              <p className="text-gray-400">100% результат</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Button */}
      <footer className="p-6">
        <div className="max-w-6xl mx-auto text-center">
          <Button
            onClick={onStealClick}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-600/25"
          >
            🎮 Украсть аккаунт
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
