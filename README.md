qaAccordion
===========

This is a simple jQuery library to make the accordion effect.

The basic html is as fallows:

<pre><code>
&lt;div id="qaAccordion_wrapper"&gt;
	&lt;div class="qa_item"&gt;
		&lt;div class="qa_question qa_off"&gt;
			Your question goes here... / Title
		&lt;/div&gt;
		&lt;div class="qa_answer"&gt;
			Your answer goes here...
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre>

In its default state you must use this exact markup with its classes.
It comes with a css file that styles the elements.

To activate the accordion effect just call the accordion function on the wrapper that holds your entire queston-answer blocks like this:

<code>$("#qaAccordion").qaAccordion();</code>

In this example I used the default wrapper.

Of course you can have you own classes that will work with this plugin.

These are the settings that you can modify to make use of your own classes:

<pre><code>
	$("#qaAccordion").qaAccordion({
		question_container: ".qa_question",
		answer_container: ".qa_answer",
		slide_speed: "fast"
	});
</code></pre>

If you have any other questions please let me know.

Happy coding !
