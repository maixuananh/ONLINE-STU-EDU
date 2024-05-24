import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, flatMap, map, throwError } from "rxjs";
import { IHttpResponse } from "../model/dynamic.model";
import { API_HOST } from "../enums/port.enums";
import { CookieUtils } from "../utils/cookie.utils";
import { AuthApiService } from "./auth.api";
import { AppService } from "../app.service";
import { IGrade } from "../model/grade.model";

@Injectable({
    providedIn: 'root'
})
export class GradeApiService {
    constructor(protected http: HttpClient, protected aas: AuthApiService, protected as: AppService) {}

    getGradeById(id: string): Observable<IHttpResponse<IGrade[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<IGrade[]>>(API_HOST + 'grade/get-grade-by-test-id', { testId: id }, { headers: reqHeader });
    }

    createGradePoint(id: string): Observable<IHttpResponse<IGrade[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<IGrade[]>>(API_HOST + 'grade/create-grade-by-test-id', { testId: id }, { headers: reqHeader });
    }

}