function setup() {
  $('.appliance').draggable();
  $('.appliance').append($('<input/>', {
      type: 'range',
      class: 'slider',
      min: '0',
      max: '24',
      val: '0',
  }))
  .append($('<p/>', {
    class: 'value-output',
    text: '0 Hours',
  }));

  $('#refrigerator').draggable();
  $('#electric-stove').draggable();
  $('#microwave').draggable();
  $('#oven').draggable();
  $('#dryer').draggable();
  $('#washer').draggable();
  $('#laptop').draggable();
  $('#phone').draggable();
  $('#tv').draggable();
  $('#ac').draggable();
  $('#heating').draggable();

  $('.slider').on('input', (evt) => {
    let val = $(evt.target).val();
    $(evt.target).parent().find('.value-output').html(`${val} Hours`);
  });
}

window.onload = setup;
