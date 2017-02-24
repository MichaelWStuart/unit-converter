$(() => {
  $('#button').click(() => {
    $.ajax({
      url: 'api/convert',
      type: 'get',
      data: $('#input').serialize(),
      success: (data) => {
        $('#string').text(data.string);
        $('#object').text(JSON.stringify(data));
      }
    });
  });
});
