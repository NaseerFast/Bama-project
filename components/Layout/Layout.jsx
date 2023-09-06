import Head from 'next/head';
import Footer from './Footer';
// import Footer from '../../page-components/UI/footer'
import styles from './Layout.module.css';
import Nav from './Nav';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>BAM-POWER</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          property="og:title"
          content="BAM-Power: Empowering Youth in Bama, Borno State"
        />
        <meta
          property="og:description"
          content="BAM-Power is a strategic initiative focused on educating and empowering young people and children across Bama Local Government Area in Borno State."
        />
        <meta property="og:image" content="URL_to_your_image.jpg" />
        <meta property="og:url" content="URL_to_your_webapp" />

        <meta
          property="og:title"
          content="BAM-Power: Empowering Youth in Bama, Borno State"
        />
        <meta
          property="og:description"
          content="BAM-Power is a strategic initiative focused on educating and empowering young people and children across Bama Local Government Area in Borno State."
        />
        <meta property="og:image" content="URL_to_your_image.jpg" />
        <meta property="og:url" content="URL_to_your_webapp" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha384-0v/uFCEbAQv8IfInUpHSmZHlpjx5F5Tqf5n5u6MTf3jHp8kO4Ck5Bd2jYr5b8Jzq5"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      {/* <Footer />
      <Footer /> */}
      <Footer />
    </>
  );
};
export default Layout;
