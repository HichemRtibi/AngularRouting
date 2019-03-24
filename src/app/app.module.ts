import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {PostModule} from './post/post.module';


const appRoutes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path:'',redirectTo:'/posts',pathMatch:'full'
  },

  {
    path:'**',component:PageNotFoundComponent
  },

];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
