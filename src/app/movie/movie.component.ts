import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from './movie.model';
import { Movable } from '../Movable';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Input() index: number;
  @Output() orderChanged: EventEmitter<Movable> = new EventEmitter();

  changeOrder(order: string) {
    const currentIndex = parseInt(order, 10) - 1;
    this.orderChanged.emit({ currentIndex, previousIndex: this.index });
  }
}
