import Address from './Address';

type PaginatedAddress = {
  current_page: number,
  total_pages: number,
  addresses: Address[],
};

export default PaginatedAddress;
