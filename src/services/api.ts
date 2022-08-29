let env = process.env.REACT_APP_ENV_MODE;
let url = 'https://dualpractice.devclan.io';

switch (env) {
  case 'production':
    url = 'https://dualpractice.leanstg.io/';

    break;

  case 'development':
    url = 'https://dualpractice.devclan.io/';

    break;

  case 'test':
    url = 'https://dualpractice.qaclan.io/';

    break;

  case 'staging':
    url = 'https://dualpractice.leanstg.io/';
    break;

  default:
    url = 'https://dualpractice.qaclan.io';

    break;
}

export const BASE_URL = url;
