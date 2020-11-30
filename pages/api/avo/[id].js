import {NextApiRequest, NextApiResponse} from 'next';
import DB from '../../../database/DB';

const getAvo = async (request, response) => {
  const db = new DB();

  const id = request.query.id;
  const avo = await db.getById(id.toString());

  response.status(200).json(avo);
};

export default getAvo;
