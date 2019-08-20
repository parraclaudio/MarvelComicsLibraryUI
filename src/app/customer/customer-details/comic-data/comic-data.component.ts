
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
}