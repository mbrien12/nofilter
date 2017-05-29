


$( ".cross" ).hide();
$( ".responsive-menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".responsive-menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".responsive-menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});