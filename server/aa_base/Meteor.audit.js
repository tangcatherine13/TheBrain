var _audit = function () {
    var _self = this;
    console.log("I'm in audit");
    _self.init = function (userId, coll, doc) {
        console.log("I'm in audit init");
        doc.created = { by: userId, on: new Date().getTime() };
        doc.lastModified = { by: userId, on: new Date().getTime() };

    };

    _self.update = function (userId, coll, doc) {
        console.log("I'm in audit update");s

        //update last modified on collection
        coll.update(doc._id, { $set: { lastModified: { by: userId, on: new Date().getTime() } } });
    };

};

Meteor.Audit = new _audit();