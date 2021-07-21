import PropTypes from "prop-types";
import css from "./Transaction.module.css";

const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tHead}>
        <tr>
          <th className={css.tHeadItem}>Type</th>
          <th className={css.tHeadItem}>Amount</th>
          <th className={css.tHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tBody}>
        {transactions.map((transaction) => (
          <tr className={css.tBodyTr} key={transaction.id}>
            <td className={css.tBodyTd}>{transaction.type}</td>
            <td className={css.tBodyTd}>{transaction.amount}</td>
            <td className={css.tBodyTd}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;

Transactions.prototype = {
  transactions: PropTypes.arrayOf({
    transaction: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
