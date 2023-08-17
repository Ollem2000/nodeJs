function getFlags(flag){
	const theFlag = process.argv.indexOf(flag) + 1;
	return process.argv[theFlag];
}
module.exports = getFlags;