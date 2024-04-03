import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule, CarouselComponent],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
  images: string[] = [];
  constructor(
    private dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: IProjects
  ) {}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
    this.images = this._data.images;
  }

  public closeModal() {
    return this.dialogRef.close();
  }
}
