import { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizGame from '@/components/QuizGame';
import ContinentSelector from '@/components/ContinentSelector';
import TimeSelector from '@/components/TimeSelector';

type GameMode = 'timed' | 'learn' | 'streak' | 'continent' | 'speedrush' | 'capital-to-country' | 'country-to-capital' | 'outline' | null;
type GameState = 'start' | 'continent-select' | 'time-select' | 'capital-variant-select' | 'playing';

const Index = () => {
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [gameState, setGameState] = useState<GameState>('start');
  const [selectedContinent, setSelectedContinent] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const [capitalMode, setCapitalMode] = useState<'capital-to-country' | 'country-to-capital'>('capital-to-country');

  const handleSelectMode = (mode: GameMode) => {
    setGameMode(mode);
    if (mode === 'continent') {
      setGameState('continent-select');
    } else if (mode === 'speedrush') {
      setGameState('time-select');
    } else if (mode === 'capital-to-country' || mode === 'country-to-capital') {
      setCapitalMode(mode);
      setGameState('playing');
    } else {
      setGameState('playing');
    }
  };

  const handleSelectContinent = (continent: string) => {
    setSelectedContinent(continent);
    setGameState('playing');
  };

  const handleSelectTime = (seconds: number) => {
    setSelectedTime(seconds);
    setGameState('playing');
  };

  const handleBackToStart = () => {
    setGameMode(null);
    setGameState('start');
    setSelectedContinent('');
    setSelectedTime(0);
    setCapitalMode('capital-to-country');
  };

  if (gameState === 'continent-select') {
    return (
      <ContinentSelector 
        onSelectContinent={handleSelectContinent}
        onBack={handleBackToStart}
      />
    );
  }

  if (gameState === 'time-select') {
    return (
      <TimeSelector 
        onSelectTime={handleSelectTime}
        onBack={handleBackToStart}
      />
    );
  }

  if (gameState === 'playing' && gameMode) {
    return (
      <QuizGame 
        mode={gameMode} 
        onBackToStart={handleBackToStart}
        continent={selectedContinent}
        timeLimit={selectedTime}
      />
    );
  }

  return (
    <StartScreen onSelectMode={handleSelectMode} />
  );
};

export default Index;
