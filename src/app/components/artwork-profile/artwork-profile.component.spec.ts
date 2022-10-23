import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkProfileComponent } from './artwork-profile.component';

describe('ArtworkProfileComponent', () => {
  let component: ArtworkProfileComponent;
  let fixture: ComponentFixture<ArtworkProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
