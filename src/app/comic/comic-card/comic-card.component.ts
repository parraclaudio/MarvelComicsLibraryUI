import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from 'src/app/_interface/comic.model';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent {
  @Input() comic: Comic;
  @Output() select = new EventEmitter<Comic>();

  constructor() {}
  showComic() {
    this.select.emit(this.comic);
  }
}
