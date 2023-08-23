import Head from 'next/head';
import Hero from '../page-components/UI/hero';
// import Navbar from '../page-components/UI/navbar';
import SectionTitle from '../page-components/UI/sectionTitle';

import { benefitOne, benefitTwo } from '../page-components/UI/data';
// import Video from '../page-components/UI/video';
import Benefits from '../page-components/UI/benefits';
// import Footer from '../page-components/UI/footer';
import Testimonials from '../page-components/UI/testimonials';
import Cta from '../page-components/UI/cta';
import Faq from '../page-components/UI/faq';
import PopupWidget from '../page-components/UI/popupWidget';

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}
      <Hero />
      <SectionTitle pretitle="About" title="  Empower, Learn, Succeed">
        The B-Empowerment Program is the cornerstone of job creation and skill
        empowerment initiated by the Bama Local Government. We are committed to
        uplifting individuals by providing them with the tools and opportunities
        to build a prosperous future. Join us in our mission to empower,
        elevate, and enrich the community through skills and jobs.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what  people said"
      >
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

export default Home;
