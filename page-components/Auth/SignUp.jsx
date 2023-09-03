import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import { TextLink } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import styles from './Auth.module.css';
import Select from '@/components/Input/Select';
import DateInput from '@/components/Input/DateInput';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const genderRef = useRef();
  const dateofbirthRef = useRef();
  const phoneRef = useRef();
  const residentialaddressRef = useRef();
  const qualificationtypeRef = useRef();
  const instituitionRef = useRef();
  const yearofgraduationRef = useRef();
  const courseRef = useRef();
  const idtypeRef = useRef();
  const idnumberRef = useRef();
  
  // const { mutate } = useCurrentUser();

  const [isLoading, setIsLoading] = useState(false);
 
  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();

  const router = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) router.replace('/login');
  }, [user, router, isValidating]);

  
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const response = await fetcher('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            username: usernameRef.current.value,
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            gender: genderRef.current.value,
            dateofbirth: dateofbirthRef.current.value,
            phone: phoneRef.current.value,
            residentialaddress: residentialaddressRef.current.value,
            qualification: qualificationtypeRef.current.value,
            instituition: instituitionRef.current.value,
            yearofgraduation:yearofgraduationRef.current.value,
            course: courseRef.current.value,
            idtype: idtypeRef.current.value,
            idnumber: idnumberRef.current.value,
          }),
        });
        mutate({ user: response.user }, false);
        toast.success('Your account has been created, please verify your account in settings!', {
          duration: 6000,
        });
        router.replace(`/user/${usernameRef.current.value}`);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate, router]
  );


  const gender = [
    { label: 'Gender', value: 'Gender' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const qualification = [
    { label: 'Qualification Type', value: '' },
    { label: 'MSC', value: 'MSC' },
    { label: 'BSC', value: 'BSC' },
    { label: 'NCE', value: 'NCE' },
  ];

  const idtype = [
    { label: 'ID Type', value: '' },
    { label: 'NATIONAL ID', value: 'NIN' },
    { label: 'DRIVERS LISCENCE', value: 'LISCENCE' },
    { label: 'OTHER', value: 'OTHER' },
  ];

  // const district = [
  //   { label: 'District', value: '' },
  //   { label: 'Bama(Rural) District', value: 'BAMA-RURAL' },
  //   { label: 'Bama Town', value: 'BAMA-TOWN' },
  //   {label:  'Amchaka District', value: 'AMCHAKA'},
  //   { label: 'Dar-eljamal District', value: 'DAR-ELJAMAL' },
  //   { label: 'Gulumba District', value: 'GULUMBA' },
  //   { label: 'Soye District', value: 'SOYE' },
  //   {label:  'Woloji District', value: 'WOLOJI'},

  // ];
  return (
    <Wrapper className={styles.root}>
      <div className={styles.main}>
        <h3 className={styles.title}>Application Form</h3>
        <form onSubmit={onSubmit}>
          <Container alignItems="center">
            <p className={styles.subtitle}> login details</p>
            <div className={styles.seperator} />
          </Container>
          <Input
            ref={emailRef}
            htmlType="email"
            autoComplete="email"
            placeholder="Email Address"
            ariaLabel="Email Address"
            size="large"
            required
          />
          <Spacer size={0.5} axis="vertical" />
          <Input
            ref={passwordRef}
            htmlType="password"
            autoComplete="new-password"
            placeholder="Password"
            ariaLabel="Password"
            size="large"
            required
          />
          <Spacer size={0.75} axis="vertical" />
          <Container alignItems="center">
            <p className={styles.subtitle}>Personal Information</p>
            <div className={styles.seperator} />
          </Container>
          <Input
            ref={usernameRef}
            autoComplete="username"
            placeholder="Username"
            ariaLabel="Username"
            size="large"
            required
          />
          <Spacer size={0.5} axis="vertical" />
          <Input
            ref={firstnameRef}
            autoComplete="name"
            placeholder="Your First name"
            ariaLabel="Your First name"
            size="large"
            required
          />

         <Spacer size={0.5} axis="vertical" />
          <Input
            ref={lastnameRef}
            autoComplete="name"
            placeholder="Your Last Name"
            ariaLabel="Your Lname"
            size="large"
            required
          />
          <Spacer size={1} axis="vertical" />

          <Select
            ref={genderRef}
            options={gender}
            autoComplete="name"
            placeholder="Your Gender"
            ariaLabel="Select "
            size="large"
            required
          />
          <Spacer size={1} axis="vertical" />

          <DateInput
            label="Date of birth"
            placeholder="YYYY-MM-DD"
            autoComplete="off"
            ref={dateofbirthRef}
            required
          />
          
          <Spacer size={1} axis="vertical" />
          <Input
            ref={phoneRef}
            autoComplete="phone"
            placeholder="Your Phone Number"
            ariaLabel="Your Phone Number"
            size="large"
            required
          />
           <Spacer size={1} axis="vertical" />
            
           <Input
            ref={residentialaddressRef}
            autoComplete="address"
            placeholder="Your residential address"
            ariaLabel="Your address"
            size="large"
            required
          />
{/*           
           <Spacer size={1} axis="vertical" />
           <Select
            ref={districtRef}
            options={district}
            autoComplete="district"
            placeholder="Your District"
            ariaLabel="Select "
            size="large"
            required
          /> */}
          <Spacer size={1} axis="vertical" />

          <Container alignItems="center">
            <p className={styles.subtitle}> Educational details</p>
            <div className={styles.seperator} />
          </Container>
          <Select
            ref={qualificationtypeRef}
            options={qualification}
            autoComplete="district"
            placeholder="Your Highest Qualification"
            ariaLabel="Select "
            size="large"
            required
          />
          <Spacer size={1} axis="vertical" />

          <Input
            ref={instituitionRef}
            autoComplete="instituition"
            placeholder="Instituition"
            ariaLabel="Your Instituition"
            size="large"
            required
          />
           <Spacer size={1} axis="vertical" />

           <Input
            ref={courseRef}
            autoComplete="course"
            placeholder="Course"
            ariaLabel="Your Course"
            size="large"
            required
          />
           <Spacer size={1} axis="vertical" />

           <Input
            ref={yearofgraduationRef}
            autoComplete="Year of Graduation"
            placeholder="Year of Graduation"
            ariaLabel="Your Year of Graduation"
            size="large"
            required
          />
           <Spacer size={1} axis="vertical" />

           <Container alignItems="center">
            <p className={styles.subtitle}> ID details</p>
            <div className={styles.seperator} />
          </Container>
           <Select
            ref={idtypeRef}
            options={idtype}
            autoComplete="idtype"
            placeholder="ID type "
            ariaLabel="Select "
            size="large"
            required
          />
          <Spacer size={1} axis="vertical" />

          <Input
            ref={idnumberRef}
            autoComplete="ID Number "
            placeholder="Eg: NIN"
            ariaLabel="Eg: NIN"
            size="large"
            required
          />
           <Spacer size={1} axis="vertical" />
          <Button
            htmlType="submit"
            className={styles.submit}
            type="success"
            size="large"
            loading={isLoading}
          >
            Submit
          </Button>
        </form>
      </div>
      <div className={styles.footer}>
        <Link href="/login" passHref>
          <TextLink color="link" variant="highlight">
            Already have an account? Log in
          </TextLink>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SignUp;
