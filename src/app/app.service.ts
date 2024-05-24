import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor() {}

    protected isGettingNewAccessToken: boolean = false;

    protected readonly $accessToken = new Subject<string>();
    public readonly accessToken$ = this.$accessToken.asObservable();

    setIsGettingNewAccessToken(): void {
        this.isGettingNewAccessToken = true;
    }

    doneGetAccessToken(): void {
        this.isGettingNewAccessToken = false;
    }

    isGettingAccessToken(): boolean {
        return this.isGettingNewAccessToken;
    }

    newAccessToken(token: string): void {
        return this.$accessToken.next(token);
    }
}