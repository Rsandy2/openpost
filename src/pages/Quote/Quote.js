import React, { useState, useEffect } from "react";

// import * as FirestoreFunc from "../services/firestore";
import firebase from "../../services/firestore";
import QuoteCard from "../../components/QuoteCard";

export default function Quote() {
  // const quotes = [
  //   ".",
  //   "Yes.",
  //   "What?",
  //   "Peanut butter on.",
  // ];

  const [quotes, setquotes] = useState([]);
  const db = firebase.firestore();
  const getQuotes = async () => {
    const quotesRef = db.collection("Quotes");
    quotesRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setquotes(items);
      console.log(items);
    });
  };
  // const snapshot = await quotesRef.get();
  // setquotes({ items: snapshot });
  // snapshot.forEach((doc) => {
  //   console.log(doc.id, "=>", doc.data());
  //   // setquotes(JSON.stringify(doc.data()));
  //   // setquotes((doc) => [...quotes, doc.data]);
  //   // doc.map((item) => setquotes(item));
  //   // setquotes((quotes) => [...quotes, doc.data]);
  // });

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      {quotes.map((quote) => (
        <div>
          <QuoteCard
            Title={quote.Title}
            Image={quote.Image}
            Message={quote.Message}
          />
        </div>
      ))}

      {/* {JSON.stringify(quotes)}
       */}
      {/* {quotes["items"][1]} */}
    </div>
  );
}
