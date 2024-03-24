import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})

export class StarComponent implements OnInit {
  @Input() rating: number;
  public filledStars: number;
  public emptyStars: number;
  public stars: any[] = [];

  public renderStars() {
    this.filledStars = Math.round(this.rating);
    this.emptyStars = 5 - this.filledStars;

    for (let i = 0; i < this.filledStars; i++) {
      this.stars.push(true);
    }
    for (let i = 0; i < this.emptyStars; i++) {
      this.stars.push(false);
    }
    return this.stars;
  }

  ngOnInit(): void {
    this.renderStars();
  }
}