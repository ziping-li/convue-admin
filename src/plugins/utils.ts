import Cookies from 'js-cookie';
import { userToken } from './../config/constants';

type RouterType = 'push' | 'replace' | 'external';

export const logout = () => {
  Cookies.remove(userToken);
  setTimeout(() => {
    window.location.reload();
  }, 1500);
};

export default ({ router }: any, inject: any) => {
  inject('navigateTo', (url: string | undefined, target: RouterType = 'push') => {
    if (!url) {
      router.back();
    } else {
      if (target === 'external') {
        window.open(url);
      } else {
        router[target](url);
      }
    }
  });
};
