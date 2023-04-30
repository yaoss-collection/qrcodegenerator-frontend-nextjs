import '@/styles/globals.css';
import ProgressBar from '@badrap/bar-of-progress';
import { init } from '@socialgouv/matomo-next';
import { hasCookie } from 'cookies-next';
import App from 'next/app';
import { withRouter } from 'next/router';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const progress = new ProgressBar({
  size: 4,
  color: '#da882f',
  className: 'bar-of-progress',
  delay: 100,
});

class MyApp extends App {
  componentDidMount() {
    if (!hasCookie('tracker')) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    }
    this.props.router.events.on('routeChangeStart', progress.start);
    this.props.router.events.on('routeChangeComplete', progress.finish);
    this.props.router.events.on('routeChangeError', progress.finish);
  }
  render() {
    const {
      Component,
      pageProps: { ...pageProps },
    } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withRouter(MyApp);
