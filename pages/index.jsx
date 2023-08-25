// import { Index } from '@/page-components/Index/index';

// const IndexPage = () => {
//   return <Index />;
// };

// export default IndexPage;
import Head from 'next/head';
import Hero from '../page-components/UI/hero';
// import Navbar from '../page-components/UI/navbar';
import SectionTitle from '../page-components/UI/sectionTitle';

import { statementOne, benefitTwo } from '../page-components/UI/data';
// import Video from '../page-components/UI/video';
import Benefits from '../page-components/UI/benefits';
import Statements from '../page-components/UI/statements';
// import Footer from '../page-components/UI/footer';
import Testimonials from '../page-components/UI/testimonials';
import Cta from '../page-components/UI/cta';
import Faq from '../page-components/UI/faq';
import PopupWidget from '../page-components/UI/popupWidget';
import HeroTwo from '@/page-components/Hero2';
import { useState, useEffect } from 'react';

const IndexPage = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial width
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Head>
        <title>BAM-POWER - Job Creation & Skill empowerment Program</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}
      <div>
      {windowWidth <= 768 ? (
        <HeroTwo />
      ) : (
        <div><Hero /> </div>
      )}
    </div>
      
      {/* */}
      {/* <SwiperHero /> */}
      <SectionTitle title=" ABOUT BAM-POWER">
        <span className="w-full text-justify">
          BAM-POWER will be making smart and effective investments in people’s
          education, which is critical for developing the human capital that
          will end extreme poverty and illiteracy. At the core of this strategy
          is the need to tackle the learning crisis, put an end to Insecurity
          and Learning Poverty, and help youth acquire the advanced cognitive,
          socioemotional, technical and digital skills they need to succeed in
          today’s world.
        </span>
      </SectionTitle>
      {/* <Benefits data={benefitOne} /> */}
      <Statements data={statementOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      <SectionTitle pretitle="" title="Testimonials"></SectionTitle>
      <Testimonials />
      <SectionTitle title="Frequently Asked Questions"></SectionTitle>
      <Faq />
      <Cta />
      {/* <Footer /> */}
      <PopupWidget />
    </>
  );
};

export default IndexPage;
