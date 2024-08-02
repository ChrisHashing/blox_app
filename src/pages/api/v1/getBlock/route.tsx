import { NextApiRequest, NextApiResponse } from 'next';

const getBlock = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Hello from the getBlock API route!' });
};

export default getBlock;
