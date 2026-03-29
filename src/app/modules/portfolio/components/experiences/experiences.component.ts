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
      text: '<p>Minha primeira experiência profissional, na qual estava encarregado de atividades como:</p> <p>Criação de plantas baixas das empresas clientes, Criação de relatórios de visitas técnicas e Gerenciamento de estoque.</p>',
    },
    {
      summary: {
        strong: 'Programador Júnior Full-Stack',
        p: 'Rei Informática | Dez 2025 - Presente',
      },
      text: '<p>Atuo como Programador Full-Stack na Rei Informática, onde sou um dos responsáveis pela evolução e manutenção do sistema ERP da empresa.</p><p>O trabalho envolve desenvolvimento de novas rotinas de negócio e a otimização de funcionalidades existentes, garantindo a integridade e performance do sistema.</p><p>No dia a dia, utilizo um stack que abrange ferramentas como o <span class="focus">Maker Studio Bootstrap</span>, <span class="focus">JavaScript</span> e <span class="focus">React</span>. No que se refere a bancos de dados, lido com bancos <span class="focus">SQL Server</span> e <span class="focus">PostgreSQL</span>.</p>',
    },
  ]);
}
