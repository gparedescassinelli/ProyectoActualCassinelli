

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
//modulos
import { ComponentsModule } from './components/components.module'
import { SwiperModule } from 'swiper/angular'
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component'
import { HomeComponent } from './pages/home/home.component'
import { HomeModule } from './pages/home/home.module';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component'
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [AppComponent, LayoutBaseComponent, HomeComponent, QuienesSomosComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ComponentsModule,
    SwiperModule,
    HomeModule,
    SlickCarouselModule,//es para el carrusel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
