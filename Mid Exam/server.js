const express = require("express");
const path = require("path");
const urllib = require("urllib");
const app = express();


const port = 8080

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));


app.get("/recipes/:ingredient/:didntlike", function (request, response) {

    let ingredientRecipe = request.params.ingredient
    let didntlikeIngridient = request.params.didntlike

    console.log(didntlikeIngridient)


    urllib.request(
        `https://recipes-goodness.herokuapp.com/recipes/${ingredientRecipe}`,
        function (err, data, res) {
            if (err) {
                throw err; // you need to handle error
            }

            const results = JSON.parse(data.toString()).results


            const myMeal = results.map((meal)=> {

                return {
                    ingredients : meal.ingredients,
                    title: meal.title,
                    thumbnail: meal.thumbnail,
                    href: meal.href

                }
            })

            const myMeal2 = myMeal.filter((meal) =>{

                for(let i = 0 ; i <meal.ingredients.length ; i++){
                    if(meal.ingredients[i] === didntlikeIngridient )
                    {
                        meal.ingredients.splice(i,1)
                    }
                }
            })

            console.log(myMeal2)



            response.send(myMeal2)
        }


    )


})

app.get("/", function (request, response) {
    response.send("Server is up and running smoothly");
});

app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.listen(port, function () {
    console.log(`Running server on port ${port}`);
});