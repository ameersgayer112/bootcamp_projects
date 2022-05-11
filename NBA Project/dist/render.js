

const Renderer = () => {
  const render = (data) => {
    $(".players").empty()
    const playerNBA = $("#player-template").html();
    const playerTemplate = Handlebars.compile(playerNBA)
    let playerNewHtml = playerTemplate({ players: data });
    $(".players").append(playerNewHtml);
  };
  return {
    render,
  };
};

