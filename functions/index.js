/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createCallsSubcollection = functions.firestore
    .document("companies/{companyId}").onCreate(async (snap, context) => {
      const companyId = context.params.companyId;

      // Create the 'calls' subcollection
      await db.collection("calls").doc("")
          .add({"phone_number": ""}, {"company_id": companyId});
      await db.collection("enrollments").doc("")
          .add({"link": ""}, {"company_id": companyId});
      await db.collection("forms").doc("")
          .add({"link": ""}, {"company_id": companyId});
      await db.collection("notifications").doc("")
          .add({"notification": ""}, {"company_id": companyId});
      await db.collection("faqs").doc("")
          .add({"faq": ""}, {"company_id": companyId});

      return null;
    });
