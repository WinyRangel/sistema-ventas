import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../shared/models/usuario.interface';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogComponent } from './components/usuario-dialog/usuario-dialog.component';
import { UsuariosService } from './services/usuarios.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject;
  dataSource = new MatTableDataSource<Usuario>();
  displayedColumns: string[] = ['nombre', 'apellidos', 'username', 'email', 'rol', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getUsuarios(): void {

    this.usuariosService.getUsers().pipe(takeUntil(this.destroy$))
    .subscribe((usuarios: Usuario[])=>{
      this.dataSource.data = usuarios;
    })
    // this.usuariosService.getUsers().subscribe(
    //   (usuarios) => {
    //     this.dataSource.data = usuarios;
    //   },
    //   (error) => {
    //     console.error('Error al obtener los usuarios:', error);
    //   }
    // );
  }

  onOpenModal(user?: Usuario): void {
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      minWidth: '60%',
      maxWidth: '100%',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsuarios(); // Actualizar la lista de usuarios después de cerrar el diálogo
      }
    });
  }  


  onDeleteUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuariosService.deleteUsuario(id).subscribe(
        () => {
          this.getUsuarios(); // Actualizar la lista de usuarios después de eliminar
          console.log('Usuario eliminado con éxito');
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete()
  }
}