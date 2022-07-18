namespace redspher.platform.sfu

@pattern("^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$")
@documentation("Unique identifier at format UUID v4")
string UniqueIdentifier

@enum([
    { value: "planned", name: "PLANNED" },
    { value: "running", name: "RUNNING" },
    { value: "completed", name: "COMPLETED" },
    { value: "cancelled", name: "CANCELLED" },
    { value: "expired", name: "EXPIRED" },
])
@documentation("The status of the transport. Can be planned, cancelled, running, completed, expired. Default planned")
string TransportStatus

@enum([
    { value: "waiting_for_pickup", name: "WAITING_FOR_PICKUP" },
    { value: "pickup_delayed", name: "PICKUP_DELAYED" },
    { value: "picked_up", name: "PICKED_UP" },
    { value: "delivery_delayed", name: "DELIVERY_DELAYED" },
    { value: "delivered", name: "DELIVERED" },
])
@documentation("The status of a package. Can be waiting_for_pickup, pickup_delayed, picked_up, delivery_delayed, delivered. Default waiting_for_pickup")
string PackageStatus

@enum([
    { value: "no", name: "NO" },
    { value: "1", name: "ONE" },
    { value: "2", name: "TWO" },
    { value: "3", name: "THREE" },
    { value: "4", name: "FOUR" },
])
@documentation("The stackability of a package. Default no")
string Stackable

@enum([
    { value: "parcel", name: "PARCEL" },
    { value: "pallet", name: "PALLET" }
])
@documentation("The package type. Default parcel")
string PackageType

list Keys {
    member: String,
}

list TransportOutputList {
    member: TransportOutput,
}

structure TransportInput {
    @documentation("A key provided by the TMS. Must be unique.")
    @length(min: 8, max: 128)
    @required
    key: String,

    @documentation("The entity type, always transport")
    type: String,

    @documentation("The source entity of the Transport")
    @length(min: 2, max: 64)
    @required
    source: String,

    @documentation("The list of packages to load and unload during the transport")
    @required
    packages: PackagesInput,

    @documentation("The list of points which the transport go through")
    @required
    points: Points,

    @documentation("Vehicle list affected to the Transport")
    vehicles: VehiclesInput,

    @documentation("Distances between each point of the transport")
    distances: Distances,

    @documentation("Transport's incoterm code")
    @length(min: 3, max: 3)
    incoterm: String,

    @documentation("The URL where tracking informations can be found")
    @length(min: 8, max: 256)
    tracking_url: String,

    @documentation("The Waybill URL")
    @length(min: 8, max: 256)
    waybill: String,

    @documentation("The TMS Transport creator")
    @length(min: 2, max: 32)
    creator: String,
}

structure TransportOutput {
    @documentation("An unique id provided internal by the system. Must be an UUID.")
    @internal
    @required
    id: UniqueIdentifier,

    @required
    status: TransportStatus,

    @documentation("A key provided by the TMS")
    @length(min: 8, max: 128)
    @required
    key: String,

    @documentation("The entity type, always transport")
    type: String,

    @documentation("Entity that create the transport")
    @required
    source: String,

    @documentation("The Transport creation date time")
    @timestampFormat("date-time")
    @required
    created_at: Timestamp,

    @documentation("The list of packages to load and unload during the transport")
    @required
    packages: PackagesOutput,

    @documentation("The list of points which the transport go through")
    @required
    points: Points,

    @documentation("Vehicle list affected to the Transport")
    vehicles: VehiclesOutput,

    @documentation("Distances between each point")
    distances: Distances,

    @documentation("The URL where tracking informations can be found")
    @length(min: 8, max: 256)
    tracking_url: String,

    @documentation("Transport's incoterm code")
    @length(min: 3, max: 3)
    incoterm: String,

    @documentation("The Waybill URL")
    @length(min: 8, max: 256)
    waybill: String,

    @documentation("The TMS Transport creator")
    @length(min: 2, max: 32)
    creator: String,
}

list Distances {
    member: Float,
}

list PackagesInput {
    member: PackageInput,
}

structure PackageInput {
    @documentation("The tracking ID of the package. Set as UUID as default if not provided.")
    @required
    @length(min: 8, max: 128)
    tracking_id: String,

    @documentation("The identifier of the package owner")
    @required
    @length(min: 2, max: 128)
    owner: String,

    stackable: Stackable,

    @documentation("Quantity of the same package. Default to 1")
    @range(min: 0)
    quantity: Integer,

    @documentation("Package reference")
    references: References,

    @documentation("Package length in cm")
    @required
    @range(min: 0)
    length: Float,

    @documentation("Package width in cm")
    @required
    @range(min: 0)
    width: Float,

    @documentation("Package height in cm")
    @required
    @range(min: 0)
    height: Float,

    @documentation("Package weight in kg")
    @required
    @range(min: 0)
    weight: Float,

    package_type: PackageType,

    @documentation("The entity type, always package")
    type: String,

    @documentation("ADR description")
    adr: ADR,

    @documentation("A useful comment about the package")
    comment: String,

    @documentation("Package goods value")
    good_value: GoodValue,
}

list PackagesOutput {
    member: PackageOutput,
}

structure PackageOutput {
    @documentation("The tracking ID of the package. Set as UUID as default if not provided.")
    @required
    @length(min: 8, max: 128)
    tracking_id: String,

    @documentation("The identifier of the package owner")
    @required
    @length(min: 2, max: 128)
    owner: String,

    @required
    status: PackageStatus,

    stackable: Stackable,

    @documentation("Quantity of the same package. Default to 1")
    @range(min: 0)
    quantity: Integer,

    @documentation("Package reference")
    references: References,

    @documentation("Package length in cm")
    @required
    @range(min: 0)
    length: Float,

    @documentation("Package width in cm")
    @required
    @range(min: 0)
    width: Float,

    @documentation("Package height in cm")
    @required
    @range(min: 0)
    height: Float,

    @documentation("Package weight in kg")
    @required
    @range(min: 0)
    weight: Float,

    package_type: PackageType,

    @documentation("The entity type, always package")
    type: String,

    @documentation("ADR description")
    adr: ADR,

    @documentation("A useful comment about the package")
    comment: String,

    @documentation("Package goods value")
    good_value: GoodValue,
}

@length(min: 1, max: 5)
list References {
    @length(min: 0, max: 128)
    member: String,
}

structure GoodValue {
    @documentation("The total value of the goods")
    @required
    @range(min: 0)
    value: Float,

    @documentation("The ISO 4217 code of the currency. Default to EUR")
    @required
    @length(min: 3, max: 3)
    currency: String,
}

structure ADR {
    @documentation("ADR class")
    @required
    class: String,

    @documentation("ADR un code")
    @required
    un_code: String,

    @documentation("ADR packing group")
    @required
    packing_group: String,
}

@length(min: 2, max: 50)
list Points {
    member: Point
}

structure Point {
    @documentation("Order key")
    @required
    @length(min: 8, max: 128)
    key: String,

    @documentation("The point Address")
    @required
    address: Address,

    @documentation("The point types")
    point_types: Types,

    @documentation("The entity type, always point")
    type: String,

    @documentation("The expected date time of the arrival at the described Point")
    @timestampFormat("date-time")
    @required
    arrival_from: Timestamp,

    @documentation("The expected limit date time of the arrival at the described Point")
    @timestampFormat("date-time")
    arrival_until: Timestamp,

    @documentation("The real date time of the arrival at the described Point")
    @timestampFormat("date-time")
    real_arrival: Timestamp,

    @documentation("The real date time of the departure at the described Point")
    @timestampFormat("date-time")
    real_departure: Timestamp,

    @documentation("The contact of the point")
    contact: Contact,

    @documentation("The list of Package tracking_id to load at the Point")
    @required
    packages_to_load: PackageIds,

    @documentation("The list of Package tracking_id to unload at the Point")
    @required
    packages_to_unload: PackageIds,

    @documentation("Extra information about the Point")
    comment: String,
}

list Types {
    member: String
}

structure Contact {
    @documentation("The company name of the contact")
    @required
    @length(min: 1, max: 64)
    company_name: String,

    @documentation("The name of the contact")
    @length(min: 1, max: 64)
    name: String,

    @documentation("The email of the contact")
    email: String,

    @documentation("The phone number of the contact")
    @length(min: 1, max: 32)
    phone: String,
}

list PackageIds {
    member: UniqueIdentifier,
}

structure Address {
    @documentation("The first line of the address")
    @required
    @length(min: 1, max: 128)
    street: String,

    @documentation("Optional second line of the address. Can be used to complete the address")
    @length(min: 1, max: 128)
    additional_street: String,

    @documentation("The city of the address")
    @length(min: 1, max: 38)
    @required
    city: String,

    @documentation("The zip code of the address")
    @length(min: 1, max: 32)
    @required
    zip_code: String,

    @documentation("The province of the address")
    @length(min: 1, max: 128)
    province: String,

    @documentation("The ISO 3166-alpha2 code of the country")
    @required
    @length(min: 2, max: 2)
    country: String,

    @documentation("The timezone of the Address from the TZ database")
    @required
    timezone_string: String,

    @documentation("The geolocalization of the address")
    @required
    position: Position,
}

structure Position {
    lat: Float,
    lon: Float,
}

structure Carrier {
    @documentation("The carrier id / code")
    @required
    id: String,
}

list VehiclesOutput {
    member: VehicleOutput,
}

structure VehicleOutput {
    @documentation("The vehicle plate number")
    @required
    @length(min: 4, max: 16)
    plate: String,

    @documentation("The vehicle type name")
    @required
    @length(min: 1, max: 32)
    vehicle_type: String,

    @documentation("The entity type, always vehicle")
    type: String,

    @documentation("The code of the tracking provider")
    @required
    @length(min: 2, max: 32)
    tracking_provider: String,

    @documentation("The last position of the Vehicle")
    last_position: Position,

    @documentation("The vehicle brand")
    @length(min: 1, max: 128)
    brand: String,

    @documentation("Additional information about the vehicle")
    information: String,

    @documentation("The carrier that vehicle belong to")
    @required
    carrier: Carrier,

    @documentation("The drivers that drive the Vehicle")
    drivers: Drivers,

    @documentation("The package affected to the vehicle")
    @required
    package: PackageIds
}

list VehiclesInput {
    member: VehicleInput,
}

structure VehicleInput {
    @documentation("The vehicle plate number")
    @required
    plate: String,

    @documentation("The vehicle type name")
    @required
    @length(min: 1, max: 32)
    vehicle_type: String,

    @documentation("The entity type, always vehicle")
    type: String,

    @documentation("The code of the tracking provider")
    @required
    tracking_provider: String,

    @documentation("The vehicle brand")
    brand: String,

    @documentation("Additional information about the vehicle")
    information: String,

    @documentation("The carrier that vehicle belong to")
    @required
    carrier: Carrier,

    @documentation("The drivers that drive the Vehicle")
    drivers: Drivers,

    @documentation("The package affected to the vehicle")
    @required
    package: PackageIds
}

list Drivers {
    member: Driver,
}

structure Driver {
    @documentation("The driver name")
    @length(min: 1, max: 64)
    name: String,

    @documentation("The driver phone number")
    @length(min: 1, max: 32)
    phone: String,
}
