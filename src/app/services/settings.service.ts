import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  warningInterval: number = 7;

  constructor() { }
}
