import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  imports: [],
  templateUrl: './search-icon.html',
  styleUrl: './search-icon.scss',
})
export class SearchIcon {
  @Input() width: number = 20;
  @Input() height: number = 20;
  @Input() color: string = 'currentColor';
}

