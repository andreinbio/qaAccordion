/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function ($) {
	$.fn.qaAccordion = function (options) {
		
		//default settings
		var settings = $.extend({
			question_container: ".qa_question",
			answer_container: ".qa_answer",
			slide_speed: "fast",
			fa_closed: "fa-plus",
			fa_opened: "fa-minus",
			fa: true,
			fa_path:"qaaccordion/font-awesome-4.2.0/css/font-awesome.min.css"
		}, options);
		
		loadCSS = function(href) {
			var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
			$("head").append(cssLink); 
		};
		
		if( settings.fa ) {
			loadCSS(settings.fa_path);
		}
		
		//the function ...
		this.find(settings.question_container).addClass("qa_off").append("<i class='fa "+settings.fa_closed+"'></i>").click(function () {
			if ($(this).hasClass("qa_on")) {
				
				$(this).next(settings.answer_container).slideToggle(settings.slide_speed, function () {
					$(this).prev(settings.question_container).toggleClass("qa_on qa_off").children(".fa").toggleClass(settings.fa_opened+" "+settings.fa_closed);
				});
				
			} else {
				
				$(settings.question_container).filter(".qa_on").next(settings.answer_container).slideUp(settings.slide_speed, function () {
						$(this).prev(".qa_on").toggleClass("qa_on qa_off").children(".fa").toggleClass(settings.fa_closed+" "+settings.fa_opened);
					});
				$(this).next(settings.answer_container).slideToggle(settings.slide_speed, function () {
					$(this).prev(settings.question_container).toggleClass("qa_on qa_off").children(".fa").toggleClass(settings.fa_closed+" "+settings.fa_opened);
				});
			}
				
		});
			
		return this;
	};
		
}(jQuery));