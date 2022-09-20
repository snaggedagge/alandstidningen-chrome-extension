function removePaywallAlandstidningen() {
  const paywall = document.getElementById('tulo-paywall-block-v2');
  //paywall.style.display = 'none'
  paywall.innerHTML = '<h2>Keep on reading</h2><img id="myImage" src="https://thumbs.dreamstime.com/b/smiley-face-thumbs-up-14491322.jpg">'
  const collection = document.getElementsByClassName("behind-paywall");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "block";
  }
}

removePaywallAlandstidningen();