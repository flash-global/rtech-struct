import Score from './Score';

type Contact = {
  id: string,
  company?: string,
  phone_number?: string,
  email?: string,
  name?: string,
  scores?: Score[],
  created_at: string,
  updated_at: string
};

export default Contact;
