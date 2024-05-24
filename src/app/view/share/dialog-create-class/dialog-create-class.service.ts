import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { ClassApiService } from "src/app/api/class.api";
import { IClass, ICreateClass } from "src/app/model/class.model";
import { AlertDynamicService } from "../alert-dynamic/alert-dynamic.service";
import { HomeService } from "../../home/home/home.service";

@Injectable()
export class DialogCreateClassService {
    constructor(protected cas: ClassApiService, protected ads: AlertDynamicService, protected hs: HomeService) {}
    
    createClass(data: ICreateClass): Observable<IClass> {
        return this.cas.createClass(data).pipe(take(1), map(response => {
            if (response.status === 200) {
                this.ads.alert({
                    message: 'create class success',
                    title: 'Create Class',
                    state: 'success'
                });
                this.hs.addClass(response.data);
            } else {
                this.ads.alert({
                    message: 'create class fail',
                    title: 'Create Class',
                    state: 'error'
                });
            }
            return response.data;
        }));
    }
}