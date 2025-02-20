```javascript
//Correct usage of $inc operator using $setOnInsert
db.collection.updateOne({"_id":1},{"$inc":{"a":1,"b":1},"$setOnInsert":{"a":0,"b":0}});
//Alternatively you can set the value to 0 before incrementing
db.collection.updateOne({"_id":1},{"$set":{"a":0,"b":0},"$inc":{"a":1,"b":1}});
```