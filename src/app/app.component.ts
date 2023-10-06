import { Component, OnInit ,PLATFORM_ID, Inject} from '@angular/core';
/* import * as Aos from 'aos'; */
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(@Inject(PLATFORM_ID) private platformId:Object,private title:Title) { }
  /* title = 'angular-ssr-proyecta'; */
  ngOnInit(): void {
    /* Aos.init(); */
    this.title.setTitle('Proyecta')
    if(isPlatformBrowser(this.platformId)){
      Aos.init();
    }
  }
}
