import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Pause, Play, Home, Eye, EyeOff } from "lucide-react";
import { countries, shuffleArray, checkAnswer, continentEmojis, getFlagUrl, type Country } from "@/data/countries";
import { useToast } from "@/hooks/use-toast";

interface QuizGameProps {
  mode: 'timed' | 'learn';
  onBackToStart: () => void;
}

export default function QuizGame({ mode, onBackToStart }: QuizGameProps) {
  const [gameCountries, setGameCountries] = useState<Country[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const [currentContinent, setCurrentContinent] = useState("");
  
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  useEffect(() => {
    // Initialize game
    let shuffledCountries;
    if (mode === 'timed') {
      shuffledCountries = shuffleArray(countries);
    } else {
      // Group by continent for learning mode
      const continents = ['Afrika', 'Asien', 'Europa', 'Nordamerika', 'Südamerika', 'Ozeanien'];
      shuffledCountries = continents.flatMap(continent => 
        countries.filter(country => country.continent === continent)
      );
    }
    
    setGameCountries(shuffledCountries);
    setStartTime(new Date());
    setCurrentContinent(shuffledCountries[0]?.continent || "");
    
    // Start timer for timed mode
    if (mode === 'timed') {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setElapsedTime(prev => prev + 1);
        }
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [mode, isPaused]);

  useEffect(() => {
    if (gameCountries.length > 0 && currentIndex < gameCountries.length) {
      const newContinent = gameCountries[currentIndex].continent;
      if (newContinent !== currentContinent) {
        setCurrentContinent(newContinent);
        if (mode === 'learn') {
          toast({
            title: `${continentEmojis[newContinent as keyof typeof continentEmojis]} ${newContinent}`,
            description: `Jetzt kommen die Flaggen von ${newContinent}`,
          });
        }
      }
    }
  }, [currentIndex, gameCountries, currentContinent, mode, toast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || currentIndex >= gameCountries.length) return;

    const currentCountry = gameCountries[currentIndex];
    const isCorrect = checkAnswer(userInput, currentCountry);

    if (isCorrect) {
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => new Set(prev).add(currentIndex));
      toast({
        title: "Richtig! ✅",
        description: `${currentCountry.name}`,
        className: "bg-success text-success-foreground",
      });
      
      // Auto-advance to next question
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    } else {
      toast({
        title: "Leider falsch ❌",
        description: `Das war ${currentCountry.name}`,
        variant: "destructive",
      });
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= gameCountries.length) {
      // Game finished
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      const finalTime = mode === 'timed' ? elapsedTime : 0;
      const finalScore = correctAnswers.size + (checkAnswer(userInput, gameCountries[currentIndex]) ? 1 : 0);
      
      toast({
        title: "🎉 Quiz beendet!",
        description: `${finalScore}/196 Flaggen erkannt${mode === 'timed' ? ` in ${formatTime(finalTime)}` : ''}`,
      });
      
      return;
    }

    setCurrentIndex(prev => prev + 1);
    setUserInput("");
    setIsRevealed(false);
    inputRef.current?.focus();
  };

  const revealAnswer = () => {
    if (mode === 'learn') {
      setIsRevealed(true);
    }
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameCountries.length === 0) {
    return <div className="flex items-center justify-center min-h-screen">Lade Quiz...</div>;
  }

  const currentCountry = gameCountries[currentIndex];
  const progress = ((currentIndex + 1) / gameCountries.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBackToStart}>
              <Home className="w-4 h-4 mr-2" />
              Start
            </Button>
            <Button variant="outline" onClick={togglePause}>
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            {mode === 'timed' && (
              <Badge variant="outline" className="text-lg px-3 py-1">
                ⏱️ {formatTime(elapsedTime)}
              </Badge>
            )}
            <Badge variant="outline" className="text-lg px-3 py-1">
              {currentIndex + 1}/196
            </Badge>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{continentEmojis[currentContinent as keyof typeof continentEmojis]} {currentContinent}</span>
            <span>{Math.round(progress)}% abgeschlossen</span>
          </div>
        </div>

        {isPaused ? (
          <Card className="text-center py-12">
            <CardContent>
              <Pause className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Quiz pausiert</h2>
              <p className="text-muted-foreground">Drücke Play um fortzufahren</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="text-center">
            <CardContent className="py-12">
              {/* Flag Display */}
              <div className="mb-8 flex justify-center">
                <img 
                  src={getFlagUrl(currentCountry?.code || '')} 
                  alt={`Flagge von ${currentCountry?.name}`}
                  className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-border"
                  loading="lazy"
                />
              </div>

              {/* Answer Display */}
              {isRevealed && (
                <div className="mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {currentCountry?.name}
                  </Badge>
                </div>
              )}

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <Input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ländername eingeben..."
                  className="text-lg text-center"
                  disabled={isRevealed}
                  autoFocus
                />
                
                <div className="flex gap-2 justify-center">
                  {!isRevealed && (
                    <Button type="submit" size="lg" disabled={!userInput.trim()}>
                      Bestätigen
                    </Button>
                  )}
                  
                  {mode === 'learn' && (
                    <>
                      {!isRevealed ? (
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="lg"
                          onClick={revealAnswer}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Aufdecken
                        </Button>
                      ) : (
                        <Button 
                          type="button" 
                          size="lg"
                          onClick={nextQuestion}
                        >
                          Weiter
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </form>

              {/* Stats */}
              <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
                <span>✅ Richtige: {correctAnswers.size}</span>
                <span>❌ Falsche: {currentIndex - correctAnswers.size}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}