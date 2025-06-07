import { useState } from "react";
import Hero from "@/components/Hero";
import StealAccountModal from "@/components/StealAccountModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero onStealClick={() => setIsModalOpen(true)} />
      <StealAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
