interface Awards {
  category: string;
  name: string;
  description: string;
  image: string;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bulls-card-award',
  templateUrl: './card-award.component.html',
  styleUrls: ['./card-award.component.scss'],
})
export class CardAwardComponent implements OnInit {
  awards: Awards[] = [
    {
      category: 'PROJETO DE INOVAÇÃO',
      name: 'Projeto de Pesquisa:',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      image: '../../../assets/trophy2.png',
    },
    {
      category: 'CORE VALUES',
      name: 'Inspiração:',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      image: '../../../assets/trophy.png',
    },
    {
      category: 'PROJETO DE INOVAÇÃO',
      name: 'Apresentação:',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
      image: '../../../assets/trophy3.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
