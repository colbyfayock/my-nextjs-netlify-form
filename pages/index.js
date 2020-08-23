import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Me
        </h1>

        {success && (
          <p style={{ color: 'green'}}>
            Successfully submitted form!
          </p>
        )}

        <div className={styles.grid}>
          <div className={styles.card}>
            <form name="contact" method="POST" action="/?success=true" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
              </p>
              <p>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
