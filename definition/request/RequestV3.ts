import Package from './Package';
import PartialPointV2 from './PartialPointV2';
import RequestedTransport from './RequestedTransport';
import Reference from './Reference';
import CustomerInterlocutor from './CustomerInterlocutor';
import CustomField from './CustomField';
import Invoice from './Invoice';
import GetItNow from './GetItNow';
import Spot from './Spot';
import AgreedPrice from './AgreedPrice';
import AgreedPriceNoPurchase from './AgreedPriceNoPurchase';
import MarketplaceSpot from './MarketplaceSpot';
import VirtualOrder from './VirtualOrder';
import ValidityTime from './ValidityTime';
import LegacyAgreedPrice from './LegacyAgreedPrice';
import Shipper from './Shipper';
import PurchasingExtras from './PurchasingExtras';

type RequestV3 = {
    key?: string;
    source: string[];
    packages: Package[];
    points: PartialPointV2[];
    transports: RequestedTransport[];
    extras?: string[];
    references?: Reference[];
    customer_interlocutor?: CustomerInterlocutor;
    custom_fields?: CustomField[];
    invoice?: Invoice;
    order_type?:
        | Spot
        | AgreedPrice
        | AgreedPriceNoPurchase
        | VirtualOrder
        | MarketplaceSpot
        | GetItNow
        | LegacyAgreedPrice;
    validity_time?: ValidityTime;
    issuer?: string;
    creator?: string;
    target?: string[];
    comment?: string;
    shipper?: Shipper;
    purchasingExtras?: PurchasingExtras[];
};

export default RequestV3;
