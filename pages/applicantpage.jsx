// import { Feed } from '@/page-components/TestFeed';

import ApplicationPoster from '@/page-components/ApplicantPage/ApplicationPoster';
import { Feed } from '@/page-components/TestUpload/index';
import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Applicant Page</title>
      </Head>
      <ApplicationPoster />
      <Feed />
    </>
  );
};

export default FeedPage;
