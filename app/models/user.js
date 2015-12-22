import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr(),
    firstName: DS.attr(),
    lastName: DS.attr(),
    phone: DS.attr(),
    active: DS.attr(),
    discount: DS.attr(),
    created_at: DS.attr(),
    updated_at: DS.attr(),
    deleted_at: DS.attr(),

    fullName: Ember.computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    })
});
