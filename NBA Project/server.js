

const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib');


const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}



const port = 3005

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')));


app.get('/teams/:teamName',function(req,res){

    let NBATeamName = req.params.teamName

    urllib.req('http://data.nba.net/10s/prod/v1/2018/players.json',function (err, data, res) {
        if (err) {
          throw err; 
        }

        const NBAPlayers = JSON.parse(data.toString().league.standard)
        const teamsPlayers = NBAPlayers.filter((player) => {
            if(player.teams.length > 0)
            {
               if(player.isActive === true && player.teams[player.teams.length - 1].teamId === teamToIDs[NBATeamName])
               {
                   return player;

               }
               else
               {
                   return false
               }
               
            }
        }
        )
        const MyteamPlayers = teamsPlayers.map((player)=> {
          return {
            firstName: p.firstName,
            lastName: p.lastName,
            jersey: p.jersey,
            pos: p.pos,
          };  
        })

        console.log(MyteamPlayers)
        res.send(MyteamPlayers)
    });

})

app.get("/", function (request, response) {
    response.send("Server is up and running smoothly");
  });
  
  app.listen(port, function () {
    console.log(`Running server on port ${port}`);
  });