import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { ClassApiService } from "src/app/api/class.api";
import { HomeService } from "../../home/home/home.service";
import { AlertDynamicService } from "../alert-dynamic/alert-dynamic.service";

@Injectable()
export class DialogJoinClassService {
    constructor(protected cas: ClassApiService, protected hs: HomeService, protected ads: AlertDynamicService) {}

    joinClass(id: string): Observable<boolean> {
        return this.cas.joinClass(id).pipe(take(1), map(response => {
            console.log(response);
            if (response.status === 200) {
                this.hs.addClass(response.data);
                this.ads.alert({
                    message: 'Tham gia lớp học thành công',
                    state: 'success',
                    title: 'Tham Gia Lớp'
                });
                return true;
            }
            this.ads.alert({
                message: 'Tham gia lớp học thất bại',
                state: 'error',
                title: 'Tham Gia Lớp'
            });
            return false;
        }));
    }
}