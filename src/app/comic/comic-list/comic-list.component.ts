import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Comic } from 'src/app/_interface/comic.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})

export class ComicListComponent implements OnInit {
  comics: Comic[];
  isVisible = false;
  selectedComic: Comic;
  showProgress = false;

  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  constructor(private repoService: RepositoryService, private router: Router) { }

  ngOnInit() {
  }

  public getMarvelComics = (search: string) => {
    this.showProgress = true;

    this.repoService.getData('marvelcomics/' + search).subscribe(resp => {
      this.showProgress = false;
      this.comics = JSON.parse(resp.data) as Comic[];
    });
  }

  selectComic(comic: Comic) {
    this.selectedComic = comic;
    this.drawer.toggle();
  }
}
