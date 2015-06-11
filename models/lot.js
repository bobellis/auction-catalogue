Auction.Lot = DS.Model.extend({
  description: DS.attr(),
  startingBid: DS.attr(),
  image: DS.attr(),
  currentItem: DS.attr(),
  lastItem: DS.attr(),
  auction: DS.belongsTo('auction', {async: true}),
  items: DS.hasMany('item', {async: true})
});
