export interface BrandInfo {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  address: {
    building: string;
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
  };
  hours: {
    openingTime: string;
    closingTime: string;
    daysOpen: string;
    displayHours: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
  };
  maps: {
    directionsUrl: string;
    embedUrl: string;
    reviewUrl: string;
  };
  establishedYear: number;
}
