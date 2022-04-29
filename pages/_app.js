import 'antd/dist/antd.css';
import '../styles/index.css';
import { useRouter } from 'next/router'
import Home from '../pages/home/index'
export default function MyApp ({ Component, pageProps }) {
  const Rooter_ = useRouter();
  // return Rooter_.route === '/' ? <Component {...pageProps} /> : <Home><Component {...pageProps} /></Home>
  return <Component {...pageProps} />
}