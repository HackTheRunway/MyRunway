import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  wearables: string[] = [
    'Hats', 'Tops', 'Bottoms', 'Shoes', 'Accessories'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
