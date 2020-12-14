import Head from 'next/head'

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

  export default function CreatePlan(): JSX.Element {
    return (
      <div className="container">
      <Head>
        <title>Open Weights- Create a Plan</title>
        <meta name="description" content="Create a new weightlifting plan that's easily shareable." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Create a Plan</h3>
        <p className="lead">Enter information below to begin adding exercises to your plan.</p>
        <form>
          <div className="form-group">
            <label>Select an Exercise</label>
            <select>
              {
                exercises.forEach(x => {
                  return (
                    <option></option>
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">

          </div>
        </form>
      </main>
    </div>
    );
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
    daysOfWeek: Day[];
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
  export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }