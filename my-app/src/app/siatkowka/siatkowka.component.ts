import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-siatkowka',
  imports: [FooterComponent],
  templateUrl: './siatkowka.component.html',
  styleUrl: './siatkowka.component.scss'
})
export class SiatkowkaComponent {
  sectionEmail = 'email'
}
