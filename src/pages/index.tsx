import Head from 'next/head';
import OnboardingForm from '@/components/OnboardingForm';
import PageWrapper from '@/components/PageWrapper';

export default function RootPage() {
  return (
    <>
      <Head>
        <title>Tuition Calculator</title>
        <meta name="description" content="Tuition Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper
        page={<OnboardingForm />}
      />
    </>
  );
}
