export interface Country {
  name: string;
  flag: string;
  continent: string;
  aliases?: string[]; // alternative names for input matching
}

export const countries: Country[] = [
  // Afrika (54 Länder)
  { name: "Ägypten", flag: "🇪🇬", continent: "Afrika" },
  { name: "Äquatorialguinea", flag: "🇬🇶", continent: "Afrika" },
  { name: "Äthiopien", flag: "🇪🇹", continent: "Afrika" },
  { name: "Algerien", flag: "🇩🇿", continent: "Afrika" },
  { name: "Angola", flag: "🇦🇴", continent: "Afrika" },
  { name: "Benin", flag: "🇧🇯", continent: "Afrika" },
  { name: "Botswana", flag: "🇧🇼", continent: "Afrika" },
  { name: "Burkina Faso", flag: "🇧🇫", continent: "Afrika" },
  { name: "Burundi", flag: "🇧🇮", continent: "Afrika" },
  { name: "Dschibuti", flag: "🇩🇯", continent: "Afrika" },
  { name: "Elfenbeinküste", flag: "🇨🇮", continent: "Afrika", aliases: ["Côte d'Ivoire", "Cote d'Ivoire"] },
  { name: "Eritrea", flag: "🇪🇷", continent: "Afrika" },
  { name: "Eswatini", flag: "🇸🇿", continent: "Afrika", aliases: ["Swasiland"] },
  { name: "Gabun", flag: "🇬🇦", continent: "Afrika" },
  { name: "Gambia", flag: "🇬🇲", continent: "Afrika" },
  { name: "Ghana", flag: "🇬🇭", continent: "Afrika" },
  { name: "Guinea", flag: "🇬🇳", continent: "Afrika" },
  { name: "Guinea-Bissau", flag: "🇬🇼", continent: "Afrika" },
  { name: "Kamerun", flag: "🇨🇲", continent: "Afrika" },
  { name: "Kap Verde", flag: "🇨🇻", continent: "Afrika" },
  { name: "Kenia", flag: "🇰🇪", continent: "Afrika" },
  { name: "Komoren", flag: "🇰🇲", continent: "Afrika" },
  { name: "Kongo, Demokratische Republik", flag: "🇨🇩", continent: "Afrika", aliases: ["Demokratische Republik Kongo", "DR Kongo"] },
  { name: "Kongo, Republik", flag: "🇨🇬", continent: "Afrika", aliases: ["Republik Kongo"] },
  { name: "Lesotho", flag: "🇱🇸", continent: "Afrika" },
  { name: "Liberia", flag: "🇱🇷", continent: "Afrika" },
  { name: "Libyen", flag: "🇱🇾", continent: "Afrika" },
  { name: "Madagaskar", flag: "🇲🇬", continent: "Afrika" },
  { name: "Malawi", flag: "🇲🇼", continent: "Afrika" },
  { name: "Mali", flag: "🇲🇱", continent: "Afrika" },
  { name: "Marokko", flag: "🇲🇦", continent: "Afrika" },
  { name: "Mauretanien", flag: "🇲🇷", continent: "Afrika" },
  { name: "Mauritius", flag: "🇲🇺", continent: "Afrika" },
  { name: "Mosambik", flag: "🇲🇿", continent: "Afrika" },
  { name: "Namibia", flag: "🇳🇦", continent: "Afrika" },
  { name: "Niger", flag: "🇳🇪", continent: "Afrika" },
  { name: "Nigeria", flag: "🇳🇬", continent: "Afrika" },
  { name: "Ruanda", flag: "🇷🇼", continent: "Afrika" },
  { name: "Sambia", flag: "🇿🇲", continent: "Afrika" },
  { name: "São Tomé und Príncipe", flag: "🇸🇹", continent: "Afrika", aliases: ["Sao Tome und Principe"] },
  { name: "Senegal", flag: "🇸🇳", continent: "Afrika" },
  { name: "Seychellen", flag: "🇸🇨", continent: "Afrika" },
  { name: "Sierra Leone", flag: "🇸🇱", continent: "Afrika" },
  { name: "Simbabwe", flag: "🇿🇼", continent: "Afrika", aliases: ["Zimbabwe"] },
  { name: "Somalia", flag: "🇸🇴", continent: "Afrika" },
  { name: "Südafrika", flag: "🇿🇦", continent: "Afrika" },
  { name: "Sudan", flag: "🇸🇩", continent: "Afrika" },
  { name: "Südsudan", flag: "🇸🇸", continent: "Afrika" },
  { name: "Tansania", flag: "🇹🇿", continent: "Afrika" },
  { name: "Togo", flag: "🇹🇬", continent: "Afrika" },
  { name: "Tschad", flag: "🇹🇩", continent: "Afrika" },
  { name: "Tunesien", flag: "🇹🇳", continent: "Afrika" },
  { name: "Uganda", flag: "🇺🇬", continent: "Afrika" },
  { name: "Zentralafrikanische Republik", flag: "🇨🇫", continent: "Afrika" },

  // Asien (49 Länder)
  { name: "Afghanistan", flag: "🇦🇫", continent: "Asien" },
  { name: "Armenien", flag: "🇦🇲", continent: "Asien" },
  { name: "Aserbaidschan", flag: "🇦🇿", continent: "Asien" },
  { name: "Bahrain", flag: "🇧🇭", continent: "Asien" },
  { name: "Bangladesch", flag: "🇧🇩", continent: "Asien" },
  { name: "Bhutan", flag: "🇧🇹", continent: "Asien" },
  { name: "Brunei", flag: "🇧🇳", continent: "Asien" },
  { name: "China", flag: "🇨🇳", continent: "Asien" },
  { name: "Georgien", flag: "🇬🇪", continent: "Asien" },
  { name: "Indien", flag: "🇮🇳", continent: "Asien" },
  { name: "Indonesien", flag: "🇮🇩", continent: "Asien" },
  { name: "Irak", flag: "🇮🇶", continent: "Asien" },
  { name: "Iran", flag: "🇮🇷", continent: "Asien" },
  { name: "Israel", flag: "🇮🇱", continent: "Asien" },
  { name: "Japan", flag: "🇯🇵", continent: "Asien" },
  { name: "Jemen", flag: "🇾🇪", continent: "Asien" },
  { name: "Jordanien", flag: "🇯🇴", continent: "Asien" },
  { name: "Kambodscha", flag: "🇰🇭", continent: "Asien" },
  { name: "Kasachstan", flag: "🇰🇿", continent: "Asien" },
  { name: "Katar", flag: "🇶🇦", continent: "Asien", aliases: ["Qatar"] },
  { name: "Kirgisistan", flag: "🇰🇬", continent: "Asien", aliases: ["Kirgistan"] },
  { name: "Kuwait", flag: "🇰🇼", continent: "Asien" },
  { name: "Laos", flag: "🇱🇦", continent: "Asien" },
  { name: "Libanon", flag: "🇱🇧", continent: "Asien" },
  { name: "Malaysia", flag: "🇲🇾", continent: "Asien" },
  { name: "Malediven", flag: "🇲🇻", continent: "Asien" },
  { name: "Mongolei", flag: "🇲🇳", continent: "Asien" },
  { name: "Myanmar", flag: "🇲🇲", continent: "Asien", aliases: ["Burma"] },
  { name: "Nepal", flag: "🇳🇵", continent: "Asien" },
  { name: "Nordkorea", flag: "🇰🇵", continent: "Asien" },
  { name: "Oman", flag: "🇴🇲", continent: "Asien" },
  { name: "Pakistan", flag: "🇵🇰", continent: "Asien" },
  { name: "Palästina", flag: "🇵🇸", continent: "Asien", aliases: ["Palestina"] },
  { name: "Philippinen", flag: "🇵🇭", continent: "Asien" },
  { name: "Russland", flag: "🇷🇺", continent: "Asien" },
  { name: "Saudi-Arabien", flag: "🇸🇦", continent: "Asien" },
  { name: "Singapur", flag: "🇸🇬", continent: "Asien" },
  { name: "Sri Lanka", flag: "🇱🇰", continent: "Asien" },
  { name: "Südkorea", flag: "🇰🇷", continent: "Asien" },
  { name: "Syrien", flag: "🇸🇾", continent: "Asien" },
  { name: "Tadschikistan", flag: "🇹🇯", continent: "Asien" },
  { name: "Thailand", flag: "🇹🇭", continent: "Asien" },
  { name: "Timor-Leste", flag: "🇹🇱", continent: "Asien" },
  { name: "Türkei", flag: "🇹🇷", continent: "Asien", aliases: ["Turkei"] },
  { name: "Turkmenistan", flag: "🇹🇲", continent: "Asien" },
  { name: "Usbekistan", flag: "🇺🇿", continent: "Asien" },
  { name: "Vereinigte Arabische Emirate", flag: "🇦🇪", continent: "Asien", aliases: ["VAE"] },
  { name: "Vietnam", flag: "🇻🇳", continent: "Asien" },
  { name: "Zypern", flag: "🇨🇾", continent: "Asien" },

  // Europa (44 Länder)
  { name: "Albanien", flag: "🇦🇱", continent: "Europa" },
  { name: "Andorra", flag: "🇦🇩", continent: "Europa" },
  { name: "Belgien", flag: "🇧🇪", continent: "Europa" },
  { name: "Bosnien und Herzegowina", flag: "🇧🇦", continent: "Europa" },
  { name: "Bulgarien", flag: "🇧🇬", continent: "Europa" },
  { name: "Dänemark", flag: "🇩🇰", continent: "Europa", aliases: ["Daenemark"] },
  { name: "Deutschland", flag: "🇩🇪", continent: "Europa" },
  { name: "Estland", flag: "🇪🇪", continent: "Europa" },
  { name: "Finnland", flag: "🇫🇮", continent: "Europa" },
  { name: "Frankreich", flag: "🇫🇷", continent: "Europa" },
  { name: "Griechenland", flag: "🇬🇷", continent: "Europa" },
  { name: "Irland", flag: "🇮🇪", continent: "Europa" },
  { name: "Island", flag: "🇮🇸", continent: "Europa" },
  { name: "Italien", flag: "🇮🇹", continent: "Europa" },
  { name: "Kosovo", flag: "🇽🇰", continent: "Europa" },
  { name: "Kroatien", flag: "🇭🇷", continent: "Europa" },
  { name: "Lettland", flag: "🇱🇻", continent: "Europa" },
  { name: "Liechtenstein", flag: "🇱🇮", continent: "Europa" },
  { name: "Litauen", flag: "🇱🇹", continent: "Europa" },
  { name: "Luxemburg", flag: "🇱🇺", continent: "Europa" },
  { name: "Malta", flag: "🇲🇹", continent: "Europa" },
  { name: "Moldau", flag: "🇲🇩", continent: "Europa", aliases: ["Moldawien"] },
  { name: "Monaco", flag: "🇲🇨", continent: "Europa" },
  { name: "Montenegro", flag: "🇲🇪", continent: "Europa" },
  { name: "Niederlande", flag: "🇳🇱", continent: "Europa", aliases: ["Holland"] },
  { name: "Nordmazedonien", flag: "🇲🇰", continent: "Europa", aliases: ["Mazedonien"] },
  { name: "Norwegen", flag: "🇳🇴", continent: "Europa" },
  { name: "Österreich", flag: "🇦🇹", continent: "Europa", aliases: ["Oesterreich"] },
  { name: "Polen", flag: "🇵🇱", continent: "Europa" },
  { name: "Portugal", flag: "🇵🇹", continent: "Europa" },
  { name: "Rumänien", flag: "🇷🇴", continent: "Europa", aliases: ["Rumaenien"] },
  { name: "San Marino", flag: "🇸🇲", continent: "Europa" },
  { name: "Schweden", flag: "🇸🇪", continent: "Europa" },
  { name: "Schweiz", flag: "🇨🇭", continent: "Europa" },
  { name: "Serbien", flag: "🇷🇸", continent: "Europa" },
  { name: "Slowakei", flag: "🇸🇰", continent: "Europa" },
  { name: "Slowenien", flag: "🇸🇮", continent: "Europa" },
  { name: "Spanien", flag: "🇪🇸", continent: "Europa" },
  { name: "Tschechien", flag: "🇨🇿", continent: "Europa", aliases: ["Tschechische Republik"] },
  { name: "Ukraine", flag: "🇺🇦", continent: "Europa" },
  { name: "Ungarn", flag: "🇭🇺", continent: "Europa" },
  { name: "Vatikanstadt", flag: "🇻🇦", continent: "Europa", aliases: ["Vatikan"] },
  { name: "Vereinigtes Königreich", flag: "🇬🇧", continent: "Europa", aliases: ["Großbritannien", "UK", "England"] },
  { name: "Weißrussland", flag: "🇧🇾", continent: "Europa", aliases: ["Belarus", "Weissrussland"] },

  // Nordamerika (23 Länder)
  { name: "Antigua und Barbuda", flag: "🇦🇬", continent: "Nordamerika" },
  { name: "Bahamas", flag: "🇧🇸", continent: "Nordamerika" },
  { name: "Barbados", flag: "🇧🇧", continent: "Nordamerika" },
  { name: "Belize", flag: "🇧🇿", continent: "Nordamerika" },
  { name: "Costa Rica", flag: "🇨🇷", continent: "Nordamerika" },
  { name: "Dominica", flag: "🇩🇲", continent: "Nordamerika" },
  { name: "Dominikanische Republik", flag: "🇩🇴", continent: "Nordamerika" },
  { name: "El Salvador", flag: "🇸🇻", continent: "Nordamerika" },
  { name: "Grenada", flag: "🇬🇩", continent: "Nordamerika" },
  { name: "Guatemala", flag: "🇬🇹", continent: "Nordamerika" },
  { name: "Haiti", flag: "🇭🇹", continent: "Nordamerika" },
  { name: "Honduras", flag: "🇭🇳", continent: "Nordamerika" },
  { name: "Jamaika", flag: "🇯🇲", continent: "Nordamerika" },
  { name: "Kanada", flag: "🇨🇦", continent: "Nordamerika" },
  { name: "Kuba", flag: "🇨🇺", continent: "Nordamerika" },
  { name: "Mexiko", flag: "🇲🇽", continent: "Nordamerika" },
  { name: "Nicaragua", flag: "🇳🇮", continent: "Nordamerika" },
  { name: "Panama", flag: "🇵🇦", continent: "Nordamerika" },
  { name: "St. Kitts und Nevis", flag: "🇰🇳", continent: "Nordamerika", aliases: ["Saint Kitts und Nevis"] },
  { name: "St. Lucia", flag: "🇱🇨", continent: "Nordamerika", aliases: ["Saint Lucia"] },
  { name: "St. Vincent und die Grenadinen", flag: "🇻🇨", continent: "Nordamerika", aliases: ["Saint Vincent und die Grenadinen"] },
  { name: "Trinidad und Tobago", flag: "🇹🇹", continent: "Nordamerika" },
  { name: "Vereinigte Staaten von Amerika", flag: "🇺🇸", continent: "Nordamerika", aliases: ["USA", "Amerika", "Vereinigte Staaten"] },

  // Südamerika (12 Länder)
  { name: "Argentinien", flag: "🇦🇷", continent: "Südamerika" },
  { name: "Bolivien", flag: "🇧🇴", continent: "Südamerika" },
  { name: "Brasilien", flag: "🇧🇷", continent: "Südamerika" },
  { name: "Chile", flag: "🇨🇱", continent: "Südamerika" },
  { name: "Ecuador", flag: "🇪🇨", continent: "Südamerika" },
  { name: "Guyana", flag: "🇬🇾", continent: "Südamerika" },
  { name: "Kolumbien", flag: "🇨🇴", continent: "Südamerika" },
  { name: "Paraguay", flag: "🇵🇾", continent: "Südamerika" },
  { name: "Peru", flag: "🇵🇪", continent: "Südamerika" },
  { name: "Suriname", flag: "🇸🇷", continent: "Südamerika" },
  { name: "Uruguay", flag: "🇺🇾", continent: "Südamerika" },
  { name: "Venezuela", flag: "🇻🇪", continent: "Südamerika" },

  // Ozeanien (14 Länder)
  { name: "Australien", flag: "🇦🇺", continent: "Ozeanien" },
  { name: "Fidschi", flag: "🇫🇯", continent: "Ozeanien" },
  { name: "Kiribati", flag: "🇰🇮", continent: "Ozeanien" },
  { name: "Marshallinseln", flag: "🇲🇭", continent: "Ozeanien" },
  { name: "Mikronesien", flag: "🇫🇲", continent: "Ozeanien" },
  { name: "Nauru", flag: "🇳🇷", continent: "Ozeanien" },
  { name: "Neuseeland", flag: "🇳🇿", continent: "Ozeanien" },
  { name: "Palau", flag: "🇵🇼", continent: "Ozeanien" },
  { name: "Papua-Neuguinea", flag: "🇵🇬", continent: "Ozeanien" },
  { name: "Salomonen", flag: "🇸🇧", continent: "Ozeanien" },
  { name: "Samoa", flag: "🇼🇸", continent: "Ozeanien" },
  { name: "Tonga", flag: "🇹🇴", continent: "Ozeanien" },
  { name: "Tuvalu", flag: "🇹🇻", continent: "Ozeanien" },
  { name: "Vanuatu", flag: "🇻🇺", continent: "Ozeanien" }
];

export const continentEmojis = {
  "Afrika": "🌍",
  "Asien": "🌏", 
  "Europa": "🇪🇺",
  "Nordamerika": "🌎",
  "Südamerika": "🌎", 
  "Ozeanien": "🌏"
};

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function normalizeInput(input: string): string {
  return input.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s]/g, "") // Remove special chars
    .trim();
}

export function checkAnswer(input: string, country: Country): boolean {
  const normalizedInput = normalizeInput(input);
  const normalizedName = normalizeInput(country.name);
  
  if (normalizedInput === normalizedName) return true;
  
  if (country.aliases) {
    return country.aliases.some(alias => 
      normalizeInput(alias) === normalizedInput
    );
  }
  
  return false;
}