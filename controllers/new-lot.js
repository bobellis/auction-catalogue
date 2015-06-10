Auction.NewLotController = Ember.Controller.extend({
  needs: ['auction'],
  actions: {
    save: function () {
      var newLot = this.store.createRecord('lot', {
        description: this.get('description'),
        startingBid: this.get('starting-bid')
      });
      newLot.save();

      var auction = this.get('controllers.auction.model');
      auction.get('lots').pushObject(newLot);
      auction.save();
      this.transitionToRoute('auction', auction.id);
    }
  }
});
