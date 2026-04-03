import { FormEvent, useState } from 'react';
import { CustomInput } from 'shared/ui/input/Input';
import { Button } from 'shared/ui/button/Button';
import { Typography } from 'shared/ui/typography/Typography';
import styles from './LoaginPage.module.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // TODO: replace with real auth call
    console.log('Login submit', { email, password });
  };

  return (
    <div className={styles.container}>
      <Typography variant='h2' className={styles.title}>
        Войдите в свой аккаунт
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <CustomInput
            // type='email'
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

        {error && (
          <Typography
            variant='smallText'
            color='secondary'
            className={styles.error}
          >
            {error}
          </Typography>
        )}

        <Button type='submit' fullWidth className={styles.submitBtn}>
          Войти
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

export default LoginPage;
