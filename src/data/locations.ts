import { HyderabadLocation } from '../types/property';

export interface LocationInfo {
  id: HyderabadLocation;
  name: string;
  tagline: string;
  distanceToFinancialDistrict: string;
  distanceToAirport: string;
  keyHighlights: string[];
  growthScore: string;
}

export const HYDERABAD_LOCATIONS: LocationInfo[] = [
  {
    id: 'Kokapet & Neopolis',
    name: 'Kokapet & Neopolis',
    tagline: 'Hyderabad’s premier golden mile and ultra-luxury high-rise corridor',
    distanceToFinancialDistrict: '3 - 5 Mins',
    distanceToAirport: '22 Mins via ORR',
    keyHighlights: ['45-meter wide arterial boulevards', '100% underground multi-utility ducting', 'Trumpet signal-free ORR interchange', 'Skyline with 50+ storey architectural landmarks'],
    growthScore: 'Top Investment Tier',
  },
  {
    id: 'Gachibowli',
    name: 'Gachibowli',
    tagline: 'The epicentre of IT mega-campuses, tech parks and luxury residential living',
    distanceToFinancialDistrict: '5 Mins',
    distanceToAirport: '28 Mins',
    keyHighlights: ['Proximity to Microsoft, Wipro & Amazon', 'ISB & University of Hyderabad', 'Stadium & sports complexes', 'Established premium social infrastructure'],
    growthScore: 'High Rental Yield',
  },
  {
    id: 'Financial District & Nanakramguda',
    name: 'Financial District & Nanakramguda',
    tagline: 'The corporate powerhouse hosting Fortune 500 global headquarters',
    distanceToFinancialDistrict: '0 Mins',
    distanceToAirport: '25 Mins',
    keyHighlights: ['US Consulate General', 'SEZ towers & WaveRock', 'Premium hospitality (Sheraton, Hyatt)', 'Walking distance to Fortune 500 offices'],
    growthScore: 'Premier Commercial & Residential',
  },
  {
    id: 'Narsingi & Tellapur',
    name: 'Narsingi & Tellapur',
    tagline: 'Rapidly emerging luxury gated communities, villas, and lakeside retreats',
    distanceToFinancialDistrict: '7 - 10 Mins',
    distanceToAirport: '26 Mins',
    keyHighlights: ['Wide radial road network', 'Top international schools (Glendale, Oakridge)', 'Tranquil lakefront views', 'Expansive 4 & 5 BHK villa enclaves'],
    growthScore: 'High Capital Appreciation',
  },
  {
    id: 'Kondapur & Manikonda',
    name: 'Kondapur & Manikonda',
    tagline: 'Prime central hubs with vibrant urban lifestyle, retail, and dining',
    distanceToFinancialDistrict: '8 - 12 Mins',
    distanceToAirport: '30 Mins',
    keyHighlights: ['Near Botanical Garden & HITEC City', 'Sarath City Capital Mall', 'Direct link to Durgam Cheruvu cable bridge', 'High rental demand from IT professionals'],
    growthScore: 'High Demand',
  },
  {
    id: 'Bachupally',
    name: 'Bachupally',
    tagline: 'Fast-developing residential destination in Northwest Hyderabad with top educational institutions',
    distanceToFinancialDistrict: '25 Mins via ORR',
    distanceToAirport: '45 Mins',
    keyHighlights: ['Educational corridor (Silver Oaks, Oakridge)', 'Affordable luxury gated communities', 'Direct access to Miyapur Metro & ORR Exit 4', 'Vibrant residential ecosystem'],
    growthScore: 'High Growth Corridor',
  },
  {
    id: 'Kompally',
    name: 'Kompally',
    tagline: 'Scenic green residential belt with spacious villas and resort-style living',
    distanceToFinancialDistrict: '35 Mins via ORR',
    distanceToAirport: '50 Mins',
    keyHighlights: ['Lush green surroundings & low pollution', 'NH-44 connectivity', 'Spacious gated villa townships', 'Thriving retail & healthcare corridor'],
    growthScore: 'Family & Lifestyle Hub',
  },
  {
    id: 'Tukkuguda',
    name: 'Tukkuguda',
    tagline: 'Strategic growth corridor on Srisailam Highway right near Rajiv Gandhi International Airport',
    distanceToFinancialDistrict: '25 Mins via ORR',
    distanceToAirport: '8 Mins',
    keyHighlights: ['ORR Exit 14 connectivity', 'Fab City & E-City manufacturing hubs', 'Booming open villa plots & gated layouts', 'Direct airport expressway'],
    growthScore: 'High Plotting Appreciation',
  },
  {
    id: 'Shamshabad & Maheshwaram',
    name: 'Shamshabad & Maheshwaram',
    tagline: 'Aviation and aerospace hub with vast plotted layouts and luxury ranch villas',
    distanceToFinancialDistrict: '25 Mins',
    distanceToAirport: '5 - 10 Mins',
    keyHighlights: ['Aerospace SEZ & Electronic Park', 'Proposed Hyderabad Airport Metro Express', 'High-return plotting investments', 'Rapid industrial & institutional expansion'],
    growthScore: 'Strategic Investment',
  },
  {
    id: 'Adibatla',
    name: 'Adibatla',
    tagline: 'Hyderabad’s premier aerospace & defence corridor hosting Tata Boeing & TCS',
    distanceToFinancialDistrict: '30 Mins via ORR',
    distanceToAirport: '15 Mins',
    keyHighlights: ['Tata Boeing & Sikorsky aerospace hubs', 'TCS Adibatla mega-campus', 'ORR Exit 12 connectivity', 'Ideal for industrial plots and gated villas'],
    growthScore: 'Aerospace & Industrial Boom',
  },
  {
    id: 'Uppal',
    name: 'Uppal',
    tagline: 'East Hyderabad’s primary commercial and residential nexus with direct Metro connectivity',
    distanceToFinancialDistrict: '35 Mins via Elevated Corridors',
    distanceToAirport: '40 Mins via Inner Ring Road',
    keyHighlights: ['Uppal Skywalk & Blue Line Metro', 'Rajiv Gandhi International Cricket Stadium', 'Genpact & NSL Arena IT SEZ', 'Flyovers to Ghatkesar & Warangal Highway'],
    growthScore: 'Transit-Oriented Growth',
  },
  {
    id: 'Ghatkesar & Pocharam',
    name: 'Ghatkesar & Pocharam',
    tagline: 'Major IT SEZ destination anchored by Infosys campus and AIIMS Bibinagar corridor',
    distanceToFinancialDistrict: '40 Mins via ORR',
    distanceToAirport: '45 Mins via ORR Exit 9',
    keyHighlights: ['Infosys 450-acre Pocharam campus', 'Raheja Mindspace IT Park', 'AIIMS Bibinagar proximity', 'Affordable residential and HMDA villa plots'],
    growthScore: 'Emerging IT Hub',
  },
];
