import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {

  // Get current year
  currentYear = new Date().getFullYear();

  // On init
  ngOnInit(): void {
    console.log('Footer controller...');
  }
}