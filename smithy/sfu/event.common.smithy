namespace redspher.platform.sfu

list EventList {
    member: Event,
}

structure Event {
    id: UniqueIdentifier,

    @documentation("Order key")
    @length(min: 8, max: 128)
    @required
    key: String,

    @documentation("The entity type, begin by sfu/event")
    type: String,

    @documentation("The date time of the creation of the event")
    @timestampFormat("date-time")
    created_at: Timestamp,

    @documentation("The event content, depending of the tracking_provider. The structure is totally free and not controlled")
    @required
    content: Document,

    @documentation("The entity source of the event")
    @length(min: 2, max: 64)
    @required
    source: String
}
