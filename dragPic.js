function setup() {
  $('.appliance').draggable();
  // $('.appliance').append($('<input/>', {
      // type: 'range',
      // class: 'slider',
      // min: '0',
      // max: '24',
      // value: '0',
  // }));
  // $('.appliance>.vert-container').append($('<p/>', {
    // class: 'value-output',
    // text: '0 Hours',
  // }));

  // $('.appliance').on('drag', (evt) => {
    // // $(evt.target).find('.slider').css('display', 'inline-block');
    // // $(evt.target).find('.value-output').css('display', 'inline-block');
    // // $(evt.target).css('height', 'auto');
  // });

  // $('#refrigerator').draggable();
  // $('#electric-stove').draggable();
  // $('#microwave').draggable();
  // $('#oven').draggable();
  // $('#dryer').draggable();
  // $('#washer').draggable();
  // $('#laptop').draggable();
  // $('#phone').draggable();
  // $('#tv').draggable();
  // $('#ac').draggable();
  // $('#heating').draggable();


  // $('.room').on('drop', (evt, ui) => {
    // let droppedName = $(ui.draggable).find('.appliance-title').html();
    // let droppedId = $(ui.draggable).attr('id');
    // // let value = $(ui.draggable).find('input').val();
    // // console.log(value);
    // // let toCreate = $('<p/>', {id: `house-${droppedId}`, text: droppedName + ' ' + value});
    // // if ($(evt.target).find(`p#house-${droppedId}`).length == 0) {
      // // $(evt.target).append(toCreate);
    // // }
  // });
  //
  $('.room').droppable({
    accept: '.appliance',
    // https://stackoverflow.com/a/6003729
    drop: (evt, ui) => {
      let dropped = ui.draggable;
      let droppedOn = $(evt.target);
      $(dropped).detach().css({top: 0, left: 0}).appendTo($(droppedOn).find('.appliance-drop'));

      $(droppedOn).find('.appliance-input').append(
        $('<div/>')
        .append($('<input/>', {
            type: 'range',
            class: 'slider',
            min: '0',
            max: '24',
            value: '0',
        }))
        .append($('<p/>', {
          class: 'value-output',
          text: '0 Hours',
        }))
      );
      $('.slider').on('input', (evt) => {
        let val = $(evt.target).val();
        $(evt.target).parent().find('.value-output').html(`${val} Hours`);
      });
    },
  });
}

window.onload = setup;
