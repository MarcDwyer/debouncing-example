var JD = {};

JD.debounce = function(func, wait, immediate) {
  var timeout;
	return function() {
    console.log(2)
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if ( !immediate ) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
        clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);
		if ( callNow ) { 
			func.apply(context, args);
		}
	};
};

JD.firstName = function() {
    console.log('John');
};

JD.lastName = function() {
    console.log('Dugan');
};

window.addEventListener('resize', JD.debounce(JD.lastName, 400));
window.addEventListener('resize', JD.debounce(JD.firstName, 400, true));

