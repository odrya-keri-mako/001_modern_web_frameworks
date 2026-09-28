import { Component, OnInit, inject } from '@angular/core';
import { Common } from '../../services/common'

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 implements OnInit {

  // Get common
  common = inject(Common);
  
  // Set title
  title = 'page 2';

  // On init
  ngOnInit(): void {
    console.log('Page2 controller...');
  }
}