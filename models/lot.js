Auction.Lot = DS.Model.extend({
  auction: DS.belongsTo('auction', {async: true}),
  items: DS.hasMany('item', {async: true})
});
