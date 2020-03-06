(()=>{
 //variable stack here-> the elements you want to interact with
 let sigilButtons=document.querySelectorAll(".sigilContainer"),
      lightBox=document.querySelector('.lightbox'),
      houseVideo=lightBox.querySelector("video"),
      closeButton=lightBox.querySelector('.close-button');

  //fucntions go in the middle -> what do we want our app to do?
  function showLightBox(){
    //debugger;
    //retrieve the CSS class that matches the video name in the video folder
    let houseName= this.className.split(" ")[1];

    //capitalize the first letter of the house name with JavaScript
    // and then add the rest of the house name to it
    // first letter=>capital
    let newSource=houseName.charAt(0).toUpperCase()+houseName.slice(1);

    let targetSource= `video/House-${newSource}.mp4`;
    debugger;


    //show the lightbox on a click

    lightBox.classList.add("show-lightbox");
    //play the lightbox video when it open
    houseVideo.src=targetSource;
    houseVideo.load();
    houseVideo.play();
  }

  function hideLightBox(){
    lightBox.classList.remove("show-lightbox");
    //stop and  rewind the lightbox video when it closes
    houseVideo.pause();
    houseVideo.currentTime=0;
  }

 //event hadling for our sigilButtons
 sigilButtons.forEach(button=>button.addEventListener("click",showLightBox));

//add some event handling fot the lightbox close closeButton
closeButton.addEventListener("click",hideLightBox)
})();
