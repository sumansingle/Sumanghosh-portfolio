import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import "../Contact From/ContactFrom.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAFy0DiVadpAiFsECgPGi59xWTVdwBGzE",
  authDomain: "save-my-portfolio-msg.firebaseapp.com",
  databaseURL:
    "https://save-my-portfolio-msg-default-rtdb.asia-southeast1.firebasedatabase.app/portfolio.json",
  projectId: "save-my-portfolio-msg",
  storageBucket: "save-my-portfolio-msg.appspot.com",
  messagingSenderId: "104870590446",
  appId: "1:104870590446:web:362e3491fd53a6b90f80ff",
  measurementId: "G-08TDMXM74T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitData = async (event) => {
    event.preventDefault();
    const nameValue = name;
    const emailValue = email;
    const textValue = text;
    if (nameValue && emailValue && textValue) {
      try {
        const res = await fetch(
          "https://save-my-portfolio-msg-default-rtdb.asia-southeast1.firebasedatabase.app/portfolio.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: nameValue,
              email: emailValue,
              text: textValue,
            }),
          }
        );
        if (res.ok) {
          setSubmitted(true);
        } else {
          alert("Error saving data");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error saving data");
      }
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <div className="form-container">
      <Typography variant="h4">Contact With Me</Typography>
      {submitted ? (
        <Typography variant="body1" className="success-message">
          Form submitted successfully!
        </Typography>
      ) : (
        <form onSubmit={submitData}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default Form;
