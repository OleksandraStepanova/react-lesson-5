import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { currencyExchange } from 'reduxState/currency/operations';
import { useDispatch } from 'react-redux';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.input.value.trim();
    console.log(value);
    const isValidValue = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/.test(value);
    console.log(isValidValue)
    if (!isValidValue) {
      return alert('Please enter exchange request `15 USD in UAH`');
    } 
    const array = value.split(' ');
    const [amount, from, , to] = array;
    const request = {
      amount,
      from,
      to
    }
    console.log(array)
    dispatch(currencyExchange(request))
  }
  return (
    <form className={styles.form} onSubmit={handleForm}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input title="Request format 15 USD in UAH"
        name='input'
        className={styles.input} />
    </form>
  );
};
