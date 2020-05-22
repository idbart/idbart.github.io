Vue.component('contact', {
	template: `
		<div class="contact-wrapper">
			<div class="contact-inner-wrapper">
				<div class="contact-main">
					<img v-bind:src="image" v-bind:alt="text">
				</div>
				<div class="contact-ext-wrapper">
					<div v-bind:class="extensionClass">
						<a v-bind:href="link" target="_blank">
							<div class="contact-ext-txt">
								{{text}}
							</div>
						</a>
						<div class="contact-button" v-on:click="toggleExtension()"> <i class="fas fa-arrow-down fa-3x"></i> </div>
					</div>
				</div>
			</div>
		</div>
	`,
	props: ['link', 'image', 'text'],
	data: function() {
		return {
			extensionClass: 'contact-ext contact-ext-hidden'
		};
	},
	methods: {
		toggleExtension: function() {
			if(this.extensionClass == 'contact-ext contact-ext-hidden')
			{
				this.extensionClass = 'contact-ext contact-ext-showing';
			}
			else
			{
				this.extensionClass = 'contact-ext contact-ext-hidden';
			}
		}
	},
	computed: {

	},
	created: function() {

	}
});