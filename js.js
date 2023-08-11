function handleClick() {
    let nav_content = document.getElementsByClassName("navbar_content")[0];
    console.log(nav_content);
    nav_content.classList.toggle("navbar_content_hide");
   
  }
  document.querySelectorAll(".about .video-container .controls .control-btn").forEach(btn=>{
    btn.onclick =()=>{
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .video-container .video").src=src;
    }
  }
  )