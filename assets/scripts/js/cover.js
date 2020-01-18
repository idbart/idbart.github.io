const app = new Vue( {
	el: "#app",
	data: {
		yScroll: 0
	},
	methods: {
		fillerText: function(howBig) {
			var output = '';
			while(howBig)
			{
				output += 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi omnis voluptatem! Nostrum quod incidunt velit tempore maxime perferendis. Perferendis rem optio provident dolorem aperiam quisquam blanditiis animi temporibus omnis.';
				howBig--;
			}
			return output;
		},

		hideLoadingScreen: function() {
			var loadingScreen = this.$refs.loader;
			loadingScreen.classList.add('hidden');
		
			window.setTimeout(function() { loadingScreen.style.display = 'none'; }, 1000);
		},
		updateYScroll: function() {
			this.yScroll = window.scrollY;
		}
	},
	computed: {
		getNavStyles: function() {
			if (this.yScroll == 0)
			{
				return 'opacity: 1;';
			}
			else
			{
				return '';
			}
		}
	},
	created: function() {
		window.addEventListener('scroll', this.updateYScroll);
		window.addEventListener('load', this.hideLoadingScreen);
	}
});


