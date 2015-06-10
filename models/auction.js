Auction.Auction = DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  description: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
