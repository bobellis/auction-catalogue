Auction.ItemRoute = Ember.Route.extend({
  renderTemplate: function () {
    this.render({ outlet: 'item' });
  }
});
