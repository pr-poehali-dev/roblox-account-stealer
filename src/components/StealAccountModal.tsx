import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface StealAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StealAccountModal = ({ isOpen, onClose }: StealAccountModalProps) => {
  const [nickname, setNickname] = useState("");
  const [playerId, setPlayerId] = useState("");

  const handleSubmit = () => {
    if (nickname && playerId) {
      alert(`Обрабатываем аккаунт: ${nickname} (ID: ${playerId})`);
      setNickname("");
      setPlayerId("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-400 text-center">
            🎮 Украсть аккаунт Roblox
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Video Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Инструкция</h3>
            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-gray-400">Видео будет здесь</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Место для обучающего видео
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">
              Данные игрока
            </h3>
            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ник игрока
                  </label>
                  <Input
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Введите ник игрока"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    ID игрока
                  </label>
                  <Input
                    value={playerId}
                    onChange={(e) => setPlayerId(e.target.value)}
                    placeholder="Введите ID игрока"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                    disabled={!nickname || !playerId}
                  >
                    🚀 Начать процесс
                  </Button>

                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Отмена
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StealAccountModal;
