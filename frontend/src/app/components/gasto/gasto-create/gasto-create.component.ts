import {Gasto} from '../gasto.model';
import {GastoService} from '../gasto.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-create',
    templateUrl: './gasto-create.component.html',
    styleUrls: ['./gasto-create.component.css']
})
export class GastoCreateComponent implements OnInit {

    gasto: Gasto = {
        nomePessoa: '',
        descricao: '',
        valor: null,
        dt: '',
        ativo: false,
        tags: null
    }

    constructor(private productService: GastoService,
                private router: Router) {
    }

    ngOnInit(): void {

    }

    createGasto(): void {
        console.log("chegou aqui no create....")
        this.productService.create(this.gasto).subscribe(() => {
            this.productService.showMessage('Gasto criado!')
            this.router.navigate(['/gastos'])
        })

    }

    cancel(): void {
        this.router.navigate(['/gastos'])
    }
}
