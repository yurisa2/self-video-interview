export default {
	check_user_data () {
		if(appsmith.store.candidate_name === undefined || appsmith.store.candidate_name.length < 5 ) {
		navigateTo("Instructions")
		}
		else {
			console.log(appsmith.store.candidate_name.length)
			console.log(appsmith.store.candidate_name)
		}

	}
}