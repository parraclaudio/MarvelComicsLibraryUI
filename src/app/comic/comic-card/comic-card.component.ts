import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from 'src/app/_interface/comic.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Logger } from 'src/app/core/logger.service';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent {
  @Input() comic: Comic;
  @Output() select = new EventEmitter<Comic>();

  constructor(private repoService: RepositoryService, private logger: Logger) {}
  showComic() {
    this.select.emit(this.comic);
  }
  public addInLibrary(comicId: string) {

    this.repoService.create('comic/' + comicId, null).subscribe(resp => {
      this.logger.success('Added to Library', comicId, 'Added to Library')
    });
  }
}
