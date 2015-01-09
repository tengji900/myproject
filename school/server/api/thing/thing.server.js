var Thing = require('./thing.model');

exports.find = function(cb) {
	Thing.find(function(err, things) {
		return cb(err, things);
	});
};

exports.findById = function(userID, cb) {
	Thing.findById(userID, function(err, thing) {
		return cb(err, thing);
	});
};
exports.findByLine = function(line, cb) {
	Thing.find({
		// "name": "Smart Build System",
		"line": line
		//"line": {$gt:3}
	}, function(err, thing) {
		return cb(err, thing);
	});
};

exports.insert=function(bean,cb){
	Thing.create(bean,function(err,thing){
		return cb(err,thing);
	});
};
exports.updateLine=function(line,cb){
	Thing.update({"line":line},{'$set':{'line':90}},function(err,thing){
		Thing.find(function(err,things){
			return cb(err,things);
		});
	});
}
exports.deleteByID=function(line,cb){
	console.log('line: '+line);
	Thing.remove({"line":line},function(err,thing){
		Thing.find(function(err,things){
			return cb(err,things);
		});
	});
}