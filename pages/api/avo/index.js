import {IncomingMessage, ServerResponse} from 'http';
import DB from '../../../database/DB';

const allAvos = async (request = IncomingMessage, response = ServerResponse) => {
  const db = new DB();
  const data = await db.getAll();
  const length = data.length;

  response.status(200).json({data, length});
};

export default allAvos;
