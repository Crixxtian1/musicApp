import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  showInicio = false;
  selectedOption: string | undefined;

  toggleInicio() {
    this.showInicio = !this.showInicio;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showInicio = false;
  }
}
