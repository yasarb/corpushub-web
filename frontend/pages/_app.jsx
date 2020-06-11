import 'semantic-ui-css/semantic.min.css';

export default function MyApp({ Component, pageProps }) {
  const props = pageProps;
  return <Component pageProps={props} />;
}
