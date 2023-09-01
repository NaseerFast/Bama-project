import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delayed redirection after 3 seconds
    const timeout = setTimeout(() => {
      router.push('/destination-page'); // Replace 'destination-page' with the actual destination
    }, 3000);

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before redirection
    };
  }, [router]);

  return (
    <div>
      <p>This is a redirect page. You will be redirected shortly...</p>
    </div>
  );
};

export default RedirectPage;
