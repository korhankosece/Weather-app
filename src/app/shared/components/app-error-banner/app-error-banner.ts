import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  imports: [],
  templateUrl: './app-error-banner.html',
  styleUrl: './app-error-banner.scss',
})
export class AppErrorBanner {
  @Input() message: string = '';
  onDismiss = output<void>();

  dismiss(): void {
    this.onDismiss.emit();
  }
}
