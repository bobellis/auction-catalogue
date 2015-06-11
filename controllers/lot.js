Auction.LotController = Ember.ObjectController.extend({
  needs: ['items'],
  notAddingItem: true,
  notViewingItems: true,
  actions: {
    addItem: function () {
      this.notAddingItem ? this.set('notAddingItem', false) : this.set('notAddingItem', true);
    },
    viewItems: function () {
      this.notViewingItems ? this.set('notViewingItems', false) : this.set('notViewingItems', true);
    },
    clearAllDescrip: function () {
      alert('in lot controller');
      this.get('items').setEach('clicked', false);
    }
  }
  // itemShowingChanged: function() {
  //   this.get('model').get('items').forEach(function(item) {
  //     console.log('hi');
  //     item.set('clicked', false);
  //   });
  // }.observes('items.@each.clicked')
});
