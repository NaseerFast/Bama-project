import Image from "next/image";
import React from "react";
import Container from "./container";
import { Button } from "@/components/Button";

const Statements = (props) => {
  const { data } = props;

  
const paragraphs1 = ["Paragraph 1 content...", "Paragraph 2 content..."];
const paragraphs2 = ["Paragraph 1 content...", "Paragraph 2 content..."];
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap overflow-y-auto">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              src={data.image}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              {/* <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p> */}
            </div>

            <div className="w-full mt-5 ">
              {data.paragraphs.map((item, index) => (
                <Statement key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Statement>
              ))}

{/* <button
            htmlType="submit"
            // className={styles.submit}
            className="px-4 py-2 text-lg font-medium text-center text-white bg-green-600 hover:bg-green-500 rounded-md "
            size="large"
            // loading={isLoading}
          >
           Read More
          </button> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Statement(props) {
    
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        {/* <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-green-50",
          })}
        </div> */}
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-lg  dark:text-gray-300">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Statements;
