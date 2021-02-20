import {Professional} from './professional';

export class DetailInfo {
  builds = [];
  home_details = [];
  services = [];
  reference_points = [];
  condition = 0;
  furnished = 0;
  product_id = 0;
  placeEquipmetsTags = [];
  preferencesTags = [];
  placeDetailsTags = [];
  professional_groups = [new Professional()];
}

export class SharedDetailInfo {
  builds = [];
  home_details = [];
  services = [{}];
  reference_points = [{}];
  condition = 0;
  furnished = 0;
  shared_space_id = 0;
  placeEquipmetsTags = [];
  preferencesTags = [];
  placeDetailsTags = [];
  professional_groups = [new Professional()];
}
