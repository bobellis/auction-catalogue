Auction.ItemController = Ember.ObjectController.extend({
  needs: ["lot"],
  clicked: false,
  actions: {
    itemClicked: function () {
      var lot = this.get('controllers.lot.model');
      if (this.clicked) {
        this.set('clicked', false);
        lot.set("image", "")
      } else {
        this.set('clicked', true);
        lot.set("image", this.get("image"))
      }
    }
  },
});
