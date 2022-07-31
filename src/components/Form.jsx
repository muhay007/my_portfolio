import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61icgcl",
        "template_r23llsq",
        form.current,
        "wHba8QVUS00z4vxGk"
      )
      .then(
        (result) => {
          const MySwal = withReactContent(Swal);

          MySwal.fire({
            icon: "success",
            text: "Message Sent!",
            target: "#custom-target",
            customClass: {
              container: "absolute ",
            },
            toast: true,
            position: "center",
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-4/5 p-4 relative " id="custom-target">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6 ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Lou Bloom"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whynot@gg.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="resize-none overflow-auto block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          className="text-white inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
