import styles from './User.module.css';
import UserHeader from './UserHeader';
import UserPosts from './UserPosts';
import UserPersonalInfo from './UserPersonalInfo';
import UserIdDetails from './UserIdDetail';
import UserEducationDetails from './UserEducation';
import FileSaver from 'file-saver';
import { Button } from '@/components/Button';
import { useState } from 'react';
import { PDFDocument,  StandardFonts,  rgb,  } from 'pdf-lib';
import { useRouter } from 'next/router';

export const User = ({ user }) => {
  

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
  

    page.drawText('APPLICANT ID: 12345677', {
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
  

console.log('from user',  user);
  return (

<div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
  <div class="header col-span-12 rounded-lg py-8">
    {/* <!-- Header content --> */}
  </div>
  
  <div class="col-span-12 rounded-lg   sm:col-span-4">
    {/* <!-- Sidebar --> */}
    <UserHeader user={user} />
  </div>
  <div class="col-span-12 rounded-lg border   sm:col-span-8">
    {/* <!-- Main Content --> */}
    {/* <UserEducationDetails />
     */}
      <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white  shadow-3xl shadow-shadow-500 p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                    General Information
                    </h4>
                    {/* <p class="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p> */}
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                  
                <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">First Name</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.firstname}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Last Name</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.lastname}
                    </p>
                    </div>
                   
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Date of Birth</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.dateofbirth}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Gender</p>
                    <p class="text-base font-medium text-navy-700 capitalize">
                     {user.gender}
                    </p>
                    </div>
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Residential Address</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.residentialaddress}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">State</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white capitalize">
                       Borno
                    </p>
                    </div>


                   
                </div>
            </div>  
  </div>

  <div class="col-span-12 rounded-lg   sm:col-span-4">
    {/* <!-- Sidebar --> */}
    {/* <UserHeader user={user} /> */}
  </div>
  <div class="col-span-12 rounded-lg border   sm:col-span-8">
    {/* <!-- Main Content --> */}
    {/* <UserEducationDetails />
     */}
      <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white  shadow-3xl shadow-shadow-500 p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
                     
                    </h4>
                    {/* <p class="mt-2 px-2 text-base text-gray-600">
                    As we live, our hearts turn colder. Cause pain is what we go through
                    as we become older. We get insulted by others, lose trust for those
                    others. We get back stabbed by friends. It becomes harder for us to
                    give others a hand. We get our heart broken by people we love, even
                    that we give them all...
                    </p> */}
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Education</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.instituition}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Qualification</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white capitalize">
                        {user.qualification}
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Course</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.course}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Year Graduated</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.yearofgraduation}
                    </p>
                    </div>
{/* 
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Date of Birth</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        {user.dateofbirth}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Date of Birth</p>
                    <p class="text-base font-medium text-navy-700 dark:text-white">
                        20 July 1986
                    </p>
                    </div> */}
                    
                </div>
                
            </div>  
            
  </div>


 
  <div class="footer col-span-12 rounded-lg p-6 text-center">
    {/* <!-- Footer content --> */}
    <button className="disabled bg-green-600 px-2 py-2 rounded-md text-white"onClick={generateAcknowledgeCard} >Download Details</button>
 
  </div>
</div>
  );
};
    {/* <UserHeader user={user} />
      <UserPosts user={user} /> */}