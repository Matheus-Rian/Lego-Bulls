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
        'Conquista de primeiro lugar em pesquisa na Regional PE da temporada City Shaper 2019/2020.',
      image: '../../../assets/trophy2.png',
    },
    {
      category: 'CORE VALUES',
      name: 'Inspiração:',
      description:
        'Equipe Inspiradora na Regional PE da temporada Into Orbit 2018/2019.',
      image: '../../../assets/trophy.png',
    },
    {
      category: 'PROJETO DE INOVAÇÃO',
      name: 'Apresentação:',
      description:
        'Conquista de primeiro lugar em apresentação na Regional PE da temporada Hydro Dynamics 2017/2018.',
      image: '../../../assets/trophy3.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
