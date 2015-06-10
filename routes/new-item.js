Auction.NewItemRoute = Ember.Route.extend({
  renderTemplate: function () {
    this.render({ outlet: 'new-item' });
  }
});
