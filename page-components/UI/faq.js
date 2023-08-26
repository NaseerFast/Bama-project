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
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    <ul className="list-disc">
                    {item.points && item.points.map((i, index) => (
                      <li className="list">{i.itemText}</li>
                    ))}
                    </ul>
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
    question: "What is BAM-power programme?",
    answer: "BAM-Power is an education empowerment programme design by Hon. Grema Terab the Executive Transition Committee Chairman, is a programme that aims to help graduates, students from Bama LGA succeed in school, and beyond by providing them with the resources and support they need. This programme offers a variety of services, such as tutoring, mentoring, financial assistance, and career counseling.",
  },
  {
    question: "Who is eligible to join the BAM-POWER Programme?",
    answer: "Eligibility requirements for this programme is that, you must be a graduate or NCE Holder. Indigene of Bama LGA who are unemployed.",
  },
  {
    question: "How do I register for the education empowerment programme?",
    answer:
      "To register for the programme, just log on to www.bampower.ng or go to the Department of Information Bama LGA Secretariat with your credentials.",
  },
  {
    question: "What are the benefits of participating in BAM-Power programme?",
    answer:"There are many benefits to participating in this programme just to mention but a few.",
    points:[
      {
      itemText:'Financial assistance: BAM-Power programme offer financial incentive to help participants earn a monthly stipend of 20k every month for the duration of engagement.',  
    },
    {
      itemText:'Development of essential skills: This programme can help participants develop the skills they need to succeed in the workplace, such as critical thinking, problem solving, and communication skills.',  
    },
    {
      itemText:'Improved social and emotional skills: This programme can help participants develop the social and emotional skills they need to succeed in school, work and life, such as conflict resolution, teamwork, and decision-making skills.',  
    },
    {
      itemText:'Increased civic engagement: BAM-Power can help you become more engaged in your community. You can use your knowledge and skills to make a difference in the world.',  
    }
    ]
  },
  {
    question: "What is the duration of the Programme?",
    answer: "The programme timeline for each set is 3 months.",
  },
  {
    question: "How can I make the most of BAM-Power programme?",
    answer: "There are a number of things you can do to make the most of BAM-Power programme. First, be sure to attend all of the programme's activities and workshops. Second, take advantage of the programme's resources, such as tutoring and mentoring. Third, build relationships with the programme's staff and other participants. Finally, stay motivated and focused on your goals."
  },
  {
    question: "What is the cost of participating?",
    answer: "BAM-Power is 100% free of any charges from application to onboarding."
  }
];

export default Faq;
