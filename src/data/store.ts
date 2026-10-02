import { brandData } from "./brand";

export const storeDetailsData = {
  storeName: brandData.name,
  location: brandData.address.fullAddress,
  phone: brandData.phone,
  displayHours: brandData.hours.displayHours,
  openingTime: brandData.hours.openingTime,
  closingTime: brandData.hours.closingTime,
  daysOpen: brandData.hours.daysOpen,
  directionsUrl: brandData.maps.directionsUrl,
  mapEmbedUrl: brandData.maps.embedUrl,
  instagramUrl: brandData.social.instagramUrl,
  instagramHandle: brandData.social.instagramHandle,
  features: [

    "Women's Wear & Kids' Wear in one location",
    "Value-focused fashion for everyday budgets",
    "Styles for daily wear and special occasions",
    "Convenient Main Road location in Shadnagar",
  ],
};
