function readJson () {
  var json = "";
        tr = "";
  var jqxhr = $.ajax({
      url: "media.json",
      dataType: 'json',
      mimeType: "application/json",
      async: false
    })
    .done(function(data) {
      console.log( "second success" );
      json = data;
    })
    .fail(function() {
      json = {
              "array": [          
                  {
                    "name": "picture_1.jpg",
                    "type": "image"
                  },
                  {
                    "name": "picture_2.png",
                    "type": "image"
                  },
                  {
                    "name": "picture_3.jpg",
                    "type": "image"
                  },
                  {
                    "name": "06 old devil.mp3",
                    "type": "audio"
                  },
                  {
                    "name": "text_1",
                    "type": "other"
                  },
                  {
                      "name": "video_1.mp4",
                      "type": "video"
                  }
              ]
          };
      });
  return json;
}
