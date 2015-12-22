/**
 * Created by radudalbea on 11/11/15.
 */
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'id',
    serializeAttribute: function(snapshot, json, key, attributes) {
        if (snapshot.changedAttributes()[key] || snapshot.record.get('isNew')) {
            var t = this._super(snapshot, json, key, attributes);

            Object.keys(json).forEach((k) => {
                if (json[k] === null) {
                    json[k] = undefined;
                }
            });
            return t;
        } else {
            return;
        }
    }
});