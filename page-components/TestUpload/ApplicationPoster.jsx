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
  // const emailRef = useRef();
  const genderRef = useRef();
  const dateofbirthRef = useRef();
  const phoneRef = useRef();
  const indigenefileRef = useRef();
  const residentialaddressRef = useRef();
  const districtRef = useRef();
  // const landmarkRef = useRef();
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
        
        // Create a FormData object to handle file uploads
        const formData = new FormData();
        formData.append('indigenefile', indigenefileRef.current.files[0]);
        formData.append('certificatefile', certificatefileRef.current.files[0]);
        formData.append('idfile', idfileRef.current.files[0]);
        // ... append other files as needed
        
        // Append other form data fields
        formData.append('firstname', firstnameRef.current.value);
        formData.append('lastname', lastnameRef.current.value);
        // ... append other fields
        
        // Send the FormData object with the files and other data
        await fetcher('/api/applications', {
          method: 'POST',
          body: formData, // Use the FormData object
        });
        
        // ... other code
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    // ... other dependencies
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
    { label: 'OTHER', value: 'OTHER' },
  ];

  const district = [
    { label: 'District', value: '' },
    { label: 'Bama(Rural) District', value: 'BAMA-RURAL' },
    { label: 'Bama Town', value: 'BAMA-TOWN' },
    {label:  'Amchaka District', value: 'AMCHAKA'},
    { label: 'Dar-eljamal District', value: 'DAR-ELJAMAL' },
    { label: 'Gulumba District', value: 'GULUMBA' },
    { label: 'Soye District', value: 'SOYE' },
    {label:  'Woloji District', value: 'WOLOJI'},

  ];
  return (
    <div className="container ">
    <form className="application-form " onSubmit={onSubmit}>
      {/* <Container className={styles.poster}> */}
        {/* <Avatar size={40} username={user.username} url={user.profilePicture} /> */}
        
          <div className="form-card">
         <div className="form-group">
         <h3 className="sub-header">Personal Information</h3>
            {/* <label htmlFor="firstName">First Name</label> */}
            <Input
              label="First Name"
                ref={firstnameRef}
              className={styles.input}
              placeholder={'First name'}
              ariaLabel={'First Name'}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="lasrName">Last Name</label> */}
            <Input
            label="Last Name"
                ref={lastnameRef}
              className={styles.input}
              placeholder={'Surname'}
              ariaLabel={'Last Name'}
            />
          </div> 

          <div className="form-group">
         {/* <label htmlFor="crt">Upload Certificate </label>  */}
            <FileUpload
              ref={indigenefileRef}
              label="Upload  certificate of indigine"
              htmlType="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                // Do something with the selected file
              }}
            />
          </div>

          </div>

          
        <div className="form-card">
          <h3 className="sub-header">Residential Details</h3>
      
          {/* <div className="form-group">
            <label htmlFor="landMark">Land Mark </label>
            <Input
              label="Closest Landmark"
              ref={landmarkRef}
              className={styles.input}
              placeholder={'Nearest bus stop'}
              ariaLabel={'Closest Land Mark'}
            />
          </div> */}

   
        <div className="form-card">
          <h3 className='sub-header'>Identification</h3>
    
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
      
        </div>
        </div>

        <button type="submit" className='bg-green-600'>Submit Application</button>
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
          margin-bottom: 1.5rem;
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
        <h3 className={styles.heading}>APPLICATION FORM</h3>
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
