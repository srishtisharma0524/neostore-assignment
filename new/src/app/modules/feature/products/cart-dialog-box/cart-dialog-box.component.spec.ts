import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDialogBoxComponent } from './cart-dialog-box.component';

describe('CartDialogBoxComponent', () => {
  let component: CartDialogBoxComponent;
  let fixture: ComponentFixture<CartDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
