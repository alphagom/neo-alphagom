/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'

export const TestHandler = [
  rest.post('http://localhost:8080/api/v1/login', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        token: 'hyunjungleegenius',
      })
    )
  ),
]
