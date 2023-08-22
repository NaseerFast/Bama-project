import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Container, Wrapper } from '@/components/Layout';
import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import { useApplicationPages } from '@/lib/application';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import styles from './ApplicantPage.module.css';
import Select from '@/components/Input/Select';
import DateInput from '@/components/Input/DateInput';
import FileUpload from '@/components/Input/FileUpload';

const ApplicationPosterInner = ({ user }) => {
  // const contentRef = useRef();
  const firstnameRef = useRef();
  // const middlenameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const dateofbirthRef = useRef();
  const phoneRef = useRef();
  const residentialaddressRef = useRef();
  const landmarkRef = useRef();
  const qualificationtypeRef = useRef();
  const instituitionRef = useRef();
  const yearofgraduationRef = useRef();
  const qualificationRef = useRef();
  const courseRef = useRef();
  const certificatefileRef = useRef();
  const idtypeRef = useRef();
  const idnumberRef = useRef();
  const idfileRef = useRef();
  

  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useApplicationPages();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await fetcher('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            // content: contentRef.current.value,
            firstname: firstnameRef.current.value,
            // middle: middlenameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            gender: genderRef.current.value,
            dateofbirth: dateofbirthRef.current.value,
            phone: phoneRef.current.value,
            residentialaddress: residentialaddressRef.current.value,
            landmark: landmarkRef.current.value,
            qualification: qualificationtypeRef.current.value,
            instituition: instituitionRef.current.value,
            yearofgraduation:yearofgraduationRef.current.value,
            course: courseRef.current.value,
            certificatefile: certificatefileRef.current.value,
            idtype: idtypeRef.current.value,
            idnumber: idnumberRef.current.value,
            idfile: idfileRef.current.value,


            

           }),
        });
        toast.success('You have posted successfully');
        // contentRef.current.value = '';
        firstnameRef.current.value = '';
        // middlenameRef.current.value = '';
        lastnameRef.current.value = '';
        emailRef.current.value = '';
        genderRef.current.value = '';
        dateofbirthRef.current.value = '';
        phoneRef.current.value = '';
        residentialaddressRef.current.value = '';
        landmarkRef.current.value = '';
        qualificationtypeRef.current.value = '';
        instituitionRef.current.value = '';
        yearofgraduationRef.current.value = '';
        courseRef.current.value = '';
        certificatefileRef.current.value = '';
        idtypeRef.current.value = '';
        idnumberRef.current.value = '';
        idfileRef.current.value = '';

        
        // refresh post lists
        mutate();
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate]
  );
  const gender = [
    { label: 'Gender', value: 'Gender' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const qualification = [
    { label: 'Qualification Type', value: '' },
    { label: 'BSC', value: 'BSC' },
    { label: 'NCE', value: 'NCE' },
  ];

  const idtype = [
    { label: 'ID Type', value: '' },
    { label: 'NATIONAL ID', value: 'NIN' },
    { label: 'DRIVERS LISCENCE', value: 'LISCENCE' },
  ];
  return (
    <div className="container ">
    <form className="application-form " onSubmit={onSubmit}>
      {/* <Container className={styles.poster}> */}
        {/* <Avatar size={40} username={user.username} url={user.profilePicture} /> */}
        
          <div className="form-card">
         <div className="form-group">
            {/* <label htmlFor="firstName">First Name</label> */}
            <Input
              label="First Name"
                ref={firstnameRef}
              className={styles.input}
              placeholder={'first name'}
              ariaLabel={'First Name'}
            />
          </div>
{/* 
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <Input
                ref={middlenameRef}
              className={styles.input}
              placeholder={'Middle Name'}
              ariaLabel={'Middle Name'}
            />
          </div>
*/}
          <div className="form-group">
            {/* <label htmlFor="lasrName">Last Name</label> */}
            <Input
            label="Last Name"
                ref={lastnameRef}
              className={styles.input}
              placeholder={'surname'}
              ariaLabel={'Last Name'}
            />
          </div> 

          
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <Input
            label="Email"
                ref={emailRef}
              className={styles.input}
              placeholder={'yourname@domain.com'}
              ariaLabel={'Email'}
            />
          </div>


          <div className="form-group">
            {/* <label htmlFor="gender">Gender</label> */}
            <Select
            label="Gender"
              ref={genderRef}
              options={gender}
              size="large" // Optional: You can customize the size class
              ariaLabel="Select Box"
              required
              defaultValue="gender" // Optional: Set the default selected value
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="dateofbirth">Date Of Birth</label> */}

            <DateInput
              label="Select a Date"
              placeholder="YYYY-MM-DD"
              autoComplete="off"
              ref={dateofbirthRef}
              required
            />
          </div>


          <div className="form-group">
            {/* <label htmlFor="phone">Phone Number</label> */}
            <Input
              label="Phone Number"
              ref={phoneRef}
              className={styles.input}
              placeholder={'07012674001'}
              ariaLabel={'Phone number'}
            />
          </div>

          </div>

          
        <div className="form-card">
          <h3 className="sub-header">Residential Details</h3>
          <div className="form-group">
            {/* <label htmlFor="residentialAddress">Residential Address</label> */}
            <Input
              placeholder="house address"
              label="Address"
                ref={residentialaddressRef}
              className={styles.input}
              ariaLabel={'Residential Address'}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="landMark">Land Mark </label> */}
            <Input
              label="Closest Landmark"
              ref={landmarkRef}
              className={styles.input}
              placeholder={'nearest bus stop'}
              ariaLabel={'Closest Land Mark'}
            />
          </div>
          {/* ... other experience fields */ }
        </div>

        <div className="form-card">
          <h3 className='sub-header'>Educational Background</h3>
          <div className="form-group">
            {/* <label htmlFor="education">Education</label> */}
            <Select
            label="Education"
               ref={qualificationtypeRef}
              options={qualification}
              size="large" // Optional: You can customize the size class
              ariaLabel="Qualification"
              required
              defaultValue="option2" // Optional: Set the default selected value
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="Institution">Institution</label> */}
            <Input
             label="Instituition"
                ref={instituitionRef}
              className={styles.input}
              placeholder={'name of instituition '}
              ariaLabel={'Name of instituition'}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="courseOfStudy">Course Of Study</label> */}
            <Input
             label="Course of Study"
                ref={courseRef}
              className={styles.input}
              placeholder={'course of study '}
              ariaLabel={'Course Of Study'}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="yearOfGraduation">Year of Graduation</label> */}
            <Input
                ref={yearofgraduationRef}
                label="Year of Graduation"
              className={styles.input}
              placeholder={'year graduated '}
              ariaLabel={'Year of Graduation'}
            />
          </div>

          <div className="form-group">
         {/* <label htmlFor="crt">Upload Certificate </label>  */}
            <FileUpload
              ref={certificatefileRef}
              label="Upload your Certificate"
              htmlType="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                // Do something with the selected file
              }}
            />
          </div>
          { /* ... other education fields */}
   
</div>

        <div className="form-card">
          <h3 className='sub-header'>Identification</h3>
          <div className="form-group">
            <Select
              ref={idtypeRef}
              options={idtype}
              size="large" // Optional: You can customize the size class
              ariaLabel="Type of ID"
              required
              defaultValue="option2" // Optional: Set the default selected value
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="idNumber">ID Number </label> */}
            <Input
            label="ID Number"
                ref={idnumberRef}
              className={styles.input}
              placeholder={'ID number  '}
              ariaLabel={'ID Number'}
            />
          </div>
          <div className="form-group">
          <label htmlFor="idNumber">Upload ID </label> *
            <FileUpload
              ref={idfileRef}
              label="Upload your ID"
              htmlType="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                // Do something with the selected file
              }}
            />
          </div>    
               {/* <div className="form-card">
          <h2>Identification</h2>
          <div className="form-group">
            <Select
              ref={idtypeRef}
              options={idtype}
              size="large" // Optional: You can customize the size class
              ariaLabel="Type of ID"
              required
              defaultValue="option2" // Optional: Set the default selected value
            />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">ID Number </label>
            <Input
                ref={idnumberRef}
              className={styles.input}
              placeholder={'ID Number  '}
              ariaLabel={'ID Number'}
            />
          </div>
          <div className="form-group">
           <label htmlFor="idNumber">Upload ID </label> *
            <FileUpload
              ref={idfileRef}
              label="Upload your ID"
              htmlType="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                // Do something with the selected file
              }}
            />
          </div> 

        </div> */}
        </div>

        <button type="submit">Submit Application</button>
      {/* </Container> */}
    </form>

    <style jsx>{`
        /* Your existing styles here */
        
        
        .application-form {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .form-card {
          margin-bottom: 2rem;
          padding: 1.5rem;
          border-radius: 5px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          background-color: white;
        }
        .sub-header{

        }

        h2 {
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        button {
          display: block;
          margin: 0 auto;
          padding: 0.75rem 2rem;
          font-size: 1.2rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const ApplicationPoster = () => {
  const { data, error } = useCurrentUser();
  const loading = !data && !error;

  return (
    <Wrapper>
      <div className={styles.root}>
        <h3 className={styles.heading}>Fill in your information</h3>
        {loading ? (
          <LoadingDots>Loading</LoadingDots>
        ) : data?.user ? (
          <div>
            <div>
  <ApplicationPosterInner user={data.user} />
            </div>
            </div>
        
        ) : (
          <Text color="secondary">
            Please{' '}
            <Link href="/login" passHref>
              <TextLink color="link" variant="highlight">
                sign in
              </TextLink>
            </Link>{' '}
            to post
          </Text>
        )}
      </div>
    </Wrapper>
  );
};

export default ApplicationPoster;
