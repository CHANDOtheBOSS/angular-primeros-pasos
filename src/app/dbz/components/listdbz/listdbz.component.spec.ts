import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdbzComponent } from './listdbz.component';

describe('ListdbzComponent', () => {
  let component: ListdbzComponent;
  let fixture: ComponentFixture<ListdbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListdbzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
