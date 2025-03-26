const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { Package } = require('./package')
const { PartialPointV2 } = require('./partial_point_v2')
const { RequestedTransport } = require('./requested_transport_v3')
const { CustomField } = require('./custom_field')
const { Invoice } = require('./invoice')
const { Reference } = require('./reference')
const { VirtualOrder } = require('./virtual_order')
const { MarketplaceSpot } = require('./marketplace_spot')
const { AgreedPrice } = require('./agreed_price')
const { AgreedPriceNoPurchase } = require('./agreed_price_no_purchase')
const { LegacyAgreedPrice } = require('./legacy_agreed_price')
const { Spot } = require('./spot')
const { GetItNow } = require('./get_it_now')
const { ValidityTime } = require('./validity_time')
const { CustomerInterlocutor } = require('./customer_interlocutor')
const { Shipper } = require('./shipper')
const { PurchasingExtras } = require('./purchasing-extras')

const RequestV3 = s.object({
  key: s.optional(NoEmptyString),
  source: s.size(s.array(NoEmptyString), 1, 5),
  packages: s.size(s.array(Package), 0, 50),
  points: s.size(s.array(PartialPointV2), 2, 20),
  transports: s.size(s.array(RequestedTransport), 1, 10),
  extras: s.defaulted(s.optional(s.size(s.array(NoEmptyString), 0, 50)), []),
  references: s.optional(s.size(s.array(Reference), 0, 5)),
  customer_interlocutor: s.optional(CustomerInterlocutor),
  custom_fields: s.optional(s.size(s.array(CustomField), 0, 30)),
  invoice: s.optional(Invoice),
  order_type: s.optional(
    s.union([GetItNow, VirtualOrder, MarketplaceSpot, AgreedPrice, AgreedPriceNoPurchase, Spot, LegacyAgreedPrice])
  ),
  validity_time: s.optional(ValidityTime),
  issuer: s.optional(NoEmptyString),
  creator: s.optional(NoEmptyString),
  target: s.optional(s.size(s.array(NoEmptyString), 0, 100)),
  comment: s.optional(s.size(s.string(), 0, 1024)),
  shipper: s.optional(Shipper),
  purchasingExtras: s.optional(s.size(s.array(PurchasingExtras), 0, 10))
})

module.exports = {
  RequestV3: RequestV3
}
