import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, map, take } from "rxjs";
import { ClassApiService } from "src/app/api/class.api";
import { IClass } from "src/app/model/class.model";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(protected cas: ClassApiService) {}

    protected readonly $_class_list = new BehaviorSubject<IClass[]>([]);
    public readonly _class_list$ = this.$_class_list.asObservable();

    getClass(): void {
        this.cas.getAll().pipe(take(1)).subscribe(data => {
            console.log(data);
            this.$_class_list.next(data.data);
        });
    }

    addClass(class_data: IClass): void {
        this.$_class_list.next([...this.$_class_list.value, class_data]);
    }

    removeData(): void {
        this.$_class_list.next([]);
    }
}