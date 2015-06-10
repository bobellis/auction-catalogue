Auction.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function(){
      var newAuction = this.store.createRecord('auction', {
        name: this.get('name'),
        date: this.get('date'),
        description: this.get('description')
      });
      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
