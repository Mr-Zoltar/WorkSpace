import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiatkowkaComponent } from './siatkowka.component';

describe('SiatkowkaComponent', () => {
  let component: SiatkowkaComponent;
  let fixture: ComponentFixture<SiatkowkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiatkowkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiatkowkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
