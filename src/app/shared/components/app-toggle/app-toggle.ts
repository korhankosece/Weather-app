import { Component, output, Input, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './app-toggle.html',
  styleUrl: './app-toggle.scss',
})
export class AppToggle {
  checked = signal(false);
  
  @Input() 
  set checkedInput(value: boolean) {
    if (value !== undefined) {
      this.checked.set(value);
    }
  }

  @Input() leftLabel = '';
  @Input() rightLabel = '';
  onToggle = output<boolean>();

  toggle(): void {
    this.checked.update(value => !value);
    this.onToggle.emit(this.checked());
  }
}
