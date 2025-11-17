import { Component } from '@angular/core';
import { AppToggle } from '../../components/app-toggle/app-toggle';
import { AppContainer } from '../app-container/app-container';

@Component({
  selector: 'app-header',
  imports: [AppToggle, AppContainer],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {}

