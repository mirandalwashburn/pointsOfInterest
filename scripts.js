<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	function imageHeight() {
		//Height of the POI image
	var graphicHeight = document.querySelector('.POI-container').offsetHeight;
	
	//Get the height of the paragraph + h2 tag for the active .POI-more-content (add 30 for extra space at the bottom)
	var moreContentTotal = document.querySelector('div .active p').offsetHeight + document.querySelector('div .active h2').offsetHeight + 30;

	//Set the var for the POI-wrapper
	var carGraphicTotalHeight = document.getElementById('POI-wrapper');
	
	//Set the height of the POI-wrapper
	carGraphicTotalHeight.style.height = graphicHeight + moreContentTotal + 'px';
	
	//Tests to make sure the height is correct
	console.log(document.getElementById('POI-wrapper').offsetHeight)
	}

imageHeight();
function displayMoreContent(moreContentItem) {
	
	$('.POI-more-content').removeClass('active');
	$('.POI-point').removeClass('active');

	$(moreContentItem).addClass('active');
imageHeight();
}
	

$('.POI-point-container').on("click", function() {

displayMoreContent($(this).children());


	
	});	
