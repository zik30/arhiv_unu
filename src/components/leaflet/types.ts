export interface MapPerson {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  email: string;
  address: string;
  phone: string;
  working_hours: string;
  latitude: number;
  longitude: number;
  website_url: string;
  region: string;
  map_url: string;
}

export interface MapProps {
  filter?: MapPerson[];
}
