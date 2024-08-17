import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from '../../../pages/auth/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Output() toggleSidenav = new EventEmitter<void>();
  isLogged = false;
  data: any = {};
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLogged$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLogged: boolean) => {
        this.isLogged = isLogged;
      });

    this.authService.token$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.data = data || {};  
        console.log('data', this.data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLogout(): void {
    this.authService.logOut();
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}
