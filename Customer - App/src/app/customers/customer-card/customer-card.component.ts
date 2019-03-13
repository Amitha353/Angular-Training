import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/common/customer';

/**
 * Input() ->  | Parent -> Child | --> needs to be a property
 * Output() -> | Child -> Parent | --> needs to be a event
 */

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input()
  customers: Customer[] = [];

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter(); // number -> id is being passed.

  constructor() { }

  ngOnInit() {
  }

  deleteCustomer(id: number): void {
    // Create an event and emit it.
    console.log("Customer card component : " + id);
    this.deleteEvent.next(id);
  }
}