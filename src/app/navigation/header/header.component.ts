import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  title = '';
  version = '';

  ngOnInit() {
    this.title = environment.settings.appTitle;
    this.version = environment.settings.version;
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
