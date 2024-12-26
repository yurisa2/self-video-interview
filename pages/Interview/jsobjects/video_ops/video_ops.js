export default {
	
	async on_finish_camera () {
		await storeValue("response_message", "")
		await clearInterval("q1timer")
		await showModal(mdl_wait.name)
		await post_video.run()
		await storeValue("response_message", post_video.data.message)
		await closeModal(mdl_wait.name)
		await console.log(post_video.data.message)
		await navigateTo("Final")
		
	},	
}