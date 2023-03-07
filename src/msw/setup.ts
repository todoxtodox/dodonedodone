// 이 파일은 수정하지 마세요.

import { setupWorker } from 'msw';

import { handlers } from './handlers';

const setupMSW = () => {
  const worker = setupWorker(...handlers);
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }
};

export default setupMSW;
