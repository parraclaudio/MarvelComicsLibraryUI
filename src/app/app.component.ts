import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  version = '';

  ngOnInit() {
    this.title = environment.settings.appTitle;
    this.version = environment.settings.version;
  }
}
