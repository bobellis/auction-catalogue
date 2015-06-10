Auction.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: 'auctions/:auction_id'});
  this.resource('new-auction')
});
