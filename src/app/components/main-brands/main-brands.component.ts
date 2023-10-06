import { Component } from '@angular/core'

@Component({
  selector: 'app-main-brands',
  templateUrl: './main-brands.component.html',
  styleUrls: ['./main-brands.component.css'],
})
export class MainBrandsComponent {
  slides = [
    { img: '../../../assets/imagen1.jpg' },
    { img: '../../../assets/imagen4.jpg' },
    { img: '../../../assets/imagen2.jpg' },
    { img: '../../../assets/imagen5.jpg' },
    { img: '../../../assets/imagen3.jpg' },
    { img: '../../../assets/imagen6.jpg' },
    { img: '../../../assets/imagen1.jpg' },

  ]
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    rows: 2,
    responsive: [
      {
        breakpoint: 992, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3
        }
      }
    ]
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
