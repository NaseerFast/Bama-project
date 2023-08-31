import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import styles from './UserHeader.module.css';

const UserHeader = ({ user }) => {
  return (
    <Container className={styles.root} column alignItems="center">
      {/* <div className={styles.avatar}>
        <Avatar size={95} username={user.username} url={user.profilePicture} />
      </div> */}
      {/* <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Location:</strong> New York, USA</p> */}
            <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""/>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">John Doe </h2>
                    {/* <h3 class="text-gray-600 font-lg text-semibold leading-6 mb-2">Owner at Her Company Inc.</h3> */}
                    <p className="mb-2"><strong>Mobile:</strong> 07012674001</p>
                    <p className="mb-2"><strong>Email:</strong> jaafar.nasir71@gmail.com</p>
            <p className='mb-2'><strong>ID Number:</strong> D7890123</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Application Status</span>
                            <span class="ml-auto"><span
                                    class="bg-red-500 py-1 px-2 rounded text-white text-sm">Pending</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Batch 1</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
       
    </Container>
  );
};

export default UserHeader;
