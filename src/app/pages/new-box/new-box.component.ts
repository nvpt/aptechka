import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-box',
  templateUrl: './new-box.component.html',
  styleUrls: ['./new-box.component.scss']
})
export class NewBoxComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

    cancelAdding() {
        this.location.back();
    }
}
