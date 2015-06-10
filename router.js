Auction.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: 'auctions/:auction_id'});
  this.resource('new-auction');
  this.resource('lot', {path: 'auctions/lots/:lot_id'});
  this.resource('new-lot');
});
