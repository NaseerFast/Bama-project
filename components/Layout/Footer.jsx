// import { Text, TextLink } from '@/components/Text';
// import { ThemeSwitcher } from '@/components/ThemeSwitcher';
// import styles from './Footer.module.css';
// import Spacer from './Spacer';
// import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <>
      {/* <Text color="accents-7">
          Made with ❤️, 🔥, and a keyboard by{' '}
          <TextLink href="https://hoangvvo.com/" color="link">
            Hoang Vo
          </TextLink>
          .
        </Text> */}

      <footer className=" bg-green-50 bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://bampower.ng/" className="hover:underline">
            BAM-POWER
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
