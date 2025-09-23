import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { continentEmojis } from "@/data/countries";

interface ContinentSelectorProps {
  onSelectContinent: (continent: string) => void;
  onBack: () => void;
}

const continents = [
  { name: 'Afrika', description: '54 Länder' },
  { name: 'Asien', description: '48 Länder' },
  { name: 'Europa', description: '44 Länder' },
  { name: 'Nordamerika', description: '23 Länder' },
  { name: 'Südamerika', description: '12 Länder' },
  { name: 'Ozeanien', description: '14 Länder' }
];

export default function ContinentSelector({ onSelectContinent, onBack }: ContinentSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            🌍 Kontinent auswählen
          </h1>
          <p className="text-lg text-muted-foreground">
            Wähle einen Kontinent für dein gezieltes Training
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {continents.map((continent) => (
            <Card 
              key={continent.name}
              className="hover:shadow-lg transition-shadow cursor-pointer" 
              onClick={() => onSelectContinent(continent.name)}
            >
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-2">
                  {continentEmojis[continent.name as keyof typeof continentEmojis]}
                </div>
                <CardTitle className="text-xl">{continent.name}</CardTitle>
                <CardDescription>{continent.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  Auswählen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" onClick={onBack}>
            ← Zurück zur Übersicht
          </Button>
        </div>
      </div>
    </div>
  );
}