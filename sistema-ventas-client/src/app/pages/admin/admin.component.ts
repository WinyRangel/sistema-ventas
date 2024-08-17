import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit, OnDestroy, AfterViewInit {
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: String[] = ['nombre', 'apellidos','username','rol','acciones']

  ngOnInit(): void {
      
  }
  
  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
      
  }
}
