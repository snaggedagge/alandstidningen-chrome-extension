changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: removePaywall,
  });
});

function removePaywall() {
  const paywall = document.getElementById('tulo-paywall-block-v2');
  paywall.style.display = 'none'

  const collection = document.getElementsByClassName("behind-paywall");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "block";
  }
}