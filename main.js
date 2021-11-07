Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    }); 

    