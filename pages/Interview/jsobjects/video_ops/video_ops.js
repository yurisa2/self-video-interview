export default {
	
	async on_finish_camera () {
		
		if(Camera1.imageDataURL === "undefined") {
			showAlert("No video found, record it again")
		}
		else {
			await storeValue("response_message", "")
			await clearInterval("q1timer")
			await showModal(mdl_wait.name)

				try {
					await post_video.run()
					await storeValue("response_message", post_video.data.message)
					await closeModal(mdl_wait.name)
					await console.log(post_video.data.message)
					await navigateTo("Final")
				} catch (error) {
					console.error("Error uploading video:", error);
					showAlert("Error uploading video", "error")
					Text5.setText("ERROR SENDING YOU VIDEO, TRY AGAIN")
					Text5Copy.setText("Currently we are not compressing the video (this is a PoC), so it can be tough on your network, try shorter videos. Click out side this screen and try again")
				}
			}
	},	
}