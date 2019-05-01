function setup() {
  plotLegos([1, 0, 0, 0]);

  $('.appliance').draggable();
  $('#refrigerator').draggable('disable');

  $('.room').droppable({
    accept: '.appliance',
    // https://stackoverflow.com/a/6003729
    drop: (evt, ui) => {
      let droppedId = $(ui.draggable).attr('id');
      let dropped = ui.draggable;
      let droppedOn = $(evt.target);
      $(dropped).detach().css({top: 0, left: 0}).appendTo($(droppedOn).find('.appliance-drop'));
      $(dropped).draggable('disable');

      $(droppedOn).find('.appliance-input').append(
          $('<div/>')
          .append($('<input/>', {
              type: 'range',
              class: 'slider',
              id: `${droppedId}-input`,
              min: '0',
              max: '14',
              value: '0',
          }))
          .append($('<p/>', {
            class: 'value-output',
            text: '0 Times/Week',
          }))
      );

      $('.slider').on('input', (evt) => {
        let val = $(evt.target).val();
        $(evt.target).parent().find('.value-output').html(`${val} Times/Week`);
        let usage = calculateEnergyUsage();
        plotLegos(calculateNumLegos(usage));
        $('#usage-kwh').html(`${totalEnergyUsage(usage)} kWh`);
      });

      let usage = calculateEnergyUsage();
      plotLegos(calculateNumLegos(usage));
      $('#usage-kwh').html(`${totalEnergyUsage(usage)} kWh`);
    },
  });
}

window.onload = setup;
