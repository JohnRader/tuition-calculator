import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuition Calculator</title>
        <meta name="description" content="Tuition Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Home </h1>
      <ul>
        <li>
          <Link href="/onboarding"> Onboarding </Link>
        </li>
      </ul>
    </>
  );
}
