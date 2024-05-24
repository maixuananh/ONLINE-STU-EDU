import { Injectable } from "@angular/core";
import { Observable, Subject, map, take } from "rxjs";
import { TestApiService } from "src/app/api/test.api";
import { ISendTested, ITest } from "src/app/model/test.model";

@Injectable()
export class TestService {
    constructor(protected tas: TestApiService) { }

    protected readonly $test = new Subject<ITest>();
    public readonly test$ = this.$test.asObservable();

    getTest(id: string): void {
        this.tas.getDetailTest(id).pipe(take(1)).subscribe(result => {
            if (result.status === 200) {
                this.$test.next(result.data);
            }
        });
    }

    sendTest(data: {
        de_thi_id: string;
        answers: {
            answerId: string;
        }[];
        isExpired: boolean;
    }): Observable<boolean> {
        const send_test_data: ISendTested = {
            test_id: data.de_thi_id,
            answers: data.answers,
            isExpired: data.isExpired
        };
        return this.tas.sendTest(send_test_data).pipe(take(1), map(result => {
            return result.status === 200;
        }));
    }


}