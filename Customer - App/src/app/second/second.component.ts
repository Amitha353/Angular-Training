import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  info: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getSubject().subscribe(d => {
      this.info = d;
    });
  }
}