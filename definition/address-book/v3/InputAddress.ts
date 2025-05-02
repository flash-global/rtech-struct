import { Position } from "../../Position";


type InputAddress = {
  alias?: string,
  street: string,
  additional_street?: string,
  city: string,
  zip_code: string,
  province?: string,
  country: string,
  position: Position,
  timezone: string
};

export default InputAddress;
