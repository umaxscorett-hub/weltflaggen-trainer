export interface Country {
  name: string;
  code: string; // ISO 2-letter country code
  continent: string;
  capital: string;
  aliases?: string[]; // alternative names for input matching
}

export function getFlagUrl(code: string): string {
  return `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
}

export function getCountryOutlineUrl(code: string): string {
  return `https://restcountries.com/v3.1/alpha/${code.toLowerCase()}?fields=maps`;
}

export const countries: Country[] = [
  // Afrika (54 Länder)
  { name: "Ägypten", code: "EG", continent: "Afrika", capital: "Kairo" },
  { name: "Äquatorialguinea", code: "GQ", continent: "Afrika", capital: "Malabo" },
  { name: "Äthiopien", code: "ET", continent: "Afrika", capital: "Addis Abeba" },
  { name: "Algerien", code: "DZ", continent: "Afrika", capital: "Algier" },
  { name: "Angola", code: "AO", continent: "Afrika", capital: "Luanda" },
  { name: "Benin", code: "BJ", continent: "Afrika", capital: "Porto-Novo" },
  { name: "Botswana", code: "BW", continent: "Afrika", capital: "Gaborone" },
  { name: "Burkina Faso", code: "BF", continent: "Afrika", capital: "Ouagadougou" },
  { name: "Burundi", code: "BI", continent: "Afrika", capital: "Gitega" },
  { name: "Dschibuti", code: "DJ", continent: "Afrika", capital: "Dschibuti" },
  { name: "Elfenbeinküste", code: "CI", continent: "Afrika", capital: "Yamoussoukro", aliases: ["Côte d'Ivoire", "Cote d'Ivoire"] },
  { name: "Eritrea", code: "ER", continent: "Afrika", capital: "Asmara" },
  { name: "Eswatini", code: "SZ", continent: "Afrika", capital: "Mbabane", aliases: ["Swasiland"] },
  { name: "Gabun", code: "GA", continent: "Afrika", capital: "Libreville" },
  { name: "Gambia", code: "GM", continent: "Afrika", capital: "Banjul" },
  { name: "Ghana", code: "GH", continent: "Afrika", capital: "Accra" },
  { name: "Guinea", code: "GN", continent: "Afrika", capital: "Conakry" },
  { name: "Guinea-Bissau", code: "GW", continent: "Afrika", capital: "Bissau" },
  { name: "Kamerun", code: "CM", continent: "Afrika", capital: "Yaoundé" },
  { name: "Kap Verde", code: "CV", continent: "Afrika", capital: "Praia" },
  { name: "Kenia", code: "KE", continent: "Afrika", capital: "Nairobi" },
  { name: "Komoren", code: "KM", continent: "Afrika", capital: "Moroni" },
  { name: "Kongo, Demokratische Republik", code: "CD", continent: "Afrika", capital: "Kinshasa", aliases: ["Demokratische Republik Kongo", "DR Kongo"] },
  { name: "Kongo, Republik", code: "CG", continent: "Afrika", capital: "Brazzaville", aliases: ["Republik Kongo"] },
  { name: "Lesotho", code: "LS", continent: "Afrika", capital: "Maseru" },
  { name: "Liberia", code: "LR", continent: "Afrika", capital: "Monrovia" },
  { name: "Libyen", code: "LY", continent: "Afrika", capital: "Tripolis" },
  { name: "Madagaskar", code: "MG", continent: "Afrika", capital: "Antananarivo" },
  { name: "Malawi", code: "MW", continent: "Afrika", capital: "Lilongwe" },
  { name: "Mali", code: "ML", continent: "Afrika", capital: "Bamako" },
  { name: "Marokko", code: "MA", continent: "Afrika", capital: "Rabat" },
  { name: "Mauretanien", code: "MR", continent: "Afrika", capital: "Nouakchott" },
  { name: "Mauritius", code: "MU", continent: "Afrika", capital: "Port Louis" },
  { name: "Mosambik", code: "MZ", continent: "Afrika", capital: "Maputo" },
  { name: "Namibia", code: "NA", continent: "Afrika", capital: "Windhoek" },
  { name: "Niger", code: "NE", continent: "Afrika", capital: "Niamey" },
  { name: "Nigeria", code: "NG", continent: "Afrika", capital: "Abuja" },
  { name: "Ruanda", code: "RW", continent: "Afrika", capital: "Kigali" },
  { name: "Sambia", code: "ZM", continent: "Afrika", capital: "Lusaka" },
  { name: "São Tomé und Príncipe", code: "ST", continent: "Afrika", capital: "São Tomé", aliases: ["Sao Tome und Principe"] },
  { name: "Senegal", code: "SN", continent: "Afrika", capital: "Dakar" },
  { name: "Seychellen", code: "SC", continent: "Afrika", capital: "Victoria" },
  { name: "Sierra Leone", code: "SL", continent: "Afrika", capital: "Freetown" },
  { name: "Simbabwe", code: "ZW", continent: "Afrika", capital: "Harare", aliases: ["Zimbabwe"] },
  { name: "Somalia", code: "SO", continent: "Afrika", capital: "Mogadischu" },
  { name: "Südafrika", code: "ZA", continent: "Afrika", capital: "Kapstadt" },
  { name: "Sudan", code: "SD", continent: "Afrika", capital: "Khartum" },
  { name: "Südsudan", code: "SS", continent: "Afrika", capital: "Juba" },
  { name: "Tansania", code: "TZ", continent: "Afrika", capital: "Dodoma" },
  { name: "Togo", code: "TG", continent: "Afrika", capital: "Lomé" },
  { name: "Tschad", code: "TD", continent: "Afrika", capital: "N'Djamena" },
  { name: "Tunesien", code: "TN", continent: "Afrika", capital: "Tunis" },
  { name: "Uganda", code: "UG", continent: "Afrika", capital: "Kampala" },
  { name: "Zentralafrikanische Republik", code: "CF", continent: "Afrika", capital: "Bangui" },

  // Asien (49 Länder)
  { name: "Afghanistan", code: "AF", continent: "Asien", capital: "Kabul" },
  { name: "Armenien", code: "AM", continent: "Asien", capital: "Eriwan" },
  { name: "Aserbaidschan", code: "AZ", continent: "Asien", capital: "Baku" },
  { name: "Bahrain", code: "BH", continent: "Asien", capital: "Manama" },
  { name: "Bangladesch", code: "BD", continent: "Asien", capital: "Dhaka" },
  { name: "Bhutan", code: "BT", continent: "Asien", capital: "Thimphu" },
  { name: "Brunei", code: "BN", continent: "Asien", capital: "Bandar Seri Begawan" },
  { name: "China", code: "CN", continent: "Asien", capital: "Peking" },
  { name: "Georgien", code: "GE", continent: "Asien", capital: "Tiflis" },
  { name: "Indien", code: "IN", continent: "Asien", capital: "Neu-Delhi" },
  { name: "Indonesien", code: "ID", continent: "Asien", capital: "Jakarta" },
  { name: "Irak", code: "IQ", continent: "Asien", capital: "Bagdad" },
  { name: "Iran", code: "IR", continent: "Asien", capital: "Teheran" },
  { name: "Israel", code: "IL", continent: "Asien", capital: "Jerusalem" },
  { name: "Japan", code: "JP", continent: "Asien", capital: "Tokio" },
  { name: "Jemen", code: "YE", continent: "Asien", capital: "Sanaa" },
  { name: "Jordanien", code: "JO", continent: "Asien", capital: "Amman" },
  { name: "Kambodscha", code: "KH", continent: "Asien", capital: "Phnom Penh" },
  { name: "Kasachstan", code: "KZ", continent: "Asien", capital: "Nur-Sultan" },
  { name: "Katar", code: "QA", continent: "Asien", capital: "Doha", aliases: ["Qatar"] },
  { name: "Kirgisistan", code: "KG", continent: "Asien", capital: "Bischkek", aliases: ["Kirgistan"] },
  { name: "Kuwait", code: "KW", continent: "Asien", capital: "Kuwait-Stadt" },
  { name: "Laos", code: "LA", continent: "Asien", capital: "Vientiane" },
  { name: "Libanon", code: "LB", continent: "Asien", capital: "Beirut" },
  { name: "Malaysia", code: "MY", continent: "Asien", capital: "Kuala Lumpur" },
  { name: "Malediven", code: "MV", continent: "Asien", capital: "Malé" },
  { name: "Mongolei", code: "MN", continent: "Asien", capital: "Ulaanbaatar" },
  { name: "Myanmar", code: "MM", continent: "Asien", capital: "Naypyidaw", aliases: ["Burma"] },
  { name: "Nepal", code: "NP", continent: "Asien", capital: "Kathmandu" },
  { name: "Nordkorea", code: "KP", continent: "Asien", capital: "Pjöngjang" },
  { name: "Oman", code: "OM", continent: "Asien", capital: "Maskat" },
  { name: "Pakistan", code: "PK", continent: "Asien", capital: "Islamabad" },
  { name: "Palästina", code: "PS", continent: "Asien", capital: "Ramallah", aliases: ["Palestina"] },
  { name: "Philippinen", code: "PH", continent: "Asien", capital: "Manila" },
  { name: "Russland", code: "RU", continent: "Asien", capital: "Moskau" },
  { name: "Saudi-Arabien", code: "SA", continent: "Asien", capital: "Riad" },
  { name: "Singapur", code: "SG", continent: "Asien", capital: "Singapur" },
  { name: "Sri Lanka", code: "LK", continent: "Asien", capital: "Sri Jayawardenepura Kotte" },
  { name: "Südkorea", code: "KR", continent: "Asien", capital: "Seoul" },
  { name: "Syrien", code: "SY", continent: "Asien", capital: "Damaskus" },
  { name: "Tadschikistan", code: "TJ", continent: "Asien", capital: "Duschanbe" },
  { name: "Thailand", code: "TH", continent: "Asien", capital: "Bangkok" },
  { name: "Timor-Leste", code: "TL", continent: "Asien", capital: "Dili" },
  { name: "Türkei", code: "TR", continent: "Asien", capital: "Ankara", aliases: ["Turkei"] },
  { name: "Turkmenistan", code: "TM", continent: "Asien", capital: "Aschgabat" },
  { name: "Usbekistan", code: "UZ", continent: "Asien", capital: "Taschkent" },
  { name: "Vereinigte Arabische Emirate", code: "AE", continent: "Asien", capital: "Abu Dhabi", aliases: ["VAE"] },
  { name: "Vietnam", code: "VN", continent: "Asien", capital: "Hanoi" },
  { name: "Zypern", code: "CY", continent: "Asien", capital: "Nikosia" },

  // Europa (44 Länder)
  { name: "Albanien", code: "AL", continent: "Europa", capital: "Tirana" },
  { name: "Andorra", code: "AD", continent: "Europa", capital: "Andorra la Vella" },
  { name: "Belgien", code: "BE", continent: "Europa", capital: "Brüssel" },
  { name: "Bosnien und Herzegowina", code: "BA", continent: "Europa", capital: "Sarajevo" },
  { name: "Bulgarien", code: "BG", continent: "Europa", capital: "Sofia" },
  { name: "Dänemark", code: "DK", continent: "Europa", capital: "Kopenhagen", aliases: ["Daenemark"] },
  { name: "Deutschland", code: "DE", continent: "Europa", capital: "Berlin" },
  { name: "Estland", code: "EE", continent: "Europa", capital: "Tallinn" },
  { name: "Finnland", code: "FI", continent: "Europa", capital: "Helsinki" },
  { name: "Frankreich", code: "FR", continent: "Europa", capital: "Paris" },
  { name: "Griechenland", code: "GR", continent: "Europa", capital: "Athen" },
  { name: "Irland", code: "IE", continent: "Europa", capital: "Dublin" },
  { name: "Island", code: "IS", continent: "Europa", capital: "Reykjavík" },
  { name: "Italien", code: "IT", continent: "Europa", capital: "Rom" },
  { name: "Kosovo", code: "XK", continent: "Europa", capital: "Prishtina" },
  { name: "Kroatien", code: "HR", continent: "Europa", capital: "Zagreb" },
  { name: "Lettland", code: "LV", continent: "Europa", capital: "Riga" },
  { name: "Liechtenstein", code: "LI", continent: "Europa", capital: "Vaduz" },
  { name: "Litauen", code: "LT", continent: "Europa", capital: "Vilnius" },
  { name: "Luxemburg", code: "LU", continent: "Europa", capital: "Luxemburg" },
  { name: "Malta", code: "MT", continent: "Europa", capital: "Valletta" },
  { name: "Moldau", code: "MD", continent: "Europa", capital: "Chișinău", aliases: ["Moldawien"] },
  { name: "Monaco", code: "MC", continent: "Europa", capital: "Monaco" },
  { name: "Montenegro", code: "ME", continent: "Europa", capital: "Podgorica" },
  { name: "Niederlande", code: "NL", continent: "Europa", capital: "Amsterdam", aliases: ["Holland"] },
  { name: "Nordmazedonien", code: "MK", continent: "Europa", capital: "Skopje", aliases: ["Mazedonien"] },
  { name: "Norwegen", code: "NO", continent: "Europa", capital: "Oslo" },
  { name: "Österreich", code: "AT", continent: "Europa", capital: "Wien", aliases: ["Oesterreich"] },
  { name: "Polen", code: "PL", continent: "Europa", capital: "Warschau" },
  { name: "Portugal", code: "PT", continent: "Europa", capital: "Lissabon" },
  { name: "Rumänien", code: "RO", continent: "Europa", capital: "Bukarest", aliases: ["Rumaenien"] },
  { name: "San Marino", code: "SM", continent: "Europa", capital: "San Marino" },
  { name: "Schweden", code: "SE", continent: "Europa", capital: "Stockholm" },
  { name: "Schweiz", code: "CH", continent: "Europa", capital: "Bern" },
  { name: "Serbien", code: "RS", continent: "Europa", capital: "Belgrad" },
  { name: "Slowakei", code: "SK", continent: "Europa", capital: "Bratislava" },
  { name: "Slowenien", code: "SI", continent: "Europa", capital: "Ljubljana" },
  { name: "Spanien", code: "ES", continent: "Europa", capital: "Madrid" },
  { name: "Tschechien", code: "CZ", continent: "Europa", capital: "Prag", aliases: ["Tschechische Republik"] },
  { name: "Ukraine", code: "UA", continent: "Europa", capital: "Kiew" },
  { name: "Ungarn", code: "HU", continent: "Europa", capital: "Budapest" },
  { name: "Vatikanstadt", code: "VA", continent: "Europa", capital: "Vatikanstadt", aliases: ["Vatikan"] },
  { name: "Vereinigtes Königreich", code: "GB", continent: "Europa", capital: "London", aliases: ["Großbritannien", "UK", "England"] },
  { name: "Weißrussland", code: "BY", continent: "Europa", capital: "Minsk", aliases: ["Belarus", "Weissrussland"] },

  // Nordamerika (23 Länder)
  { name: "Antigua und Barbuda", code: "AG", continent: "Nordamerika", capital: "Saint John's" },
  { name: "Bahamas", code: "BS", continent: "Nordamerika", capital: "Nassau" },
  { name: "Barbados", code: "BB", continent: "Nordamerika", capital: "Bridgetown" },
  { name: "Belize", code: "BZ", continent: "Nordamerika", capital: "Belmopan" },
  { name: "Costa Rica", code: "CR", continent: "Nordamerika", capital: "San José" },
  { name: "Dominica", code: "DM", continent: "Nordamerika", capital: "Roseau" },
  { name: "Dominikanische Republik", code: "DO", continent: "Nordamerika", capital: "Santo Domingo" },
  { name: "El Salvador", code: "SV", continent: "Nordamerika", capital: "San Salvador" },
  { name: "Grenada", code: "GD", continent: "Nordamerika", capital: "Saint George's" },
  { name: "Guatemala", code: "GT", continent: "Nordamerika", capital: "Guatemala-Stadt" },
  { name: "Haiti", code: "HT", continent: "Nordamerika", capital: "Port-au-Prince" },
  { name: "Honduras", code: "HN", continent: "Nordamerika", capital: "Tegucigalpa" },
  { name: "Jamaika", code: "JM", continent: "Nordamerika", capital: "Kingston" },
  { name: "Kanada", code: "CA", continent: "Nordamerika", capital: "Ottawa" },
  { name: "Kuba", code: "CU", continent: "Nordamerika", capital: "Havanna" },
  { name: "Mexiko", code: "MX", continent: "Nordamerika", capital: "Mexiko-Stadt" },
  { name: "Nicaragua", code: "NI", continent: "Nordamerika", capital: "Managua" },
  { name: "Panama", code: "PA", continent: "Nordamerika", capital: "Panama-Stadt" },
  { name: "St. Kitts und Nevis", code: "KN", continent: "Nordamerika", capital: "Basseterre", aliases: ["Saint Kitts und Nevis"] },
  { name: "St. Lucia", code: "LC", continent: "Nordamerika", capital: "Castries", aliases: ["Saint Lucia"] },
  { name: "St. Vincent und die Grenadinen", code: "VC", continent: "Nordamerika", capital: "Kingstown", aliases: ["Saint Vincent und die Grenadinen"] },
  { name: "Trinidad und Tobago", code: "TT", continent: "Nordamerika", capital: "Port of Spain" },
  { name: "Vereinigte Staaten von Amerika", code: "US", continent: "Nordamerika", capital: "Washington, D.C.", aliases: ["USA", "Amerika", "Vereinigte Staaten"] },

  // Südamerika (12 Länder)
  { name: "Argentinien", code: "AR", continent: "Südamerika", capital: "Buenos Aires" },
  { name: "Bolivien", code: "BO", continent: "Südamerika", capital: "Sucre" },
  { name: "Brasilien", code: "BR", continent: "Südamerika", capital: "Brasília" },
  { name: "Chile", code: "CL", continent: "Südamerika", capital: "Santiago" },
  { name: "Ecuador", code: "EC", continent: "Südamerika", capital: "Quito" },
  { name: "Guyana", code: "GY", continent: "Südamerika", capital: "Georgetown" },
  { name: "Kolumbien", code: "CO", continent: "Südamerika", capital: "Bogotá" },
  { name: "Paraguay", code: "PY", continent: "Südamerika", capital: "Asunción" },
  { name: "Peru", code: "PE", continent: "Südamerika", capital: "Lima" },
  { name: "Suriname", code: "SR", continent: "Südamerika", capital: "Paramaribo" },
  { name: "Uruguay", code: "UY", continent: "Südamerika", capital: "Montevideo" },
  { name: "Venezuela", code: "VE", continent: "Südamerika", capital: "Caracas" },

  // Ozeanien (14 Länder)
  { name: "Australien", code: "AU", continent: "Ozeanien", capital: "Canberra" },
  { name: "Fidschi", code: "FJ", continent: "Ozeanien", capital: "Suva" },
  { name: "Kiribati", code: "KI", continent: "Ozeanien", capital: "Tarawa" },
  { name: "Marshallinseln", code: "MH", continent: "Ozeanien", capital: "Majuro" },
  { name: "Mikronesien", code: "FM", continent: "Ozeanien", capital: "Palikir" },
  { name: "Nauru", code: "NR", continent: "Ozeanien", capital: "Yaren" },
  { name: "Neuseeland", code: "NZ", continent: "Ozeanien", capital: "Wellington" },
  { name: "Palau", code: "PW", continent: "Ozeanien", capital: "Ngerulmud" },
  { name: "Papua-Neuguinea", code: "PG", continent: "Ozeanien", capital: "Port Moresby" },
  { name: "Salomonen", code: "SB", continent: "Ozeanien", capital: "Honiara" },
  { name: "Samoa", code: "WS", continent: "Ozeanien", capital: "Apia" },
  { name: "Tonga", code: "TO", continent: "Ozeanien", capital: "Nuku'alofa" },
  { name: "Tuvalu", code: "TV", continent: "Ozeanien", capital: "Funafuti" },
  { name: "Vanuatu", code: "VU", continent: "Ozeanien", capital: "Port Vila" }
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