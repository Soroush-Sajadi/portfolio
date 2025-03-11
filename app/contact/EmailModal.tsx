import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Loading } from "@/components/ui/Loading";

import emailjs from "emailjs-com";

interface EmailModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onSendEmailResponse: (code: 1 | 2) => void;
}
export const EmailModal = ({
  isOpen,
  onCloseModal,
  onSendEmailResponse,
}: EmailModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0pyis18",
        "template_q8fu2wr",
        e.target as HTMLFormElement,
        "-ZLFTVmQtKSkwjKQm"
      )
      .then(
        () => {
          setIsLoading(false);
          onCloseModal();
          onSendEmailResponse(1);
        },
        () => {
          setIsLoading(false);
          onCloseModal();
          onSendEmailResponse(2);
        }
      );
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <p className="text-black text-center text-[1.4rem] font-serif">
          Send me an email
        </p>
        <form
          className="flex flex-col space-y-5 w-[40rem]"
          onClick={(e) => e.stopPropagation()}
          onSubmit={sendEmail}
        >
          {isLoading && <Loading />} ;
          <input
            className="h-[3rem] shadow-lg font-serif text-black pl-4 focus:outline-none"
            placeholder="Your email"
            name="name"
          />
          <input
            className="h-[3rem] shadow-xl font-serif text-black pl-4 focus:outline-none"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="h-[7rem] shadow-xl font-serif text-black pl-4 pt-2 focus:outline-none"
            placeholder="Message"
            name="message"
          />
          <button className="text-black bg-[#25D366] mt-4 px-4 py-2 rounded hover:bg-[#28e070]">
            Send
          </button>
        </form>
      </Modal>
    </div>
  );
};
