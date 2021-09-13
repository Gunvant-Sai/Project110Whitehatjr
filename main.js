var SpeechEmoji1 = "";
 var SpeechEmoji2 = "";

Webcam.set
    (
        {
            height: 300,
            width: 350,
            img_format: "jpg",
            jpg_quality: 100
        } 
    )

    Webcam.attach( "#camera" )

    function Snapshot()
    {
      Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = "<img id='HULAISBACK' src='"+data_uri+"'>";
      });}

      console.log(ml5.version);
      classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9wkkBuxEN/model.json",modelReady)
      function modelReady()
      {
          console.log("modelReady");
      }
