document.addEventListener("DOMContentLoaded", () => {
	//$('.show-more-text').on('click', function (e) {
	//	let innerBlock = $(this).closest('.nekton-text-block').find('.nekton-text-block-inner');

	//	innerBlock.toggleClass('collapse');

	//	if (innerBlock.hasClass('collapse')) {
	//		$(this).html('Zobrazit více');
	//	}
	//	else {
	//		$(this).html('Zobrazit méně');
	//	}
	//});

	// check height of all collapsible text blocks on page
	const collapsibleTexts = document.querySelectorAll('.collapsible-text-block-inner');

	for (let i = 0; i < collapsibleTexts.length; i++) {
		collapsibleTexts[i].classList.add('mh-' + collapsibleTexts[i].dataset.collapseHeight);

		if (collapsibleTexts[i].offsetHeight > collapsibleTexts[i].dataset.collapseHeight) {
			collapsibleTexts[i].classList.add('collapse');
			collapsibleTexts[i].parentElement.querySelector('.show-more-text-container').classList.add('show');
		}
	}

	const showMoreTexts = document.querySelectorAll('.collapsible-text-block .show-more-text');

	for (let i = 0; i < showMoreTexts.length; i++) {
		showMoreTexts[i].addEventListener('click', function (e) {
			let element = this.parentElement.parentElement.querySelector('.collapsible-text-block-inner');

			element.classList.toggle('collapse');

			//let innerText = this.querySelector('.show-more-text');
			let innerText = this;

			if (element.classList.contains('collapse')) {
				innerText.innerHTML = innerText.dataset.show;
			}
			else {
				innerText.innerHTML = innerText.dataset.hide;
			}
		});
	}
});