/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict
//
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');//
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$(document).ready(function (){
    var galleryElement = $("#gallery");

    if (galleryElement) {
        // Init Image Gallery
        var setId = 'photo-set';
        var photoSet = galleryElement.attr('data-photo-set');
        var options = { 
            //FLICKR API KEY
            Key: '840349b751c5ad5d47bbf59738ff3ef9',
            //Secret
            Secret: 'ce89ef1463bf1f39',
            //FLICKR user ID
            User: '146918508@N08',
            //Flickr PhotoSet ID
            PhotoSet: photoSet,
            /*-- VIEWBOX SETTINGS --*/
            Speed   : 400,    //Speed of animations
            navigation  : 1,    //(true) <a href="http://www.jqueryscript.net/tags.php?/Navigation/">Navigation</a> (arrows)
            keyboard  : 1,    //(true) Keyboard navigation
            numberEl  : 1     //(true) Number elements

        }

        galleryElement.flickrGallery(options);
    }
});

