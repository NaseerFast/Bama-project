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

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>B-Empowerment - Job Creation & Skill empowerment Program</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}
      {/* <Hero /> */}
      <SectionTitle pretitle="About" title="  Empower, Learn, Succeed">
      BAM Power will be making smart and effective investments in people’s education, which is critical for developing the human capital that will end extreme poverty and illiteracy. At the core of this strategy is the need to tackle the learning crisis, put an end to Insecurity and Learning Poverty, and help youth acquire the advanced cognitive, socioemotional, technical and digital skills they need to succeed in today’s world.

      </SectionTitle>
      {/* <Benefits data={benefitOne} /> */}
      <Statements data={statementOne}/>
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      <SectionTitle pretitle="Testimonials" title="Here's what  people said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      {/* <Footer /> */}
      <PopupWidget />
    </>
  );
};

export default AboutPage;
