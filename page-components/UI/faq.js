import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is the B-Empowerment Program by Bama Local Government?",
    answer: "The B-Empowerment Program is a skill empowerment and job creation initiative designed to provide individuals with training, resources, and employment opportunities, facilitated by the Bama Local Government.",
  },
  {
    question: "Who is eligible to join the B-Empowerment Program?",
    answer: "The program is open to individuals within the Bama Local Government area seeking skill enhancement and employment opportunities, irrespective of their background or experience.",
  },
  {
    question: "How do I apply for the B-Empowerment Program? ",
    answer:
      "Applications can be submitted through our online portal during open enrollment periods. Keep an eye out for announcements on the Bama Local Government website and social media channels.",
  },
  {
    question: " Is there an age limit for program participation? ",
    answer:
      "The B-Empowerment Program aims to cater to a wide range of age groups. While there is no strict age limit, specific programs may have age-related criteria that applicants need to meet.",
  },
];

export default Faq;