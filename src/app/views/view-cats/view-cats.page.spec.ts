import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCatsPage } from './view-cats.page';

describe('ViewCatsPage', () => {
  let component: ViewCatsPage;
  let fixture: ComponentFixture<ViewCatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewCatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
