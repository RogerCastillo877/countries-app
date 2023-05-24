import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ConctactPageComponent } from './pages/conctact-page/conctact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
@NgModule({
  declarations: [
    AboutPageComponent,
    ConctactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ConctactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
