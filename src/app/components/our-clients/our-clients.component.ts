import { Component ,OnInit} from '@angular/core';
@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit{
  slides = [
    { img: '../../../assets/logos/1.svg' },
    { img: '../../../assets/logos/2.svg' },
    { img: '../../../assets/logos/3.svg' },
    { img: '../../../assets/logos/4.svg' },
    { img: '../../../assets/logos/5.svg' },
    { img: '../../../assets/logos/7.svg' },
    { img: '../../../assets/logos/8.svg' },
    { img: '../../../assets/logos/9.svg' },
    { img: '../../../assets/logos/10.svg' },
    { img: '../../../assets/logos/11.svg' },
    { img: '../../../assets/logos/12.svg' },
    { img: '../../../assets/logos/13.svg' },
    { img: '../../../assets/logos/14.svg' },
  ]
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    rows: 1,
    autoplay: true,
    autoplaySpeed: 0, // Establecemos a 0 para controlar el avance manualmente
    speed: 2000, // Velocidad de transición entre slides en milisegundos
    pauseOnHover :true,
    responsive: [
      {
        breakpoint: 992, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3000, // Velocidad de transición entre slides en milisegundos
          rows: 1
        }
      }
    ]
  }
  ngOnInit(): void {
  }

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1
  }

  slickInit(e: any) {
    console.log('slick initialized', e)
  }

  breakpoint(e: any) {
    console.log('breakpoint')
  }

  afterChange(e: any) {
    console.log('afterChange')
  }

  beforeChange(e: any) {
    console.log('beforeChange')
  }
}
