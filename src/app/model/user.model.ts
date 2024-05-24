export interface IUser {
    nguoi_dung_id: number;
    ten_dang_nhap: string;
    email: string;
    token: string;
    refreshToken: string;
}

export interface IToken {
    accessToken: string;
    refreshToken: string;
}