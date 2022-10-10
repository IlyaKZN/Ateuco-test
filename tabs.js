$(() => {
  let currentTab = 1;
  
  const initialPageContent = $(`#page-content-${currentTab}`).html();
  $(".content-container").append(initialPageContent);

  function toggleTab(tab) {
    const tabId = +tab.attr("id").split("-").pop();
    //Если клик по уже активному табу - ничего не делаем
    if (tabId === currentTab) {
      return;
    }

    //Находим нужный template и вставляем контент
    const content = $(`#page-content-${tabId}`).html();
    const contentContainer = $(".content-container");
    contentContainer.children().remove();
    contentContainer.append(content);
    $(`.nav_btn__active`).removeClass(`nav_btn__active`);
    currentTab = tabId;
    $(`button[id = button-${currentTab}]`).addClass("nav_btn__active");
  }

  $(".nav_btn").click(function () {
    toggleTab($(this));
  });
});