Auction.LotController = Ember.ObjectController.extend({
  notAddingItem: true,
  actions: {
    addItem: function () {
      this.notAddingItem ? this.set('notAddingItem', false) : this.set('notAddingItem', true);
    }
  }
});
