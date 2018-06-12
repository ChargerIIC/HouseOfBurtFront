import * as functions from 'firebase-functions';
import { MailConfig } from './mail.config';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
import('./mail.config');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/

const gmailEmail = MailConfig.USERNAME;
const gmailPassword = MailConfig.PASSWORD;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmailContact = function.database.ref()

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.database.ref('/users/{uid}').onWrite((change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  if (!snapshot.changed('subscribedToMailingList')) {
    return null;
  }

  const mailOptions = {
    from: '"Spammy Corp." <noreply@firebase.com>',
    to: val.email,
  };

  const subscribed = val.subscribedToMailingList;

  // Building Email message.
  mailOptions.subject = subscribed ? 'Thanks and Welcome!' : 'Sad to see you go :`(';
  mailOptions.text = subscribed ?
      'Thanks you for subscribing to our newsletter. You will receive our next weekly newsletter.' :
      'I hereby confirm that I will stop sending you the newsletter.';

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log(`New ${subscribed ? '' : 'un'}subscription confirmation email sent to:`,
        val.email))
    .catch((error) => console.error('There was an error while sending the email:', error));
});