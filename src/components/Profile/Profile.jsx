import PropTypes from 'prop-types';
import styles from "./Profile.module.css"

export const Profile = ({username, tag, location, avatar, stats: { followers, views, likes }}) => {
    return <section className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      <p className={styles.username}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  
    <ul className={styles.stats}>
      <li className={styles.statsitems}>
        <span >Followers</span>
        <span >{followers}</span>
      </li>
      <li className={styles.statsitems}>
        <span >Views</span>
        <span >{views}</span>
      </li>
      <li className={styles.statsitems}>
        <span >Likes</span>
        <span >{likes}</span>
      </li>
    </ul>
  </section>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };