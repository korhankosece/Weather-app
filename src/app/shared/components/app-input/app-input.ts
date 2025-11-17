import { Component, Input, output } from '@angular/core';
import { SearchIcon } from '../icons/search-icon/search-icon';

@Component({
  selector: 'app-input',
  imports: [SearchIcon],
  templateUrl: './app-input.html',
  styleUrl: './app-input.scss',
})
export class AppInput {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() showSearchIcon: boolean = false;

  valueChange = output<string>();
  enterKey = output<void>();

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.enterKey.emit();
    }
  }
}
