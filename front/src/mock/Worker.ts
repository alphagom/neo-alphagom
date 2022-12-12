/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw'
import { TestHandler } from './TestHandler'

export const Worker = setupWorker(...TestHandler)
