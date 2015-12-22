/**
 * Created by radudalbea on 11/11/15.
 */
import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://www.yourendpoint.dev',
    namespace: 'emberApi'
});

export default ApplicationAdapter;