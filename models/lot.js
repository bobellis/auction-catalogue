Auction.Lot = DS.Model.extend({
  description: DS.attr(),
  startingBid: DS.attr(),
  auction: DS.belongsTo('auction', {async: true}),
  items: DS.hasMany('item', {async: true})
});
