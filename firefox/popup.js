browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      let link = tabs[0].url;

      if (/https:\/\/www.youtube.com\/shorts\/*/g.test(link)) {
        let parts = link.split("shorts/");
        tabs[0].url = parts[0] + "watch?v=" + parts[1];
      }
})