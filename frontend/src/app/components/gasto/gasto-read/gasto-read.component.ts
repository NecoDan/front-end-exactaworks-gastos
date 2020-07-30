import {GastoService} from '../gasto.service';
import {Gasto} from '../gasto.model';
import {Component, OnInit} from '@angular/core';
import {Tags} from "../tags.model";

@Component({
    selector: 'app-product-read',
    templateUrl: './gasto-read.component.html',
    styleUrls: ['./gasto-read.component.css']
})

export class GastoReadComponent implements OnInit {

    gastos: Gasto[];
    displayedColumns = ["id", "nomePessoa", "descricao", "valor", "dt", "ativo", "action"];

    constructor(private gastoService: GastoService) {
    }

    ngOnInit(): void {
        this.getGastos();
    }

    getGastos(): void {
        this.gastoService.read().subscribe(gastos => {
            this.gastos = gastos;
        })
    }

    getToStringAtivo(ativo: boolean): string {
        let strAtivo: string;
        if (ativo === true) {
            strAtivo = 'SIM';
        } else {
            strAtivo = 'NÃO';
        }
        return strAtivo;
    }

    getToStringData(dt: string): string {
        let strDataResult: string;
        strDataResult = dt.substring(0, 11);
        return strDataResult;
    }
}
