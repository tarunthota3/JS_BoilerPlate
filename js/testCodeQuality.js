let log4js = require('log4js');
let logger = log4js.getLogger();
let student = {
name: 'David Rayy',
sclass: 'VI',
rollno: 12 };
let newArray = [];
for(let i in student) {
	if(i !== null){
		newArray.push(i);
	}
}

logger.debug(newArray.join(', '));
