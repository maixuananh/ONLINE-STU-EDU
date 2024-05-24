import { IUser } from "../model/user.model";

export class CookieUtils {
    static setCookieObject<T extends Object>(name: string, value: T, timeExpired: string): void {
        document.cookie = name + '=' + JSON.stringify(value) + '; path=/' + '; expires=' + timeExpired;
    }

    static setCookie(name: string, value: string, timeExpired: string): void {
        document.cookie = name + '=' + value + '; path=/' + '; expires=' + timeExpired + ";";
    }

    static getCookie(name: string): string {
        return (document.cookie.split(name + '=')[1] || '').split(';')[0];
    }

    static getCookieUserId(): string {
        return CookieUtils.getCookie('userId');
    }

    static getCookieAuthToken(): string {
        return CookieUtils.getCookie('jwt_token');
    }

    static getCookieRefreshToken(): string {
        return CookieUtils.getCookie('refresh_token');
    }

    static getCookieUsername(): string {
        return CookieUtils.getCookie('username');
    }

    static setCookieAuthToken(data: IUser): void {
        CookieUtils.setCookie('jwt_token', data.token, new Date(2090, 0 ,0).toUTCString());
        CookieUtils.setCookie('refresh_token', data.refreshToken, new Date(2090, 0 ,0).toUTCString());
        CookieUtils.setCookie('userId', String(data.nguoi_dung_id), new Date(2090, 0 ,0).toUTCString());
        CookieUtils.setCookie('username', String(data.ten_dang_nhap), new Date(2090, 0 ,0).toUTCString());
    }

    static clearCookieAuthToken(): void {
        CookieUtils.setCookie('jwt_token', '', new Date(2022, 0 ,0).toUTCString());
        CookieUtils.setCookie('userId', '', new Date(2022, 0 ,0).toUTCString());
        CookieUtils.setCookie('refresh_token', '', new Date(2022, 0 ,0).toUTCString());
        CookieUtils.setCookie('username', '', new Date(2022, 0 ,0).toUTCString());
    }

    static getTestedStringIfy(): string {
        return CookieUtils.getCookie('tested');
    }

    static getTestedArray (): number[] | null {
        const dataRaw = CookieUtils.getTestedStringIfy();
        if (dataRaw.trim().length == 0) return null;
        const dataJson = JSON.parse(dataRaw);
        if (!Array.isArray(dataJson)) return null;
        return dataJson;
    }

    static setTested(id: number): void {
        const dataRaw = CookieUtils.getTestedStringIfy();
        if (dataRaw.trim().length == 0) {
            CookieUtils.setCookie('tested', JSON.stringify([id]), new Date(2090, 0, 0).toUTCString());
            return;
        }
        const dataJson = JSON.parse(dataRaw);
        if (!Array.isArray(dataJson)) {
            CookieUtils.setCookie('tested', JSON.stringify([id]), new Date(2090, 0, 0).toUTCString());
            return;
        }
        const result = [...dataJson, id];
        CookieUtils.setCookie('tested', JSON.stringify(result), new Date(2090, 0, 0).toUTCString());
    }
    

} 