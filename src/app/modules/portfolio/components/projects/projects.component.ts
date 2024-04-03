import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/notw/notw_logo_branco.png',
      alt: 'Projeto Nations of The World',
      title: 'Nations of the World',
      width: '100px',
      height: '51px',
      description:
        'Um projeto em React que utiliza da API pública REST Countries para mostrar informações de diferentes países pelo mundo. ',
      images: [
        'assets/img/projects/notw/notw1.jpg',
        'assets/img/projects/notw/notw2.jpg',
        'assets/img/projects/notw/notw3.jpg',
        'assets/img/projects/notw/notw4.jpg',
        'assets/img/projects/notw/notw5.jpg',
        'assets/img/projects/notw/notw6.jpg',
      ],
      repo: 'https://github.com/DanielSantosProg/Nations-Of-The-World',
    },
    {
      src: 'assets/img/projects/euvou/euvou_logo.png',
      alt: 'Projeto Eu Vou',
      title: 'Eu Vou',
      width: '100px',
      height: '71px',
      description:
        'Um projeto em React que permite que seus usuários criem eventos e os divulguem para quem tiver interesse ou se inscrevam em eventos que podem ocorrer ao seu redor. ',
      images: [
        'assets/img/projects/euvou/euvou1.jpg',
        'assets/img/projects/euvou/euvou2.jpg',
        'assets/img/projects/euvou/euvou3.jpg',
        'assets/img/projects/euvou/euvou4.jpg',
        'assets/img/projects/euvou/euvou5.jpg',
        'assets/img/projects/euvou/euvou6.jpg',
        'assets/img/projects/euvou/euvou7.jpg',
        'assets/img/projects/euvou/euvou8.jpg',
        'assets/img/projects/euvou/euvou9.jpg',
      ],
      repo: 'https://github.com/DanielSantosProg/Eu-Vou',
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
