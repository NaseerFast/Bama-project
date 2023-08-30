import styles from './Avatar.module.css';

const FileAvatar = ({ size, username, url, label }) => {
  return (
    <img
      className={styles.avatar}
      src={url || '/images/default_user.jpg'}
      alt={username}
      width={size}
      height={size}
      label={label}
    />
  );
};

export default FileAvatar;
