import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardComponent } from './customer-card.component';
import { Customer } from 'src/app/common/customer';

describe('CustomerCardComponent', () => {
  let component: CustomerCardComponent;
  let fixture: ComponentFixture<CustomerCardComponent>;
  const customers : Customer[] = [{
    "id": 1,
    "firstName": "Rachel",
    "lastName": "Green ",
    "gender": "female",
    "address": "Blore"
  },
  {
    "id": 2,
    "firstName": "Chandler",
    "lastName": "Bing",
    "gender": "male",
    "address": "West Street"
  },
  {
    "id": 3,
    "firstName": "Joey",
    "lastName": "Tribbiani",
    "gender": "male",
    "address": "Kattegat"
  },
  {
    "id": 4,
    "firstName": "Monica",
    "lastName": "Geller",
    "gender": "female",
    "address": "some address"
  },
  {
    "id": 5,
    "firstName": "Ross",
    "lastName": "Geller",
    "gender": "male",
    "address": "some address "
  },
  {
    "id": 6,
    "firstName": "Phoebe",
    "lastName": "Buffay",
    "gender": "female",
    "address": "some address"
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
