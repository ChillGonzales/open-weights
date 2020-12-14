import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  const exercises = [
    {
      id: "1",
      name: "Bench Press",
      description: "benching, duh"
    },
    {
      id: "2",
      name: "Squat",
      description: "squatting"
    },
    {
      id: "3",
      name: "Deadlift",
      description: "deads"
    },
    {
      id: "4",
      name: "Overhead Press",
      description: "press"
    },
    {
      id: "5",
      name: "Bicep Curls",
      description: "curls"
    }
  ] as Exercise[];
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
            <button className="btn btn-primary btn-lg mx-3">Create a Plan</button>
            <button className="btn btn-secondary btn-lg mx-3">Learn More</button>
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
export interface Plan {
  id: string;
  activities: Activity[];
  name: string;
  description: string;
  author: string;
  tags: string[];
}
export interface Activity {
  reps: number;
  sets: number;
  exercise: Exercise;
}
export interface Exercise {
  id: string;
  videoLink: string;
  name: string;
  description: string;
  // Could do equipment required, area of focus, etc.
}
