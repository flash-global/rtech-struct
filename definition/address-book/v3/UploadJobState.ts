type State = {
  index: number,
  status: 'SUCCESS' | 'DONE',
  error: string
};

type UploadJobState = {
  id: string,
  status: 'PENDING' | 'DONE',
  states: State[],
  created_at: string,
  updated_at: string
};

export default UploadJobState;
