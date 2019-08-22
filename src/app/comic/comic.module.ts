import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../app-material.module';
import { ComicRoutingModule } from './comic-routing/comic-routing.module';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AppMaterialModule,
    ComicRoutingModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ComicListComponent, ComicCardComponent, ComicDetailComponent
  ]
})
export class ComicModule {}
