import Loadable from 'react-loadable';
import Loading from 'components/Loading';

export default [
  {
    path: '/',
    component: Loadable({ loader: () => import('../routes/home'), loading: Loading })
  },
]