import { Position } from '../../Position';
import Contact from './Contact';
import Score from './Score';

type Address = {
  id: string,
  alias?: string,
  street: string,
  additional_street?: string,
  city: string,
  zip_code?: string,
  province?: string,
  country: string,
  position: Position,
  timezone: string,
  contacts: Contact[],
  scores: Score[],
  created_at: string,
  updated_at: string
};

export default Address;
