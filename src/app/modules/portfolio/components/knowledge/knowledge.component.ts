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
      src: 'assets/icons/knowledge/react.svg',
      alt: '´Conhecimento de React',
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
      src: 'assets/icons/knowledge/javascript.svg',
      alt: '´Conhecimento de Javascript',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: '´Conhecimento de Typescript',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: '´Conhecimento de Python',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: '´Conhecimento de MySql',
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: '´Conhecimento de PostgreSQL',
    },
    {
      src: 'assets/icons/knowledge/sql-server.svg',
      alt: '´Conhecimento de SQL Server',
    },
  ]);
}
