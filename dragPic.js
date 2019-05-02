function setup() {
  plotLegos([0, 0, 0, 0]);

  $('.appliance').draggable();

  $('.room').droppable({
    accept: '.appliance',
    // https://stackoverflow.com/a/6003729
    drop: (evt, ui) => {
      let droppedId = $(ui.draggable).attr('id');
      let dropped = ui.draggable;
      let droppedOn = $(evt.target);
      $(dropped).detach().css({top: 0, left: 0}).appendTo($(droppedOn).find('.appliance-drop'));
      $(dropped).draggable('disable');

      if (!$(dropped).hasClass('noinput')) {
        let minMaxValStep = [0, 14, 1];
        let defaultText = '0 Times/Week';
        if ($(dropped).hasClass('percentage')) {
          minMaxValStep = [0, 1, 0.1];
          defaultText = 'Running 0% time';
        } else if ($(dropped).hasClass('hourly')) {
          minMaxValStep = [0, 24, 2];
          defaultText = '0 Hours/Day';
        }

        $(droppedOn).find('.appliance-input').append(
            $('<div/>')
            .append($('<input/>', {
                type: 'range',
                class: 'slider',
                id: `${droppedId}-input`,
                min: minMaxValStep[0],
                max: minMaxValStep[1],
                value: 0,
                step: minMaxValStep[2],
            }))
            .append($('<p/>', {
              class: 'value-output',
              text: defaultText,
            }))
        );

        $('.slider').on('input', (evt) => {
          let val = $(evt.target).val();
          let fstr = `${val} Times/Week`;
          if ($(dropped).hasClass('percentage')) {
            fstr = `Running ${val * 100}% time`;
          } else if ($(dropped).hasClass('hourly')) {
            fstr = `${val} Hours/Day`;
          }
          $(evt.target).parent().find('.value-output').html(fstr);
          let usage = calculateEnergyUsage();
          plotLegos(calculateNumLegos(usage));
          $('#usage-kwh').html(`${totalEnergyUsage(usage)} kWh`);
        });
      }

      let usage = calculateEnergyUsage();
      plotLegos(calculateNumLegos(usage));
      $('#usage-kwh').html(`${totalEnergyUsage(usage)} kWh`);
    },
  });
}

window.onload = setup;
