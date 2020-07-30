import {ActivatedRoute, Router} from "@angular/router";
import {GastoService} from '../gasto.service';
import {Gasto} from '../gasto.model';
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-product-delete",
    templateUrl: "./gasto-delete.component.html",
    styleUrls: ["./gasto-delete.component.css"],
})
export class GastoDeleteComponent implements OnInit {
    gasto: Gasto;

    constructor(
        private gastoService: GastoService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.gastoService.readById(id).subscribe((gasto) => {
            this.gasto = gasto;
        });
    }

    deleteGasto(): void {
        this.gastoService.delete(this.gasto.id).subscribe(() => {
            this.gastoService.showMessage("Gasto excluído com sucesso!");
            this.router.navigate(["/products"]);
        });
    }

    cancel(): void {
        this.router.navigate(["/products"]);
    }
}
