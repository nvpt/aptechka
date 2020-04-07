import { Component, OnInit } from '@angular/core';
import {ThemesService} from '../../modules/themes/themes.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  constructor(private themeService: ThemesService) { }

  ngOnInit(): void {
  }

  selectTheme(event: Event) {
    console.log('16 >>> event: ', (<HTMLInputElement>event.target).value);
    const colorTheme: string = (<HTMLInputElement>event.target).value;
    this.themeService.setTheme(colorTheme)
  }
}
