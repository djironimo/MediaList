function readJson () {
    var json = "";
var jqxhr = $.getJSON( "media.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
    console.log(jqxhr.responseText);
    json = $.parseJSON(jqxhr.responseText);
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

