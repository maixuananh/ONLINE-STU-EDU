import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, flatMap, map, throwError } from "rxjs";
import { IHttpResponse } from "../model/dynamic.model";
import { IClass, ICreateClass } from "../model/class.model";
import { API_HOST } from "../enums/port.enums";
import { CookieUtils } from "../utils/cookie.utils";
import { AuthApiService } from "./auth.api";
import { AppService } from "../app.service";

@Injectable({
    providedIn: 'root'
})
export class ClassApiService {
    constructor(protected http: HttpClient, protected aas: AuthApiService, protected as: AppService) {}

    getAll(): Observable<IHttpResponse<IClass[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.get<IHttpResponse<IClass[]>>(API_HOST + 'classes/get-all', { headers: reqHeader }).pipe(catchError(response => {
            if (response.status === 403) {
                return this.aas.refreshToken(CookieUtils.getCookieRefreshToken()).pipe(
                    flatMap(() => {
                        return this.http.get<IHttpResponse<IClass[]>>(API_HOST + 'classes/get-all');
                    })
                );
            } else {
                return throwError(response);
            }
        }));
    }

    getByAdminId(): Observable<IHttpResponse<IClass[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.get<IHttpResponse<IClass[]>>(API_HOST + 'classes/get-by-admin-id', { headers: reqHeader });
    }

    getDetailByClassId(id: string): Observable<IHttpResponse<IClass>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<IClass>>(API_HOST + 'classes/get-detail', { classId: id }, { headers: reqHeader });
    }

    searchClass(searchString: string): Observable<IHttpResponse<IClass[]>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        const data = {
            class_name: searchString
        };
        return this.http.post<IHttpResponse<IClass[]>>(API_HOST + 'classes/search', data, { headers: reqHeader });
    }

    createClass(data: ICreateClass): Observable<IHttpResponse<IClass>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<IClass>>(API_HOST + 'classes/create', data, { headers: reqHeader });                           
    }

    joinClass(join_class_id: string): Observable<IHttpResponse<IClass>> {
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": CookieUtils.getCookieAuthToken()
        });
        return this.http.post<IHttpResponse<IClass>>(API_HOST + 'classes/join-classroom', { id_join_class: join_class_id }, { headers: reqHeader });  
    }

}