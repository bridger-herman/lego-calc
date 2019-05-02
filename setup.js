const GROUPS = {
  // Kitchen
  'electric-stove': 'kitchen',
  'gas-stove': 'kitchen',
  'electric-oven': 'kitchen',
  'electric-oven': 'kitchen',
  'toaster': 'kitchen',
  'microwave': 'kitchen',
  'dishwasher': 'kitchen',
  'refrigerator': 'kitchen',

  // Laundry
  'electric-dryer': 'laundry',
  'gas-dryer': 'laundry',
  'washer': 'laundry',

  // HVAC
  'window-ac': 'hvac',
  'central-ac': 'hvac',

  // Electronics
  'smartphone': 'electronics',
  'laptop': 'electronics',
  'desktop': 'electronics',
  'tv': 'electronics',
};

const FINAL_TEXT =
'Now, construct your Lego tower with the Legos provided in the bins! ' +
'Follow the example towers that already exist on the Lego grid of the metro area. ' +
'Then, find where you live on the map, and place your Lego tower on the Lego grid.';

function setup() {
  // Setup behaviour of done button
  $('#show-final').on('click', (evt) => {
    let kWhPerCategory = calculateEnergyUsage();
    let total = totalEnergyUsage(kWhPerCategory);
    $('body').append($('<div/>', {
      id: 'final-dialog',
    })
      .append($('<div/>', {
        id: 'final-inner',
      })
        .append($('<p/>', {
          class: 'bold-text',
          text: `Your total yearly energy usage is about ${total} kWh.`
        }))
        .append($('<p/>', {
          text: `Kitchen appliances: ${Math.floor(kWhPerCategory[0])} kWh`,
        }))
        .append($('<p/>', {
          text: `Laundry: ${Math.floor(kWhPerCategory[1])} kWh`,
        }))
        .append($('<p/>', {
          text: `Air conditioning: ${Math.floor(kWhPerCategory[2])} kWh`,
        }))
        .append($('<p/>', {
          text: `Electronics: ${Math.floor(kWhPerCategory[3])} kWh`,
        }))
        .append($('<hr/>'))
        .append($('<div/>', {
          id: 'final-bottom',
        })
          .append($('<p/>', {text: FINAL_TEXT}))
          .append($('<div/>', {id: 'final-canvas-container'}))
        )
      )
    );
    let canvas = document.createElement('canvas');
    canvas.id = 'final-canvas';
    canvas.width = 70;
    canvas.height = 768;
    document.getElementById('final-canvas-container').appendChild(canvas);
    $('#final-bottom').append($('<div/>')
      .append($('<p/>', {text: 'Once you\'re done, tap "Reset" so the next person can enjoy it!'}))
      .append($('<button/>').html('Reset').on('click', () => window.location.reload()))
    );
    plotLegos(calculateNumLegos(kWhPerCategory), canvas);
  });

  plotLegos([0, 0, 0, 0]);

  $('.appliance').draggable();

  $('.room').droppable({
    accept: '.appliance',
    // https://stackoverflow.com/a/6003729
    drop: (evt, ui) => {
      let droppedId = $(ui.draggable).attr('id');
      let dropped = ui.draggable;
      // let droppedOn = $(evt.target); // Don't actually care where they
      // dropped it, want to move it to the right place
      let droppedOn = $(`#${GROUPS[droppedId]}`);
      $(dropped).detach().css({top: 0, left: 0}).appendTo($(droppedOn).find('.appliance-drop'));
      $(dropped).draggable('disable');

      let minMaxValStep = [0, 14, 1];
      let defaultText = '0 Times/Week';
      if ($(dropped).hasClass('percentage')) {
        minMaxValStep = [0, 1, 0.1];
        defaultText = 'Running 0% time';
      } else if ($(dropped).hasClass('hourly')) {
        minMaxValStep = [0, 24, 2];
        defaultText = '0 Hours/Day';
      }

      if (!$(dropped).hasClass('noinput')) {
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
      } else {
        $(droppedOn).find('.appliance-input').append(
          $('<div/>', { css: { width: '110px' } })
        );
      }

      $('.slider').on('input', (evt) => {
        let val = $(evt.target).val();
        let fstr = `${val} Times/Week`;

        let inputIndex = evt.target.id.indexOf('-input');
        let applianceId = evt.target.id.substring(0, inputIndex);

        if ($(`#${applianceId}`).hasClass('percentage')) {
          fstr = `Running ${val * 100}% time`;
        } else if ($(`#${applianceId}`).hasClass('hourly')) {
          fstr = `${val} Hours/Day`;
        }
        $(evt.target).parent().find('.value-output').html(fstr);
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
