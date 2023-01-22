import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import LoadingIndicator from '@/components/loading';

function Report() {
  return (
    <div>
      <h1>Report</h1>
      <LoadingIndicator />
    </div>
  );
}

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Tuition Report</title>
        <meta name="description" content="Tuition Report" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper
        page={<Report />}
      />
    </>

  );
}
