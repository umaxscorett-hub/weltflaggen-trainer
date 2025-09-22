import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, GraduationCap } from "lucide-react";

interface StartScreenProps {
  onSelectMode: (mode: 'timed' | 'learn') => void;
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

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" 
                onClick={() => onSelectMode('timed')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Zeitmessung</CardTitle>
              <CardDescription>
                Wie schnell schaffst du alle 196 Flaggen?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
              
              </ul>
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
              <CardTitle className="text-2xl">Lernmodus</CardTitle>
              <CardDescription>
                Lerne in deinem eigenen Tempo
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
           
              </ul>
              <Button variant="secondary" size="lg" className="w-full">
                Lernen starten
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
