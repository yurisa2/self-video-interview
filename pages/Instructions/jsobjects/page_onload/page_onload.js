export default {
	check_user_data () {
		if(appsmith.store.candidate_name === undefined || appsmith.store.candidate_name.length < 5 ) {
			showModal(mdl_candidate_info.name)
			console.log("user info not found")
		}
		else {
			console.log(appsmith.store.candidate_name.length)
			console.log(appsmith.store.candidate_name)
		}

	}
}