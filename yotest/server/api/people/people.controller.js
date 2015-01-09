'use strict';


exports.find=functin(req,res){
	return res.json({jj:222});
}
function handleError(res,err){
	return res.send(500,err);
}