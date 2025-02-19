import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tenis',
  imports: [FooterComponent],
  templateUrl: './tenis.component.html',
  styleUrl: './tenis.component.scss'
})
export class TenisComponent {
  sectionEmail = 'tenis@email.com'
}
