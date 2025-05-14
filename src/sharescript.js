const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
const title = document.title;
const url = window.location.href;
const clipboard = document.querySelector('#clipboard');

shareButton.addEventListener('click', event => {
  if (navigator.share) {
   navigator.share({
      title,
      url
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});




function copyDivToClipboard() {
 var range = document.createRange();
 range.selectNode(document.getElementById("currenturl"));
 window.getSelection().removeAllRanges(); // clear current selection
 window.getSelection().addRange(range); // to select text
 document.execCommand("copy");
 window.getSelection().removeAllRanges();// to deselect
}

clipboard.addEventListener('click', event => {
  document.getElementById("currenturl").innerHTML = "클립보드에 복사되었습니다.";
  document.getElementById("clipboard").style.display = "none";
    })
