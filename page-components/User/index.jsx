import styles from './User.module.css';
import UserHeader from './UserHeader';
import UserPosts from './UserPosts';
import UserPersonalInfo from './UserPersonalInfo';
import UserIdDetails from './UserIdDetail';
import UserEducationDetails from './UserEducation';
import FileSaver from 'file-saver';
import { Button } from '@/components/Button';
import { useState } from 'react';

export const User = ({ user }) => {


  const [isLoading, setIsLoading] = useState(false);
  const handleDownload = () => {
    const userDetails = JSON.stringify(user, null, 2);
    const blob = new Blob([userDetails], { type: 'application/json' });
    FileSaver.saveAs(blob, 'user_details.json');
  };
  
  
  return (
  //   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  //   <div className="w-full max-w-4xl p-6">
  //     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
  //       {/* Personal Information */}
  //       <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
  //         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
  //         {/* <UserPersonalInfo user={user} /> */} 
  //         <UserHeader user={user} />
          
  //       </div>

  //       {/* ID Details */}
  //       <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
  //         <h2 className="text-xl font-semibold mb-4">ID Details</h2>
  //         {/* ID details content */}
  //         <UserIdDetails user={user} />
  //       </div>

  //       {/* Education and Credentials */}
  //       <div className="bg-white rounded-lg shadow-md p-6 col-span-4">
  //         <h2 className="text-xl font-semibold mb-4">Education and Credentials</h2>
  //         {/* Education and credentials content */}
  //         <UserEducationDetails />
  //       </div>
  //     </div>
  //   </div>
  // </div>
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
    <button className="disabled bg-green-600 px-2 py-2 rounded-md text-white" onClick={handleDownload}>Download Details</button>
 
  </div>
</div>
  );
};
    {/* <UserHeader user={user} />
      <UserPosts user={user} /> */}