Auction.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: 'auctions/:auction_id'});
  this.resource('new-auction');
  this.resource('lot', {path: 'lots/:lot_id'}, function(){
    this.resource('new-item');
    this.resource('item', {path: 'items/:item_id'});
  });
  this.resource('new-lot');

});
