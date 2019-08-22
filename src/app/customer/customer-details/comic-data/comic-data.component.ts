
import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'src/app/_interface/comic.model';

@Component({
  selector: 'app-comic-data',
  templateUrl: './comic-data.component.html',
  styleUrls: ['./comic-data.component.css']
})
export class ComicDataComponent implements OnInit {
  @Input() public comics: Comic[];

  constructor() { }

  ngOnInit() {
  }

  getDelayedColor(date) {
    var formatDate = new Date(date);
    var currentDate = new Date();
    var delayedColor = 'black';
console.log(date);
    console.log(currentDate);
    if (formatDate == currentDate) {
      delayedColor = 'yellow';
    }
    if (formatDate < currentDate) {
      delayedColor = 'red';
    }
    return delayedColor;
  }

}