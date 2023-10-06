
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
//externos
import { SwiperModule } from 'swiper/angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';
//componentes
import { NavbarComponent } from './navbar/navbar.component'
import { HeroComponent } from './hero/hero.component'
import { SectionRequestComponent } from './section-request/section-request.component'
import { SectionTeamComponent } from './section-team/section-team.component'
import { SectionContactComponent } from './section-contact/section-contact.component'
import { SectionFeaturedProjectsComponent } from './section-featured-projects/section-featured-projects.component'

import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InspiringComponent } from './inspiring/inspiring.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { SectionInfoComponent } from './section-info/section-info.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { MainBrandsComponent } from './main-brands/main-brands.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    SectionRequestComponent,
    SectionTeamComponent,
    SectionContactComponent,
    SectionFeaturedProjectsComponent,
    FooterComponent,
    StartComponent,
    AboutUsComponent,
    InspiringComponent,
    VisionMisionComponent,
    ShowroomComponent,
    SectionInfoComponent,
    OurClientsComponent,
    MainBrandsComponent,
  ],
  imports: [CommonModule,RouterModule,SlickCarouselModule,SwiperModule,ReactiveFormsModule,FormsModule],
  exports: [
    NavbarComponent,
    HeroComponent,
    SectionRequestComponent,
    SectionTeamComponent,
    SectionContactComponent,
    SectionFeaturedProjectsComponent,
    FooterComponent,
    StartComponent,
    AboutUsComponent,
    InspiringComponent,
    VisionMisionComponent,
    ShowroomComponent,
    SectionInfoComponent,
    OurClientsComponent,
    MainBrandsComponent
  ],
})
export class ComponentsModule {}
