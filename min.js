if('serviceWorker' in navigator && 'PushManager' in window){
	console.log('push and service worker are working fine');
}

addEventListener('load', async() =>{

let sw = await navigator.serviceWorker.register('sw.js');
console.log(sw);
})

async function subscribe(){
		
	let push = await pushManager.subscribe({
		
		userVisibileOnly: true,
		applicationServerKey:'BLvAO65_zxxXM7wdai5CbINTsrLrcAjpUV4kz2v_w6ppAodzemiioYOQNREED5XgJD-Ly-EsO_e4UcKnh5qaG3s'
	});
	
	console.log(JSON.stringify(push));
}