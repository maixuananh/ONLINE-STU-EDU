import { Injectable } from "@angular/core";
import { Subject, take } from "rxjs";
import { ClassApiService } from "src/app/api/class.api";
import { TestApiService } from "src/app/api/test.api";
import { IClass } from "src/app/model/class.model";
import { ICreateTest } from "src/app/model/test.model";

@Injectable()
export class DialogCreateTestService {
    constructor(protected tas: TestApiService, protected cas: ClassApiService) {}

    protected readonly $status_create_test = new Subject<boolean>();
    public readonly status_create_test$ = this.$status_create_test.asObservable();

    protected readonly $_class = new Subject<IClass[]>();
    public readonly _class$ = this.$_class.asObservable();

    createTest(data: ICreateTest): void {
        this.tas.createTest(data).pipe(take(1)).subscribe(result => {
            this.$status_create_test.next(result.status === 200);
        });
    }

    getClassByAdminId(): void {
        this.cas.getByAdminId().pipe(take(1)).subscribe(result => {
            if (result.status == 200) {
                this.$_class.next(result.data);
            }
        });
    }
}