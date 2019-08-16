import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-with-cdk',
  templateUrl: './with-cdk.component.html',
  styleUrls: ['./with-cdk.component.scss'],
})
export class WithCdkComponent {
  @Input() movies: Movie[];
  @Output() dropped: EventEmitter<CdkDragDrop<string[]>> = new EventEmitter();
}
