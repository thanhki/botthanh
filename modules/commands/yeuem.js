const fs = require("fs");
module.exports.config = {
name: "yêu em",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Đạo lý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu em")==0 || (event.body.indexOf("Yêu em")==0)) {
		var msg = {
				body: "thương thương",
				attachment: fs.createReadStream(__dirname + `/noprefix/yêuem.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}