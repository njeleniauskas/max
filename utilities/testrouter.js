/*Note: javascript build uses an old version, so functions like array.some are not useable at this time. */

var val = 0;

if (jsarguments.length > 1) {
	post('success');
	val = jsarguments[1];
}


function list() {
	const arr = arrayfromargs(arguments);
	const test = [0, 16, 32, 48, 64];
	
	
	for (var i = 0, len = test.length; i < len; i ++) {
			if (arr[0] === test[i]) {
					post('is found', arr[0] + '\n');
			}
	}
	

	val = arr;
	outlet(0, val);
}