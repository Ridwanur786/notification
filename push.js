var push = require('web-push');

let vapidKey = {
  publicKey: 'BLvAO65_zxxXM7wdai5CbINTsrLrcAjpUV4kz2v_w6ppAodzemiioYOQNREED5XgJD-Ly-EsO_e4UcKnh5qaG3s',
  privateKey: 'L9iCiaU5qWEr6rRC3eVVsC81koxDJPMpSaSHrAu5xpE'
}

push.setVapidDetails('mailto:rahmankhan1607@gmail.com',vapidKey.publicKey,vapidKey.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dD0jHw0Urw0:APA91bEmwGmDaKes9ruaTewJp5fXDOeUyciU9C7axtoB_dEnOwG5dgBeZN9kv65jkf58lgEQiM-3TzfLWRnKC7QHNNnPZ4M4oWe-KqlMh1Frsi2SDeKRNuEJdaFY2wHzx8avAREld_Jl","expirationTime":null,"keys":{"p256dh":"BB4A1_o51ixzy1r5f2wEjFHSkdu2ppJzyPmJheEV94J6nza1m5MMOiFJVAv-aBXKgaBmX_Skd1YTImj61taMyjM","auth":"ITzzxP98k2z0eiyCZOJakw"}}

push.sendNotification(sub , 'test message');