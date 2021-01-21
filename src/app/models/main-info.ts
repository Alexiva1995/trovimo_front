export class MainInfo {
  price = 1;              // required
  show_price = 0;
  option_id: number;
  category_id: number;
  rooms = 0;              // required en sale
  bath = 0;               // required en sale
  parking_spots = 0;      // required en sale
  n_pieces = 0;           // required en sale
  area = 1;               // required en sale
  description = '';            // required
  country = 'Colombia';                // required
  city = '';                   // required
  postal_code = '';
  lat = '3.06508799999999';                    // required
  lon = '-73.129056';                    // required
  tour = '';
  name = '';
  email = '';
  phone = '';
  year_built = '';
  year_remodeled = '';
  bathroom = '';               // required en rent
  furnished = '';              // required en rent
  peths = [];                  // required en rent
  available_date = '';         // required en rent
  private _invalid = true;
  constructor(optionId: number, categoryId: number) {
    this.option_id = optionId;
    this.category_id = categoryId;
  }
  isInvalid(name): boolean {
    this._invalid = !this[name] || this[name] === '';
    return !this[name] || this[name] === '';
  }

  get invalid(): boolean {
    return this._invalid;
  }

  set invalid(value: boolean) {
    this._invalid = value;
  }
}
