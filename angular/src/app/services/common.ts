import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Common {

  // Set common title
  readonly commonTitle = signal('welcome!')
}