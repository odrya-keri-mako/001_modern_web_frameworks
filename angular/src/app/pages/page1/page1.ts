import { Component, OnInit, inject } from '@angular/core';
import { Common } from '../../services/common'

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.html',
  styleUrl: './page1.css'
})
export class Page1 implements OnInit {

  // Get common
  common = inject(Common);
  
  // Set title
  title = 'page 1';

  // On init
  ngOnInit(): void {
    console.log('Page1 controller...');
  }
}
