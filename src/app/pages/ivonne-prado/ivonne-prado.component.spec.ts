import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvonnePradoComponent } from './ivonne-prado.component';

describe('IvonnePradoComponent', () => {
  let component: IvonnePradoComponent;
  let fixture: ComponentFixture<IvonnePradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvonnePradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvonnePradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
