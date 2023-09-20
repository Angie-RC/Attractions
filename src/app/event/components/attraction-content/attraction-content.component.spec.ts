import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionContentComponent } from './attraction-content.component';

describe('AttractionContentComponent', () => {
  let component: AttractionContentComponent;
  let fixture: ComponentFixture<AttractionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
