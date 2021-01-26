export interface Data {
  id: number;
  user_id: number;
  category_id: number;
  price: number;
  show_price: number;
  rooms: number;
  bath: number;
  parking_spots: number;
  area: number;
  description: string;
  country: string;
  city: string;
  postal_code: string;
  lat: number;
  lon: number;
  tour: string;
  name: string;
  email: string;
  phone: string;
  photos: string;
  videos: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: any;
  label: string;
  active: boolean;
}

export interface Project {
  current_page: number;
  data: Data[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
  length?: number;
}
