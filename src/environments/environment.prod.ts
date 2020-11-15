import { SocketIoConfig } from 'ngx-socket-io';

export const environment = {
  production: true,
  url: 'https://miweb.com/'
};

const config: SocketIoConfig = { url: 'https://miweb.com/', options: {} };
