import { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizGame from '@/components/QuizGame';

type GameMode = 'timed' | 'learn' | null;

const Index = () => {
  const [gameMode, setGameMode] = useState<GameMode>(null);

  const handleSelectMode = (mode: GameMode) => {
    setGameMode(mode);
  };

  const handleBackToStart = () => {
    setGameMode(null);
  };

  if (gameMode) {
    return (
      <QuizGame 
        mode={gameMode} 
        onBackToStart={handleBackToStart}
      />
    );
  }

  return (
    <StartScreen onSelectMode={handleSelectMode} />
  );
};

export default Index;
