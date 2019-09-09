
$(document).on("click", "#scraping", function(){

  $.ajax({
    method: "GET",
    url: "/scrape"
  }).done(function(data){

    data.forEach((element) => {
      $('#article_bar').append("<div class='jumbotron'><p class='article_jumbo'>" + element.title + "<span> </span><span> </span><button data-id='" + element._id + "'id='savearticle'>Save Article</button></p></div>");

      $('#myModal').modal();
    });
  });
});

$(document).on('click', '#savearticle', function(){
  var thisId = $(this).attr('data-id');

  $.post("/save", thisId, function(data){
    data._id = thisId;
    console.log('here', data);
    $('#savearticle').text('Article Saved!');
  
  });
});
