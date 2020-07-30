import {ActivatedRoute, Router} from "@angular/router";
import {GastoService} from '../gasto.service';
import {Gasto} from '../gasto.model';
import {Component, OnInit} from "@angular/core";
import {MatFormField} from "@angular/material/form-field";
import {MatFormFieldModule} from '@angular/material/form-field';
import {Tags} from "../tags.model";

@Component({
    selector: "app-product-update",
    templateUrl: "./gasto-update.component.html",
    styleUrls: ["./gasto-update.component.css"],
})
export class GastoUpdateComponent implements OnInit {
    gasto: Gasto;

    constructor(
        private gastoService: GastoService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get("id");
        this.gastoService.readById(id).subscribe((gasto) => {
            this.gasto = gasto;
        });
    }

    voltar(): void {
        this.router.navigate(["/gastos"]);
    }

    getToStringTags(tag: Tags[]): string {
        let strConcatTags: string;
        tag.forEach(function (elementTag, indice) {
            strConcatTags += elementTag.tag + " ";
        });
        return strConcatTags.replace('undefined', '');
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
}
