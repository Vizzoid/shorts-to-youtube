function moveShortsToVideo(tabs) {
  let link = tabs[0].url;
  console.log(`Attempting link switch for ${link}`);

  if (!/https:\/\/www.youtube.com\/shorts\/*/g.test(link)) {
    console.log(`Failed, non-YouTube Shorts link`);
    return;
  }

  let parts = link.split("shorts/");
  let videoLink = parts[0] + "watch?v=" + parts[1];
  console.log(`Success, moving shorts to: ${videoLink}`);
}

function reportError(error) {
  console.error(`Error: ${error.message}`);
}

browser.tabs.query({currentWindow: true, active: true})
    .then(moveShortsToVideo)
    .catch(reportError);