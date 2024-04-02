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
      src: 'assets/img/projects/notw_logo_branco.png',
      alt: 'Projeto Nations of The World',
      title: 'Nations of the World',
      width: '100px',
      height: '51px',
      description:
        'Um projeto em React que utiliza da API pública REST Countries para mostrar informações de diferentes países pelo mundo. ',
      images: [
        'assets/img/projects/notw1.jpg',
        'assets/img/projects/notw2.jpg',
        'assets/img/projects/notw3.jpg',
        'assets/img/projects/notw4.jpg',
        'assets/img/projects/notw5.jpg',
        'assets/img/projects/notw6.jpg',
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
