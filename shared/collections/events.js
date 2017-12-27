Events = new Mongo.Collection('events');

let eventSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Event Name"
    },
    createdBy: {
        type: String,
        label: "Created By"
    },
    createdOn: {
        type: Date,
        label: "Created On"
    },
    startTime: {
        type: Date,
        label: "Start Time"
    },
    duration: {
        type: Date,
        label: "Event Length"
    },
    description: {
        type: String,
        label: "Description"
    },
    attending: {
        type: [String],
        optional: true
    },
    interested: {
        type: [String],
        defaultValue: []
    },
    locationAddress: {
        type: String
    },
    locationGeo: {
        type: String
    }
});

Events.attachSchema(eventSchema);

//prevents client from modifying
Events.allow({
    insert() {
        return false;
    },
    update() {
        return false;
    },
    remove() {
        return false;
    }
});

Events.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    }
});