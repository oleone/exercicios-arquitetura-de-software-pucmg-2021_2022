import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  title = 'Bruno Leone';
  subtitle = 'Mineiro, 24 anos de idade. Desenvolvedor FullStack na Henko TI, CEO na Acetime Soluções, empreendedor e investidor. Adora estudar e falar sobre mercado financeiro, finanças pessoais, inovação em tecnologia, arte, fotografia e viagem.';
  imageUrl = 'https://lh3.googleusercontent.com/ogw/ADea4I6Zv94ptPnpNsbPnpRiiRUkW-k5GoP8boCwjNz7-kg=s83-c-mo';
  class = 'bg-blue';

  posts: any[] = [
    {
      id: 1,
      description: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end.',
      title: '5 dicas para sua carreira profissional',
      link: '/blog/5_dicas_para_sua_carreira_profissional',
      class: 'bg-red',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      full_text: `#TODO: FAZER UM INTERPRETADOR DE MARKDOWN`
    },
    {
      id: 2,
      description: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end.',
      title: '5 dicas para sua carreira profissional',
      link: '/blog/5_dicas_para_sua_carreira_profissional',
      class: 'bg-yellow',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      full_text: `#TODO: FAZER UM INTERPRETADOR DE MARKDOWN`
    },
    {
      id: 3,
      description: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end.',
      title: '5 dicas para sua carreira profissional',
      link: '/blog/5_dicas_para_sua_carreira_profissional',
      class: 'bg-green',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      full_text: `#TODO: FAZER UM INTERPRETADOR DE MARKDOWN`
    },
    {
      id: 4,
      description: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end.',
      title: '5 dicas para sua carreira profissional',
      link: '/blog/5_dicas_para_sua_carreira_profissional',
      class: 'bg-purple',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      full_text: `#TODO: FAZER UM INTERPRETADOR DE MARKDOWN`
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  postSelected(post: any) {    
    this.class = post && post.class ? post.class : 'bg-blue';
    this.imageUrl = post && post.imageUrl ? post.imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I6Zv94ptPnpNsbPnpRiiRUkW-k5GoP8boCwjNz7-kg=s83-c-mo';
    this.title = post && post.title ? post.title : 'Bruno Leone';
    this.subtitle = post && post.description ? post.description : 'Mineiro, 24 anos de idade. Desenvolvedor FullStack na Henko TI, CEO na Acetime Soluções, empreendedor e investidor. Adora estudar e falar sobre mercado financeiro, finanças pessoais, inovação em tecnologia, arte, fotografia e viagem.';
  }

}
