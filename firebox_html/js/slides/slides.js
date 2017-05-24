/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.

* Updated: May 23th, 2017
* 1. By default, pagination use <ul><li></li><li></li></ul>
* chagne this to <div><div/><div/></div> for firebox.
* 2. By default, use <a href="#1" /> to identify which element was select
* chagne to use index method:
* var listItem = $( "#bar" );
* $( "li" ).index( listItem )
*/
(function($){
	$.fn.slides = function( option ) {
		// override defaults with specified option
		option = $.extend( {}, $.fn.slides.option, option );

		return this.each(function () {

			var elem = $(this),
				control = $('.' + option.controlClass, elem),
                pagination = $('.' + option.paginationClass, elem),
				total = pagination.children().size(),
				start = option.start - 1,
				next = 0, prev = 0, number = 0, current = 0, loaded, active, clicked, imageParent;
			
			// is there only one slide?
			if (total < 2) {
			    option.slidesLoaded();
				// Hide the next/previous buttons
				$('.' + option.next + ', .' + option.prev).fadeOut(0);
				return false;
			}

			// animate slides
			function animate(direction, clickedIndex) {
				if (!active && loaded) {
					active = true;
					// start of animation
					option.animationStart(current + 1);
					switch(direction) {
						case 'next':
							// change current slide to previous
							prev = current;
							// get next from current + 1
							next = current + 1;
							// if last slide, set next to first slide
							next = total === next ? 0 : next;
							// store new current slide
							current = next;
						break;
						case 'prev':
							// change current slide to previous
							prev = current;
							// get next from current - 1
							next = current - 1;
							// if first slide, set next to last slide
							next = next === -1 ? total-1 : next;										
							// store new current slide
							current = next;
						break;
						case 'pagination':
							// get next from pagination item clicked, convert to number
						    next = parseInt(clickedIndex, 10);
							// get previous from pagination item with class of current
						    prev = $('.' + option.paginationClass, elem).children('.' + option.currentClass).index();
							// store new current slide
							current = next;
						break;
					}

					active = false;

					var $targetImg = $('.'+ option.paginationClass, elem).children(':eq(' + next + ')');
					control.find('img').attr('src', $targetImg.children().first().attr(option.fullImgAttrName));

					// set current state for pagination
					if (option.pagination) {
						// remove current class from all
					    $('.'+ option.paginationClass, elem).children('.' + option.currentClass).removeClass(option.currentClass);
						// add current class to next
					    $('.' + option.paginationClass, elem).children(':eq(' + next + ')').addClass(option.currentClass);
					}
				}
			} // end animate function

			// 2 or more slides required
			if (total < 2) {
				return;
			}
			
			// error corection for start slide
			if (start < 0) {
				start = 0;
			}
			
			if (start > total) {
				start = total - 1;
			}
					
			// change current based on start option number
			if (option.start) {
				current = start;
			}

		    // let the script know everything is loaded
			loaded = true;
		    // call the loaded funciton
			option.slidesLoaded();
			
			// generate next/prev buttons
			if (option.generateNextPrev) {
				$('.' + option.container, elem).after('<a href="#" class="'+ option.prev +'">Prev</a>');
				$('.' + option.prev, elem).after('<a href="#" class="'+ option.next +'">Next</a>');
			}
			
			// next button
			$('.' + option.next, elem).click(function(e){
				animate('next');
				return false;
			});
			
			// previous button
			$('.' + option.prev, elem).click(function(e){
				animate('prev');
				return false;
			});
			
			// generate pagination
			if (option.generatePagination) {
				// create unordered list
				if (option.prependPagination) {
					elem.prepend('<ul class='+ option.paginationClass +'></ul>');
				} else {
					elem.append('<ul class='+ option.paginationClass +'></ul>');
				}
				// for each slide create a list item and link
				control.children().each(function(){
					$('.' + option.paginationClass, elem).append('<li><a href="#'+ number +'">'+ (number+1) +'</a></li>');
					number++;
				});
			}
			
			// add current class to start slide pagination
			$('.' + option.paginationClass, elem).children(':eq(' + start + ')').addClass(option.currentClass);
			
			// click handling 
			$('.' + option.paginationClass, elem).children().click(function(){
				// get clicked, pass to animate function					
				clicked = $(this).index();
				// if current slide equals clicked, don't do anything
				if (current != clicked) {
					animate('pagination', clicked);
				}
				return false;
			});

		    // click handling
			if (option.bingMagnificPopup) {
			    $('body').on('click', '.mfp-gallery .mfp-arrow-left', function () {
			        animate('prev');
			        return false;
			    });

			    $('body').on('click', '.mfp-gallery .mfp-arrow-right', function () {
			        animate('next');
			        return false;
			    });
			}

		});
	};
	
	// default options
	$.fn.slides.option = {
		container: 'slides_container', // string, Class name for slides container. Default is "slides_container"
		generateNextPrev: false, // boolean, Auto generate next/prev buttons
		next: 'next', // string, Class name for next button
		prev: 'prev', // string, Class name for previous button
		bingMagnificPopup: true, // boolean, Animate when magnific-popup prev/next event
		pagination: true, // boolean, If you're not using pagination you can set to false, but don't have to
		generatePagination: true, // boolean, Auto generate pagination
		prependPagination: false, // boolean, prepend pagination
		paginationClass: 'pagination', // string, Class name for pagination
		currentClass: 'active', // string, Class name for current class
	    fullImgAttrName: 'data-full-img', // string, full image src
		start: 1, // number, Set the first slide in the slideshow
		effect: 'slide', // string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
        animationStart: function(){}, // Function called at the start of animation
		animationComplete: function(){}, // Function called at the completion of animation
		slidesLoaded: function() {} // Function is called when slides is fully loaded
	};
})(jQuery);
