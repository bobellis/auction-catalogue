Auction.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: 'auctions/:auction_id'});
  this.resource('new-auction');
  this.resource('lot', {path: 'auctions/lots/:lot_id'}, function(){
    this.resource('new-item');
    this.resource('item');
  });
  this.resource('new-lot');

});
