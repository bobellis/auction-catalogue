Auction.NewItemController = Ember.Controller.extend({
  needs: ['lot'],
  actions: {
    save: function () {
      var newItem = this.store.createRecord('item', {
        owner: this.get('owner'),
        description: this.get('description'),
        backStory: this.get('backstory'),
        yearAcquired: this.get('year-acquired')
      });
      newItem.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(newItem);
      lot.save();
      this.transitionToRoute('lot', lot.id);
    }
  }
});
