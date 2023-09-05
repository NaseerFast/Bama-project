import styles from './User.module.css';
import UserHeader from './UserHeader';
import UserPersonalInfo from './UserPersonalInfo';
import UserIdDetails from './UserIdDetail';
import UserEducationDetails from './UserEducation';
import FileSaver from 'file-saver';
import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';
import { PDFDocument,  StandardFonts,  rgb,  } from 'pdf-lib';
import { useRouter } from 'next/router';
import { useCurrentUser } from '@/lib/user';
import { Wrapper } from '@/components/Layout';
import { Container, Spacer } from '@/components/Layout';
import { CheckCircleIcon , XCircleIcon  } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

 const UserDetail = ({ user }) => {
  
  // const { data, error, mutate } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const generateAcknowledgeCard = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
  
    // Add a new page to the document
    const page = pdfDoc.addPage([400, 600]);
  
    // Set the background color of the page
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 400,
      height: 600,
      color: rgb(1, 1, 1), // White background
    });
  
    // Add styling
    page.drawRectangle({
      x: 20,
      y: 20,
      width: 360,
      height: 560,
      color: rgb(1, 1, 1),
    });
  
    // Add sample data
    page.drawText('BAMPOWER APPLICANT ACKNOWLEDGEMENT CARD', {
      x: 40,
      y: 560,
      size: 12,
      color: rgb(0.95, 0.1, 0.1),
    });
  

    page.drawText(`APPLICANT ID: ${user.applicationId}`, {
      x: 100,
      y: 540,
      size: 12,
      color: rgb(0, 0.9, 0.4),
    });

    
    // page.drawText('12345677', {
    //   x: 40,
    //   y: 520,
    //   size: 16,
    //   color: rgb(0.95, 0.1, 0.1),
    // });

    const sampleData = {
     
      Name: user.firstname + " " + user.lastname,
      Dob: user.dateofbirth,
      Sex: user.gender,
      Address: user.residentialaddress,
      State: 'borno',
      Education: user.qualification,
      Instituition: user.instituition,
      Course: user.course,
      Graduation: user.yearofgraduation,
      MobileNo: user.phone,
      Email: user.email,
      Status: 'pending',
      // subjects: [
      //   { srNo: '1', subject: 'English', examDate: '5 July 2019' },
      //   { srNo: '2', subject: 'English', examDate: '5 July 2019' },
      //   { srNo: '3', subject: 'English', examDate: '5 July 2019' },
      // ],
    };
  
    // // Add sample data to the PDF
    
    const dataStartY = 500;
    const lineHeight = 20;
    let dataY = dataStartY;
  
    for (const field in sampleData) {
      page.drawText(`${field}: ${sampleData[field]}`, {
        x: 40,
        y: dataY,
        size: 12,
        color: rgb(0, 0, 0),
      });
      dataY -= lineHeight;
    }
  
    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();
  
    // Create a Blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  
    // Save the Blob using file-saver
    saveAs(pdfBlob, 'acknowledgment_card.pdf');
  };
  const notifyToCompleteApplication = () => {
    toast.success(
      'Complete your application by uploading your files the settings page. Click here to go there.',
      {
        duration: 5000, // Adjust the duration as needed
        position: "center",
        onClick: () => {
          // Redirect the user to the settings page
          // Replace '/settings' with the actual path to your settings page
          router.push('/settings'); // Use router.push to navigate in Next.js
        },
      }
    );
  };

// console.log('from data',  data);
  return (

<div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
  <div className="header col-span-12 rounded-lg py-8">
    {/* <!-- Header content --> */}
  </div>
  
  <div className="col-span-12 rounded-lg   sm:col-span-4">
    {/* <!-- Sidebar --> */}
    <UserHeader user={user} />
  </div>
  <div className="col-span-12 rounded-lg border   sm:col-span-8">
    {/* <!-- Main Content --> */}
    {/* <UserEducationDetails />
     */}
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white  shadow-3xl shadow-shadow-500 p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    General Information
                    </h4>
                    {/* <p className="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p> */}
                </div> 
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                  
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">First Name</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.firstname}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Last Name</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.lastname}
                    </p>
                    </div>
                   
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Date of Birth</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        {user.dateofbirth}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Gender</p>
                    <p className="text-base font-medium text-navy-700 capitalize">
                     {user.gender}
                    </p>
                    </div>
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Residential Address</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.residentialaddress}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">State</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                       Borno
                    </p>
                    </div>


                   
                </div>
            </div>  
  </div>

  <div className="col-span-12 rounded-lg   sm:col-span-4">
    {/* <!-- Sidebar --> */}
    {/* <UserHeader user={user} /> */}
  </div>
  <div className="col-span-12 rounded-lg border   sm:col-span-8">
    {/* <!-- Main Content --> */}
    {/* <UserEducationDetails />
     */}
      <div className="relative flex flex-col items-center   rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white  shadow-3xl shadow-shadow-500 p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                     
                    </h4>
                    {/* <p className="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p> */}
                </div> 
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.instituition}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Qualification</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.qualification}
                    </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Course</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.course}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Year Graduated</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.yearofgraduation}
                    </p>
                    </div>
                    {user.indigenefile ? (
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600">Letter of indigene</p>
      <p className="text-base font-medium text-navy-700 dark:text-white inline-flex space-x-2 capitalize">
        <span>Uploaded</span> <CheckCircleIcon  className="h-6 w-6 text-green-500 " />
      </p>
      </div>
    ) : (
      
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600"> Indigene Letter</p>
      <p className="text-base font-medium text-navy-700 dark:text-white inline-flex space-x-2">
      <span  onClick={notifyToCompleteApplication} >No Upload</span> 
      {/* <XCircleIcon className="h-6 w-6 text-red-500 capitalize" /> */}
      </p>
      </div>
    )}
                    {user.certificatefile ? (
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600">Certificate</p>
      <p className="text-base font-medium text-navy-700 dark:text-white inline-flex space-x-2 capitalize">
        <span>Uploaded</span> <CheckCircleIcon  className="h-6 w-6 text-green-500 " />
      </p>
      </div>
    ) : (
      
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600">Certificate</p>
      <p className="text-base font-medium text-navy-700 dark:text-white inline-flex space-x-2 capitalize">
      <span onClick={notifyToCompleteApplication} >No Upload</span> 
      {/* <XCircleIcon className="h-6 w-6 text-red-500" /> */}
      </p>
      </div>
    )}
    
    {user.idfile ? (
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600">ID</p>
      <p className="text-base font-medium text-navy-700 dark:text-white inline-flex space-x-2 capitalize">
        <span>Uploaded</span> <CheckCircleIcon  className="h-6 w-6 text-green-500 " />
      </p>
      </div>
    ) : (
      
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600">ID</p>
      <p className="text-base font-medium text-navy-700 dark:text-white inline-flex space-x-2">
      <span onClick={notifyToCompleteApplication}>No Upload</span> 
      {/* <XCircleIcon className="h-6 w-6 text-red-500" /> */}
      </p>
      </div>
    )}
   
{/* 

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Date of Birth</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        {user.dateofbirth}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Date of Birth</p>
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        20 July 1986
                    </p>
                    </div> */}
                    
                </div>
                
            </div>  
            
 

  <div className="col-span-12 rounded-lg border   sm:col-span-8">
    {/* <!-- Main Content --> */}
    {/* <UserEducationDetails />
     */}
      <div className=" text-center space-x-2 flex rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white  shadow-3xl shadow-shadow-500 p-3">
      <button className=" bg-green-600 px-2 py-2 rounded-md text-white"onClick={generateAcknowledgeCard} >Download Details</button>
    <a href="/settings" className=" bg-green-600 px-2 py-2 rounded-md text-white" >Update Profile</a>

   </div>
   </div>
 
  
</div>
</div>
  );
};
    {/* <UserHeader user={user} />
      <UserPosts user={user} /> */}
      export const User = () => {
  const { data, error, mutate } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (!data && !error) return;
    if (!data.user) {
      router.replace('/login');
    }
  }, [router, data, error]);
  return (
    <Wrapper className={styles.wrapper}>
      <Spacer size={2} axis="vertical" />
      {data?.user ? (
        <>
          <UserDetail user={data.user} />
        
        </>
      ) : null}
    </Wrapper>
  );
};