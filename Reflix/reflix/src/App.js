import React, { Component } from 'react';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: "Ameer", budget: 320, rentedMovies: {}, imgUrl: "https://cdn.dribbble.com/users/2338264/screenshots/6859046/manbun-icon-revised.jpg" },
        { name: "Ahmad", budget: 123, rentedMovies: {}, imgUrl: "https://icon-library.com/images/netflix-icon-black/netflix-icon-black-19.jpg" },
        { name: "Safa", budget: 343, rentedMovies: {}, imgUrl: "https://cdn.dribbble.com/users/2338264/screenshots/6859062/attachments/1462884/unicorn-icon-revised.jpg" },
        { name: "Ali", budget: 75, rentedMovies: {}, imgUrl: "https://cdn.dribbble.com/users/2338264/screenshots/6859035/owl-icon-revised.jpg" },
        { name: "Add User", imgUrl: "https://icon-library.com/images/add-photo-icon/add-photo-icon-23.jpg" }

      ],
      movies: [
        { id: 0, isRented: true, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: true, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ]
    }
  }

  changeRentedStatus = (userName, moveyID) => {
    let currentMovies = [...this.state.movies];
    let updateUsers = [...this.state.users];
    let user = updateUsers.find(u=> u.name === userName);
    let movie = currentMovies.find(m=> m.id === moveyID)

    if(movie.isRented){
      user.budget += 3;
      user.rentedMovies[moveyID] = false;
      movie.isRented = false;

    }else if(user.budget < 3){
      alert("I am Sorry but you not have enough of money $$")
    }else{
      user.budget -= 3;
      user.rentedMovies[moveyID] = true;
      movie.isRented = true;
    }
    updateUsers[userName] = user;
    currentMovies[moveyID] = movie;


    this.setState({
      users:updateUsers,
      movies:currentMovies
    })
  }

  render() {
    const state = this.state
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div><div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>

            <h2 className='reflixTitle'>Reflix</h2>

          </div>

          <Route path="/" exact render={() => <Landing users={state.users} />} />
          <Route path="/catalog/:userName" exact render={({ match }) => <Catalog match={match} items={state} name={state.users} changeRentedStatus={this.changeRentedStatus} />} />
          <Route path="/movies/:movieId" exact render={({match})=> <MovieDetail movie={state.movies[match.params.movieId]}/>}/>

        </div>
      </Router>
    );
  }
}

export default App;
