import Head from 'next/head';
import {
  Grid, Card, Typography, Box, Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import PageWrapper from '@/components/PageWrapper';
import { Route } from '@/types';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tuition Calculator</title>
        <meta name="description" content="Tuition Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper page={(
        <Box
          display="flex"
          height="100%"
          flexDirection="column"
          paddingTop={4}
          textAlign="center"
          gap={4}
        >
          <Typography variant="h3" gutterBottom>
            App name/logo
          </Typography>
          <Typography variant="h3" gutterBottom>
            Tagline goes here.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Extra body copy — description of what we do; value proposition, etc.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ padding: '2rem' }}>
                <Typography variant="h6" gutterBottom>
                  Calulcate your Tuition
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Use our tuition calculator to estimate your tuition based on your budget,
                  choice of school, and more.
                </Typography>
                <Button color="secondary" variant="contained" onClick={() => router.push(Route.TUITION_CALCULATOR)}>
                  Tuition Calculator
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ padding: '2rem' }}>
                <Typography variant="h6" gutterBottom>
                  Calculate your Financial Aid via loans
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Calculate your Financial Aid via loans
                </Typography>
                <Button color="secondary" variant="contained" onClick={() => router.push(Route.LOAN_CALCULATOR)}>
                  Loan Calculator
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
    )}
      />
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="5%" stopColor="#6791fe" />
            <stop offset="95%" stopColor="#eb6662" />
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,100 0,100 C 34.08788103666747,115.25240511479593 68.17576207333494,130.50481022959187 103,120 C 137.82423792666506,109.49518977040813 173.3848327433277,73.23316419642846 212,78 C 250.6151672566723,82.76683580357154 292.28490695335415,128.5625329846943 324,125 C 355.71509304664585,121.43746701530571 377.4755394432558,68.51670386479441 411,66 C 444.5244605567442,63.4832961352056 489.81293527362254,111.37065155612811 530,123 C 570.1870647263775,134.6293484438719 605.2727194622539,110.00068991069315 631,92 C 656.7272805377461,73.99931008930685 673.0961868773618,62.626588801099274 707,75 C 740.9038131226382,87.37341119890073 792.3425330282992,123.49295488490975 830,130 C 867.6574669717008,136.50704511509025 891.5336810094418,113.40159165926178 924,92 C 956.4663189905582,70.59840834073822 997.5227429339341,50.90067847804312 1036,65 C 1074.477257066066,79.09932152195688 1110.375347254822,126.9956944285658 1138,130 C 1165.624652745178,133.0043055714342 1184.9758680467787,91.11654380769383 1219,89 C 1253.0241319532213,86.88345619230617 1301.7211805580632,124.53813034065891 1341,133 C 1380.2788194419368,141.4618696593411 1410.1394097209684,120.73093482967055 1440,100 C 1440,100 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" />
        <defs>
          <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="5%" stopColor="#6791fe" />
            <stop offset="95%" stopColor="#eb6662" />
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,200 0,200 C 29.630546283087405,217.87001288114908 59.26109256617481,235.7400257622982 93,229 C 126.73890743382519,222.2599742377018 164.5861760183882,190.9099098319564 203,191 C 241.4138239816118,191.0900901680436 280.3942033602725,222.62033490987625 312,226 C 343.6057966397275,229.37966509012375 367.8370105405218,204.60875052853865 402,197 C 436.1629894594782,189.39124947146135 480.2577544776402,198.9446629759692 517,196 C 553.7422455223598,193.0553370240308 583.131971548917,177.6125975675845 614,174 C 644.868028451083,170.3874024324155 677.2143593266918,178.6049467536929 714,187 C 750.7856406733082,195.3950532463071 792.0105911443158,203.96761541764397 829,206 C 865.9894088556842,208.03238458235603 898.7432760960456,203.52459157573122 932,209 C 965.2567239039544,214.47540842426878 999.0163044715016,229.93401827943114 1038,221 C 1076.9836955284984,212.06598172056886 1121.191506017948,178.7393353065442 1149,173 C 1176.808493982052,167.2606646934558 1188.2176714567063,189.10864049439192 1216,189 C 1243.7823285432937,188.89135950560808 1287.9378081552268,166.82610271588803 1328,165 C 1368.0621918447732,163.17389728411197 1404.0310959223866,181.58694864205597 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" />
        <defs>
          <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="5%" stopColor="#6791fe" />
            <stop offset="95%" stopColor="#eb6662" />
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,300 0,300 C 33.9397880204087,291.46588641668995 67.8795760408174,282.93177283337997 105,277 C 142.1204239591826,271.06822716662003 182.4214838571391,267.7387950831702 213,263 C 243.5785161428609,258.2612049168298 264.4344885306264,252.1130468339394 295,266 C 325.5655114693736,279.8869531660606 365.840562020355,313.80901758107206 403,324 C 440.159437979645,334.19098241892794 474.2032633879535,320.65088284177256 510,310 C 545.7967366120465,299.34911715822744 583.3463844278313,291.5874510518379 614,297 C 644.6536155721687,302.4125489481621 668.4111989007214,320.99931295087595 701,321 C 733.5888010992786,321.00068704912405 775.0088199692831,302.4152971446582 816,290 C 856.9911800307169,277.5847028553418 897.5535212221463,271.33949847049126 935,266 C 972.4464787778537,260.66050152950874 1006.7770951421321,256.2267089733767 1034,274 C 1061.222904857868,291.7732910266233 1081.3380982093254,331.75366563600215 1115,336 C 1148.6619017906746,340.24633436399785 1195.8705120205661,308.7586284826148 1233,297 C 1270.1294879794339,285.2413715173852 1297.1798537084096,293.21182043353866 1330,297 C 1362.8201462915904,300.78817956646134 1401.4100731457952,300.3940897832307 1440,300 C 1440,300 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" />
      </svg>
    </>
  );
}
