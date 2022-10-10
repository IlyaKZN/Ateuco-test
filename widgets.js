const initialWidgetsData = [
    {
      id: 'widget-1',
      text: '1'
    },
    {
      id: 'widget-2',
      text: '2'
    },
    {
      id: 'widget-3',
      text: '3'
    },
    {
      id: 'widget-4',
      text: '4'
    },
    {
      id: 'widget-5',
      text: '5'
    }
];

const widgetTemplate = $('#widget-template')[0].content;

function addWidgets() {
  const widgetsContainer = $('.widgets-container');
  initialWidgetsData.forEach((widgetData) => {
    const widget = widgetTemplate.cloneNode(true);
    widget.querySelector('.widget_text').textContent = widgetData.text;
    widget.querySelector('.widget').id = widgetData.id;
    widgetsContainer.append(widget);
  });

  $('.widget_close-button').click(function() {
    $(this).parent().remove();
  });
  $('.widgets-container').sortable();
};

function resetWidgets() {
  const widgetsContainer = $('.widgets-container');
  widgetsContainer.children().remove();
  addWidgets();
};

$(() => {
  addWidgets();
  $('.widgets-reset-button').click(() => resetWidgets());

  const contentContainer = $('.content-container')[0];
  //Вешаем слушатель изменения контента content-container
  //Вызываем фукнцию добавления виджетов если открыта вкладка с ними
  let observer = new MutationObserver(() => {
    if ($('.content-container .widgets-container').length > 0) {
      addWidgets();
      $('.widgets-reset-button').click(() => resetWidgets());
    }
  });
  observer.observe(contentContainer, {
    childList: true
  });
})