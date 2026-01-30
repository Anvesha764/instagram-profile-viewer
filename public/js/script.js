const followBtn = document.querySelector(".follow-btn");

if (followBtn) {
  let isFollowing = false;

  followBtn.addEventListener("click", () => {
    isFollowing = !isFollowing;

    if (isFollowing) {
      followBtn.innerText = "Following";
      followBtn.style.backgroundColor = "#dbdbdb";
      followBtn.style.color = "#262626";
    } else {
      followBtn.innerText = "Follow";
      followBtn.style.backgroundColor = "#0095f6";
      followBtn.style.color = "white";
    }
  });
}
