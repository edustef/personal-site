import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";

function ContactPage() {
  const [submitFlash, setSubmitFlash] = useState(null);

  function sendEmail(e) {
    setSubmitFlash(<div className="donutSpinner m-4"></div>);
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_IdWvxZeI",
        e.target,
        "user_Heb71wyjyHn2VNrM4OIhm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitFlash(
            <p className="bg-green-300 my-4 p-2 font-semibold">
              {" "}
              Message send successfully!
            </p>
          );
        },
        (error) => {
          console.log(error.text);
          setSubmitFlash(
            <p className="bg-red-300 my-4 p-2 font-semibold">
              {" "}
              Message send successfully!
            </p>
          );
        }
      );
  }

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <div className="mx-auto md:w-1/2">
          <h1 className="my-6 text-2xl font-bold">Get in touch</h1>
          <form onSubmit={sendEmail}>
            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="name"
            >
              Name
            </label>

            <input
              className="w-full mb-6 form-input"
              id="name"
              name="name"
              placeholder="Bill Murray"
              type="text"
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor=""
            >
              Email
            </label>

            <input
              className="w-full mb-6 form-input"
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
              required
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="message"
            >
              Message
            </label>

            <textarea
              className="w-full mb-6 form-textarea"
              id="message"
              name="message"
              placeholder="Say something..."
              rows="8"
            />

            <button
              type="submit"
              value="Send"
              data-content="Submit"
              className="text-lg no-underline text-left text-center mr-2 mt-4 p-5 md:p-2 border-2 slideUpBtn hover:border-gray-600"
            >
              <span>Submit</span>
            </button>
            <button
              type="reset"
              value="Reset"
              className="text-md no-underline text-left text-center mx-2 mt-4 p-5 md:p-2 border-2 snapLeftBtn self-start"
              data-content="Reset"
            >
              <span>Reset</span>
            </button>
            {submitFlash}
          </form>
          <div className="my-12">
            <a
              href="https://www.github.com/edustef"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-12"
            >
              <FaGithub className="inline mr-2" />
              GitHub
            </a>
            <a
              href="https://www.instagram.com/eduard.stefan.142/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-12"
            >
              <FaInstagram className="inline mr-2" />
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="m-12"
            >
              <FaYoutube className="inline mr-2" />
              YouTube
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
