import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  imports: [],
  templateUrl: './app-skeleton.html',
  styleUrl: './app-skeleton.scss',
})
export class AppSkeleton {
  @Input() height: string = '200px';
}
