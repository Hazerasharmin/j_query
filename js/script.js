//Js


//Jq
$(document).ready(function(){
	//old
	// $('#btn').click(function(){
	// 	alert("Welcome to my jquery project practise work");

	// });

	//update

	$('#btn').on("click",function(){
		alert("Welcome to my jquery practise work");

	});

//hide
$('#hide').on("mouseover",function(){

	$('object').hide();


});
//show
$('#show').on("mouseover",function(){

	$('object').show();


});
//toggle
$('#toggle').on("click",function(){
	$('object').toggle();

});

//hide
$('#hide2').on("mouseover",function(){

	$('h2').hide();


});
//show
$('#show2').on("mouseover",function(){

	$('h2').show();


});
//toggle
$('#toggle2').on("click",function(){
	$('h2').toggle();

});

//hide
$('#hide3').on("click",function(){

	$('h2').fadeOut();


});
//show
$('#show3').on("click",function(){

	$('h2').fadeIn();


});
//toggle
$('#toggle3').on("click",function(){
	$('h2').fadeToggle();

});

//question
$(document).ready(function(){

	$('.question').on("click",function(){
		$('.answer').slideToggle(2000);
	});


});

// Using multiple unit types within one animation.
 
$( "#go" ).on( "click", function() {
  $( "#block" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});


// Start animation
$( "#forward" ).on( "click", function() {
  $( ".block_img" ).animate({ left: "+=200px" }, 2000 );
});
 
// Stop animation when button is clicked
$( "#stop" ).on( "click", function() {
  $( ".block_img" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).on( "click", function() {
  $( ".block_img" ).animate({ left: "-=200px" }, 2000 );
});

 
// Toggle a sliding animation 
$( "#flip" ).on( "click", function() {
  	$(".panel_img").slideToggle("slow");
});

//clone

$( ".clone" ).clone().prependTo( "p" );


//after
$( ".after" ).after( "<b>Hello</b>" );

//append
$( "span" ).appendTo( "#foo" );

//attr
var title = $( "em" ).attr( "title" );
$( ".div3" ).text( title );

//before
$( ".before" ).before( $( ".before2" ) );

//change event
$( "select" )
  .on( "change", function() {
    var str = "";
    $( "select option:selected" ).each( function() {
      str += $( this ).text() + " ";
    } );
    $( ".div4" ).text( str );
  } )
  .trigger( "change" );


//checked selector
var countChecked = function() {
  var n = $( "input:checked" ).length;
  $( ".div5" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );


//closest
$( document ).on( "click", function( event ) {
  $( event.target ).closest( ".li" ).toggleClass( "highlight" );
});


//dequeue

$( "button" ).on( "click", function() {
  $( ".dequeue" )
    .animate({ left:"+=200px" }, 2000 )
    .animate({ top:"0px" }, 600 )
    .queue(function() {
      $("this" ).toggleClass( "red" ).dequeue();
    })
    .animate({ left:"10px", top:"30px" }, 700 );

});
//event.stopImmediatePropagation
$( ".prop" ).on( "click", function( event ) {
  event.stopImmediatePropagation();
});
$( ".prop" ).on( "click", function( event ) {
  // This function won't be executed
  $( "this" ).css( "background-color", "#f00" );
});
$( ".div7" ).on( "click", function( event ) {
  // This function will be executed
  $( "this" ).css( "background-color", "#f00" );
});

//focus selector
$( "#content" ).delegate( "*", "focus blur", function() {
  var elem = $( "this" );
  setTimeout(function() {
    elem.toggleClass( "focused", elem.is( ":focus" ) );
  }, 0 );
});


//nextall
$( ".box" ).first().nextAll().addClass( "after" );



});



