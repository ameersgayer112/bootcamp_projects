//This is the class that will manage all your APIs

class APIManager {
    constructor() {
      this.data = {};
    }
  
    getRandomUsers() {
      $.ajax({
        method: "GET",
        url: "https://randomuser.me/api/?results=7",
        dataType: "json",
        success: (data) => {
          const users = data.results.map((user) => {
            return {
              firstName: user.name.first,
              lastName: user.name.last,
              city: user.location.city,
              state: user.location.state,
              userPicture: user.picture.large,
            };
          });
  
          this.data.mainUser = users[0];
          this.data.frindsUser = users.slice(1);
        },
        error: function (xhr, text, error) {
          console.log(text);
        },
      });
    }
  
    getRandomQuote() {
      $.ajax({
        method: "GET",
        url: "https://api.kanye.rest",
        dataType: "json",
        success: (data) => {
          this.data.quote = data.quote;
        },
        error: function (xhr, text, error) {
          console.log(text);
        },
      });
    }
  
    getRandomPokemon() {
      $.ajax({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(
          Math.random() * 950
        )}`,
        dataType: "json",
        success: (data) => {
          this.data.pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1),
          this.data.pokemonPicture = data.sprites.back_default
        },
        error: function (xhr, text, error) {
          console.log(text);
        },
      });
    }
  
    getReandomText() {
      $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: "json",
        success: (data) => {
          this.data.text = data[Math.floor(Math.random() * 5)];
        },
        error: function (xhr, text, error) {
          console.log(text);
        },
      });
    }
  
    loadData(){
     //   this.data = this.data
        this.getRandomUsers()
        this.getRandomQuote()
        this.getRandomPokemon()
        this.getReandomText()
    }
  }