import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/_interface/comic.model';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent {
  @Input() comic: Comic;

  constructor() {}
}
