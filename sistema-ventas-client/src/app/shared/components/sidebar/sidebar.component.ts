import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  //variables globales
  menus: any[] = [];
  constructor(){
    //generar algo

  }
  ngOnInit(): void {
      //se ejecita cuando la vista ya esta mostrada
      this.generarMenu();
  }

  private generarMenu(): void{
    this.menus.push(...[
      {icon: 'home', name:'Home', route:'/'},
      {icon: 'person', name:'Usuarios', route:'/admin/usuarios'},
      {icon: 'category', name:'Categorías', route:'admin/categorias'},
      {icon: 'inventory_2', name:'Productos', route:'admin/productos'},
      {icon: 'shopping_cart', name:'Ventas', route:'ventas/ventas'},
      {icon: 'content_copy', name:'Productos', route:'ventas/reportes'}
    ]);
  }
}
