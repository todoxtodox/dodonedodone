import { rest } from 'msw';
import { timeline } from './data/timeline';

export const parseQueryString = (search: string): Record<string, string> =>
  (search || '')
    .replace(/^\?/g, '')
    .split('&')
    .reduce((acc, query) => {
      const [key, value] = query.split('=');

      if (key) {
        acc[key] = decodeURIComponent(value);
      }

      return acc;
    }, {} as Record<string, string>);

export const handlers = [
  rest.get('/timeline', (req, res, ctx) => {
    const { date } = parseQueryString(req.url.search);

    if (!date) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'date query parameter is required',
        }),
      );
    }

    const dateObj = new Date(date);
    return res(ctx.status(200), ctx.json(timeline(dateObj)));
  }),
];
