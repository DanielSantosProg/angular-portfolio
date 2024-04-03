import { Component, Input, OnInit } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.images);
  }
}
