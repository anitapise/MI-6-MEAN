import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data = [{ imgs:"kurtas.jpg", des:"Kurtas Sets"},
    { imgs: "tshirts.jpg", des: "t-Shirts" },
    { imgs: "a5.jpg", des: "Jeans" },
    { imgs: "saree.jpg", des: "Sarees" },
    { imgs: "heels.jpg", des: "Flats & Heels" },
    { imgs: "handbags.jpg", des: "Handbags" },
    { imgs: "shirts.jpg", des: "Sharts" },
    { imgs: "dress.jpg", des: "Dresses" },
    { imgs: "sharts&trousers.jpg", des: "Shorts & Trousers" },
    { imgs: "babydress.jpg", des: "Baby Dress" },
    { imgs: "babyshorts.jpg", des: "Shorts" },
    { imgs: "watch.jpg", des: "Watchs" },
    { imgs: "headphones.jpg", des: "Headphones" },
    {imgs:"mobile.jpg",des:"Mobile"},
    {imgs:"laptops.jpg",des:"Laptops"},
    {imgs:"led.jpg",des:"LED TV"}]
}
