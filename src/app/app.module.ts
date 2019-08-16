import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { WithCdkComponent } from './with-cdk/with-cdk.component';
import { WithScrollableComponent } from './with-scrollable/with-scrollable.component';
import { MovieComponent } from './movie/movie.component';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  declarations: [
    AppComponent,
    WithCdkComponent,
    WithScrollableComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    SortablejsModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
