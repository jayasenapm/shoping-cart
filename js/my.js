//Cab image gallery show case 
$(document).ready(function() {
    $('#previous').on('click', function(){
      // Change to the previous image
      $('#im_' + currentImage).stop().fadeOut(1);
      decreaseImage();
      $('#im_' + currentImage).stop().fadeIn(1);
    }); 
    $('#next').on('click', function(){
      // Change to the next image
      $('#im_' + currentImage).stop().fadeOut(1);
      increaseImage();
      $('#im_' + currentImage).stop().fadeIn(1);
    }); 
  
    var currentImage = 1;
    var totalImages = 3;
  
    function increaseImage() {
      /* Increase currentImage by 1.
      * Resets to 1 if larger than totalImages
      */
      ++currentImage;
      if(currentImage > totalImages) {
        currentImage = 1;
      }
    }
    function decreaseImage() {
      /* Decrease currentImage by 1.
      * Resets to totalImages if smaller than 1
      */
      --currentImage;
      if(currentImage < 1) {
        currentImage = totalImages;
      }
    }
  
    window.setInterval(function() {
    $('#previous').click();
  }, 5000);
  
  });

//Our rate page open & close
  /* Open */
function openNav() {
  document.getElementById("ourrate").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("ourrate").style.height = "0%";
} 


//About Us page open & close

  /* Open */
  function openaboutus() {
    document.getElementById("aboutus").style.height = "100%";
  }
  
  /* Close */
  function closeaboutus() {
    document.getElementById("aboutus").style.height = "0%";
  } 

  //Contact Us page open & close
  /* Open */
  function opencontactus() {
    document.getElementById("contactus").style.height = "100%";
  }
  
  /* Close */
  function closecontactus() {
    document.getElementById("contactus").style.height = "0%";
  } 

  //Book Now page open & close
  function openbook() {
    document.getElementById("book").style.height = "100%";
  }
  
  /* Close */
  function closebook() {
    document.getElementById("book").style.height = "0%";
  } 

  //Rate box inside Our rate page
  function openratebox() {
    document.getElementById("rateBox").style.height = "70%";
  }
  
  /* Close */
  function closeratebox() {
    document.getElementById("rateBox").style.height = "0%";
  } 

 
