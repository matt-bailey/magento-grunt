// This is prototype's equivalent to jQuery's $(document).ready
document.observe('dom:loaded', function() {
	console.log("Hello world!");
});
