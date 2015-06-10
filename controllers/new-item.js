Auction.NewItemController = Ember.Controller.extend({
  needs: ['lot'],
  actions: {
    save: function () {
      var newItem = this.store.createRecord('item', {
        owner: this.get('owner'),
        description: this.get('description'),
        backstory: this.get('backstory'),
        yearAcquired: this.get('year-acquired'),
        image: this.get('image')
      });
      newItem.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(newItem);
      lot.save();
      this.transitionToRoute('lot', lot.id);
    }
  }
});
