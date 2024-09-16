var socket = io();


// Event handler for new connections.
// The callback function is invoked when a connection with the
// server is established.
socket.on('connect', function() {
    socket.emit('my_event', {data: 'I\'m connected!'});
});

// night/day
socket.on('day', function(value) {
    console.log(value.data);
    document.getElementById("lightness").innerHTML = "Light status: It is bright";
});
socket.on('night', function(value) {
    console.log(value.data);
    document.getElementById("lightness").innerHTML = "Light status: It is dark";
});

// take a picutre via the pi button
socket.on('button', function(btnPres) {
    console.log(btnPres.data);
    document.getElementById("video").src = ""

    // var image_names = msg;
    //     var imageContainer = document.getElementById('image-container');

    //     image_names.forEach(function (imageName) {
    //         var imgElement = document.createElement('img');
    //         imgElement.src = 'images/' + imageName;  // Update the path accordingly
    //         imgElement.alt = imageName;
    //         imageContainer.appendChild(imgElement);

    // });

    // document.getElementById("image").innerHTML = "C:/TheFolder/computer/Coding (Grade 12)/CompEng/Iot/static/gaming.jpg";

    // reload css for background
    var link = document.getElementById('css-link');
    var newLink = link.cloneNode(true);
    var href = newLink.getAttribute('href');
    newLink.setAttribute('href', href + '?t=' + new Date().getTime());
    // newLink.setAttribute('href', href + '?t=' + Math.random()); // Random string
    // Replace the existing link with the new one
    link.parentNode.replaceChild(newLink, link);

    // Set a delay of 2 seconds before reloading the page
    setTimeout(function () {
    //    document.getElementById("image").innerHTML = "C:/TheFolder/computer/Coding (Grade 12)/CompEng/Iot/static/gaming.jpg";
        location.reload();
    }, 7000); // 2000 milliseconds = 2 seconds
});

// Event handler for server sent data.
// The callback function is invoked whenever the server emits data
// to the client.
socket.on('my response', function(msg) {
    console.log('why isnt this working');
});

// in html button
function btnPressed(){
    // must first reset the video in order to not give error to website when python temporarily shuts it down
    document.getElementById("video").src = "";
    socket.emit('button', {data: 'button pressed'});
    console.log("Button pressed");

    // reload css for background
    var link = document.getElementById('css-link');
    var newLink = link.cloneNode(true);
    var href = newLink.getAttribute('href');
    newLink.setAttribute('href', href + '?t=' + new Date().getTime());
    // newLink.setAttribute('href', href + '?t=' + Math.random()); // Random string
    // Replace the existing link with the new one
    link.parentNode.replaceChild(newLink, link);
    
    // Set a delay of 2 seconds before reloading the page
    setTimeout(function () {
    // document.getElementById("image").innerHTML = "C:/TheFolder/computer/Coding (Grade 12)/CompEng/Iot/static/gaming.jpg";
    location.reload();
    }, 3000); // 2000 milliseconds = 2 seconds

}
function btnBuzzer(){
    socket.emit('changeBuzzer', {data: 'buzzer button pressed'});
    console.log("buzzer button pressed")
}
function btnLight(){
    var inputValue = document.getElementById("label1").value;
    socket.emit('adjust brightness', {inputValue});
    console.log("brightness entered")
}
function reloadPage() {
    // Reload the page if the image fails to load
    setTimeout(function () {
        // document.getElementById("image").innerHTML = "C:/TheFolder/computer/Coding (Grade 12)/CompEng/Iot/static/gaming.jpg";
        location.reload();
        }, 2000); // 2000 milliseconds = 2 seconds
        
}
// socket.on('updatePic', function(link) {
//     console.log(link.data);
//     // var imageElement = document.getElementById("image2");
//     // imageElement.src = link.data;
//     // console.log(imageElement.src);


//     document.getElementById("video").src = "http://192.168.1.13:8081/";
//         setTimeout(function () {
//             // document.getElementById("image").innerHTML = "C:/TheFolder/computer/Coding (Grade 12)/CompEng/Iot/static/gaming.jpg";
//             document.getElementById("image").src = link.data;

//             }, 5000); // 2000 milliseconds = 2 seconds
//             location.reload();
            

// });