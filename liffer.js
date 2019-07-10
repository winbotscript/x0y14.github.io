window.onload = function (e) {
  liff.init(function (data) {
    initializeApp(data);
  });
};
function initializeApp(data) {
  liff.sendMessages([
    {
    "type": "template",
    "altText": "[Sticker]",
    "template": {
        "type": "image_carousel",
        "columns": [{
            "imageUrl": "https://scontent-lga3-1.cdninstagram.com/vp/58a09f9b4c9b5c1e2ab74eacca9f4265/5DBBFF72/t51.2885-15/e35/s1080x1080/64425074_344564302889595_2131522129282698551_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
            "action": {
                "type": "uri",
                "uri": "https://line.me/R/nv/profilePopup/mid=u69a03e8b386bd9c8c2aa8f382ab1334d"
            }
        }]
    }
}

  ]).then(function () {
    liff.closeWindow();
  }).catch(function (error) {
    window.alert(error);
  });
}