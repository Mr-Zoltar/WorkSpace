import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailRatesComponent } from './show-detail-rates.component';

describe('ShowDetailRatesComponent', () => {
  let component: ShowDetailRatesComponent;
  let fixture: ComponentFixture<ShowDetailRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDetailRatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
