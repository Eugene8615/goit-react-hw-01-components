import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"
import randomColor from "./randomColor";

export const Statistics =  ({ title, stats }) => {
    return(
      <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat__list}>
        {stats.map(({id, label, percentage}) =>{
          return (
         <li 
         className={styles.item}
         style={{ backgroundColor: randomColor() }}
         key={id}>
         <span className={styles.label}>{label}</span>
         <span className={styles.percentage}>{percentage}%</span>
         </li> 
          )
        })}
      </ul>
      </section>

    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };