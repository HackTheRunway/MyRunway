import {WearableCategory} from "./wearable-category";

class Wearable {
  constructor(
    public name: string,
    public category: WearableCategory,
    public image: string
  ) {}

    public static fromJson(json: any): Wearable {
        return new Wearable(
            json.name,
            json.category,
            json.image
        );
    }

    public toJson(): any {
        return {
            name: this.name,
            category: this.category,
            image: this.image
        };
    }

    public static fromJsonArray(json: any[]): Wearable[] {
        return json.map(Wearable.fromJson);
    }

    public static toJsonArray(wearables: Wearable[]): any[] {
        return wearables.map(w => w.toJson());
    }

    public saveWearable() {

    }

    
}

export default Wearable;
