import { Component } from "@angular/core";
import { CategoriesService } from "./category/categories.service";

@Component({
    selector: 'categories',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let category of categories">
                {{ category }}
            </li>
        </ul>
    `
})
export class CategoriesComponent {
    title = "Category of clothings";
    categories;

    constructor(service: CategoriesService) {
        //let service = new CategoriesService();
        this.categories = service.getCategories();
    }
}