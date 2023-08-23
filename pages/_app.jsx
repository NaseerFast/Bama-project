import '@/assets/base.css';
import '../styles/globals.css';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
         <Head>
      <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
          />
          
          </Head>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ThemeProvider>
  );
}
