export type PropertyType = 'Apartment' | 'Villas' | 'Plots' | 'Commercial';

export type BHKType = '2 BHK' | '3 BHK' | '4 BHK' | '5 BHK' | '6 BHK';

export type HyderabadLocation =
  | 'Kokapet & Neopolis'
  | 'Gachibowli'
  | 'Financial District & Nanakramguda'
  | 'Narsingi & Tellapur'
  | 'Kondapur & Manikonda'
  | 'Bachupally'
  | 'Kompally'
  | 'Tukkuguda'
  | 'Shamshabad & Maheshwaram'
  | 'Adibatla'
  | 'Uppal'
  | 'Ghatkesar & Pocharam';

export interface KeySpec {
  label: string;
  value: string;
}

export interface Amenity {
  name: string;
  category: string;
}

export interface FloorPlanItem {
  configuration: string;
  size: string;
  price: string;
  carpetArea?: string;
}

export interface FloorPlan {
  id: string;
  bhk: string;
  name: string;
  superBuiltUpArea: string;
  carpetArea: string;
  bedrooms: string;
  bathrooms: string;
  balconies: string;
  facing: string;
  keyFeatures?: string[];
  roomDimensions?: Record<string, string>;
}

export interface PricingBreakdownItem {
  title: string;
  basePrice: string;
  floorRise?: string;
  facingPremium?: string;
  cornerPremium?: string;
  amenities?: string;
  carParking?: string;
  ceilingHeight?: string;
  range: string;
  [key: string]: any;
}

export interface PaymentInstalment {
  milestone: string;
  percentage: string;
}

export interface PaymentPlan {
  scheme: string;
  details: string;
  instalments: PaymentInstalment[];
  notes?: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: HyderabadLocation | string;
  specificAddress?: string;
  propertyType: PropertyType | string;
  configurations: string[];
  startingPrice: string;
  priceNumeric?: number; // In Lakhs for sorting/filtering
  priceNote?: string;
  statusBadge: string;
  statusType: string;
  isDetailed: boolean;
  isFeatured?: boolean;
  areaRange: string;
  image: string;
  imageAlt?: string;
  gallery: string[];
  headline?: string;
  description: string;
  developerName: string;
  reraNumber?: string;
  possessionYear?: string;
  keyHighlights?: string[];
  projectHighlights?: string[];
  locationHighlights?: string[];
  nearbyLocations?: string[];
  locationFeatures?: string[];
  amenitiesList?: string[];
  keySpecs?: KeySpec[];
  amenities?: Amenity[];
  pricingBreakdown?: Record<string, PricingBreakdownItem>;
  paymentPlan?: PaymentPlan;
  floorPlans?: FloorPlan[];
  floorPlanRows?: FloorPlanItem[];
  avgPricePerSqFt?: string;
  carpetAreaRange?: string;
  planDiagrams?: string[];
  driveDocuments?: { label: string; url: string }[];
  ctaLabel?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FilterState {
  propertyType: string; // 'all' | PropertyType
  bhk: string; // 'all' | BHKType
  location: string; // 'all' | HyderabadLocation
  priceRange: string; // 'all' | 'under-1.5' | '1.5-3' | '3-5' | 'above-5'
  status: string; // 'all' | 'ready' | 'ongoing' | 'upcoming'
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'area-asc' | 'area-desc';
}

export interface PropertyInquiry {
  id: string;
  propertyId?: string;
  propertyName?: string;
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  enquiryType: 'Site Visit' | 'Price Sheet' | 'Brochure' | 'General Query' | 'Floor Plans';
  preferredDate?: string;
  message?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'closed';
}
