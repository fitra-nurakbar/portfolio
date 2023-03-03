import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxFEh2x1Icu8F1JXu6DJPOkr_TYqjL0vpzRs6wMJ036i31KwSzAGUyBRg9pMLaHy8_H/exec";

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formValues.name);
    data.append("email", formValues.email);
    data.append("message", formValues.message);

    const formData = new FormData();
    for (const [key, value] of data.entries()) {
      formData.append(key, value);
    }

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Success response
          console.log("Success!");
        } else {
          // Error response
          console.error("Error!");
        }
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <>
      <h2>Contact Us</h2>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handlerChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handlerChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={formValues.message}
          onChange={handlerChange}
          cols={30}
          rows={10}
          required
        ></textarea>

        <button type="submit">Send message</button>
      </form>
    </>
  );
}
