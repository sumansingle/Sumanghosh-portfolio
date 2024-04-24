import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import "../Name/examples.css";
import { Button, TextField, Typography } from "@mui/material";

function Examples() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const typed = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Devoloper",
        "UI-UX Designer",
        "Fronend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      onStringTyped: (arrayPos, self) => {
        setRole(self.strings[arrayPos]);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-section-sub-heading">
      <Typography variant="h4">
        Hi there. I am Suman Ghosh. I am a <span className="role">{role}</span>
      </Typography>
    </div>
  );
}

export default Examples;
