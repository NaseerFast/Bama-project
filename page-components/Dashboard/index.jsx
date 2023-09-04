import styles from './User.module.css';
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';

export const DashboardFeed = ({ user }) => {
  console.log('man', user);
  return (
    <div className={styles.root}>
      <UserHeader user={user} />
      <UserDetails user={user} />
    </div>
  );
};