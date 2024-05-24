export interface IHttpResponse<T> {
    status: number;
    message: string;
    data: T
}