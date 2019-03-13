import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    setInterval(() => {
      this.sharedService.addData(new Date());
    }, 1000);
  }
}
