Auction.ItemsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lot', params.lot_id).then(function(lot) { return lot.get('items') });
  },
  renderTemplate: function () {
    this.render({ outlet: 'items' });
  }
});
