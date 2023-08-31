import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import styles from './UserHeader.module.css';

const UserPersonalInfo = ({ user }) => {
  return (
    <Container className={styles.root} column alignItems="center">
      {/* <div className={styles.avatar}>
        <Avatar size={168} username={user.username} url={user.profilePicture} />
      </div> */}
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Location:</strong> New York, USA</p>
    </Container>
  );
};

export default UserPersonalInfo;
