"use client";
import React, { useState } from "react";
import { EmailLogo } from "./EmailLogo";
import { PhoneLogo } from "./PhoneLogo";
import { LinkedinLogo } from "./LinkedinLogo";
import { GithubLogo } from "./GithubLogo";
import { Modal } from "@/components/ui/Modal";
import { EmailModal } from "./EmailModal";
import { Toast } from "@/components/ui/Toast";

function Contact() {
  const [isTelModalOpen, setIsTelModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSent, setIsSent] = useState<0 | 1 | 2>(0);

  const onCloseModal = () => {
    setIsEmailModalOpen(false);
  };

  const onSendEmailResponse = (responseCode: 1 | 2) => {
    setIsSent(responseCode);
    setTimeout(() => {
      setIsSent(0);
    }, 3000);
  };

  return (
    <div>
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
      <div className="mt-40 text-center animate-fadeIn">
        <p className="text-6xl font-serif">Contact me!</p>
        <p className="text-1xl font-serif">
          Let&apos;s talk about our next project
        </p>
      </div>
      <div className="flex justify-center space-x-5 mt-32 relative w-full">
        <div className="z-50">
          <Modal
            isOpen={isTelModalOpen}
            onClose={() => setIsTelModalOpen(false)}
          >
            <p className="text-black"> This is my tel 0736630095</p>
          </Modal>
        </div>
        <div
          className="z-50"
          onClick={() => setIsEmailModalOpen(!isEmailModalOpen)}
        >
          <EmailModal
            isOpen={isEmailModalOpen}
            onCloseModal={onCloseModal}
            onSendEmailResponse={onSendEmailResponse}
          />
        </div>
        <div className="cursor-pointer relative transform transition-transform duration-400 hover:scale-110">
          <a
            href="https://www.linkedin.com/in/soroush-sajadi-89854811a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo />
          </a>
        </div>

        <div
          onClick={() => setIsEmailModalOpen(true)}
          className="cursor-pointer relative transform transition-transform duration-400 hover:scale-110"
        >
          <EmailLogo />
        </div>
        <div
          className="cursor-pointer relative transform transition-transform duration-400 hover:scale-110"
          onClick={() => setIsTelModalOpen(true)}
        >
          <PhoneLogo />
        </div>
        <div className="cursor-pointer relative transform transition-transform duration-400 hover:scale-110">
          <a
            href="https://github.com/soroush-sajadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
