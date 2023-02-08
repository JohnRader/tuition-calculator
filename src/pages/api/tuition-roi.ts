// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TuitionROIFormState } from '@/types';
import { HTTPMethod } from '@/types/request';
import {
  TuitionTracker, TuitionTrackerYearly, UsNews, PayscaleCollege, PayscaleMajor, MitLivingWage,
} from '@/models';

type ResponseData = PayscaleCollege
| PayscaleMajor
| TuitionTracker
| TuitionTrackerYearly
| UsNews
| MitLivingWage;

interface TuitionROIRequest extends NextApiRequest {
  body: TuitionROIFormState;
  method: HTTPMethod;
}

export default function handler(
  req: TuitionROIRequest,
  res: NextApiResponse<any>,
) {
  const { body, method } = req;

  switch (method) {
    case HTTPMethod.POST:
      // Process a POST request
      return res.status(200).json({ body });

    case HTTPMethod.GET:
      // Process a GET request
      return res.status(200).json({ name: 'John Doe' });

    case HTTPMethod.PUT:
      // Process a PUT request
      return res.status(200).json({ name: 'John Doe' });

    case HTTPMethod.DELETE:
      // Process a DELETE request
      return res.status(200).json({ name: 'John Doe' });

    default:
      return res.status(405).end();
  }
}
