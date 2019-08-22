import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/_interface/comic.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Logger } from 'src/app/core/logger.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent {
  @Input() comic: Comic;
  showProgress = false;

  constructor(private repoService: RepositoryService, private logger: Logger) {}

  public addInLibrary(comicId : string ){
    this.showProgress = true;

    this.repoService.create('comic/' + comicId, null).subscribe(resp => {
      this.logger.success('Added to Library',comicId,'Added to Library')
      this.showProgress = false;
    });
  }
}
