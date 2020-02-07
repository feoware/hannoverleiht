import { Component } from '@angular/core';
import { Item } from '../types/item';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

  mockItem1: Item = {
    title: 'Bohrmaschine',
    description: 'Eine tolle Bohrmaschine, mit der man bohren kann. Dazu verschiedene Bohraufsätze.',
    imageSrc: '../../assets/bohr.jpg',
    owner: {
      displayName: 'Sherlock H.',
      location: 'Südstadt',
      avatarSrc: '../../assets/sherlock.jpg'
    },
    likes: 4
  }

  mockItem2: Item = {
    title: 'Rätsel',
    description: 'Ein wahrlich rätselhaftes Objekt.',
    owner: {
      displayName: 'Sherlock H.',
      location: 'Südstadt',
      avatarSrc: '../../assets/sherlock.jpg'
    },
    likes: 99
  }

  mockItem3: Item = {
    title: 'Nudelmaschine',
    description: 'Eine tolle Nudelmaschine, mit der man Nudeln marschieren kann. Dazu verschiedene Rezepte. Und ich habe noch so viel mehr zu erzählen.',
    imageSrc: '../../assets/nudel.jpg',
    owner: {
      displayName: 'Miri L.',
      location: 'Mitte',
    },
    likes: 34
  }

}
