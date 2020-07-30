import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Gasto} from "./gasto.model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class GastoService {
    apiUrl = 'http://localhost:8080/gastos/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    create(gasto: Gasto): Observable<Gasto> {
        console.log(gasto);
        return this.http.post<Gasto>(this.apiUrl, gasto, this.httpOptions)
            .pipe(
                map((obj) => obj),
                catchError((e) => this.errorHandler(e))
            );
    }

    read(): Observable<Gasto[]> {
        return this.http.get<Gasto>(this.apiUrl).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    readById(id: number): Observable<Gasto> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Gasto>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    update(product: Gasto): Observable<Gasto> {
        const url = `${this.apiUrl}/${product.id}`;
        return this.http.put<Gasto>(url, product).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    delete(id: number): Observable<Gasto> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<Gasto>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro:", true);
        return EMPTY;
    }
}
