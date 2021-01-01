import React, { useState } from "react";
import { useForm } from "react-cool-form";
import QuoteCard from "../../components/QuoteCard";

import firebase from "../../services/firestore";
import "./CreateQuotes.scss";
export default function CreateQuotes() {
  const [data, setdata] = useState("");

  const [Title, setTitle] = useState(" ");
  const [Image, setImage] = useState(" ");
  const [Message, setMessage] = useState(" ");

  const { form, getState } = useForm({
    defaultValues: { Title: "", Image: "", Message: "" },
    onSubmit: (values) => {
      setdata(JSON.stringify(values));
      //   setImage()
      setTitle(values.Title);
      setImage(values.Image);
      setMessage(values.Message);
      console.log(values);

      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      const quotesRef = db.collection("Quotes").add({
        Title: values.Title,
        Image: values.Image,
        Message: values.Message,
      });
    },
  });
  const errors = getState("errors");

  return (
    <div className="parent">
      <div className="data">{`"Title":"${Title}","Image":"${Image}","Message":"${Message}"`}</div>
      <form className="form-containter" ref={form} noValidate>
        <div className="container">
          <input
            name="Title"
            className="form-input"
            placeholder="Title"
            required
            autocomplete="off"
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
          />

          {errors.Title && <p>{errors.Title}</p>}
        </div>
        <div className="container">
          <input
            name="Image"
            placeholder="Image Link"
            className="form-input"
            autocomplete="off"
            // onChange={(e) => {
            //   setImage(e.target.value);
            // }}
            required
          />
          {errors.Image && <p>{errors.Image}</p>}
        </div>
        <div className="container">
          <input
            name="Message"
            placeholder="Enter Message"
            className="form-input"
            autocomplete="off"
            // onChange={(e) => {
            //   setMessage(e.target.value);
            // }}
            required
          />
          {errors.Message && <p>{errors.Message}</p>}
        </div>
        <input className="form-submit" type="submit" />
      </form>
      <div className="data">{data}</div>

      <QuoteCard Title={Title} Image={Image} Message={Message} />
    </div>
  );
}
