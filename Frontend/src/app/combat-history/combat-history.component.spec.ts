import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatHistoryComponent } from './combat-history.component';

describe('CombatHistoryComponent', () => {
  let component: CombatHistoryComponent;
  let fixture: ComponentFixture<CombatHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
