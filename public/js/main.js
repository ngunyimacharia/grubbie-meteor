
  var notificationsLnk = document.getElementById("notifications");
  var notifications =  document.querySelector("header .notifications-container");
  var notificationsIcon =  document.querySelector("header .notifications-notice");
  var visible = false;

  if(notificationsLnk){
    notificationsLnk.addEventListener("click",function(e){
      e.preventDefault();
      if(visible){
        notifications.style.display = "none";
        visible = false;
      }else{
        notifications.style.display = "initial";
        visible = true;
        notificationsIcon.style.display = "none";
      }
    })
  }
