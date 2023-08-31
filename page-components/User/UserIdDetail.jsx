import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import styles from './UserHeader.module.css';

const UserIdDetails = ({ user }) => {
  return (
    <Container className={styles.root} column alignItems="center">
      <div className={styles.avatar}>
        <Avatar size={168} username={user.username} url={user.profilePicture} />
      </div>
     <h2 className="text-xl font-semibold mb-4">John Doe </h2>
            <p><strong>Email:</strong> jaafar.nasir71@gmail.com</p>
            <p><strong>ID Number:</strong> D7890123</p>
    </Container>
  );
};

export default UserIdDetails;
