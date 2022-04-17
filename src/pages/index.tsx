import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import FormButton from '../components/Button';
import FormError from '../components/FormError'
import Input from '../components/Input';

import styles from '../styles/app.module.css';

const Home: NextPage = () => {
  const [isValid, setIsValid] = useState(false);

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setIsValid(!!e.target.value)
  }

  return (
    <form className={styles.form}>
      <label>Email:</label>
      <Input onChange={handleEmailChange} />
      
      <FormError isValid={isValid} />
      
      <FormButton isValid={isValid}>
        Enviar
      </FormButton>
    </form>
  )
}

export default Home
