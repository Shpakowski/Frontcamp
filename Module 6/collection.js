db.createCollection("author",
	{ validator: { $or:
		[
			{ name: { $type: "string" } },
		]
	}
});


db.createCollection("article",
	{ validator: { $or:
		[
			{ author: { $type: "string" } },
			{ content: { $type: "string" } },
		]
	}
});

db.article.createIndex( { author: 1 } );

db.createCollection("comment",
	{ validator: { $or:
		[
			{ author: { $type: "string" } },
			{ content: { $type: "string" } },
		]
	}
});