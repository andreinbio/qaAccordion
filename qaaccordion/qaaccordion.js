(function ($) {
	$.fn.qaAccordion = function (options) {
		
		//default settings
		var settings = $.extend({
			qa_wrapper: "#qaAccordion",
			qa_item: ".qa_item",
			question_container: ".qa_question",
			answer_container: ".qa_answer",
			slide_speed: "fast"
		}, options);
		
		//the function ...
		this.find(settings.question_container).click(function () {
			if ($(this).hasClass("qa_on")) {
				
				$(this).next(settings.answer_container).slideToggle(settings.slide_speed, function () {
					$(this).prev(settings.question_container).toggleClass("qa_on qa_off").children(".fa").toggleClass("fa-minus fa-plus");
				});
				
			} else {
				
				$(settings.question_container).filter(".qa_on").next(settings.answer_container).slideUp(settings.slide_speed, function () {
						$(this).prev(".qa_on").toggleClass("qa_on qa_off").children(".fa").toggleClass("fa-plus fa-minus");
					});
				$(this).next(settings.answer_container).slideToggle(settings.slide_speed, function () {
					$(this).prev(settings.question_container).toggleClass("qa_on qa_off").children(".fa").toggleClass("fa-plus fa-minus");
				});
			}
				
		});
			
		return this;
	};
		
}(jQuery));