Auction.Item = DS.Model.extend({
  owner: DS.attr(),
  description: DS.attr(),
  backStory: DS.attr(),
  image: DS.attr(),
  yearAcquired: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
