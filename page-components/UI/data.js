import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Employment Opportunities",
      desc: "Gain access to diverse job openings that match your skills and interests, fostering financial independence.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Skill Enhancement",
      desc: "Acquire new skills and improve existing ones through specialized training, enhancing your marketability.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Empowerment Workshops",
      desc: "Participate in workshops that empower you with valuable life skills, boosting your confidence and personal growth.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Networking Platform:",
      desc: "Connect with a community of like-minded individuals, mentors, and professionals, expanding your network for future collaborations.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Industry Insights",
      desc: "Receive industry-specific knowledge, staying informed about trends and advancements in your field.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Financial Empowerment",
      desc: "Experience improved financial stability with earned income and newfound skills for future income generation. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
