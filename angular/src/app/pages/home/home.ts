import { Component, OnInit, inject } from '@angular/core';
import { Common } from '../../services/common'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  // Get common
  common = inject(Common);

  // Set title
  title = 'home';

  // On init
  ngOnInit(): void {
    console.log('Home controller...');
  }
}