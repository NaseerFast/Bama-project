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

  // Sample user application data
  const userApplication = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: 'January 1, 1990',
    idNumber: '1234567890',
    address: '123 Main Street, City, Country',
    education: [
      {
        degree: 'Bachelor of Science',
        university: 'University Name',
        year: '2020',
      },
      {
        degree: 'Master of Arts',
        university: 'Another University',
        year: '2022',
      },
    ],
  };

  const handleDownload = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Create a new page with A4 dimensions (595 x 842 points)
    const page = pdfDoc.addPage([595, 842]);

    // Set the font and text color
    page.setFont(helveticaFont);
    page.setFontSize(12);
    // page.setTextColor(rgb(0, 0, 0));

    // Add a title
    page.drawText('User Application Details', {
      x: 50,
      y: 800,
      size: 18,
    });

    // Personal Information Section
    page.drawText('Personal Information', {
      x: 50,
      y: 770,
      size: 16,
      color: rgb(0, 0, 1), // Blue color for section header
    });

    page.drawText('First Name:', {
      x: 50,
      y: 740,
      size: 14,
    });

    page.drawText(userApplication.firstName, {
      x: 200,
      y: 740,
      size: 14,
    });

    page.drawText('Last Name:', {
      x: 50,
      y: 720,
      size: 14,
    });

    page.drawText(userApplication.lastName, {
      x: 200,
      y: 720,
      size: 14,
    });

    page.drawText('Date of Birth:', {
      x: 50,
      y: 700,
      size: 14,
    });

    page.drawText(userApplication.dateOfBirth, {
      x: 200,
      y: 700,
      size: 14,
    });

    page.drawText('ID Number:', {
      x: 50,
      y: 680,
      size: 14,
    });

    page.drawText(userApplication.idNumber, {
      x: 200,
      y: 680,
      size: 14,
    });

    // Address Section
    page.drawText('Address', {
      x: 50,
      y: 640,
      size: 16,
      color: rgb(0, 0, 1), // Blue color for section header
    });

    page.drawText('Address:', {
      x: 50,
      y: 610,
      size: 14,
    });

    page.drawText(userApplication.address, {
      x: 200,
      y: 610,
      size: 14,
      maxWidth: 350, // Limit the width for address text
    });

    // Education Section
    page.drawText('Education', {
      x: 50,
      y: 580,
      size: 16,
      color: rgb(0, 0, 1), // Blue color for section header
    });

    let yPos = 550;
    userApplication.education.forEach((edu) => {
      page.drawText(`Degree: ${edu.degree}`, {
        x: 50,
        y: yPos,
        size: 14,
      });

      page.drawText(`University: ${edu.university}`, {
        x: 200,
        y: yPos,
        size: 14,
      });

      page.drawText(`Year: ${edu.year}`, {
        x: 450,
        y: yPos,
        size: 14,
      });

      yPos -= 30; // Adjust vertical position for the next education entry
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Save the PDF Blob as a file using FileSaver
    FileSaver.saveAs(pdfBlob, 'user_application.pdf');

    // Navigate back to the user application page
    router.push('/user-application');
  };

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
    <button className="disabled bg-green-600 px-2 py-2 rounded-md text-white"onClick={handleDownload} >Download Details</button>
 
  </div>
</div>
  );
};
    {/* <UserHeader user={user} />
      <UserPosts user={user} /> */}