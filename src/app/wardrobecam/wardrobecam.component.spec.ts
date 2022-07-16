import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobecamComponent } from './wardrobecam.component';

describe('WardrobecamComponent', () => {
  let component: WardrobecamComponent;
  let fixture: ComponentFixture<WardrobecamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardrobecamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardrobecamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
