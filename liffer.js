window.onload = function (e) {
  liff.init(function (data) {
    initializeApp(data);
  });
};
function initializeApp(data) {
  // document.getElementById('sendmessagebutton').addEventListener('click', function () {
  liff.sendMessages([
//   {
//     type: "template",
//     altText: "ラッキーカラー",
//     template: {
//       type: 'buttons',
//       thumbnailImageUrl: 'https://{herokuに追加したウェブアプリのURL}/img/spacer.gif',//背景はファイルサイズ抑えるため透過のGIF画像を入れて見ました
//       imageAspectRatio: 'square',
//       imageSize: 'contain',
//       imageBackgroundColor: color,
//       text: color + ' がラッキーそうです。',
//       actions: [//トーク内に表示される投稿からのリンクが設定できる
//         {
//           type: "uri",
//           label: "ラッキーカラーを見てみよう",
//           uri: "line://app/{liffId}"//ここに先ほど取得したliffIdを
//         }
//       ]
//     }
//   }https://line.me/R/nv/profilePopup/mid=u69a03e8b386bd9c8c2aa8f382ab1334d
    // {
    // "type": "image",
    // "text": 'hello',
    // "originalContentUrl": "https://line.me/R/nv/profilePopup/mid=u69a03e8b386bd9c8c2aa8f382ab1334d",
    // "previewImageUrl": 'https://line.me/R/nv/profilePopup/mid=u69a03e8b386bd9c8c2aa8f382ab1334d',
    // "animated": true,
    // "extension": "gif"
    // },
  //   {
  //     "type": "text",
  //     "text": "hello",
  //     "sentBy": {
  //         "label": "LINE API",
  //         "iconUrl": "https://scontent-lga3-1.cdninstagram.com/vp/58a09f9b4c9b5c1e2ab74eacca9f4265/5DBBFF72/t51.2885-15/e35/s1080x1080/64425074_344564302889595_2131522129282698551_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&dl=",
  //         "linkUrl": "https://line.me/R/nv/profilePopup/mid=",
  //         'linkUrl': 'https://gigazine.net/'
  //         'MSG_SENDER_ICON': 'https://line.me/R/au/email/CHQR46726351746f7630487257546c4b4d4b6e34576d684d5f4e44466c66636b7139/5414',
  //         'MSG_SENDER_NAME': 'LINE'
  //     }
  // },
    {
    "type": "template",
    "altText": "[Sticker]",
    "template": {
        "type": "image_carousel",
        "columns": [{
            "imageUrl": "https://scontent-lga3-1.cdninstagram.com/vp/58a09f9b4c9b5c1e2ab74eacca9f4265/5DBBFF72/t51.2885-15/e35/s1080x1080/64425074_344564302889595_2131522129282698551_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
            "action": {
                "type": "uri",
                "uri": "line://nv/profilePopup/mid=u69a03e8b386bd9c8c2aa8f382ab1334d"
            }
        }]
    }
}


  
  ]).then(function () {
    liff.closeWindow();
  }).catch(function (error) {
    window.alert("Error sending message: " + error);
  });
}
// });
// }