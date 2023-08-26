import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/children2.jpeg";
import benefitTwoImg from "../../public/img/older-woman.jpg";

const benefitOne = {
  title: "PROBLEM ADDRESSING",
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
      icon: <HeartIcon />,
    },
    {
      title: "Empowerment Workshops",
      desc: "Participate in workshops that empower you with valuable life skills, boosting your confidence and personal growth.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "OBJECTIVES AND STRATEGY",
  desc: "Discover Our Goals: Empowering Education, Youth Support, and Digital Literacy Enhancement.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Get children back to school",
      desc: "Systemic reform throughout the education cycle and investment in early childhood education.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Help at risk children and improve service delivery",
      desc: "Strengthen capacity, adapt, and learn problem solving skills, drive results at gross root level and catch them young.",
      icon: <HeartIcon />,
    },
    {
      title: "Enhance digital literacy skill among children and youths of Bama LGA",
      desc: "Supporting and promoting the growth of innovative educational system and creating a digital literacy youth corps to help feed the under-served communities. ",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const statementOne = {
  title: "PROBLEM ADDRESSING",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitTwoImg,
  paragraphs: [
    {
      
      
      desc: "The Sustainable Development Report rankings of countries achievement of SDG goals ranked Nigeria 146 out of 166 countries with total overall performance put at 54.3%. The report also indicates that major challenges remain in the area of SDG4 “Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      
    },
    {
      
      desc: "Bama Local Government Area is one of the worst hit local government area during the uprising of the Boko Haram/ISWAP insurgency in the state. Bama Local Government educational facilities suffered a colossal loss of critical infrastructures like schools and so many teachers lost in the entire local government area, which in turn affect negatively on the educational progress of the children and youths of the area. The massive and growing global challenge of having so many children living in conflict and violent situations requires a response at the same scale and scope.",
      
    },
    {
      
      desc: "Youth have also suffered a loss in human capital in terms of both skills and jobs. In Borno state, these declines in youth employment were more than twice as large as the declines in adult employment. As a result, this generation of students, and especially the more disadvantaged, may never achieve their full education and earnings potential. Inability to afford digital infrastructure and the lack of adequate information technology support. ",
     
    },
    {
      desc: "Adding to these challenges is the negative impact of the unprecedented global economic contraction on family incomes, which increases the risk of school dropouts, and results in the contraction of government budgets and strains on public education spending",
    },
    {
      desc: "In addition, to address the challenges faced in achieving Sustainable Development Goal 4 (SDG4), which is to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. ",
    },
    {
      desc: "BAM-Power is an emergency and supporting actions to recover lost time through remedial and accelerated learning. Ensure that children have more time and opportunities to practice reading and writing for building better more equitable and resilient education system.",
    },
  {
    desc: "BAM-Power, also empowering youths and creating jobs, by engaging graduates of Bama extraction for a stipulated contract period to be train and deployed to various schools in the local government in order to complement and bridge the gap in the existing schools work force."
  }
  ],
};
export {statementOne, benefitTwo};
