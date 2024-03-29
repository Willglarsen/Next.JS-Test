import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const MyApp: React.FC<{ Component: any; pageProps: any }> = ({ Component, pageProps }) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!store.getState().user.user && !url.includes('/login')) {
        router.push('/login');
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
