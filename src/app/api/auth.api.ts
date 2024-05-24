import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IHttpResponse } from "../model/dynamic.model";
import { IToken, IUser } from "../model/user.model";
import { API_HOST } from "../enums/port.enums";

@Injectable({
    providedIn: 'root'
})
export class AuthApiService {
    constructor(protected http: HttpClient) {}

    protected reqHeader = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    });

    login(email: string, password: string): Observable<IHttpResponse<IUser>> {
        const data = {
            email,
            password
        };
        return this.http.post<IHttpResponse<IUser>>(API_HOST + 'users/login', data, { headers: this.reqHeader });
    }

    register(email: string, password: string, username: string): Observable<IHttpResponse<IUser>> {
        const data = {
            username,
            email,
            password,
        };
        return this.http.post<IHttpResponse<IUser>>(API_HOST + 'users/register', data, { headers: this.reqHeader });
    }

    refreshToken(refreshToken: string): Observable<IHttpResponse<IToken>> {
        return this.http.post<IHttpResponse<IToken>>(API_HOST + 'users/refresh-token', refreshToken, { headers: this.reqHeader });
    }
    
}