import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieUtils } from "../utils/cookie.utils";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const cookieUserData = CookieUtils.getCookieAuthToken();
        if(cookieUserData.length === 0) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}