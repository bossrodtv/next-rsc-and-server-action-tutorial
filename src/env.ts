import { config } from 'dotenv';
import { z } from 'zod';
import { STAGES } from './constants';

config();

export function isTest() {
  return process.env.NODE_ENV === 'test';
}

const envSchema = z.object({
  STAGE: z.enum([STAGES.Dev, STAGES.Prod, STAGES.Test]).default(STAGES.Dev),
  DB_URL: z.string(),
  TEST_DB_URL: z.string(),
});

export const envConfig = envSchema.parse({
  STAGE: isTest() ? process.env.NODE_ENV : process.env.STAGE,
  DB_URL: process.env.DB_URL,
  TEST_DB_URL: process.env.TEST_DB_URL,
});
