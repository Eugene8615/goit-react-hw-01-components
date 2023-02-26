import PropTypes from 'prop-types';
import styles from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
    return(
      <section>
        <table className={styles.transactionhistory}>
        <thead>
          <tr>
            <th className={styles.transactions__items}>Type</th>
            <th className={styles.transactions__items}>Amount</th>
            <th className={styles.transactions__items}>Currency</th>
          </tr>
        </thead>
        <tbody>
{items.map(({id, type, amount, currency})=> {
    return(
  
  <tr className={styles.table_data} key={id}>
    <td className={styles.table_data_item}>{type}</td>
    <td className={styles.table_data_item}>{amount}</td>
    <td className={styles.table_data_item}>{currency}</td>
  </tr>
    );
})}
        </tbody>
        </table>
        </section>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };