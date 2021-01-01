// import firebase from "firebase";

// const config = {
//   apiKey: "AIzaSyBpPIvYtLU_mSQCovRxc81m60aY1HFbLYI",
//   authDomain: "openwist.firebaseapp.com",
//   databaseURL: "https://openwist.firebaseio.com",
//   projectId: "openwist",
//   storageBucket: "openwist.appspot.com",
//   messagingSenderId: "60452317543",
//   appId: "1:60452317543:web:903ea972a8eef9f61ce7c2",
//   measurementId: "G-LX53P492BS",
// };

// firebase.initializeApp(config);
// const db = firebase.firestore();

// export const authenticateAnonymously = () => {
//   return firebase.auth().signInAnonymously();
// };

// export const createGroceryList = (userName, userId) => {
//   return db.collection("groceryLists").add({
//     created: firebase.firestore.FieldValue.serverTimestamp(),
//     createdBy: userId,
//     users: [
//       {
//         userId: userId,
//         name: userName,
//       },
//     ],
//   });
// };

// export const getGroceryList = (groceryListId) => {
//   return db.collection("groceryLists").doc(groceryListId).get();
// };

// export const getGroceryListItems = (groceryListId) => {
//   return db
//     .collection("groceryLists")
//     .doc(groceryListId)
//     .collection("items")
//     .get();
// };

// export const streamGroceryListItems = (groceryListId, observer) => {
//   return db
//     .collection("groceryLists")
//     .doc(groceryListId)
//     .collection("items")
//     .orderBy("created")
//     .onSnapshot(observer);
// };

// export const addUserToGroceryList = (userName, groceryListId, userId) => {
//   return db
//     .collection("groceryLists")
//     .doc(groceryListId)
//     .update({
//       users: firebase.firestore.FieldValue.arrayUnion({
//         userId: userId,
//         name: userName,
//       }),
//     });
// };

// export const addGroceryListItem = (item, groceryListId, userId) => {
//   return getGroceryListItems(groceryListId)
//     .then((querySnapshot) => querySnapshot.docs)
//     .then((groceryListItems) =>
//       groceryListItems.find(
//         (groceryListItem) =>
//           groceryListItem.data().name.toLowerCase() === item.toLowerCase()
//       )
//     )
//     .then((matchingItem) => {
//       if (!matchingItem) {
//         return db
//           .collection("groceryLists")
//           .doc(groceryListId)
//           .collection("items")
//           .add({
//             name: item,
//             created: firebase.firestore.FieldValue.serverTimestamp(),
//             createdBy: userId,
//           });
//       }
//       throw new Error("duplicate-item-error");
//     });
// };
// export default firebase;
