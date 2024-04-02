import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: '´Conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: '´Conhecimento de css',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: '´Conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: '´Conhecimento de C#',
    },
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: '´Conhecimento de .net',
    },
    {
      src: 'assets/icons/knowledge/aspnet.svg',
      alt: '´Conhecimento de ASP.net',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: '´Conhecimento de Javascript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: '´Conhecimento de NodeJs',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: '´Conhecimento de Python',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: '´Conhecimento de MySql',
    },
  ]);
}
