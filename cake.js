//  Code Here!

let likeBtns;
  
document.addEventListener('DOMContentLoaded', () => {
  likeBtns = document.querySelectorAll('.like');
  likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener('click', toggleLike);
  });
});

function toggleLike(event) {
  const likeBtn = event.currentTarget;
  const likeImg = likeBtn.querySelector('img');
  
  if (likeImg.src.includes('Like.png')) {
    likeImg.src = './img/unlike.png';
  } else {
    likeImg.src = './img/Like.png';
  }
}
