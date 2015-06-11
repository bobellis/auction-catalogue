Auction.LotRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('lot', params.lot_id)
  },
  deactivate: function () {
    this.controller.set('notViewingItems', true);
  }
  // setupController: function (controller, model) {
  //   controller.set('model', model);
  //   this.controllerFor('items').set('model', this.store.find('item'));
  // }
});
