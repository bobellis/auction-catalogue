Auction.Item = DS.Model.extend({
  clicked: DS.attr(),
  owner: DS.attr(),
  description: DS.attr(),
  backstory: DS.attr(),
  image: DS.attr(),
  yearAcquired: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
