$('.loader').css('opacity','0');

$('#submit-btn').on('click', function(event){
  event.preventDefault();
  //$('#results').html('Loading...');



  let search = $('#keywords').val();

  let url = `https://www.reddit.com/r/${search}.json`;

  let promise = $.ajax ({
    type: 'GET',
    url: url
  });
  $('.loader').css('opacity','1');

  promise.then(function(response){

    let html = '';
    $('.loader').hide();

    response.data.children.forEach(function(item){
      html += `
        <div>
        <h5>${item.data.title}</h5>
        <p>score: ${item.data.score}</p>
        <p>author: ${item.data.author}</p>
        </div>
      `;
    });

    $('#results').html(html);

  }, function(error){
    console.log('error', error);
  });

})
