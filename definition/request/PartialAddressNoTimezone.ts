import Position from './Position';

type PartialAddressNoTimezone = {
    street?: string;
    additional_street?: string;
    city: string;
    country: string;
    position: Position;
    timezone_string?: string;
    zip_code: string;
    instruction?: string;
};

export default PartialAddressNoTimezone;
