import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieUtils } from "../utils/cookie.utils";

@Injectable({
    providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

    constructor(protected router: Router) { }

    canActivate(): boolean {
        const cookieUserData = CookieUtils.getCookieAuthToken();
        if(cookieUserData.length === 0) return true;
        this.router.navigate(['/']);
        return false;
    }
}