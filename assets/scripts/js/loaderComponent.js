Vue.component('loader', {
	template: `
		<div class="loader" ref="loader">
			<div class="loader-anim">
				Loading...
				<div> { <div> <======> </div> } </div>
			</div>
		</div>
	`,
	data: function() {
		return {

		};
	},
	methods: {
		hideLoadingScreen: function() {
			var loadingScreen = this.$refs.loader;
			loadingScreen.classList.add('hidden');
		
			window.setTimeout(function() { 
				loadingScreen.style.display = 'none'; 
			}, 1000);
		},
	},
	computed: {

	},
	created: function() {
		window.addEventListener('load', this.hideLoadingScreen);
	}
});