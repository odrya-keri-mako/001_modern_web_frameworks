import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  // Set theme key
  private readonly themeKey = '001_modern_web_frameworks_angular_theme';

  // Define theme
  theme: 'dark' | 'light' = 'dark';

  // On init
  ngOnInit(): void {
    console.log('Header controller...');
    const savedTheme = localStorage.getItem(this.themeKey);
    this.theme = savedTheme === 'light' ? 'light' : 'dark';
    this.applyTheme();
  }

  // Toggle theme
  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.themeKey, this.theme);
    this.applyTheme();
  }

  // Set theme
  private applyTheme(): void {
    document.body.setAttribute('data-bs-theme', this.theme);
  }
}
