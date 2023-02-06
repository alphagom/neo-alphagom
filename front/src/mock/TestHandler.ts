/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'
import PortfolioCover1 from '@/assets/portfolio1.jpg'
import PortfolioCover2 from '@/assets/portfolio2.jpg'
import PortfolioCover3 from '@/assets/portfolio3.jpg'

const pfCovers = [PortfolioCover1, PortfolioCover2, PortfolioCover3]

export const TestHandler = [
  rest.post('http://localhost:8080/api/v1/login', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        token: 'hyunjungleegenius',
      })
    )
  ),

  rest.get('http://localhost:8080/api/v1/portfolio-list', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(
        {
          portfolioSeq : 1,
          cover : PortfolioCover1,
          nickname : 'devgom',
        },
        // {
        //   portfolioSeq : 2,
        //   cover : PortfolioCover2,
        //   nickname : 'betagom',
        // },
        // {
        //   portfolioSeq : 3,
        //   cover : PortfolioCover3,
        //   nickname : 'neogom',
        // },
      )
    )
  ),
]

