import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Auxiliar de Escritório',
        p: 'Higienizadora Tom e Jerry LTDA | Out 2017 - Junho 2019',
      },
      text: '<p>Minha única experiência profissional até o momento, na qual estava encarregado de atividades como:</p> <p>Criação de plantas baixas das empresas clientes, Criação de relatórios de visitas técnicas e Gerenciamento de estoque.</p>',
    },
  ]);
}
