import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseForm } from '../../../../../shared/utils/base-form';
import { Subject } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../../../../shared/models/usuario.interface';
import { error } from 'console';

enum Action{
  EDIT = 'edit',
  NEW = 'new'
}
@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrl: './usuario-dialog.component.scss'
})
export class UsuarioDialogComponent implements OnInit, OnDestroy{
  private destroy$ = new Subject<any>();
  titleButton = 'Guardar';
  actionTODO = Action.NEW;
  userForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user?: Usuario },
    private fb: FormBuilder,
    private _usuariosService: UsuariosService,
    public baseForm: BaseForm,
    private dialogRef: MatDialogRef<UsuarioDialogComponent>
  ) {
    this.userForm = this.fb.group({
      cveuser: [''],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50)]],
      username: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.pathData();
  }

  pathData() {
    if (this.data.user?.cveuser) {
      // Editar
      this.titleButton = 'Actualizar';
      this.actionTODO = Action.EDIT;
      this.userForm.patchValue(this.data.user); // Llenar formulario con datos del usuario si existe
      console.log(this.data)
    } else {
      // Nuevo
      this.titleButton = 'Guardar';
      this.actionTODO = Action.NEW;
    }
  }

  onSave() {
    if (this.userForm.invalid) return;

    const formValue = this.userForm.getRawValue();
    const { confirmPassword, ...userToSave } = formValue;

    if (this.actionTODO === Action.NEW) {
      this._usuariosService.createUsuario(userToSave).subscribe(
        () => {
          this.userForm.reset();
          this.dialogRef.close(); // Cerrar diálogo después de guardar
          console.log("Usuario registrado con éxito");
        },
        error => alert(`Error al crear el usuario: ${error}`)
      );
    } else if (this.actionTODO === Action.EDIT) {
      if (userToSave.cveuser) {
        this._usuariosService.updateUsuario(userToSave).subscribe(
          () => {
            this.userForm.reset();
            this.dialogRef.close(); // Cerrar diálogo después de actualizar
            console.log("Usuario actualizado con éxito");
          },
          error => alert(`Error al actualizar el usuario: ${error}`)
        );
      } else {
        alert("ID del usuario no disponible para la actualización.");
      }
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
