var homeHandler = new Vue({
	el: "#wrapper",
	data: {

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
		}
	},
	computed: {

	}
});