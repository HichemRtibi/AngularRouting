import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PostsComponent} from './posts/posts.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';


const appRoutes: Routes = [
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
