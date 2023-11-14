import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMonsterComponent } from './details-monster.component';

describe('DetailsMonsterComponent', () => {
  let component: DetailsMonsterComponent;
  let fixture: ComponentFixture<DetailsMonsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMonsterComponent]
    });
    fixture = TestBed.createComponent(DetailsMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
