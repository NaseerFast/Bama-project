// import { Feed } from '@/page-components/TestFeed';

import { Feed } from '@/page-components/TestUpload/index';
import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Applicant Page</title>
      </Head>
      <Feed />
    </>
  );
};

export default FeedPage;
