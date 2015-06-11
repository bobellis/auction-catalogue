Auction.LotController = Ember.ObjectController.extend({
  notAddingItem: true,
  actions: {
    addItem: function () {
      this.notAddingItem ? this.set('notAddingItem', false) : this.set('notAddingItem', true);
    }
  },
  // itemShowingChanged: function() {
  //   this.get('model').get('items').forEach(function(item) {
  //     console.log('hi');
  //     item.set('clicked', false);
  //   });
  // }.observes('items.@each.clicked')
});
