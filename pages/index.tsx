import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Open Weights</title>
        <meta name="description" content="The easiest way to create and share weightlifting programs." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Open Weights!</h1>

        <p className={styles.description}>
          Easily create and share workouts.
        </p>

        <div className="row my-5">
          <div className="col">
            <Link href="/create-plan">
              <a className="btn btn-primary btn-lg mr-3">Create a Plan</a>
            </Link>
            <button className="btn btn-secondary btn-lg ml-3">Learn More</button>
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