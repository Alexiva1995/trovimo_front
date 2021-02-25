import {Plans} from './plans';

export class SharedModel {
  price = 1;              // required
  show_price = false;
  option_id: number;
  category_id: number;
  rooms = 1;              // required en sale
  bath = 1;               // required en sale
  parking_spots = 0;      // required en sale
  n_pieces = 0;           // required en sale
  area = 1;               // required en sale
  description = '';            // required
  country = 'Colombia';                // required
  city = '';                   // required
  postal_code = '';
  lat: number;                    // required
  lon: number;                    // required
  tour = '';
  name = '';
  email = '';
  phone = '';
  year_built = '';
  year_remodeled = '';
  plans = [new Plans()];
}