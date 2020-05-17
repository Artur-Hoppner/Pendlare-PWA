function requestNotificationPermission() {
    Notification.requestPermission()
}

// function registerNotification() {
// 	Notification.requestPermission(permission => {
// 		if (permission === 'granted'){ registerBackgroundSync() }
// 		else console.error("Permission was not granted.")
// 	})
// }
function createNotification() {
    const icon = 'image/icons/bitch.png';
new Notification('Bitch plz!', { body: "I own Da Phone!", icon: icon });


   }

requestNotificationPermission()
createNotification()
