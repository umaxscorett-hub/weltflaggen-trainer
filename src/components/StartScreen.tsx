import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, GraduationCap, Zap, Globe, Timer, Trophy, Target, MapPin, Map } from "lucide-react";

interface StartScreenProps {
  onSelectMode: (mode: 'timed' | 'learn' | 'streak' | 'continent' | 'speedrush' | 'capital-to-country' | 'country-to-capital' | 'outline') => void;
}

export default function StartScreen({ onSelectMode }: StartScreenProps) {
  const gameModes = [
    { 
      mode: 'timed', 
      title: 'Zeitmessung', 
      description: 'Wie schnell schaffst du alle 196 Flaggen?',
      icon: Clock,
      color: 'bg-primary/10 text-primary'
    },
    { 
      mode: 'learn', 
      title: 'Lernmodus', 
      description: 'Lerne in deinem eigenen Tempo',
      icon: GraduationCap,
      color: 'bg-secondary/10 text-secondary'
    },
    { 
      mode: 'streak', 
      title: 'Streak-Modus', 
      description: 'Wie viele Flaggen schaffst du in Folge?',
      icon: Trophy,
      color: 'bg-destructive/10 text-destructive'
    },
    { 
      mode: 'continent', 
      title: 'Kontinent-Modus', 
      description: 'Wähle einen Kontinent zum Lernen',
      icon: Globe,
      color: 'bg-accent/10 text-accent-foreground'
    },
    { 
      mode: 'speedrush', 
      title: 'Speed-Rush', 
      description: 'So viele Flaggen wie möglich in der Zeit',
      icon: Timer,
      color: 'bg-orange-500/10 text-orange-600'
    },
    { 
      mode: 'capital-to-country', 
      title: 'Hauptstadt → Land', 
      description: 'Eine Hauptstadt wird angezeigt und du musst das richtige Land nennen',
      icon: MapPin,
      color: 'bg-teal-500/10 text-teal-600'
    },
    { 
      mode: 'country-to-capital', 
      title: 'Land → Hauptstadt', 
      description: 'Ein Land wird angezeigt und du musst die richtige Hauptstadt nennen',
      icon: MapPin,
      color: 'bg-cyan-500/10 text-cyan-600' 
    },
    { 
      mode: 'outline', 
      title: 'Länder-Umriss', 
      description: 'Nur die Silhouette eines Landes wird gezeigt - erraten um welches es sich handelt',
      icon: Map,
      color: 'bg-indigo-500/10 text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            🌍 Flaggen-Quiz
          </h1>
          <p className="text-xl text-muted-foreground">
            Teste dein Wissen über alle 196 Länder der Welt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameModes.map((gameMode) => {
            const IconComponent = gameMode.icon;
            return (
              <Card 
                key={gameMode.mode}
                className="hover:shadow-lg transition-shadow cursor-pointer" 
                onClick={() => onSelectMode(gameMode.mode as any)}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${gameMode.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{gameMode.title}</CardTitle>
                  <CardDescription>
                    {gameMode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="lg" className="w-full">
                    Starten
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Erkenne die Flaggen von Afrika, Asien, Europa, Nord- und Südamerika sowie Ozeanien. Made by ijuriqu
          </p>
        </div>
      </div>
    </div>
  );
}
