import { Injectable } from "@angular/core";
import { Subject, take } from "rxjs";
import { ClassApiService } from "src/app/api/class.api";
import { IClass } from "src/app/model/class.model";

@Injectable()
export class MiddlewareService {
    constructor(protected cas: ClassApiService) {}

    protected readonly $_class = new Subject<IClass[]>();
    public readonly _class$ = this.$_class.asObservable();

    public getClass(): void {
        this.cas.getAll().pipe(take(1)).subscribe(response => {
            if (response.status === 200) {
                this.$_class.next(response.data);
            }
        });
    }
}