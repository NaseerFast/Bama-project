import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import styles from './UserHeader.module.css';

const UserEducationDetails = ({ user }) => {
  return (
    <Container className={styles.root} column alignItems="center">
      {/* <div className={styles.avatar}>
        <Avatar size={168} username={user.username} url={user.profilePicture} />
      </div> */}
         <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
            <h2 className="text-xl font-semibold mb-4">Education and Credentials</h2>
            <div>
              <p className="mb-1"><strong>University:</strong> Example University</p>
              <p className="mb-1"><strong>Degree:</strong> Bachelor of Science</p>
              <p className="mb-1"><strong>Year:</strong> 2020</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Documents</h3>
              <ul className="list-disc pl-6">
                <li><a href="#">Transcript</a></li>
                <li><a href="#">Diploma</a></li>
                <li><a href="#">Certificates</a></li>
              </ul>
            </div>
          </div>
    </Container>
  );
};

export default UserEducationDetails;
