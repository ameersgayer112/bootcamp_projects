class Renderer {
    constructor(data) {
      this.data = data;
    }
  
    renderer() {
      const data = this.data;
  
      $(".user-container").empty();
      const mainUser = $("#mainUser-template").html();
      const mainUserTemplate = Handlebars.compile(mainUser);
      let mainUsernewHTML = mainUserTemplate(data);
      $(".user-container").append(mainUsernewHTML);
  
      $(".quote-container").empty();
      const quote = $("#randomQuote-template").html();
      const quoteTemplate = Handlebars.compile(quote);
      let quotenewHTML = quoteTemplate(data);
      $(".quote-container").append(quotenewHTML);
  
      $(".friends-container").empty();
      const userFriends = $("#userFriends-template").html();
      const userFriendsTemplate = Handlebars.compile(userFriends);
      let userFriendsnewHTML = userFriendsTemplate(data);
      $(".friends-container").append(userFriendsnewHTML);
  
      $(".pokemon-container").empty();
      const pokemon = $("#pokemon-template").html();
      const pokemonTemplate = Handlebars.compile(pokemon);
      let pokemonnewHTML = pokemonTemplate(data);
      $(".pokemon-container").append(pokemonnewHTML);
  
      $(".meat-container").empty();
      const randomText = $("#randomText-template").html();
      const randomTextTemplate = Handlebars.compile(randomText);
      let randomTextnewHTML = randomTextTemplate(data);
      $(".meat-container").append(randomTextnewHTML);
    }
  }