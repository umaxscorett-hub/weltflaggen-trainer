export interface Country {
  name: string;
  code: string; // ISO 2-letter country code
  continent: string;
  aliases?: string[]; // alternative names for input matching
}

export function getFlagUrl(code: string): string {
  return `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
}

export const countries: Country[] = [
  // Afrika (54 Länder)
  { name: "Ägypten", code: "EG", continent: "Afrika" },
  { name: "Äquatorialguinea", code: "GQ", continent: "Afrika" },
  { name: "Äthiopien", code: "ET", continent: "Afrika" },
  { name: "Algerien", code: "DZ", continent: "Afrika" },
  { name: "Angola", code: "AO", continent: "Afrika" },
  { name: "Benin", code: "BJ", continent: "Afrika" },
  { name: "Botswana", code: "BW", continent: "Afrika" },
  { name: "Burkina Faso", code: "BF", continent: "Afrika" },
  { name: "Burundi", code: "BI", continent: "Afrika" },
  { name: "Dschibuti", code: "DJ", continent: "Afrika" },
  { name: "Elfenbeinküste", code: "CI", continent: "Afrika", aliases: ["Côte d'Ivoire", "Cote d'Ivoire"] },
  { name: "Eritrea", code: "ER", continent: "Afrika" },
  { name: "Eswatini", code: "SZ", continent: "Afrika", aliases: ["Swasiland"] },
  { name: "Gabun", code: "GA", continent: "Afrika" },
  { name: "Gambia", code: "GM", continent: "Afrika" },
  { name: "Ghana", code: "GH", continent: "Afrika" },
  { name: "Guinea", code: "GN", continent: "Afrika" },
  { name: "Guinea-Bissau", code: "GW", continent: "Afrika" },
  { name: "Kamerun", code: "CM", continent: "Afrika" },
  { name: "Kap Verde", code: "CV", continent: "Afrika" },
  { name: "Kenia", code: "KE", continent: "Afrika" },
  { name: "Komoren", code: "KM", continent: "Afrika" },
  { name: "Kongo, Demokratische Republik", code: "CD", continent: "Afrika", aliases: ["Demokratische Republik Kongo", "DR Kongo"] },
  { name: "Kongo, Republik", code: "CG", continent: "Afrika", aliases: ["Republik Kongo"] },
  { name: "Lesotho", code: "LS", continent: "Afrika" },
  { name: "Liberia", code: "LR", continent: "Afrika" },
  { name: "Libyen", code: "LY", continent: "Afrika" },
  { name: "Madagaskar", code: "MG", continent: "Afrika" },
  { name: "Malawi", code: "MW", continent: "Afrika" },
  { name: "Mali", code: "ML", continent: "Afrika" },
  { name: "Marokko", code: "MA", continent: "Afrika" },
  { name: "Mauretanien", code: "MR", continent: "Afrika" },
  { name: "Mauritius", code: "MU", continent: "Afrika" },
  { name: "Mosambik", code: "MZ", continent: "Afrika" },
  { name: "Namibia", code: "NA", continent: "Afrika" },
  { name: "Niger", code: "NE", continent: "Afrika" },
  { name: "Nigeria", code: "NG", continent: "Afrika" },
  { name: "Ruanda", code: "RW", continent: "Afrika" },
  { name: "Sambia", code: "ZM", continent: "Afrika" },
  { name: "São Tomé und Príncipe", code: "ST", continent: "Afrika", aliases: ["Sao Tome und Principe"] },
  { name: "Senegal", code: "SN", continent: "Afrika" },
  { name: "Seychellen", code: "SC", continent: "Afrika" },
  { name: "Sierra Leone", code: "SL", continent: "Afrika" },
  { name: "Simbabwe", code: "ZW", continent: "Afrika", aliases: ["Zimbabwe"] },
  { name: "Somalia", code: "SO", continent: "Afrika" },
  { name: "Südafrika", code: "ZA", continent: "Afrika" },
  { name: "Sudan", code: "SD", continent: "Afrika" },
  { name: "Südsudan", code: "SS", continent: "Afrika" },
  { name: "Tansania", code: "TZ", continent: "Afrika" },
  { name: "Togo", code: "TG", continent: "Afrika" },
  { name: "Tschad", code: "TD", continent: "Afrika" },
  { name: "Tunesien", code: "TN", continent: "Afrika" },
  { name: "Uganda", code: "UG", continent: "Afrika" },
  { name: "Zentralafrikanische Republik", code: "CF", continent: "Afrika" },

  // Asien (49 Länder)
  { name: "Afghanistan", code: "AF", continent: "Asien" },
  { name: "Armenien", code: "AM", continent: "Asien" },
  { name: "Aserbaidschan", code: "AZ", continent: "Asien" },
  { name: "Bahrain", code: "BH", continent: "Asien" },
  { name: "Bangladesch", code: "BD", continent: "Asien" },
  { name: "Bhutan", code: "BT", continent: "Asien" },
  { name: "Brunei", code: "BN", continent: "Asien" },
  { name: "China", code: "CN", continent: "Asien" },
  { name: "Georgien", code: "GE", continent: "Asien" },
  { name: "Indien", code: "IN", continent: "Asien" },
  { name: "Indonesien", code: "ID", continent: "Asien" },
  { name: "Irak", code: "IQ", continent: "Asien" },
  { name: "Iran", code: "IR", continent: "Asien" },
  { name: "Israel", code: "IL", continent: "Asien" },
  { name: "Japan", code: "JP", continent: "Asien" },
  { name: "Jemen", code: "YE", continent: "Asien" },
  { name: "Jordanien", code: "JO", continent: "Asien" },
  { name: "Kambodscha", code: "KH", continent: "Asien" },
  { name: "Kasachstan", code: "KZ", continent: "Asien" },
  { name: "Katar", code: "QA", continent: "Asien", aliases: ["Qatar"] },
  { name: "Kirgisistan", code: "KG", continent: "Asien", aliases: ["Kirgistan"] },
  { name: "Kuwait", code: "KW", continent: "Asien" },
  { name: "Laos", code: "LA", continent: "Asien" },
  { name: "Libanon", code: "LB", continent: "Asien" },
  { name: "Malaysia", code: "MY", continent: "Asien" },
  { name: "Malediven", code: "MV", continent: "Asien" },
  { name: "Mongolei", code: "MN", continent: "Asien" },
  { name: "Myanmar", code: "MM", continent: "Asien", aliases: ["Burma"] },
  { name: "Nepal", code: "NP", continent: "Asien" },
  { name: "Nordkorea", code: "KP", continent: "Asien" },
  { name: "Oman", code: "OM", continent: "Asien" },
  { name: "Pakistan", code: "PK", continent: "Asien" },
  { name: "Palästina", code: "PS", continent: "Asien", aliases: ["Palestina"] },
  { name: "Philippinen", code: "PH", continent: "Asien" },
  { name: "Russland", code: "RU", continent: "Asien" },
  { name: "Saudi-Arabien", code: "SA", continent: "Asien" },
  { name: "Singapur", code: "SG", continent: "Asien" },
  { name: "Sri Lanka", code: "LK", continent: "Asien" },
  { name: "Südkorea", code: "KR", continent: "Asien" },
  { name: "Syrien", code: "SY", continent: "Asien" },
  { name: "Tadschikistan", code: "TJ", continent: "Asien" },
  { name: "Thailand", code: "TH", continent: "Asien" },
  { name: "Timor-Leste", code: "TL", continent: "Asien" },
  { name: "Türkei", code: "TR", continent: "Asien", aliases: ["Turkei"] },
  { name: "Turkmenistan", code: "TM", continent: "Asien" },
  { name: "Usbekistan", code: "UZ", continent: "Asien" },
  { name: "Vereinigte Arabische Emirate", code: "AE", continent: "Asien", aliases: ["VAE"] },
  { name: "Vietnam", code: "VN", continent: "Asien" },
  { name: "Zypern", code: "CY", continent: "Asien" },

  // Europa (44 Länder)
  { name: "Albanien", code: "AL", continent: "Europa" },
  { name: "Andorra", code: "AD", continent: "Europa" },
  { name: "Belgien", code: "BE", continent: "Europa" },
  { name: "Bosnien und Herzegowina", code: "BA", continent: "Europa" },
  { name: "Bulgarien", code: "BG", continent: "Europa" },
  { name: "Dänemark", code: "DK", continent: "Europa", aliases: ["Daenemark"] },
  { name: "Deutschland", code: "DE", continent: "Europa" },
  { name: "Estland", code: "EE", continent: "Europa" },
  { name: "Finnland", code: "FI", continent: "Europa" },
  { name: "Frankreich", code: "FR", continent: "Europa" },
  { name: "Griechenland", code: "GR", continent: "Europa" },
  { name: "Irland", code: "IE", continent: "Europa" },
  { name: "Island", code: "IS", continent: "Europa" },
  { name: "Italien", code: "IT", continent: "Europa" },
  { name: "Kosovo", code: "XK", continent: "Europa" },
  { name: "Kroatien", code: "HR", continent: "Europa" },
  { name: "Lettland", code: "LV", continent: "Europa" },
  { name: "Liechtenstein", code: "LI", continent: "Europa" },
  { name: "Litauen", code: "LT", continent: "Europa" },
  { name: "Luxemburg", code: "LU", continent: "Europa" },
  { name: "Malta", code: "MT", continent: "Europa" },
  { name: "Moldau", code: "MD", continent: "Europa", aliases: ["Moldawien"] },
  { name: "Monaco", code: "MC", continent: "Europa" },
  { name: "Montenegro", code: "ME", continent: "Europa" },
  { name: "Niederlande", code: "NL", continent: "Europa", aliases: ["Holland"] },
  { name: "Nordmazedonien", code: "MK", continent: "Europa", aliases: ["Mazedonien"] },
  { name: "Norwegen", code: "NO", continent: "Europa" },
  { name: "Österreich", code: "AT", continent: "Europa", aliases: ["Oesterreich"] },
  { name: "Polen", code: "PL", continent: "Europa" },
  { name: "Portugal", code: "PT", continent: "Europa" },
  { name: "Rumänien", code: "RO", continent: "Europa", aliases: ["Rumaenien"] },
  { name: "San Marino", code: "SM", continent: "Europa" },
  { name: "Schweden", code: "SE", continent: "Europa" },
  { name: "Schweiz", code: "CH", continent: "Europa" },
  { name: "Serbien", code: "RS", continent: "Europa" },
  { name: "Slowakei", code: "SK", continent: "Europa" },
  { name: "Slowenien", code: "SI", continent: "Europa" },
  { name: "Spanien", code: "ES", continent: "Europa" },
  { name: "Tschechien", code: "CZ", continent: "Europa", aliases: ["Tschechische Republik"] },
  { name: "Ukraine", code: "UA", continent: "Europa" },
  { name: "Ungarn", code: "HU", continent: "Europa" },
  { name: "Vatikanstadt", code: "VA", continent: "Europa", aliases: ["Vatikan"] },
  { name: "Vereinigtes Königreich", code: "GB", continent: "Europa", aliases: ["Großbritannien", "UK", "England"] },
  { name: "Weißrussland", code: "BY", continent: "Europa", aliases: ["Belarus", "Weissrussland"] },

  // Nordamerika (23 Länder)
  { name: "Antigua und Barbuda", code: "AG", continent: "Nordamerika" },
  { name: "Bahamas", code: "BS", continent: "Nordamerika" },
  { name: "Barbados", code: "BB", continent: "Nordamerika" },
  { name: "Belize", code: "BZ", continent: "Nordamerika" },
  { name: "Costa Rica", code: "CR", continent: "Nordamerika" },
  { name: "Dominica", code: "DM", continent: "Nordamerika" },
  { name: "Dominikanische Republik", code: "DO", continent: "Nordamerika" },
  { name: "El Salvador", code: "SV", continent: "Nordamerika" },
  { name: "Grenada", code: "GD", continent: "Nordamerika" },
  { name: "Guatemala", code: "GT", continent: "Nordamerika" },
  { name: "Haiti", code: "HT", continent: "Nordamerika" },
  { name: "Honduras", code: "HN", continent: "Nordamerika" },
  { name: "Jamaika", code: "JM", continent: "Nordamerika" },
  { name: "Kanada", code: "CA", continent: "Nordamerika" },
  { name: "Kuba", code: "CU", continent: "Nordamerika" },
  { name: "Mexiko", code: "MX", continent: "Nordamerika" },
  { name: "Nicaragua", code: "NI", continent: "Nordamerika" },
  { name: "Panama", code: "PA", continent: "Nordamerika" },
  { name: "St. Kitts und Nevis", code: "KN", continent: "Nordamerika", aliases: ["Saint Kitts und Nevis"] },
  { name: "St. Lucia", code: "LC", continent: "Nordamerika", aliases: ["Saint Lucia"] },
  { name: "St. Vincent und die Grenadinen", code: "VC", continent: "Nordamerika", aliases: ["Saint Vincent und die Grenadinen"] },
  { name: "Trinidad und Tobago", code: "TT", continent: "Nordamerika" },
  { name: "Vereinigte Staaten von Amerika", code: "US", continent: "Nordamerika", aliases: ["USA", "Amerika", "Vereinigte Staaten"] },

  // Südamerika (12 Länder)
  { name: "Argentinien", code: "AR", continent: "Südamerika" },
  { name: "Bolivien", code: "BO", continent: "Südamerika" },
  { name: "Brasilien", code: "BR", continent: "Südamerika" },
  { name: "Chile", code: "CL", continent: "Südamerika" },
  { name: "Ecuador", code: "EC", continent: "Südamerika" },
  { name: "Guyana", code: "GY", continent: "Südamerika" },
  { name: "Kolumbien", code: "CO", continent: "Südamerika" },
  { name: "Paraguay", code: "PY", continent: "Südamerika" },
  { name: "Peru", code: "PE", continent: "Südamerika" },
  { name: "Suriname", code: "SR", continent: "Südamerika" },
  { name: "Uruguay", code: "UY", continent: "Südamerika" },
  { name: "Venezuela", code: "VE", continent: "Südamerika" },

  // Ozeanien (14 Länder)
  { name: "Australien", code: "AU", continent: "Ozeanien" },
  { name: "Fidschi", code: "FJ", continent: "Ozeanien" },
  { name: "Kiribati", code: "KI", continent: "Ozeanien" },
  { name: "Marshallinseln", code: "MH", continent: "Ozeanien" },
  { name: "Mikronesien", code: "FM", continent: "Ozeanien" },
  { name: "Nauru", code: "NR", continent: "Ozeanien" },
  { name: "Neuseeland", code: "NZ", continent: "Ozeanien" },
  { name: "Palau", code: "PW", continent: "Ozeanien" },
  { name: "Papua-Neuguinea", code: "PG", continent: "Ozeanien" },
  { name: "Salomonen", code: "SB", continent: "Ozeanien" },
  { name: "Samoa", code: "WS", continent: "Ozeanien" },
  { name: "Tonga", code: "TO", continent: "Ozeanien" },
  { name: "Tuvalu", code: "TV", continent: "Ozeanien" },
  { name: "Vanuatu", code: "VU", continent: "Ozeanien" }
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