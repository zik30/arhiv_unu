import { FormEvent, useState } from 'react';
import { CustomInput } from 'shared/ui/input/Input';
import { Button } from 'shared/ui/button/Button';
import { Typography } from 'shared/ui/typography/Typography';
import styles from './RegistrationPage.module.scss';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== repeatPassword) {
      setError('Password and repeat password must match.');
      return;
    }

    // TODO: replace with real registration call
    console.log('Register submit', { email, password });
  };

  return (
    <div className={styles.container}>
      <Typography variant='h2' align='center' className={styles.title}>
        Регистрация
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <CustomInput
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </div>

        <div className={styles.field}>
          <CustomInput
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </div>

        <div className={styles.field}>
          <CustomInput
            type='password'
            name='repeatPassword'
            placeholder='Repeat Password'
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            fullWidth
          />
        </div>

        {error && (
          <Typography
            variant='smallText'
            color='error'
            className={styles.error}
          >
            {error}
          </Typography>
        )}

        <Button type='submit' fullWidth className={styles.submitBtn}>
          Зарегистрироваться
        </Button>
        <Link to={-1}>
          <Button variant='secondary' type='submit' fullWidth>
            Назад
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default RegistrationPage;
