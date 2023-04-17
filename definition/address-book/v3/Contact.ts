import InputContact from './InputContact';
import Score from './Score';

type Contact = InputContact & {
  id: string,
  scores?: Score[],
  created_at: string,
  updated_at: string
};

export default Contact;
