Vue.component('portfolio-item', {
	template: `
		<div class="portfolio-item-wrapper">
			<div v-if="popupIsShowing" class="portfolio-item-popup-wrapper">
				<div class="portfolio-item-popup-title"> {{title}} </div>
				<div class="portfolio-item-popup-ext-btn" v-on:click="hidePopup()"> x </div>
				<div class="portfolio-item-popup-content">
					<iframe v-if="video" width="100%" height="100%" v-bind:src="videoLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<img v-else v-bind:src="image" v-bind:alt="title">

					<div class="portfolio-item-popup-inner-content">
						<div class="portfolio-item-popup-text"><slot></slot></div>
						<a class="portfolio-item-popup-download" v-if="downloads" v-bind:href="downloadsLink" v-bind:download="title"><img src="assets/photos/download-icon.png" alt="Github Logo"></a>
						<a class="portfolio-item-popup-github" v-if="github" v-bind:href="github" target="_blank"><img src="assets/photos/github-logo.png" alt="Github Logo"></a>
					</div>
				</div>
			</div>

			<div class="portfolio-item-icon" v-bind:style="iconStyles" v-on:click="togglePopup()">
				{{title}}
			</div>
		</div>
	`,
	props: ['downloads', 'video', 'image', 'title', 'github'],
	data: function() {
		return {
			popupIsShowing: false,
			iconStyles: `background-image: url("${this.image}")`,
			videoLink: `https://www.youtube.com/embed/${this.video}`,
			downloadsLink: `assets/docs/downloads/${this.downloads}`
		};
	},
	methods: {
		togglePopup: function() {
			this.popupIsShowing = !this.popupIsShowing;
		},
		showPopup: function() {
			this.popupIsShowing = true;
		},
		hidePopup: function() {
			this.popupIsShowing = false;
		}
	},
	computed: {

	},
	created: function() {

	}
});