Auction.ItemsController = Ember.ArrayController.extend({
  itemController: 'item',
  actions: {
    clearAllDescrip: function () {
      // debugger;
      this.setEach('clicked', false);
    }
  }
});
