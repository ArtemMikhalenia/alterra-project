import { Component } from '@angular/core';
import { MainSlider } from '../../components/main-slider/main-slider';

@Component({
  selector: 'app-home',
  imports: [MainSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
