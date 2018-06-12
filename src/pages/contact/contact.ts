import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  isSubmitted: boolean;
  registerForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder, private alertCtrl: AlertController, public http:HttpClient) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    },{});
  }

  ionViewDidLoad() {
  }

  onSubmit(){
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(this.registerForm.value);
    if ((this.registerForm.valid) && (this.registerForm.value.email)) {
      var body = {
        email: this.registerForm.value.email,
        content: this.registerForm.value.content
      };
      this.http.post('https://us-central1-houseofburt-f4b61.cloudfunctions.net/sendEmailContact', body);      
    }
  }

}
