import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './gasto-crud.component.html',
  styleUrls: ['./gasto-crud.component.css']
})
export class GastoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Gastos',
      icon: 'storefront',
      routeUrl: '/gastos'
    }
  }

  ngOnInit(): void {
  }

  navigateToGastoCreate(): void {
    this.router.navigate(['/gastos/create'])
  }

}
