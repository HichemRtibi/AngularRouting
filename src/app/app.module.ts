import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PostsComponent} from './posts/posts.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path:'',redirectTo:'/posts',pathMatch:'full'
  },
  {
    path: 'posts', component: PostsComponent
  },

  {
    path: 'about', component: AboutComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  },

];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostsComponent,
    AboutComponent,
    PageNotFoundComponent
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
