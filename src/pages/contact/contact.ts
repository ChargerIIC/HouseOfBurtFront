import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  isSubmitted: boolean;
  registerForm:FormGroup;
  alert: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder, private alertCtrl: AlertController, public http:HttpClient) {
    this.alert = this.alertCtrl.create({
      title: 'Email Sent!',
      subTitle: 'Thanks for your message.',
      buttons: ['Ok']
    });
    
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      content: ['',[Validators.required]]
    },{});
  }

  ionViewDidLoad() {
  }

  onSubmit(){
    this.isSubmitted = true;
    console.log(this.registerForm.value);
    if ((this.registerForm.valid) && (this.registerForm.value.email)) {
      var body = {
        email: this.registerForm.value.email,
        content: this.registerForm.value.emailMessage
      };
      this.http.post('https://us-central1-houseofburt-f4b61.cloudfunctions.net/sendEmailContact', body);   
      this.alert.present();   
    }
  }

}
