import {WearableCategory} from "./wearable-category";

class Wearable {
  constructor(
    public id: number,
    public title: string,
    public category: WearableCategory,
    public image: string
  ) {}
    
}

export default Wearable;
