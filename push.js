var push = require('web-push');

let vapidKey = {
  publicKey: 'BLvAO65_zxxXM7wdai5CbINTsrLrcAjpUV4kz2v_w6ppAodzemiioYOQNREED5XgJD-Ly-EsO_e4UcKnh5qaG3s',
  privateKey: 'L9iCiaU5qWEr6rRC3eVVsC81koxDJPMpSaSHrAu5xpE'
}

push.setVapidDetails('mailto:rahmankhan1607@gmail.com',vapidKey.publicKey,vapidKey.privateKey);

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/f7V-fyz28bc:APA91bEF3xk9FzIelP9jNpi9_vSHRwJjL1LwGYxSNpxPPkvJSsaAU7CNnKqCgNw_nhjJIKc1LSp0NE13aZEOis9ctT8Xo4gCox6VIuV0ydqxr5dgZTT0yZwCjjN2TW_Eo-zzdwF_qbPf","expirationTime":null,"keys":{"p256dh":"BE_2rqcmKQ19DWnSfTXNIkgCcAiwUPv0_92K_A5qCY4l69WpwRav3GoDmnhHEtxyek4UkoYO6ta9RwysBwx3Ysk","auth":"C-gqkhoGIc895UP_uf8K0Q"}}

push.sendNotification(sub , 'test message');