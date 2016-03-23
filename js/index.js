$("#button").click(function() {
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
    type: "POST",
    headers: {
      "X-Mashape-Key": "v90c42JOeamshQEF14N566OFZ3amp1vs1JcjsnmmbFmYIi5xWT",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    success: function(data) {
      obj =JSON.parse(data)
      var array = $.map(obj, function(el) { return el });
      $("#quote").text(array[0]);
      $('#author').text(array[1]);
      console.log(array[0]);
      console.log(array[1]);
    }
  });
});