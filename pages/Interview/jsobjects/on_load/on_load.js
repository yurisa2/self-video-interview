export default {
	open_modal () {
		
		if(appsmith.store.candidate_name === undefined || 					appsmith.store.candidate_name.length < 5 ) {
		navigateTo("Instructions")
	}
		else {
			showModal(mdl_video_controls.name)
		}
	}
}