(function(jq) {
  jq(window).load(function() {});

  jq(window).resize(function() {
    console.log("main window was resized");
  });
})($);
