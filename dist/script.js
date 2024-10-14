$(document).ready(function() {
  let channel = 1;
  let power = false;
  let powerUp = false;
  let id;
  let catArr = [
    "News",
    "Sports",
    "Technology",
    "Science",
    "Cooking",
    "Nature",
    "History",
    "Travel",
    "Programming",
    "Game Shows",
    "Video Games"
  ];
  let videos = [];
  let channelArr = [];
  let vidArr = [];
  let timeArr = [];
  const crtOn = new Audio("http://www.jarrodyellets.com/sounds/CRTOn.mp3");
  const crtOff = new Audio("http://www.jarrodyellets.com/sounds/CRTOff.mp3");
  const chSound = new Audio("http://www.jarrodyellets.com/sounds/chSound.mp3");
  const apiURL = "https://www.googleapis.com/youtube/v3/search";
  const apiKey = "AIzaSyBuIIBsq9urRaWdEYTKqSjW97wkhL1CO0o";
  let Channel = function(channel, id, description) {
    this.channel = channel;
    this.id = id;
    this.description = description;
  };

  //grabVideos();

  $(".power").on("click", function() {
    power = !power;
    $(".power").toggleClass("powerOn");
    if (power) {
      crtOn.play();
      powerUp = true;
      
      $(".channelScreen").append("23");
      $(".screen").addClass("crt");
      startUp();
      console.log(videos);
    } else if (!power) {
      crtOn.pause();
      crtOn.currentTime = 0;
      crtOff.play();
      setTimeout(function() {
        turnOff();
      }, 300);
      $(".channelScreen").empty();
      channel = 1;
      timeArr.forEach(function(time) {
        clearTimeout(time);
      });
    }
  });
  $("#upButton").on("click", function() {
    chSound.play();
    if (channel < catArr.length + 1 && power && !powerUp) {
      channel++;
      clearDiv(".channelScreen", channel);
      playVideo();
      console.log();
    }
  });
  $("#downButton").on("click", function() {
    chSound.play();
    if (channel > 1 && power && !powerUp) {
      channel--;
      clearDiv(".channelScreen", channel);
      playVideo();
    }
  });

  function startUp() {
    let startImage = "<div class='startImage onScreen'></div>";
    $(".screen").append(startImage);
    timeArr.push(
      setTimeout(function() {
        playVideo();
      }, 6000)
    );
  }

  function playVideo() {
    powerUp = false; 
    channel=23;
    clearDiv(".channelScreen", channel);
    let now = new Date();
    var time = now.toLocaleTimeString();
    let divString = "";
   
    channelNum=23;
    if (channel == 23) {
      $(".screen").empty();
      for (var j = 0; j < videos.length; j++) {
        let channelNum = j + 2;
        divString +=
          "<div class='channelLine'><div class='channelNumber'>" +
          channelNum +
          ". " +
          videos[j].channel +
          ":  </div><div class='description'>" +
          videos[j].description.substring(0, 30) +
          "...</div></div>";
      }
      $(".screen").append(
        "<div class='channelList onScreen'><video id='topochannel' src='canzone.mp4'   style='height: 106%;width: 63%;'></video></div>" 
      );
      $(".screen").append(
        "<div class='channels'>" + channel + ". TOPOCHANNEL</div>"
      );


      $("#topochannel").trigger('play');

    } 
  }

  function turnOff() {
    $(".onScreen").addClass("turnOff");
    setTimeout(function() {
      $(".screen").empty();
      $(".screen").removeClass("crt");
    }, 275);
  }

 
  

  function clearDiv(div, content) {
    $(div).empty();
    $(div).append(content);
  }
});