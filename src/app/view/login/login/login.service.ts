import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { AuthApiService } from "src/app/api/auth.api";
import { IUser } from "src/app/model/user.model";

@Injectable()
export class LoginService {
    constructor(protected aps: AuthApiService) {}

    login(email: string, password: string): Observable<{
        status: boolean,
        data: IUser
    }> {
        return this.aps.login(email, password).pipe(take(1)).pipe(map(data => {
            return {
                status: data.status === 200,
                data: data.data
            };
        }));
    }

    register(email: string, password: string, username: string): Observable<{
        status: boolean,
        data: IUser
    }> {
        return this.aps.register(email, password, username).pipe(take(1)).pipe(map(data => {
            return {
                status: data.status === 200,
                data: data.data
            };
        }));
    }
}