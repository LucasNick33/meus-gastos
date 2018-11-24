import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meus-gastos';
  nome = 'Lucas';
  nome2 = 'Costa';

  exibirAlerta() {
    alert(this.nome2);
  }

}
