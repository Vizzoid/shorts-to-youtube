function moveShortsToVideo(tabs) {
  let tab = tabs[0];
  let link = tab.url;
  console.log(`Attempting link switch for ${link}`);

  if (!/https:\/\/www.youtube.com\/shorts\/*/g.test(link)) {
    console.log(`Failed, non-YouTube Shorts link`);
    return;
  }

  let parts = link.split("shorts/");
  let videoLink = parts[0] + "watch?v=" + parts[1];
  browser.tabs.update({url: videoLink});
  console.log(`Success, moving shorts to: ${videoLink}`);
}

function reportError(error) {
  console.error(`Error: ${error.message}`);
}

browser.tabs.query({currentWindow: true, active: true})
    .then(moveShortsToVideo)
    .catch(reportError);