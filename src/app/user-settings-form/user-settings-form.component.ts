import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel } from "@angular/forms";
import { DataService } from "../data/data.service";
import { Observable } from "rxjs";
import { Data } from "ngx-bootstrap/positioning/models";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  singleModel = "On";

  startDate: Date;
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = "";
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
  }

  onBlur(field: NgModel) {
    console.log("in on blur", field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log("error: ", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.value);

    // if (form.valid) {
    //   this.dataService
    //     .postUserSettingsForms(this.userSettings)
    //     .subscribe(function(result) {
    //       console.log("success");
    //       console.log(result);
    //     });
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = "Please fix the above errors";
    // }
    // error => this.onHttpError(error);
  }
}
