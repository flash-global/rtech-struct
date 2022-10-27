import Bid from './Bid';

type Auction = {
    id: string,
    type: string,
    key: string,
    name: string,
    status: 'created' | 'cancelled' | 'running' | 'completed' | 'expired' | 'failed' | 'searching' | 'searched' | 'validated',
    reported_at: string,
    archived_at?: string,
    tracking_url?: string,
    valid_until: string,
    valid_from: string,
    decision_from: string,
    waybills?: string,
    creator: string,
    visible: 'public' | 'private',
    options: Array<'SHAQUPLOAD' | 'BIDUPLOAD' | 'AUTOINVITE' | 'BIDCOMMENT' | 'NOCHAT' | 'LITE' | 'PRICE_DETAIL' | 'SHOW_CONTACT' | 'PKG_V1' | 'PKG_V2' | 'MULTISTEP' | 'CLOSE_AFTER_DECISION_FROM' | 'SECRET_GETITNOW'>,
    source: string[],
    target: string[],
    targetStatus?: Array<'' | 'Removed' | 'Disabled' | 'Searching' | 'NoSolution'>,
    sourceName?: string[],
    sourceOwner?: string[],
    targetName?: string[],
    targetOwner?: string[],
    currency: 'EUR' | 'DOLLAR',
    bestbidprice?: number,
    bestbid?: string,
    getitnow?: number,
    winningbid?: string,
    puPlace: string[],
    puLocation?: string[],
    puContact?: string[],
    puDate: string,
    extras: string[],
    puDateRange?: string,
    dePlace: string[],
    deLocation?: string[],
    deContact?: string[],
    deDate: string,
    deDateRange?: string,
    files?: string[],
    vehicles: string[],
    incoterm?: 'EXW' | 'CIP' | 'FCA' | 'DAP' | 'DPU' | 'CPT' | 'DDP' | 'FAS' | 'CFR' | 'FOB' | 'CIF',
    transport?: string[],
    dimension: string[],
    stackable?: 'yes' | 'no' | 'No' | 'Yes' | 0 | 1,
    distance: number | string,
    notes?: string,
    bid?: Bid,
    tags: string[],
    scoring_process?: string,
};

export default Auction;
