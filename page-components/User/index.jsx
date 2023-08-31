import styles from './User.module.css';
import UserHeader from './UserHeader';
import UserPosts from './UserPosts';
import UserPersonalInfo from './UserPersonalInfo';
import UserIdDetails from './UserIdDetail';
import UserEducationDetails from './UserEducation';
export const User = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="w-full max-w-4xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          {/* <UserPersonalInfo user={user} /> */} 
          <UserHeader user={user} />
          
        </div>

        {/* ID Details */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">ID Details</h2>
          {/* ID details content */}
          <UserIdDetails user={user} />
        </div>

        {/* Education and Credentials */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-4">
          <h2 className="text-xl font-semibold mb-4">Education and Credentials</h2>
          {/* Education and credentials content */}
          <UserEducationDetails />
        </div>
      </div>
    </div>
  </div>
  );
};
    {/* <UserHeader user={user} />
      <UserPosts user={user} /> */}