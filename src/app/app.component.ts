import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Movie } from './movie/movie.model';
import { Movable } from './Movable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies: Movie[] = [
    {
      id: 4,
      order: 1,
      title: 'Episode I - The Phantom Menace',
      year: 1999,
    },
    {
      id: 5,
      order: 2,
      title: 'Episode II - Attack of the Clones',
      year: 2002,
    },
    {
      id: 6,
      order: 3,
      title: 'Episode III - Revenge of the Sith',
      year: 2005
    },
    {
      id: 1,
      order: 4,
      title: 'Episode IV - A New Hope',
      year: 1977,
    },
    {
      id: 2,
      order: 5,
      title: 'Episode V - The Empire Strikes Back',
      year: 1980,
    },
    {
      id: 3,
      order: 6,
      title: 'Episode VI - Return of the Jedi',
      year: 1983,
    },
    {
      id: 7,
      order: 7,
      title: 'Episode VII - The Force Awakens',
      year: 2015,
    },
    {
      id: 8,
      order: 8,
      title:'Episode VIII - The Last Jedi',
      year: 2017,
    }
  ];

  move(event:Movable) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.movies = [...this.movies]; // this seems necessary to trigger the change in *cdkVirtualFor or maybe just make another swap function
  }
}
