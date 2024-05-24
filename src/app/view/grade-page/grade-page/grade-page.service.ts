import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { GradeApiService } from "src/app/api/grade.api";
import { TestApiService } from "src/app/api/test.api";
import { IGrade } from "src/app/model/grade.model";
import { ITest } from "src/app/model/test.model";

@Injectable()
export class GradePageService {
    constructor(protected gas: GradeApiService, protected tas: TestApiService) {}

    getGradeByTestId(testId: string): Observable<IGrade[]> {
        return this.gas.getGradeById(testId).pipe(take(1), map(response => {
            return response.data;
        }));
    }

    getTests(): Observable<ITest[]> {
        return this.tas.getAllByAdminId().pipe(take(1), map(response => {
            return response.data;
        }));
    }

    createGradePoint(id: string): Observable<IGrade[]> {
        return this.gas.createGradePoint(id).pipe(take(1), map(response => {
            return response.data;
        }));
    }
}