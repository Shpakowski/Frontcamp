db.author.insert([{
	name: 'User1'
}, {
	name: 'User2'
}]);

db.article.insert([{
	_id: 0,
	author: {
		name: 'User1'
	},
	content: 'The chart below plots each transfer to a Premier League club by the continent the player is from and the fee paid'
}]);

db.comment.insert([{
	article: 0,
	content: 'It is a good news',
	author: {
		name: 'User2'
	}
}]);