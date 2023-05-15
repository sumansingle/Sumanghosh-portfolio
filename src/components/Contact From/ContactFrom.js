import React, { useState } from 'react';
import '../Contact From/ContactFrom.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name, email, text);
    // Perform additional logic here, such as sending data to a server
    setSubmitted(true);
  };

  const submitData = async (event) => {
    event.preventDefault();
    const nameValue = name;
    const emailValue = email;
    const textValue = text;
    if(nameValue && emailValue && textValue){
    const res = fetch('https://from-portfolio-default-rtdb.firebaseio.com/userDataRecords.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        text: textValue,
      }),
    });
    if(res){
        setSubmitted(true);
    }else{
        alert("pls fill the from")
    }
}else{
    alert("pls fill the from")
}
  };

  return (
    <div className="form-container">
      <h2>Contact With me</h2>
      {submitted ? (
        <p className="success-message">Form submitted successfully!</p>
      ) : (
        <form method='POST'>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="text">Message:</label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" onClick={submitData}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
