import Head from 'next/head';
import TuitionROIForm from '@/components/TuitionROIForm';
import PageWrapper from '@/components/PageWrapper';

export default function RootPage() {
  return (
    <>
      <Head>
        <title>Tuition ROI</title>
        <meta name="description" content="Tuition ROI" />
      </Head>

      <PageWrapper page={<TuitionROIForm />} />
    </>
  );
}
