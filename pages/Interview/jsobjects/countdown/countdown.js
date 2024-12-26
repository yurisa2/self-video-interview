export default {
	start_timer () {
		data_object.seconds_left = 120,
		setInterval(() => countdown.update_timer(), 1000, "q1timer")
	},
			
	update_timer () {		
		data_object.seconds_left = data_object.seconds_left - 1
		// console.log(data_object.fancyTimeFormat(data_object.seconds_left))
		
		timer_display.setText(data_object.fancyTimeFormat(data_object.seconds_left))
		
	  	if(data_object.seconds_left <= 0) {
			clearInterval("q1timer")
			showAlert("TIME OVER")
			
		}
	}
}