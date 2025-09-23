import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, GraduationCap, Zap, Globe, Timer } from "lucide-react";

interface StartScreenProps {
  onSelectMode: (mode: 'timed' | 'learn' | 'streak' | 'continent' | 'speedrush') => void;
}

export default function StartScreen({ onSelectMode }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            🌍 Flaggen-Quiz
          </h1>
          <p className="text-xl text-muted-foreground">
            Teste dein Wissen über alle 196 Länder der Welt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" 
                onClick={() => onSelectMode('timed')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Zeitmessung</CardTitle>
              <CardDescription>
                Wie schnell schaffst du alle 196 Flaggen?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full">
                Quiz starten
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onSelectMode('learn')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">Lernmodus</CardTitle>
              <CardDescription>
                Lerne in deinem eigenen Tempo
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" size="lg" className="w-full">
                Lernen starten
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onSelectMode('streak')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-xl">Streak-Modus</CardTitle>
              <CardDescription>
                Wie viele Flaggen schaffst du in Folge?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="destructive" size="lg" className="w-full">
                Streak starten
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onSelectMode('continent')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Kontinent-Modus</CardTitle>
              <CardDescription>
                Wähle einen Kontinent zum Lernen
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" size="lg" className="w-full">
                Kontinent wählen
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onSelectMode('speedrush')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                <Timer className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Speed-Rush</CardTitle>
              <CardDescription>
                So viele Flaggen wie möglich in der Zeit
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                Zeit wählen
              </Button>
            </CardContent>
          </Card>
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
