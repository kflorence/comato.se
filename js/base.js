jQuery(function($) {
	var $toggle = $("#toggleComments a"),
		$comments = $("#comments");

	$toggle.click(function() {
		$toggle.text( ( $comments.is(":hidden") ? "Hide" : "Show" ) + " Comments");
		$comments.slideToggle("slow");
	});
});
