import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private GifsService:GifsService ) {}

  get tags() {
    return this.GifsService.tagsHistory;
  }

  searchTag(tag:string) {
    this.GifsService.searchTag(tag);
  }

}
