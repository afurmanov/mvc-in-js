$( function() {
  $(document).keydown( function(event) {
    m = window.location.pathname.match( /(\d+)\.html/);
    var page = m ? Number(m[1]) : 1;
    console.log(page);
    if (event.keyCode == 39 || event.keyCode == 40) { //next (right arrow)
      page += 1;
      if (page > 4) {
        page = 4;
      }
      window.location = "page-" + page + ".html";
    }
    if (event.keyCode == 37 || event.keyCode == 38) { //prev (left arrow)
      page -= 1;
      if (page < 1) {
        page = 1;
      }
      if (page === 1) {
        window.location = "index.html";
      } else {
        window.location = "page-" + page + ".html";
      }
    }
    console.log(event);
  });
});
