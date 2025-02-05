import PartialAddressNoTimezone from './PartialAddressNoTimezone';
import PartialContact from './PartialContact';

type PartialPointV2 = {
    key: string;
    arrival_from: string;
    arrival_until: string;
    address: PartialAddressNoTimezone;
    contact?: PartialContact;
    package_to_load: string[];
    package_to_unload: string[];
};

export default PartialPointV2;
