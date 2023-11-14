import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonsterComponent } from './list-monster.component';

describe('ListMonsterComponent', () => {
  let component: ListMonsterComponent;
  let fixture: ComponentFixture<ListMonsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMonsterComponent]
    });
    fixture = TestBed.createComponent(ListMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
