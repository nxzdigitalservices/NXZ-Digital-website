// Exclusively sourced from https://nxzdigital.com
export interface FloorPlanItem {
  configuration: string;
  size: string;
  price: string;
  carpetArea?: string;
}

export interface DriveDocument {
  label: string;
  url: string;
}

export interface NXZProject {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  developerName: string;
  location: string;
  specificAddress: string;
  propertyType: string;
  configurations: string[];
  startingPrice: string;
  priceNumeric: number;
  avgPricePerSqFt?: string;
  areaRange: string;
  carpetAreaRange?: string;
  statusBadge: string;
  statusType: string;
  isDetailed: boolean;
  isFeatured: boolean;
  image: string;
  gallery: string[];
  description: string;
  reraNumber: string;
  projectHighlights: string[];
  locationHighlights: string[];
  nearbyLocations: string[];
  locationFeatures: string[];
  amenities: string[];
  floorPlanRows: FloorPlanItem[];
  planDiagrams?: string[];
  driveDocuments?: DriveDocument[];
}

export const NXZ_PROJECTS: NXZProject[] = [
  {
    "id": "cascades",
    "slug": "cascades",
    "name": "Cascades",
    "tagline": "Biophilic Landmark Luxury Living in Neopolis",
    "developerName": "Prominent Developer",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Sector 2, Neopolis, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "startingPrice": "₹2.81 Cr onwards",
    "priceNumeric": 281,
    "avgPricePerSqFt": "₹11,000/sq.ft.",
    "areaRange": "2,560 – 4,825 sq.ft.",
    "carpetAreaRange": "1,750 – 3,300 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Cascades-5-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Cascades-5-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Cascades-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Cascades-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Cascades-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Cascades-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Cascades is a distinctive upcoming biophilic residential development located in Sector 2 of Neopolis, Kokapet, Hyderabad. Designed to harmoniously blend nature with high-rise luxury, the project features stepped vertical green terraces, hanging botanical sky gardens, and cascading water courtyards that create a peaceful microclimate for residents.\n\nThe development offers spacious 3 and 4 BHK luxury residences ranging from 2,560 to 4,825 sq.ft. Each residence enjoys 11.5-foot ceiling clearances, grand entrance foyers, gourmet kitchens, and sweeping corner balconies with unobstructed views of the surrounding lake and skyline horizons.\n\nResidents benefit from an elevated multi-tier clubhouse, infinity lap pool with floating cabanas, co-working business lounges, and outdoor amphitheater. Located along the 45-meter wide boulevard with instant access to the Kokapet Trumpet Interchange, Cascades offers an outstanding pre-launch opportunity for discerning homebuyers.",
    "reraNumber": "P02400009538",
    "projectHighlights": [
      "Spread across 7.34 acres with 5 residential towers rising 63 storeys",
      "Offers spacious 3 BHK and 4 BHK luxury apartments with 11.5-ft ceiling heights",
      "More than 2,00,000 sq.ft. of curated lifestyle and sporting amenities",
      "Two helipads, seven levels of lifestyle amenities, and biophilic landscaping",
      "WELL pre-certified and IGBC Platinum pre-certified architecture",
      "TS RERA Registered (P02400009538) with possession targeted for March 2030"
    ],
    "locationHighlights": [
      "Located in Sector 2 of Neopolis, Kokapet's premier Golden Mile",
      "Instant access to 45m wide boulevard and Kokapet Trumpet Interchange",
      "5–8 minutes from Financial District & Nanakramguda IT corridor",
      "22–25 minutes from Rajiv Gandhi International Airport via ORR Exit 1",
      "Close to Google, Amazon, Microsoft, and Continental Hospital"
    ],
    "nearbyLocations": [
      "Financial District / Nanakramguda: 5-8 Mins",
      "Rajiv Gandhi International Airport (RGIA): 22-25 Mins",
      "HITEC City & Cyber Towers: 15 Mins",
      "Continental Hospital: 10 Mins"
    ],
    "locationFeatures": [
      "Direct 45-Meter Boulevard Access",
      "Trumpet Interchange Kokapet Integration",
      "Panoramic Lake & Skyline Horizons",
      "Close to International Schools & Universities"
    ],
    "amenities": [
      "Two Helipads",
      "Multi-Tier Lifestyle Clubhouse",
      "Infinity Lap Pool with Floating Cabanas",
      "Hanging Botanical Sky Gardens",
      "Co-working Business Lounges & Amphitheater",
      "Cricket Practice Nets",
      "Smart Home Automation with Voice Controls",
      "Imported Natural Marble Flooring"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Standard",
        "size": "2,560 sq.ft.",
        "carpetArea": "1,750 sq.ft.",
        "price": "₹2.81 Cr onwards"
      },
      {
        "configuration": "3 BHK + Maid",
        "size": "2,900 sq.ft.",
        "carpetArea": "1,980 sq.ft.",
        "price": "₹3.19 Cr onwards"
      },
      {
        "configuration": "4 BHK Luxury",
        "size": "4,200 sq.ft.",
        "carpetArea": "2,870 sq.ft.",
        "price": "₹4.62 Cr onwards"
      },
      {
        "configuration": "4 BHK Grand Presidential",
        "size": "4,825 sq.ft.",
        "carpetArea": "3,300 sq.ft.",
        "price": "₹5.30 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "godrej-epoque",
    "slug": "godrej-epoque",
    "name": "Godrej Epoque",
    "tagline": "57-Storey Art Deco Skyline Landmark in Neopolis",
    "developerName": "Godrej Properties",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Neopolis Sector, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "3 BHK + Study",
      "4 BHK"
    ],
    "startingPrice": "₹3.87 Cr onwards",
    "priceNumeric": 387,
    "avgPricePerSqFt": "Approx. ₹13,871/sq.ft.",
    "areaRange": "2,790 – 3,764 sq.ft.",
    "carpetAreaRange": "1,920 – 2,600 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Epoque-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Epoque-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Epoque-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Epoque-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Epoque-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Godrej Epoque is a prestigious 57-storey luxury landmark by Godrej Properties, dominating the vibrant skyline of Neopolis, Kokapet. Drawing inspiration from classic Art Deco geometric elegance, the development features striking vertical lines and grand colonnades, presenting 3 and 4 BHK palatial residences spanning from 2,790 to 3,764 sq.ft.\n\nA standout feature of this landmark is the high-altitude Sky Bridge connecting the towers, featuring exclusive resident lounges and stargazing platforms. The community includes a 100% vehicle-free landscaped podium with Miyawaki forest trails, a rooftop heated infinity pool overlooking the Financial District, and biometric smart access for every home.\n\nLocated just minutes from the Kokapet Trumpet Interchange, Godrej Epoque ensures effortless connectivity to major tech hubs and international schools. Registered under Telangana RERA (P02400006240), the project features flexible milestone payment options, representing an elite investment in Hyderabad’s premier skyscraper enclave.",
    "reraNumber": "P02400006240",
    "projectHighlights": [
      "Spread across approximately 5.03 acres with 2 residential towers of 58 floors each",
      "Total 666 curated luxury residences with Art Deco architectural grandeur",
      "High-altitude Sky Bridge connecting towers with observation decks and resident lounges",
      "25,000 sq.ft. designer clubhouse with temperature-controlled indoor pool",
      "Vehicle-free landscaped podium with Miyawaki botanical forest trail",
      "Telangana RERA registered (P02400006240) with planned launch September 2026"
    ],
    "locationHighlights": [
      "Prime location in Neopolis skyscraper cluster, Kokapet",
      "3 minutes from Outer Ring Road (ORR) Exit 1A",
      "7 minutes from Financial District & Nanakramguda commercial hub",
      "Direct transit links to HITEC City, Inorbit Mall, and RGIA Airport"
    ],
    "nearbyLocations": [
      "Kokapet Trumpet Interchange: 3 Mins",
      "Financial District (Wipro/WaveRock): 7 Mins",
      "Gachibowli Stadium: 12 Mins",
      "Rajiv Gandhi International Airport: 25 Mins"
    ],
    "locationFeatures": [
      "Sky Bridge Observation Decks",
      "100% Vehicle-Free Podium",
      "Biometric Smart Home Access",
      "Unobstructed West Hyderabad Panoramas"
    ],
    "amenities": [
      "25,000 Sq.Ft. Luxury Clubhouse",
      "High-Altitude Connected Sky Bridge",
      "Rooftop Heated Infinity Pool",
      "Miyawaki Forest Trails & Meditation Pods",
      "Cricket Practice Area & Squash Courts",
      "Private Screening Theater",
      "EV Charging Infrastructure & 24/7 Concierge"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Premium",
        "size": "2,790 sq.ft.",
        "carpetArea": "1,920 sq.ft.",
        "price": "₹3.87 Cr onwards"
      },
      {
        "configuration": "3 BHK + Study",
        "size": "3,250 sq.ft.",
        "carpetArea": "2,240 sq.ft.",
        "price": "₹4.50 Cr onwards"
      },
      {
        "configuration": "4 BHK Royal Suite",
        "size": "3,764 sq.ft.",
        "carpetArea": "2,600 sq.ft.",
        "price": "₹5.22 Cr onwards"
      },
      {
        "configuration": "4 BHK Sky Villa",
        "size": "4,800 sq.ft.",
        "carpetArea": "3,310 sq.ft.",
        "price": "₹6.65 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "brigade-barcelona",
    "slug": "brigade-barcelona",
    "name": "Brigade Barcelona",
    "tagline": "Spanish Mediterranean Grandeur in Neopolis Phase III",
    "developerName": "Brigade Group",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Neopolis Phase III, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "3 BHK + Study",
      "4 BHK"
    ],
    "startingPrice": "₹3.87 Cr onwards",
    "priceNumeric": 387,
    "avgPricePerSqFt": "Approx. ₹13,871/sq.ft.",
    "areaRange": "2,790 – 3,764 sq.ft.",
    "carpetAreaRange": "1,925 – 2,610 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Barcelona-5-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Barcelona-5-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Barcelona-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Barcelona-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Barcelona-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Barcelona-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Brigade Barcelona is an architectural triumph by Brigade Group in Neopolis Phase III, Kokapet, Hyderabad. Seamlessly blending Spanish Mediterranean charm with modern high-rise engineering, this iconic 52-storey T-shaped mono-tower sits on a prime 4.04-acre parcel, housing 666 curated 3, 3.5, and 4 BHK luxury condominiums ranging from 2,790 to 3,764 sq.ft.\n\nResidences feature authentic Spanish design accents, including arched viewing balconies, terracotta highlights, acoustic glass facades, and 11.5-foot clear ceiling heights. Residents enjoy access to a massive 1,50,000 sq.ft. clubhouse featuring Catalan gardens, sky observation decks, Olympic-standard badminton arenas, screening theaters, and hydrotherapy wellness suites.\n\nStrategically situated near the ORR and Kokapet lakefront, Brigade Barcelona offers unparalleled luxury, convenience, and panoramic views of Hyderabad’s financial capital.",
    "reraNumber": "P02400008712",
    "projectHighlights": [
      "Spread across 4.04 acres featuring an iconic 52-storey T-shaped mono-tower",
      "Total 666 exclusive Spanish-inspired residences with 11.5-ft clear ceilings",
      "Massive 1,50,000 sq.ft. integrated lifestyle and wellness clubhouse",
      "Acoustic insulated double-glazed glass facades and terracotta terraces",
      "Olympic-standard indoor badminton arenas and Catalan landscape courtyards",
      "Telangana RERA registered with targeted launch September 2026"
    ],
    "locationHighlights": [
      "Positioned inside Neopolis Phase III with seamless boulevard access",
      "5 minutes from Financial District IT campuses (Microsoft, Google, Apple)",
      "Instant entry to Outer Ring Road via Kokapet trumpet interchange",
      "Under 25 minutes to Rajiv Gandhi International Airport"
    ],
    "nearbyLocations": [
      "Neopolis Central Park: Walking Distance",
      "Kokapet Trumpet Interchange: 4 Mins",
      "Financial District: 6 Mins",
      "HITEC City: 15 Mins",
      "RGIA Airport: 23 Mins"
    ],
    "locationFeatures": [
      "Spanish Mediterranean Balconies",
      "Catalan Courtyards & Fountains",
      "Hydrotherapy Wellness Suites",
      "100% Lakefront & Skyline Views"
    ],
    "amenities": [
      "1,50,000 Sq.Ft. Mega Clubhouse",
      "Catalan Landscaped Gardens",
      "Sky Observation Decks",
      "Olympic-Standard Badminton Arenas",
      "Hydrotherapy Wellness Suites & Spa",
      "Private Screening Theater",
      "Heated Swimming Pool & Kids Splash Zone"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Luxury",
        "size": "2,790 sq.ft.",
        "carpetArea": "1,925 sq.ft.",
        "price": "₹3.87 Cr onwards"
      },
      {
        "configuration": "3 BHK + Study",
        "size": "3,250 sq.ft.",
        "carpetArea": "2,250 sq.ft.",
        "price": "₹4.50 Cr onwards"
      },
      {
        "configuration": "4 BHK Royal Suite",
        "size": "3,764 sq.ft.",
        "carpetArea": "2,610 sq.ft.",
        "price": "₹5.22 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "msn-neopolis",
    "slug": "msn-neopolis",
    "name": "MSN Neopolis",
    "tagline": "Tri-Tower 56-Storey Monument with 8 Sky Pavilions",
    "developerName": "MSN Group",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Sector 1, Neopolis, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "startingPrice": "₹13,640/sq.ft Onwards",
    "priceNumeric": 326,
    "avgPricePerSqFt": "₹13,640/sq.ft. (Pre-launch from ₹10,499/sq.ft.)",
    "areaRange": "5,250 – 7,460 sq.ft.",
    "carpetAreaRange": "3,074 – 4,201 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/msn-neopolis-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/msn-neopolis-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/msn-neopolis-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/msn-neopolis-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/msn-neopolis-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "MSN Neopolis is an upcoming landmark residential development by MSN Group, situated on a prime 7-acre parcel in Neopolis, Kokapet, Hyderabad. This monumental project features three soaring 56-storey towers—Tower A, Tower B, and Tower C—offering high-end 3 and 4 BHK luxury residences sized between 5,250 and 7,460 sq.ft.\n\nDesigned for elevated living, the project features 8 panoramic Sky Pavilions with sweeping 360-degree skyline views. Residences boast grand 11.4-foot ceiling heights in Tower A and 10.5-foot heights in Towers B and C. Premium finishes include imported engineered marble flooring, Delta CP fittings, and TOTO sanitaryware suites alongside an iconic 2,30,000 sq.ft. mega clubhouse.\n\nAttractive pre-launch base pricing starts from ₹10,499/sq.ft for Towers B & C and ₹10,699/sq.ft for Tower A. With a buyer-friendly 20:20:20:20:20 five-year instalment payment plan, this pre-launch offer is exclusively available to the first 200 bookings.",
    "reraNumber": "P02400009845",
    "projectHighlights": [
      "7-Acre expansive land parcel with 3 monumental towers rising 56 floors (655 total units)",
      "Palatial 3 & 4 BHK luxury residences ranging from 5,250 to 7,460 sq.ft.",
      "8 exclusive Sky Pavilions across 56 storeys offering panoramic skyline vistas",
      "Tower A: 11.4 ft floor-to-floor height; Towers B & C: 10.5 ft floor-to-floor height",
      "Iconic 2,30,000 sq.ft. ultra-luxury mega clubhouse with sports arenas",
      "Buyer-friendly 20:20:20:20:20 payment plan (5 equal instalments across 4 years)"
    ],
    "locationHighlights": [
      "Direct frontage on the Neopolis Central Boulevard",
      "Under 5 minutes to Financial District & WaveRock SEZ",
      "Instant access to Kokapet Trumpet Interchange on ORR",
      "20 minutes to Rajiv Gandhi International Airport"
    ],
    "nearbyLocations": [
      "Neopolis Kokapet SEZ: 3 Min Walk",
      "Financial District: 5 Mins",
      "Gachibowli Junction: 10 Mins",
      "RGIA Shamshabad Airport: 20 Mins"
    ],
    "locationFeatures": [
      "8 Sky Pavilions with 360° Views",
      "Tower A: 11.4 ft Ceiling Clearances",
      "Imported Marble Flooring & TOTO Sanitary",
      "Exclusive 20:20:20:20:20 Payment Scheme"
    ],
    "amenities": [
      "2,30,000 Sq.Ft. Mega Clubhouse",
      "8 Sky Pavilions on 56th Floor",
      "Rooftop Infinity Swimming Pool",
      "Cricket Practice Nets & Squash Courts",
      "Spa, Sauna & Turkish Hammam Suites",
      "Private Banquet Hall & Screening Theater",
      "24/7 Multi-Tier Concierge and Valet"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Luxury (Towers B & C)",
        "size": "5,250 sq.ft.",
        "carpetArea": "3,074 sq.ft.",
        "price": "₹10,499/sq.ft. (~₹5.51 Cr onwards)"
      },
      {
        "configuration": "4 BHK Grand (Tower A)",
        "size": "7,460 sq.ft.",
        "carpetArea": "4,201 sq.ft.",
        "price": "₹10,699/sq.ft. (~₹7.98 Cr onwards)"
      },
      {
        "configuration": "3 BHK Executive Suite",
        "size": "2,424 sq.ft.",
        "carpetArea": "1,650 sq.ft.",
        "price": "₹3.30 Cr onwards"
      },
      {
        "configuration": "4 BHK Signature Suite",
        "size": "4,545 sq.ft.",
        "carpetArea": "2,950 sq.ft.",
        "price": "₹4.85 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "prestige-clairemont",
    "slug": "prestige-clairemont",
    "name": "Prestige Clairemont",
    "tagline": "Refined High-Rise Living in Neopolis Kokapet",
    "developerName": "Prestige Group",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Neopolis, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "Large 3 BHK",
      "3 BHK + Study",
      "4 BHK + Maid's Room"
    ],
    "startingPrice": "₹2.29 Cr onwards",
    "priceNumeric": 229,
    "avgPricePerSqFt": "₹11,500–₹12,000 per sq. ft.",
    "areaRange": "1,989 – 4,060 sq. ft.",
    "carpetAreaRange": "1,229–2,530 sq. ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Clairemont-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Clairemont-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Clairemont-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Clairemont-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Clairemont-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Prestige Clairemont is a distinguished residential sanctuary situated across 7.56 acres in Neopolis, Kokapet, Hyderabad. Developed by Prestige Group, this high-rise community comprises 928 luxury apartments distributed across four grand towers.\n\nThe project offers versatile 3 BHK, Large 3 BHK, 3 BHK + Study, and 4 BHK + Maid's Room configurations, sized between 1,989 and 4,060 sq.ft., with carpet areas of 1,229 to 2,530 sq.ft. Built with contemporary architecture and expansive green landscapes, Prestige Clairemont seamlessly combines peaceful living with rapid connectivity to Hyderabad’s Financial District and Outer Ring Road.",
    "reraNumber": "P02400005677",
    "projectHighlights": [
      "Spread over 7.56 acres with 4 high-rise towers and 928 apartments",
      "Diverse configurations from 3 BHK (1,989 sq.ft.) to 4 BHK + Maid's Room (4,060 sq.ft.)",
      "Carpet areas ranging from 1,229 to 2,530 sq. ft. with optimal space efficiency",
      "Extensive clubhouse with swimming pools, sports courts, and wellness spa",
      "TS RERA Registered (P02400005677) by renowned master builder Prestige Group"
    ],
    "locationHighlights": [
      "Located in Neopolis, Kokapet, Hyderabad's premier investment zone",
      "Direct connectivity to Outer Ring Road (ORR) and Financial District",
      "Proximity to top international schools, Continental Hospital, and shopping hubs",
      "Under 25 minutes to Hyderabad International Airport"
    ],
    "nearbyLocations": [
      "Financial District: 7 Mins",
      "Gachibowli: 12 Mins",
      "Continental Hospital: 10 Mins",
      "RGIA Airport: 24 Mins"
    ],
    "locationFeatures": [
      "Optimal Carpet-to-Super-Area Ratio",
      "Double-Height Entrance Lobbies",
      "7.56-Acre Landscaped Campus",
      "IGBC Green Certified Construction"
    ],
    "amenities": [
      "Grand Lifestyle Clubhouse",
      "Lap Pool & Kids Wading Pool",
      "Badminton & Tennis Courts",
      "Fitness Center & Aerobics Studio",
      "Children's Play Adventure Park",
      "Jogging & Cycling Tracks",
      "24/7 Security with CCTV Surveillance"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Classic",
        "size": "1,989 sq.ft.",
        "carpetArea": "1,229 sq.ft.",
        "price": "₹2.29 Cr onwards"
      },
      {
        "configuration": "Large 3 BHK",
        "size": "2,350 sq.ft.",
        "carpetArea": "1,520 sq.ft.",
        "price": "₹2.70 Cr onwards"
      },
      {
        "configuration": "3 BHK + Study",
        "size": "2,700 sq.ft.",
        "carpetArea": "1,750 sq.ft.",
        "price": "₹3.15 Cr onwards"
      },
      {
        "configuration": "4 BHK + Maid’s Room",
        "size": "4,060 sq.ft.",
        "carpetArea": "2,530 sq.ft.",
        "price": "₹4.75 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "prestige-vaishnaoi-rainbow-waters",
    "slug": "prestige-vaishnaoi-rainbow-waters",
    "name": "Prestige Vaishnaoi Rainbow Waters",
    "tagline": "Ultra-Luxury Waterfront Sky Mansions in Gachibowli",
    "developerName": "Prestige Group & Vaishnaoi",
    "location": "Gachibowli",
    "specificAddress": "Raidurgam Lakefront, Gachibowli, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "4 BHK",
      "5 BHK"
    ],
    "startingPrice": "Base price ₹14,800/sq.ft.",
    "priceNumeric": 733,
    "avgPricePerSqFt": "₹14,800/sq.ft.",
    "areaRange": "4,955 – 8,001 sq.ft.",
    "carpetAreaRange": "3,200 – 5,400 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Vaishnaoi-Rainbow-Waters-3-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Vaishnaoi-Rainbow-Waters-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Vaishnaoi-Rainbow-Waters-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Vaishnaoi-Rainbow-Waters-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Spread across approximately 2.42 acres, Prestige Vaishnaoi Rainbow Waters is an exclusive single-tower residential marvel rising 36 floors with only 150 bespoke residences. Overlooking the serene waters of Raidurgam Lake in Gachibowli, this iconic development offers expansive 4 BHK simplexes and 5 BHK duplex sky villas sized from 4,955 to 8,001 sq.ft.\n\nEvery home features panoramic wrap-around viewing decks, 12-foot clear ceiling heights, and floor-to-ceiling acoustic glass curtains. Positioned in the heart of Gachibowli, Rainbow Waters places residents seconds from Mindspace, HITEC City, and premier fine-dining destinations.",
    "reraNumber": "P02400006240",
    "projectHighlights": [
      "Spread across 2.42 acres in a single iconic 36-storey waterfront tower",
      "Limited edition collection of only 150 luxury residences",
      "Palatial 4 BHK and 5 BHK layouts ranging from 4,955 to 8,001 sq.ft.",
      "Base launch price of ₹14,800/sq.ft. with prime lake-facing orientation",
      "East and west-facing options with private elevator foyers for each residence",
      "TS RERA Registered with stated possession timeline of May 2028"
    ],
    "locationHighlights": [
      "Direct waterfront setting on Raidurgam Lake, Gachibowli",
      "2 minutes from Mindspace IT Park & Cyber Gateway",
      "Instant access to Old Mumbai Highway and Durgam Cheruvu Cable Bridge",
      "Surrounded by Hyderabad’s premier culinary and nightlife venues"
    ],
    "nearbyLocations": [
      "Mindspace IT Park: 2 Mins",
      "HITEC City Metro Station: 5 Mins",
      "Durgam Cheruvu Cable Bridge: 6 Mins",
      "IKEA Hyderabad: 7 Mins"
    ],
    "locationFeatures": [
      "Waterfront Living Overlooking Raidurgam Lake",
      "Only 150 Exclusive Residences (Low Density)",
      "Private Elevators & Foyer Access",
      "Double-Height Duplex Living Rooms"
    ],
    "amenities": [
      "Lake-Facing Infinity Lap Pool",
      "Private Sky Lounge & Stargazing Deck",
      "State-of-the-Art Health & Wellness Spa",
      "Indoor Squash & Badminton Arena",
      "Fine-Dining Banquet & Cocktail Lounge",
      "Concierge Desk & Chauffeur Waiting Rooms"
    ],
    "floorPlanRows": [
      {
        "configuration": "4 BHK Simplex Sky Residence",
        "size": "4,955 sq.ft.",
        "carpetArea": "3,250 sq.ft.",
        "price": "Base ₹14,800/sq.ft. (₹7.33 Cr onwards)"
      },
      {
        "configuration": "4 BHK Grand Residence",
        "size": "5,800 sq.ft.",
        "carpetArea": "3,820 sq.ft.",
        "price": "Base ₹14,800/sq.ft. (₹8.58 Cr onwards)"
      },
      {
        "configuration": "5 BHK Duplex Sky Mansion",
        "size": "8,001 sq.ft.",
        "carpetArea": "5,400 sq.ft.",
        "price": "Base ₹14,800/sq.ft. (₹11.84 Cr onwards)"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "prestige-spring-heights",
    "slug": "prestige-spring-heights",
    "name": "Prestige Spring Heights",
    "tagline": "Lake-Facing High-Rise Township in Budwel Rajendra Nagar",
    "developerName": "Prestige Group",
    "location": "Shamshabad & Maheshwaram",
    "specificAddress": "Budwel, Rajendra Nagar, South-West Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "4 BHK",
      "4 BHK + Maid Room"
    ],
    "startingPrice": "₹1.30 Cr onwards",
    "priceNumeric": 130,
    "avgPricePerSqFt": "₹8,299 per sq. ft",
    "areaRange": "1,571 – 3,233 sq. ft.",
    "carpetAreaRange": "949.49 – 1,984.02 sq. ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": false,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Spring-Heights-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Spring-Heights-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Spring-Heights-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Spring-Heights-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Spring-Heights-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Prestige Spring Heights is a premium residential development by Prestige Group, located in Budwel, Rajendra Nagar, Hyderabad. Spread across approximately 10.6 acres, the project features four high-rise residential towers rising 34 storeys, offering 1,656 spacious 3 and 4 BHK apartments designed for modern family living.\n\nApartment sizes range from 1,571 to 3,233 sq.ft. (carpet areas 949.49 to 1,984.02 sq.ft.), with east, west, and north facing options. Residents enjoy breathtaking views of Himayat Sagar Lake, landscaped recreational expanses, and an exclusive sky lounge perched atop Tower 3.",
    "reraNumber": "P02400009416",
    "projectHighlights": [
      "Spread across approximately 10.6 acres with 4 high-rise towers rising G+34 floors",
      "Total 1,656 premium apartments with Himayat Sagar Lake views",
      "Spacious 3 BHK and 4 BHK layouts from 1,571 to 3,233 sq. ft.",
      "Carpet areas ranging from 949.49 to 1,984.02 sq. ft.",
      "Base price starting from ₹8,299 per sq. ft. (₹1.30 Cr onwards)",
      "Exclusive sky lounge situated above Tower 3 and comprehensive clubhouse"
    ],
    "locationHighlights": [
      "Located in Budwel, Rajendra Nagar along Hyderabad's high-growth IT-Airport corridor",
      "Direct access to Nehru Outer Ring Road (ORR Exit 17)",
      "15 minutes to Rajiv Gandhi International Airport",
      "15 minutes to Financial District via ORR express corridor"
    ],
    "nearbyLocations": [
      "Nehru ORR Exit 17: 3 Mins",
      "Himayat Sagar Lake Viewpoint: 5 Mins",
      "Financial District / Kokapet: 15 Mins",
      "RGIA Shamshabad Airport: 15 Mins"
    ],
    "locationFeatures": [
      "Himayat Sagar Lake Vistas",
      "Exclusive Sky Lounge above Tower 3",
      "Rapid Airport Corridor Access",
      "10.6 Acres Master Landscaped Layout"
    ],
    "amenities": [
      "50,000 Sq.Ft. Signature Clubhouse",
      "Sky Lounge & Sunset Viewing Deck",
      "Temperature Controlled Swimming Pool",
      "Full Sized Badminton & Tennis Courts",
      "Multipurpose Banquet Hall",
      "Kids Adventure Play Zone & Creche"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Standard",
        "size": "1,571 sq.ft.",
        "carpetArea": "949 sq.ft.",
        "price": "₹1.30 Cr onwards"
      },
      {
        "configuration": "3 BHK Premium",
        "size": "2,150 sq.ft.",
        "carpetArea": "1,320 sq.ft.",
        "price": "₹1.78 Cr onwards"
      },
      {
        "configuration": "4 BHK Luxe",
        "size": "2,850 sq.ft.",
        "carpetArea": "1,750 sq.ft.",
        "price": "₹2.36 Cr onwards"
      },
      {
        "configuration": "4 BHK + Maid Room",
        "size": "3,233 sq.ft.",
        "carpetArea": "1,984 sq.ft.",
        "price": "₹2.68 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "prestige-golden-grove",
    "slug": "prestige-golden-grove",
    "name": "Prestige Golden Grove",
    "tagline": "52-Storey Landmark Township in Tellapur–Velimela",
    "developerName": "Prestige Group",
    "location": "Narsingi & Tellapur",
    "specificAddress": "Tellapur–Velimela Corridor, West Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "2 BHK",
      "3 BHK (2T)",
      "3 BHK (3T)",
      "3 BHK + Study",
      "4 BHK",
      "4 BHK + Staff Room"
    ],
    "startingPrice": "₹1.10 Cr onwards",
    "priceNumeric": 110,
    "avgPricePerSqFt": "Approx. ₹9,200–₹10,000 per SFT",
    "areaRange": "1,169 – 3,013 sq. ft.",
    "carpetAreaRange": "720 – 1,950 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": false,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Golden-Grove-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Golden-Grove-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Golden-Grove-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Golden-Grove-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Prestige-Golden-Grove-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Prestige Golden Grove is a premium residential apartment township by Prestige Group, located in the Tellapur–Velimela region of West Hyderabad. Spread across approximately 28.6 acres, the project is planned with 10 high-rise residential towers rising up to Podium + 52 floors, comprising 5,120 apartments.\n\nThe township offers diverse configurations from compact 2 BHK apartments (1,169 sq.ft.) to spacious 4 BHK residences with staff accommodation (3,013 sq.ft.). With sprawling lifestyle amenities, expansive green podiums, and seamless connectivity to the ORR, Golden Grove is one of West Hyderabad’s most significant upcoming residential developments.",
    "reraNumber": "P01100010708",
    "projectHighlights": [
      "Mega township spread across 28.6 acres with 10 high-rise towers rising 52 floors",
      "Total 5,120 apartments with extensive podium lifestyle amenities",
      "Wide choice of 2 BHK, 3 BHK, 3 BHK + Study, 4 BHK, and 4 BHK + Staff Room",
      "Sizes ranging from 1,169 to 3,013 sq. ft. catering to every family requirement",
      "Competitive pricing from ₹9,200 to ₹10,000 per SFT (₹1.10 Cr onwards)",
      "Telangana RERA registered (P01100010708) with planned possession around 2031"
    ],
    "locationHighlights": [
      "Positioned along the high-growth Tellapur–Velimela corridor",
      "10 minutes from Outer Ring Road (ORR) Exit 2 (Kollur / Tellapur)",
      "15 minutes to Financial District and Neopolis commercial districts",
      "Surrounded by Manthan International School, Glendale, and Gaudium"
    ],
    "nearbyLocations": [
      "Tellapur Junction: 5 Mins",
      "ORR Exit 2: 10 Mins",
      "Financial District: 15 Mins",
      "Lingampally Railway Station: 15 Mins"
    ],
    "locationFeatures": [
      "10 Towers Rising 52 Storeys",
      "Podium + 3-Level Parking Structure",
      "Multiple Configurations for Every Budget",
      "28.6-Acre Master Township Experience"
    ],
    "amenities": [
      "Grand Mega Clubhouse & Banquet Hall",
      "Multiple Swimming Pools & Aqua Lounges",
      "Tennis, Badminton & Basketball Courts",
      "Landscaped Central Greens & Cycling Tracks",
      "Convenience Retail & Supermarket Stores",
      "Senior Citizen Parks & Reflexology Paths"
    ],
    "floorPlanRows": [
      {
        "configuration": "2 BHK Compact",
        "size": "1,169 sq.ft.",
        "carpetArea": "720 sq.ft.",
        "price": "₹1.10 Cr onwards"
      },
      {
        "configuration": "3 BHK (2T)",
        "size": "1,550 sq.ft.",
        "carpetArea": "980 sq.ft.",
        "price": "₹1.45 Cr onwards"
      },
      {
        "configuration": "3 BHK (3T)",
        "size": "1,850 sq.ft.",
        "carpetArea": "1,180 sq.ft.",
        "price": "₹1.75 Cr onwards"
      },
      {
        "configuration": "3 BHK + Study",
        "size": "2,200 sq.ft.",
        "carpetArea": "1,420 sq.ft.",
        "price": "₹2.08 Cr onwards"
      },
      {
        "configuration": "4 BHK",
        "size": "2,800 sq.ft.",
        "carpetArea": "1,810 sq.ft.",
        "price": "₹2.65 Cr onwards"
      },
      {
        "configuration": "4 BHK + Staff Room",
        "size": "3,013 sq.ft.",
        "carpetArea": "1,950 sq.ft.",
        "price": "₹2.88 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "the-prestige-city",
    "slug": "the-prestige-city",
    "name": "The Prestige City",
    "tagline": "Integrated 64-Acre Township in Rajendra Nagar",
    "developerName": "Prestige Group",
    "location": "Shamshabad & Maheshwaram",
    "specificAddress": "Rajendra Nagar, South-West Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "2 BHK",
      "2.5 BHK",
      "3 BHK",
      "3.5 BHK",
      "4 BHK"
    ],
    "startingPrice": "₹1.45 Cr onwards",
    "priceNumeric": 145,
    "avgPricePerSqFt": "Approx. ₹9,200–₹10,000 per SFT",
    "areaRange": "1,179 – 3,431 SFT",
    "carpetAreaRange": "740 – 2,250 SFT",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/The-Prestige-City-5-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/The-Prestige-City-5-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/The-Prestige-City-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/The-Prestige-City-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/The-Prestige-City-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/The-Prestige-City-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Spread across approximately 64 acres for the overall integrated township, The Prestige City is one of Hyderabad’s largest self-contained communities. The project features 13 residential apartment towers rising up to 3 basements + ground + 41 floors with 4,647 apartments, alongside 119 luxury villas and high-street retail.\n\nApartment configurations include 2, 2.5, 3, 3.5, and 4 BHK options, spanning approximately 1,179 to 3,431 SFT. Overlooking 2,000 acres of green biological reserves and Mulagund Lake, The Prestige City combines unmatched township scale with rapid connectivity to Rajiv Gandhi International Airport and the Financial District.",
    "reraNumber": "P02400007209",
    "projectHighlights": [
      "64-Acre integrated township comprising 13 high-rise towers and 4,647 apartments",
      "Towers rising up to 3 basements + ground + 41 floors overlooking lake and greenery",
      "Extensive configuration mix: 2, 2.5, 3, 3.5, and 4 BHK from 1,179 to 3,431 SFT",
      "Over 1,00,000 sq.ft. of world-class clubhouses and recreation zones",
      "High-street retail mall, commercial offices, and lifestyle dining within township",
      "TS RERA Registered (P02400007209) with competitive pricing from ₹9,200/SFT"
    ],
    "locationHighlights": [
      "Located in Rajendra Nagar, directly connecting ORR and PVNR Elevated Expressway",
      "15 minutes to Rajiv Gandhi International Airport (RGIA)",
      "15 minutes to Financial District & Gachibowli",
      "Adjacent to the 2,000-acre National Agricultural Research reserve"
    ],
    "nearbyLocations": [
      "PVNR Elevated Expressway: 5 Mins",
      "Nehru Outer Ring Road: 6 Mins",
      "RGIA Shamshabad Airport: 15 Mins",
      "Financial District: 15 Mins"
    ],
    "locationFeatures": [
      "Overlooking 2,000 Acres of Forest Reserves",
      "Self-Contained Retail & Commercial Hub",
      "13 High-Rise Towers up to 41 Storeys",
      "Dedicated Forum Mall on Campus"
    ],
    "amenities": [
      "Two Integrated Mega Clubhouses",
      "Olympic-Length Lap Pools",
      "Indoor Sports Complex & Squash Courts",
      "Open-Air Amphitheater & Performance Arena",
      "High-Street Retail Boulevard",
      "Health & Wellness Spa, Yoga Pavilion"
    ],
    "floorPlanRows": [
      {
        "configuration": "2 BHK Compact",
        "size": "1,179 SFT",
        "carpetArea": "740 SFT",
        "price": "₹1.45 Cr onwards"
      },
      {
        "configuration": "2.5 BHK Standard",
        "size": "1,520 SFT",
        "carpetArea": "980 SFT",
        "price": "₹1.75 Cr onwards"
      },
      {
        "configuration": "3 BHK Classic",
        "size": "1,850 SFT",
        "carpetArea": "1,180 SFT",
        "price": "₹2.10 Cr onwards"
      },
      {
        "configuration": "3.5 BHK Premium",
        "size": "2,300 SFT",
        "carpetArea": "1,500 SFT",
        "price": "₹2.60 Cr onwards"
      },
      {
        "configuration": "4 BHK Royal Suite",
        "size": "3,431 SFT",
        "carpetArea": "2,250 SFT",
        "price": "₹3.85 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "brigade-gateway-residences",
    "slug": "brigade-gateway-residences",
    "name": "Brigade Gateway Residences",
    "tagline": "Exclusive Landmark Residences & Sky Mansions",
    "developerName": "Brigade Group",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Neopolis, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK Lifestyle",
      "3 BHK Luxe",
      "4 BHK Luxe",
      "4 BHK Grand",
      "5 BHK & 6 BHK Sky Mansions"
    ],
    "startingPrice": "₹4.90 Cr–₹8.50 Cr for EOI-listed configurations",
    "priceNumeric": 490,
    "avgPricePerSqFt": "Configuration-dependent (EOI Inaugural Pricing)",
    "areaRange": "2,027 – 6,432 sq.ft.",
    "carpetAreaRange": "1,350 – 4,200 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Gateway-Residences-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Gateway-Residences-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Gateway-Residences-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Gateway-Residences-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Brigade-Gateway-Residences-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "description": "Brigade Gateway Residences is an elite development by Brigade Group in Neopolis, Kokapet, Hyderabad. The supplied Expression of Interest (EOI) price sheet details four curated apartment categories: 3 BHK Lifestyle, 3 BHK Luxe, 4 BHK Luxe, and 4 BHK Grand. In addition, the Tower B brochure presents palatial 5 BHK and 6 BHK sky duplex layouts with expansive family lounges, multipurpose rooms, maid rooms, and private home offices.\n\nUnit sizes span from 2,027 to 6,432 sq.ft., with EOI inaugural pricing ranging from ₹4.90 Cr to ₹8.50 Cr. With floor-to-ceiling glass facades, grand arrival rotundas, and elevated lifestyle podiums, Brigade Gateway Residences stands as an ultra-luxury address for visionary leaders.",
    "reraNumber": "P02400010198",
    "projectHighlights": [
      "Elite address in Neopolis featuring luxury 3 BHK, 4 BHK, and 5 & 6 BHK sky duplexes",
      "Supplied EOI categories: 3 BHK Lifestyle, 3 BHK Luxe, 4 BHK Luxe, and 4 BHK Grand",
      "Apartment dimensions ranging from 2,027 to 6,432 sq.ft. with expansive sky duplexes",
      "EOI inaugural prices starting from ₹4.90 Cr up to ₹8.50 Cr across primary categories",
      "Tower B features private elevator foyers, double-height terraces, and home-office suites",
      "Full compliance with TS RERA guidelines and premier construction specifications"
    ],
    "locationHighlights": [
      "Located in the prime Neopolis commercial and residential hub, Kokapet",
      "5 minutes from Kokapet Trumpet Interchange and Outer Ring Road",
      "Under 10 minutes from Financial District (Amazon, Google, Microsoft, Apple)",
      "22 minutes from Rajiv Gandhi International Airport"
    ],
    "nearbyLocations": [
      "Kokapet Boulevard: 2 Mins",
      "Financial District: 6 Mins",
      "Gachibowli Junction: 12 Mins",
      "RGIA Airport: 22 Mins"
    ],
    "locationFeatures": [
      "EOI Inaugural Pricing from ₹4.90 Cr",
      "5 & 6 BHK Sky Duplex Mansions",
      "Grand Arrival Rotunda & Valet",
      "Double-Height Private Viewing Terraces"
    ],
    "amenities": [
      "Palatial Private Clubhouse",
      "Rooftop Infinity Pool Overlooking Financial District",
      "Indoor Sports Courts & Squash Arena",
      "Private Screening Theater & Banquet Suites",
      "Hydrotherapy Spa & Relaxation Lounges",
      "24/7 White-Glove Concierge Services"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Lifestyle",
        "size": "2,027 – 2,450 sq.ft.",
        "carpetArea": "1,350 sq.ft.",
        "price": "₹4.90 Cr onwards"
      },
      {
        "configuration": "3 BHK Luxe",
        "size": "3,067 sq.ft.",
        "carpetArea": "2,050 sq.ft.",
        "price": "₹5.85 Cr onwards"
      },
      {
        "configuration": "4 BHK Luxe",
        "size": "3,850 sq.ft.",
        "carpetArea": "2,580 sq.ft.",
        "price": "₹7.20 Cr onwards"
      },
      {
        "configuration": "4 BHK Grand",
        "size": "4,980 sq.ft.",
        "carpetArea": "3,350 sq.ft.",
        "price": "₹8.50 Cr onwards"
      },
      {
        "configuration": "5 BHK & 6 BHK Sky Duplex",
        "size": "6,432 sq.ft.",
        "carpetArea": "4,200 sq.ft.",
        "price": "Price On Request"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png"
    ],
    "driveDocuments": []
  },
  {
    "id": "sattva-lake-ridge",
    "slug": "sattva-lake-ridge",
    "name": "Sattva Lake Ridge",
    "tagline": "Ultra-Luxury Lakefront Residences with 65,000 Sq.Ft. Clubhouse",
    "developerName": "Sattva Group",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Neopolis, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "3.5 BHK",
      "3.5 BHK + Deck",
      "4 BHK",
      "5 BHK"
    ],
    "startingPrice": "₹3.40 Cr onwards*",
    "priceNumeric": 340,
    "avgPricePerSqFt": "₹12,100 – ₹13,200 per SFT",
    "areaRange": "Approx. 2,744 – 5,472 SFT",
    "carpetAreaRange": "Approx. 1,425 – 3,204 SFT",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lake-Ridge-4-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lake-Ridge-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lake-Ridge-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lake-Ridge-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lake-Ridge-3-1024x576.png"
    ],
    "description": "Spread across approximately 9.5 acres, Sattva Lake Ridge features 6 luxury towers rising up to G+37 floors, offering spacious 3, 3.5, 4, and 5 BHK residences. Designed around generous living spaces, floor-to-ceiling windows, double-glazed acoustic glass, and high ceilings, the project creates a refined living experience with abundant natural light and lake vistas.\n\nWith an expansive 65,000 sq.ft. clubhouse, lake-facing landscaped gardens, party lawn, and excellent connectivity to Hyderabad’s major IT and growth corridors, Sattva Lake Ridge brings together luxury, convenience, and contemporary lifestyle living.",
    "reraNumber": "P02400006230 / P02400006231",
    "projectHighlights": [
      "Spread across 9.5 acres with 6 luxury towers rising G+37 floors",
      "Spacious 3, 3.5, 4, and 5 BHK residences with open lake-facing layouts",
      "Sizes ranging from 2,744 to 5,472 SFT with carpet areas from 1,425 to 3,204 SFT",
      "Average price rate: ₹12,100 – ₹13,200 per SFT (₹3.40 Cr onwards*)",
      "65,000 sq.ft. world-class clubhouse with indoor heated pool and sports courts",
      "Telangana RERA registered (P02400006230 / P02400006231)"
    ],
    "locationHighlights": [
      "Located in the Golden Mile of Neopolis, Kokapet",
      "Overlooking tranquil lake waters and landscaped open greens",
      "5 minutes from Financial District and ORR Exit 1",
      "22 minutes from Rajiv Gandhi International Airport"
    ],
    "nearbyLocations": [
      "Financial District: 5 Mins",
      "Kokapet Trumpet: 3 Mins",
      "Gachibowli: 10 Mins",
      "RGIA Airport: 22 Mins"
    ],
    "locationFeatures": [
      "Lake-Facing Spaces & Landscaped Greens",
      "Floor-to-Ceiling Windows & High Ceilings",
      "65,000 Sq.Ft. Signature Clubhouse",
      "Double-Glazed Acoustic Facade"
    ],
    "amenities": [
      "65,000 Sq.Ft. Luxury Clubhouse",
      "Lake-Facing Infinity Lap Pool",
      "Children's Play Adventure Park",
      "Outdoor Exercise & Jogging Spaces",
      "Party Lawn & Leisure Seating Decks",
      "Badminton, Squash & Basketball Arenas",
      "24/7 Multitier Security & Power Backup"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Luxury",
        "size": "2,744 SFT",
        "carpetArea": "1,425 SFT",
        "price": "₹3.40 Cr onwards*"
      },
      {
        "configuration": "3.5 BHK + Deck",
        "size": "3,550 SFT",
        "carpetArea": "2,150 SFT",
        "price": "₹4.40 Cr onwards"
      },
      {
        "configuration": "4 BHK Royal Suite",
        "size": "4,400 SFT",
        "carpetArea": "3,204 SFT",
        "price": "₹5.45 Cr onwards"
      },
      {
        "configuration": "5 BHK Lake Mansion",
        "size": "5,472 SFT",
        "carpetArea": "3,800 SFT",
        "price": "₹6.80 Cr onwards"
      }
    ],
    "planDiagrams": [],
    "driveDocuments": [
      {
        "label": "Check Price Sheet",
        "url": "https://drive.google.com/file/d/149LBQLIntvR2Cke9fRAlvVijzsjnSSoi/view?usp=sharing"
      },
      {
        "label": "Project Flipchart",
        "url": "https://drive.google.com/file/d/1EtdH7a6hXaX9XJ63-QsQA83etynaAzAQ/view?usp=drive_link"
      }
    ]
  },
  {
    "id": "sattva-lago-phase-2",
    "slug": "sattva-lago-phase-2",
    "name": "Sattva Lago – Phase 2",
    "tagline": "Five-Tower Waterfront Landmark: Aqua, Bayon, Corra, Deven & Ebb",
    "developerName": "Sattva Group",
    "location": "Kokapet & Neopolis",
    "specificAddress": "Neopolis, Kokapet, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK",
      "3.5 BHK",
      "4 BHK"
    ],
    "startingPrice": "Approx. ₹3.52 Cr–₹5.67 Cr",
    "priceNumeric": 352,
    "avgPricePerSqFt": "Approx. ₹11.4K/sq.ft.",
    "areaRange": "3,088 – 4,976 sq.ft.",
    "carpetAreaRange": "Approx. 1,907 – 2,972 sq.ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lago-Phase-2-5-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lago-Phase-2-5-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lago-Phase-2-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lago-Phase-2-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lago-Phase-2-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Sattva-Lago-Phase-2-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/floor-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/Tower-Plan.png"
    ],
    "description": "Sattva Lago is a large-format luxury residential apartment development by Sattva Group, located in Neopolis, Kokapet, Hyderabad. The project offers spacious 3 BHK, 3.5 BHK, and 4 BHK residences with large floor plans designed around generous living spaces, bedrooms, family areas, walk-in closets, utility spaces, and balconies/decks.\n\nThe uploaded master plan shows a five-tower concept comprising Aqua, Bayon, Corra, Deven, and Ebb, surrounded by landscaped open spaces, water features, sports facilities, children's areas, and recreational zones. Apartment sizes range broadly from 3,088 to 4,976 sq.ft. (carpet areas 1,907 to 2,972 sq.ft.) with indicative pricing from ₹3.52 Cr to ₹5.67 Cr at approximately ₹11.4K/sq.ft.",
    "reraNumber": "P02400010916",
    "projectHighlights": [
      "Five-tower concept comprising Aqua, Bayon, Corra, Deven, and Ebb",
      "Large-format residences ranging from 3,088 to 4,976 sq.ft. (3, 3.5 & 4 BHK)",
      "Carpet areas approximately 1,907 to 2,972 sq.ft. with expansive balconies/decks",
      "Base launch price: Approx. ₹11.4K/sq.ft. (₹3.52 Cr – ₹5.67 Cr)",
      "Registered Phase-I data lists 693 residences surrounded by water features",
      "TS RERA Registered (P0240010916) with launch date February 2026"
    ],
    "locationHighlights": [
      "Situated in the core of Neopolis, Kokapet",
      "Surrounded by landscaped open spaces and water features",
      "5 minutes from Financial District & Outer Ring Road Exit 1",
      "22 minutes from Rajiv Gandhi International Airport"
    ],
    "nearbyLocations": [
      "Neopolis Central Boulevard: 2 Mins",
      "Financial District: 5 Mins",
      "Gachibowli: 12 Mins",
      "RGIA Airport: 22 Mins"
    ],
    "locationFeatures": [
      "Five-Tower Masterplan: Aqua, Bayon, Corra, Deven, Ebb",
      "Water Features & Landscaped Open Spaces",
      "Walk-in Closets & Utility Balconies",
      "Reflexology Pathways & Senior Garden"
    ],
    "amenities": [
      "Integrated Resort-Style Clubhouse",
      "Swimming Pool & Aqua Deck",
      "Senior Garden & Reflexology Pathway",
      "Gathering Areas & Community Landscaped Spaces",
      "Badminton, Tennis & Squash Courts",
      "Children's Play Adventure Zone",
      "24/7 Security & Video Intercom"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK Luxury",
        "size": "3,088 sq.ft.",
        "carpetArea": "1,907 sq.ft.",
        "price": "Approx. ₹3.52 Cr onwards (₹11.4k/sq.ft.)"
      },
      {
        "configuration": "3.5 BHK Premium",
        "size": "3,950 sq.ft.",
        "carpetArea": "2,450 sq.ft.",
        "price": "Approx. ₹4.50 Cr onwards"
      },
      {
        "configuration": "4 BHK Royal Suite",
        "size": "4,976 sq.ft.",
        "carpetArea": "2,972 sq.ft.",
        "price": "Approx. ₹5.67 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/floor-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/Tower-Plan.png"
    ],
    "driveDocuments": [
      {
        "label": "Check Floor Plan",
        "url": "https://drive.google.com/file/d/1IWHvLTNYaxhMyjIZpcdETVfqiZu5GYbg/view?usp=sharing"
      },
      {
        "label": "Master Plan Layout",
        "url": "https://drive.google.com/file/d/1W_FDz02a0jTQ8DbzEHWlyPIRoDDcGqOE/view?usp=drive_link"
      }
    ]
  },
  {
    "id": "godrej-regal-pavilion",
    "slug": "godrej-regal-pavilion",
    "name": "Godrej Regal Pavilion",
    "tagline": "Palace-Themed Luxury with 75,000 Sq.Ft. Clubhouse",
    "developerName": "Godrej Properties",
    "location": "Shamshabad & Maheshwaram",
    "specificAddress": "Rajendra Nagar, South-West Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "2 BHK Luxe",
      "3 BHK Premium",
      "3 BHK Luxe",
      "3.5 BHK",
      "4 BHK Premium",
      "4 BHK Luxe"
    ],
    "startingPrice": "₹1.25 Cr onwards",
    "priceNumeric": 125,
    "avgPricePerSqFt": "Approx. ₹9,200/sq.ft.",
    "areaRange": "1,351.96 – 3,571.39 sq. ft.",
    "carpetAreaRange": "864.67 – 2,210.71 sq. ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Regal-Pavilion-5-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Regal-Pavilion-5-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Regal-Pavilion-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Regal-Pavilion-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Regal-Pavilion-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Regal-Pavilion-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/floor-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/Tower-Plan.png"
    ],
    "description": "Godrej Regal Pavilion is a premium residential development located at Rajendra Nagar, Hyderabad, positioned around an opulent regal living concept. The project features modern neoclassical architecture, curated landscaped spaces, and an expansive 75,000 sq.ft. palace-themed clubhouse, including an elevated terrace area.\n\nThe project offers versatile residential configurations across 4.36 acres, including 2 BHK Luxe, 3 BHK Premium, 3 BHK Luxe, 3.5 BHK, 4 BHK Premium, and 4 BHK Luxe layouts. Super built-up sizes span from 1,351.96 to 3,571.39 sq.ft. (carpet areas 864.67 to 2,210.71 sq.ft.). Connected directly to the Nehru Outer Ring Road and Rajiv Gandhi International Airport, Godrej Regal Pavilion represents a distinguished high-life address.",
    "reraNumber": "P02400009910",
    "projectHighlights": [
      "4.36-Acre neoclassical estate with regal architectural elevations",
      "75,000 sq.ft. palace-themed clubhouse with terrace leisure decks",
      "Extensive configurations: 2 BHK Luxe, 3 BHK Premium, 3 BHK Luxe, 3.5 BHK, 4 BHK Premium & Luxe",
      "Super built-up areas from 1,351.96 to 3,571.39 sq. ft. (Carpet: 864.67 to 2,210.71 sq. ft.)",
      "Starting price from ₹1.25 Cr onwards with competitive milestone payments",
      "TS RERA Registered (P02400009910) with planned 2026 launch"
    ],
    "locationHighlights": [
      "Prime location in Rajendra Nagar along the Airport-ORR corridor",
      "5 minutes to Nehru Outer Ring Road (ORR)",
      "15 minutes to Rajiv Gandhi International Airport",
      "15 minutes to Financial District via express expressway links"
    ],
    "nearbyLocations": [
      "Nehru Outer Ring Road: 5 Mins",
      "RGIA Shamshabad Airport: 15 Mins",
      "Financial District / Gachibowli: 15 Mins",
      "PVNR Elevated Expressway: 8 Mins"
    ],
    "locationFeatures": [
      "75,000 Sq.Ft. Palace-Themed Clubhouse",
      "Modern Neoclassical Architecture",
      "Proximity to Rajiv Gandhi Intl Airport",
      "Super Built-up from 1,351.96 to 3,571.39 sq.ft."
    ],
    "amenities": [
      "75,000 Sq.Ft. Palace-Themed Clubhouse",
      "Rooftop Terrace Leisure Decks",
      "Grand Swimming Pool & Sunken Cabanas",
      "Indoor Sports Complex & Badminton Arena",
      "Royal Banquet Halls & Private Dining Suites",
      "Kids Castle Play Kingdom",
      "24/7 Concierge and Manned Security"
    ],
    "floorPlanRows": [
      {
        "configuration": "2 BHK Luxe",
        "size": "1,352 sq.ft.",
        "carpetArea": "865 sq.ft.",
        "price": "₹1.25 Cr onwards"
      },
      {
        "configuration": "3 BHK Premium",
        "size": "1,850 sq.ft.",
        "carpetArea": "1,180 sq.ft.",
        "price": "₹1.70 Cr onwards"
      },
      {
        "configuration": "3 BHK Luxe",
        "size": "2,250 sq.ft.",
        "carpetArea": "1,440 sq.ft.",
        "price": "₹2.07 Cr onwards"
      },
      {
        "configuration": "3.5 BHK",
        "size": "2,600 sq.ft.",
        "carpetArea": "1,650 sq.ft.",
        "price": "₹2.39 Cr onwards"
      },
      {
        "configuration": "4 BHK Premium",
        "size": "3,100 sq.ft.",
        "carpetArea": "1,980 sq.ft.",
        "price": "₹2.85 Cr onwards"
      },
      {
        "configuration": "4 BHK Luxe",
        "size": "3,571 sq.ft.",
        "carpetArea": "2,211 sq.ft.",
        "price": "₹3.28 Cr onwards"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/floor-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/Tower-Plan.png"
    ],
    "driveDocuments": [
      {
        "label": "Check Floor PLan",
        "url": "https://drive.google.com/file/d/1xPqSN6WPg5ZeX9ABnSIJJ-IzI0bEwMkw/view?usp=sharing"
      },
      {
        "label": "Check Tower PLan",
        "url": "https://drive.google.com/file/d/1QK639ZSc8k0Dc3-SCjpnSWG2bO9V-0Lk/view?usp=sharing"
      },
      {
        "label": "Project Flipchart",
        "url": "https://drive.google.com/file/d/1gdy1cp8KO5hz4IFNynWv3cEyov2Y9tQw/view?usp=sharing"
      }
    ]
  },
  {
    "id": "godrej-brooklyn-heights",
    "slug": "godrej-brooklyn-heights",
    "name": "Godrej Brooklyn Heights",
    "tagline": "New York-Inspired Luxury with The Milestones Club",
    "developerName": "Godrej Properties",
    "location": "Kondapur & Manikonda",
    "specificAddress": "Kukatpally / KPHB Corridor, Hyderabad",
    "propertyType": "Apartment",
    "configurations": [
      "3 BHK + 3T",
      "4 BHK"
    ],
    "startingPrice": "10.9k/sq.ft (~₹1.73 Cr onwards)",
    "priceNumeric": 173,
    "avgPricePerSqFt": "10.9k/sq.ft",
    "areaRange": "Approx. 1,587.88 – 3,253.87 sq. ft",
    "carpetAreaRange": "1,010.89 – 2,101.97 sq. ft.",
    "statusBadge": "Under Construction",
    "statusType": "ongoing",
    "isDetailed": true,
    "isFeatured": true,
    "image": "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Brooklyn-Heights-5-1024x576.png",
    "gallery": [
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Brooklyn-Heights-5-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Brooklyn-Heights-1-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Brooklyn-Heights-2-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Brooklyn-Heights-3-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/11/Godrej-Brooklyn-Heights-4-1024x576.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/floor-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/Tower-Plan.png"
    ],
    "description": "Godrej Brooklyn Heights is a premium residential development inspired by Brooklyn New York's iconic brownstone and loft architecture, situated across 4.36 acres in Hyderabad. At the heart of the community's lifestyle offering is 'The Milestones Club'—a grand 75,000 sq.ft. clubhouse designed with curated spaces for recreation, relaxation, work, wellness, and social gatherings.\n\nThe project features spacious 3 BHK + 3T and 4 BHK luxury residences sized between approximately 1,587.88 and 3,253.87 sq.ft. (carpet areas 1,010.89 to 2,101.97 sq.ft.). Positioned close to Kukatpally, JNTU, and KPHB Metro stations, residents enjoy swift 10–20 minute transit to HITEC City, Financial District, and premier lifestyle malls.",
    "reraNumber": "P02200010981",
    "projectHighlights": [
      "Spread across 4.36 acres with New York Brooklyn loft-inspired architecture",
      "75,000 sq.ft. signature clubhouse — 'The Milestones Club'",
      "Spacious 3 BHK + 3T and 4 BHK residences with high ceilings and wide sundecks",
      "Super built-up areas: 1,587.88 – 3,253.87 sq.ft. (Carpet: 1,010.89 – 2,101.97 sq.ft.)",
      "Inaugural pricing at 10.9k/sq.ft (from ₹1.73 Cr onwards)",
      "TS RERA Registered (P02200010981) with 2026 possession schedule"
    ],
    "locationHighlights": [
      "Prime location in Kukatpally / KPHB corridor, Hyderabad",
      "5–10 minutes to Kukatpally, JNTU & KPHB Metro Stations",
      "10–20 minutes to HITEC City & major Cyberabad IT hubs",
      "Close to Lulu Mall, Nexus Forum Mall, and reputed hospitals"
    ],
    "nearbyLocations": [
      "KPHB / JNTU Metro Station: 5-10 Mins",
      "HITEC City / Cyber Towers: 15 Mins",
      "Lulu Mall & Nexus Mall: 8 Mins",
      "Financial District: 20 Mins"
    ],
    "locationFeatures": [
      "75,000 Sq.Ft. Clubhouse — The Milestones Club",
      "Brooklyn Brownstone & Loft Aesthetics",
      "5–10 Min to Metro Stations",
      "10–20 Min to Hi-Tech City IT Hubs"
    ],
    "amenities": [
      "75,000 Sq.Ft. The Milestones Club",
      "Olympic-Standard Swimming Pool & Sunken Lounges",
      "Indoor Sports Courts & Squash Arena",
      "Co-Working Brooklyn Pods & Library",
      "Private Screening Theater & Party Lawn",
      "Kids Adventure Castle & Trampoline Park",
      "24/7 Security & High-Speed Elevators"
    ],
    "floorPlanRows": [
      {
        "configuration": "3 BHK + 3T",
        "size": "1,588 sq.ft.",
        "carpetArea": "1,011 sq.ft.",
        "price": "10.9k/sq.ft (~₹1.73 Cr onwards)"
      },
      {
        "configuration": "3 BHK Luxe",
        "size": "2,250 sq.ft.",
        "carpetArea": "1,450 sq.ft.",
        "price": "10.9k/sq.ft (~₹2.45 Cr onwards)"
      },
      {
        "configuration": "4 BHK Royal Suite",
        "size": "3,254 sq.ft.",
        "carpetArea": "2,102 sq.ft.",
        "price": "10.9k/sq.ft (~₹3.54 Cr onwards)"
      }
    ],
    "planDiagrams": [
      "https://nxzdigital.com/wp-content/uploads/2026/09/demo-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/floor-plan.png",
      "https://nxzdigital.com/wp-content/uploads/2026/09/Tower-Plan.png"
    ],
    "driveDocuments": [
      {
        "label": "Check Floor PLan",
        "url": "https://drive.google.com/file/d/1YYMZJvYOrAGg0x-R1oS5nIFh5Z15782i/view?usp=sharing"
      },
      {
        "label": "Check Tower PLan",
        "url": "https://drive.google.com/file/d/13FFqkhZdALeuC0UNJaFUEBM4Eo1cTMdC/view?usp=sharing"
      },
      {
        "label": "Project Flipchart",
        "url": "https://drive.google.com/file/d/1G9_ZpWdSnUoozwUycTlnCVNdRNpl82nZ/view?usp=drive_link"
      }
    ]
  }
];
