import Head from 'next/head';
import TuitionROIForm from '@/components/TuitionROIForm';
import PageWrapper from '@/components/PageWrapper';

export default function RootPage() {
  return (
    <>
      <Head>
        <title>Tuition ROI</title>
        <meta name="description" content="Tuition ROI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper page={<TuitionROIForm />} />
    </>
  );
}
