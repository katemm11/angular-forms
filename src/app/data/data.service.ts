import { Injectable } from "@angular/core";
import { UserSettings } from "./user-settings";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForms(userSettings: UserSettings): Observable<any> {
    return this.http.post(
      "https://putsreq.com/bjdwrnRYap16otValQCP",
      userSettings
    );

    //return of(userSettings);
  }
}
