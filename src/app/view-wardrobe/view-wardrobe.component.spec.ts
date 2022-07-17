import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWardrobeComponent } from './view-wardrobe.component';

describe('ViewWardrobeComponent', () => {
  let component: ViewWardrobeComponent;
  let fixture: ComponentFixture<ViewWardrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWardrobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
