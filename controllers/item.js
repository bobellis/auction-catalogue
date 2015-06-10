Auction.ItemController = Ember.ObjectController.extend({
  clicked: false,
  actions: {
    itemClicked: function () {
      if (this.clicked) {
        this.set('clicked', false);
      } else {
        this.set('clicked', true);
      }
    }
  }
});
