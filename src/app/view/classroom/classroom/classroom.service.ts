import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, map, mergeMap, of, take } from "rxjs";
import { ClassApiService } from "src/app/api/class.api";
import { TestApiService } from "src/app/api/test.api";
import { IClass } from "src/app/model/class.model";
import { ITestRaw } from "src/app/model/test.model";

@Injectable()
export class ClassRoomService {
    constructor(protected tas: TestApiService, protected cas: ClassApiService) {}

    protected readonly $_tests = new BehaviorSubject<ITestRaw[]>([]);
    public readonly _tests$ = this.$_tests.asObservable();

    getTests(id: string): void {
        this.tas.getTestedIds().pipe(take(1), mergeMap(response => {
            if (response.status !== 200) return of([]);
            return this.tas.getAllByClass(id).pipe(take(1), map(result => {
                if (result.status === 200) {
                    let tests_filtered = [];
                    for (let test of result.data) {
                        let isTested = false;
                        for (let id_tested of response.data) {
                            if (id_tested === test.de_thi_id) {
                                isTested = true;
                                break;
                            }
                        }
                        tests_filtered.push({ ...test, isDone: isTested });
                    }
                    return tests_filtered;
                }
                return [];
            }));
        })).subscribe(result => this.$_tests.next(result));
    }

    getClassroomById(id: string): Observable<IClass | null> {
        return this.cas.getDetailByClassId(id).pipe(take(1), map(response => {
            return response.data;
        }));
    }
}