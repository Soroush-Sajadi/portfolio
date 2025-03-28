import React, { useState } from "react";
import { GithubLogo } from "./GithubLogo";
import { LinkedinLogo } from "./LinkedinLogo";
import emailjs from "emailjs-com";
import { Toast } from "@/components/ui/Toast";

export const Message = () => {
  const [isSent, setIsSent] = useState<1 | 2 | 0>(0);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0pyis18",
        "template_q8fu2wr",
        e.target as HTMLFormElement,
        "-ZLFTVmQtKSkwjKQm"
      )
      .then(
        (res) => {
          setIsSent(1);
          <Toast
            message="Thanks for your message! I'll get back to you soon."
            type="success"
          />;
        },
        () => {
          setIsSent(2);

          <Toast
            message="Your email failed to send. Please try again."
            type="error"
          />;
        }
      );
    setIsSent(0);
  };
  return (
    <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
      <div className="mt-40 text-center animate-fadeIn">
        <p className="text-6xl font-serif">Contact me!</p>
        <p className="text-1xl font-serif">
          Let&apos;s talk about our next project
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form onClick={(e) => e.stopPropagation()} onSubmit={sendEmail}>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="email"
                  name="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required={true}
                  name="message"
                ></textarea>
              </div>
              <div className="flex justify-between mt-12">
                <div className="underline">
                  <a
                    href="mailto:soorooshsadjadee@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send me email directly
                  </a>
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end mt-12 ">
            <h1 className="text-3xl font-bold">Email</h1>
            <a className="mb-12 mt-4 font-semibold text-blue-700 block uppercase">
              soorooshsadjadee@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a className="mt-4 mb-12 md:text-right font-semibold text-blue-700 block uppercase">
              Jhilmil Colony, DelhiIndia
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              <a
                href="https://www.linkedin.com/in/soroush-sajadi-89854811a"
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
              >
                <LinkedinLogo />
              </a>
              <a
                href="https://github.com/soroush-sajadi"
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
              >
                <GithubLogo />
              </a>
            </ul>
          </div>
        </div>
      </div>
      {isSent === 1 ? (
        <Toast
          message="Thanks for your message! I'll get back to you soon."
          type="success"
        />
      ) : isSent === 2 ? (
        <Toast
          message="Your email failed to send. Please try again."
          type="error"
        />
      ) : null}
    </div>
  );
};
