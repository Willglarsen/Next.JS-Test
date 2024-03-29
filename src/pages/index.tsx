import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page!</h1>
      <p>This is my Next.JS App. Please click on the following link to take you to the login page! Thanks for taking the time to consider me for this position.</p>
      <Link href="/login">
        Click here to login!
      </Link>
    </main>
  );
}