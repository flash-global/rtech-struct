import Contact from './Contact';
import InputAddress from './InputAddress';
import Score from './Score';

type Address = InputAddress & {
  id: string,
  contacts: Contact[],
  score?: Score,
  created_at: string,
  updated_at: string
};

export default Address;
