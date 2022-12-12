/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'

export const TestHandler = [
    rest.get('http://localhost:8080/api/v1/test', (req, res, ctx) =>
        res(
            ctx.status(200),
            ctx.json({
                msg: 'test api 입니다.',
            })
        )
    ),
]
