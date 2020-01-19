Vue.component('navigation', {
	template: `
		<div class="nav" v-bind:style="getNavStyles">
			<input id="hamburger-checkbox" class="hamburger-checkbox" type="checkbox" name="hamburger-checkbox">
			<label for="hamburger-checkbox"><div></div></label>

			<img class="logo-img" src="assets/photos/websitetitle.png" alt="Isaac Bartlett Software Developer">
			<ul>
				<li><a href="#about">About Me</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact Info</a></li>
			</ul>
		</div>
	`,
	data: function() {
		return {
			yScroll: 0
		};
	},
	methods: {
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
	}
});


