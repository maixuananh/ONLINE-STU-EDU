import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IHttpResponse } from "../model/dynamic.model";
import { IClass } from "../model/class.model";
import { ICreateTest, ISendTested, ITest, ITestRaw, ITestedId } from "../model/test.model";
import { API_HOST } from "../enums/port.enums";
import { CookieUtils } from "../utils/cookie.utils";

@Injectable({
    providedIn: 'root'
})
export class TestApiService {
    constructor(protected http: HttpClient) { }

    getAllByAdminId(): Observable<IHttpResponse<ITest[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.get<IHttpResponse<ITest[]>>(API_HOST + 'tests/get-by-admin-id', { headers: reqHeader });
    }

    getDetailTest(id: string): Observable<IHttpResponse<ITest>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<ITest>>(API_HOST + 'tests/get-detail-test', { testId: id }, { headers: reqHeader });
    }

    getAllByClass(id: string): Observable<IHttpResponse<ITestRaw[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<ITestRaw[]>>(API_HOST + 'tests/get-by-class', { classId: id }, { headers: reqHeader });
    }

    getTestedIds(): Observable<IHttpResponse<string[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.get<IHttpResponse<string[]>>(API_HOST + 'tested/get-tested-ids', { headers: reqHeader });
    }

    createTest(data: ICreateTest): Observable<IHttpResponse<any>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<any>>(API_HOST + 'tests/create-test', data, { headers: reqHeader });
    }

    sendTest(data: ISendTested): Observable<IHttpResponse<null>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<null>>(API_HOST + 'tested/send-test', data, { headers: reqHeader });
    }

}