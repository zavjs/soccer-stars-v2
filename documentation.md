## Player

[Player entity]
fullname: String
nickname: String
birth: Date
upvoteCount: Number
downvoteCount: Number

[Player Page entity]
playerId: Number
comment: String
upvoteCount: Number
downvoteCount: Number
photos: Array<String>

[GET] /players/:num
get a list with the 50 best rated players

[GET] /player/:id

[PUT] /player/:id/upvote
upvotes a player

[PUT] /player/:id/downvote
downvotes a player

[POST] /player/:id/comment
posts a comment in a player's wall
