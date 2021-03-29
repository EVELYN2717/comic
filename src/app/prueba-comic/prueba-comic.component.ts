import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic-service/comic.service';
import { PayLoadComic } from '../model/payLoadComic.model';

@Component({
  selector: 'app-prueba-comic',
  templateUrl: './prueba-comic.component.html',
  styleUrls: ['./prueba-comic.component.scss']
})
export class PruebaComicComponent implements OnInit {

  constructor(private  comicService: ComicService) { }

  public serviceOneImg: String = '';
  public serviceTwoImg: String = '';
  public title: String = '';
  public numberStars:any;

  ngOnInit(): void {
    this.pickComic();
    this.numberStars = [
      {isChecked: 'noChecked', id: 0}, 
      {isChecked: 'noChecked', id: 1}, 
      {isChecked: 'noChecked', id: 2}, 
      {isChecked: 'noChecked', id: 3}, 
      {isChecked: 'noChecked', id: 4}
    ]
  }

  pickComic() {
    if(localStorage.getItem('firstComic') !== '0') {
      localStorage.setItem('firstComic', "0");
      this.getComic('info.0.json');
    } else {
      localStorage.removeItem('firstComic');
      this.getComic ('614/info.0.json');
    }
  }

  getComic(path: string) {
    this.comicService.mostrarComic(path).subscribe( (response: PayLoadComic) => {
      this.serviceOneImg = response.img;
      this.title = response.title;
    });
  }
}
