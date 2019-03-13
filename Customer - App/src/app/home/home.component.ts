import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { shareReplay } from 'rxjs/operators';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerObs$;
  orderObs$;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customerObs$ = this.dataService.getCustomers().pipe(
      shareReplay()
    );

    this.customerObs$.subscribe(data => {
      console.log('one', data);
    });
    this.customerObs$.subscribe(data => {
      console.log('two', data);
    });

    this.orderObs$ = this.dataService.getOrders();
    const customerSingleObs$ = this.dataService.getCustomer(1);

    forkJoin(customerSingleObs$, this.orderObs$).subscribe(data => {
      // console.log(data[0]);
      console.log(data[1]);
      data[0].orders = data[1];
      console.log(data[0]);
    },
    err => {
      console.log(err);
    });

  }

}