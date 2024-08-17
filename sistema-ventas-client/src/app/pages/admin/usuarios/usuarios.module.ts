import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin-routing.module';
import { UsuarioDialogComponent } from './components/usuario-dialog/usuario-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Agregado para soportar el matInput

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDialogComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AdminRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule // Asegúrate de importar MatInputModule
  ]
})
export class UsuariosModule { }
