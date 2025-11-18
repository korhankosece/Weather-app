import { Component, signal, output } from '@angular/core';

import { AppInput } from '../../shared/components/app-input/app-input';

@Component({
  selector: 'app-search-bar',
  imports: [AppInput],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  searchTerm = signal('');
  onSearch = output<string>();

  handleSearch(): void {
    const term = this.searchTerm().trim();
    if (term) {
      this.onSearch.emit(term);
    }
  }

  onValueChange(value: string): void {
    this.searchTerm.set(value);
  }
}
