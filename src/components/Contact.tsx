import React, { useState } from "react";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
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
          setLoading(false);
          setResponse(true);
          setShowModal(true);
          setFormValues({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setLoading(false);
          setResponse(false);
          setShowModal(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setResponse(false);
        setShowModal(true);
      });
  };

  return (
    <section className={styles.container}>
      {loading ? <Loading /> : ""}
      {showModal ? (
        <Modal response={response} onClose={() => setShowModal(false)} />
      ) : (
        ""
      )}
      <h2>contact us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
        natus!
      </p>
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
          rows={5}
          required
        ></textarea>
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
