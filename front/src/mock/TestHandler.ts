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

  rest.get('http://localhost:8080/api/v1/portfolio-list', (req, res, ctx) => 
    res(
      ctx.status(200),
      ctx.json({
        data: {
          data: [
            {
              portfolioSeq : 1,
              cover : 'https://marketplace.canva.com/EAFOv0-FKOY/1/0/1131w/canva-black-and-white-monoline-typedriven-portfolio-cover-page--i5sVeUpuMk.jpg',
              nickname : 'devgom',
            },
            {
              portfolioSeq : 2,
              cover : 'https://marketplace.canva.com/EAFLheYP3I8/1/0/1236w/canva-black-and-white-geometric-typedriven-portfolio-cover-page-4A3WwfnNaos.jpg',
              nickname : 'betagom',
            },
            {
              portfolioSeq : 3,
              cover : 'https://marketplace.canva.com/EAFQuHKT3ss/1/0/1131w/canva-yellow-minimalist-portfolio-cover-document-VKyzxttIaU0.jpg',
              nickname : 'neogom',
            },
            {
              portfolioSeq : 4,
              cover : 'https://marketplace.canva.com/EAFQuHtekr8/1/0/1131w/canva-grey-aesthetic-portfolio-cover-document-JApvyLFq7hU.jpg',
              nickname : 'gom1',
            },
            {
              portfolioSeq : 5,
              cover : 'https://i.pinimg.com/originals/5d/20/8e/5d208e91ce9eed13abb299350dc81014.jpg',
              nickname : 'gom2',
            },
            {
              portfolioSeq : 6,
              cover : 'https://stories.isu.pub/61503582/images/1_original_file_I0.jpg',
              nickname : 'gom3',
            },
            {
              portfolioSeq : 7,
              cover : 'https://marketplace.canva.com/EAFLhWr45mQ/1/0/1236w/canva-charcoal-white-geometric-typedriven-portfolio-cover-page-ihmIXiH3Y7E.jpg',
              nickname : 'gom4',
            },
            {
              portfolioSeq : 8,
              cover : 'https://cdn.dribbble.com/users/1519659/screenshots/6683863/cover.jpg',
              nickname : 'gom5',              
            }
            {
              portfolioSeq : 9,
              cover : 'https://cdn.dribbble.com/users/3539687/screenshots/11874363/my_portfolio_davemarzartboard_1.jpg',
              nickname : 'gom6',              
            }
            {
              portfolioSeq : 10,
              cover : 'https://officetemplatesonline.com/wp-content/uploads/2021/07/creative-portfolio-cover-page-design-in-word.jpg',
              nickname : 'gom7',              
            }
            {
              portfolioSeq : 11,
              cover : 'https://i.pinimg.com/originals/73/1a/b2/731ab2174d6d9ca8804e8335074404ef.jpg',
              nickname : 'gom8',
            }
          ]
        }
      })
    )
  ),
]

