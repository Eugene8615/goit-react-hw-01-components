import PropTypes from 'prop-types';
import styles from "./FriendList.module.css"

export const FriendList = ({friends}) => {
   return (
    <section>
    <ul className={styles.FriendList}>
    {friends.map(({id, isOnline, avatar, name}) => {
       return( 
        <li className={styles.friends} key={id}>
           <span
          className={styles.status}
          style={
            isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
          }
        ></span>
            <img
              className="avatar"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p>{name}</p>
        </li>)
    })}
</ul>
</section>
)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };