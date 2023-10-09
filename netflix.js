let Movies=[
        {
            Name:"Salaar",
            Poster:"https://m.media-amazon.com/images/M/MV5BZGE5N2QyOGQtYjc4ZC00YTRhLWFiZDMtMmUzNWFmNjdiMzVkXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
            rating:9.6,
            Cast:"Prabhash , Shruti Haasan , Meenakshi Chaudhary",
            // Teaser:"Salaar.mp4"
        },
        {
            Name:"Leo",
            Poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
            rating:9.2,
            Cast:"Joseph Vijay , Trisha Krishnan , Sanjay Dutt",
            // Teaser:"Leo.mp4"
        },
        {
            Name:"Jawaan",
            Poster:"https://images.cinemaexpress.com/uploads/user/ckeditor_images/article/2023/7/13/F05jq1RagAAvs0k.jpg",
            rating:9.0,
            Cast:"Shah Rukh Khan , Deepika Padukone , Vijay Sethupathi",
            // Teaser:"Jawan.mp4"
        },
        {
            Name:"Thor",
            Poster:"https://m.media-amazon.com/images/I/61P0nv3PV9L._AC_UF1000,1000_QL80_.jpg",
            rating:8.6,
            Cast:"Chris Hemsworth , Natalie Portman , Jane Foster",
            // Teaser:"Thor.mp4"
        },
        {
            Name:"Sahoo",
            Poster:"https://m.media-amazon.com/images/M/MV5BNzU0ZmFkMWUtZDc4MC00OWVmLWI0MjEtZWZjMzRkZWE4MjgyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            rating:8.2,
            Cast:"Prabhash , Shradha Kapoor",
            // Teaser:"Saaho Teaser.mp4"
        },
        {
            Name:"K.G.F - 1",
            Poster:"https://live.staticflickr.com/65535/49712614726_ed1b9bf469_b.jpg",
            rating:8.9,
            Cast:"Yash , Srinidhi , Ramachandra Raju",
            // Teaser:""
        },
        {
            Name:"Pathaan",
            Poster:"https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg",
            rating:9.2,
            Cast:"Shah Rukh Khan , Deepika Padukone , John Abraham",
            // Teaser:"Pathaan.mp4"
        },
        {
            Name:"Rolex",
            Poster:"https://pbs.twimg.com/media/FUjNRr4XwAAPX9-.jpg",
            rating:9.7,
            Cast:"Suriya , Vijay Sethupathi",
            // Teaser:"Rolex.mp4"
        }

]




function searchmovie()
{
    let moviename=document.getElementById('searchicon').value;
    // console.log(moviename);

    if(moviename != "")
        {
           let result = Movies.filter(function(Movies)
                {
                  return Movies.Name.toUpperCase().includes(moviename.toUpperCase());
                })

            displaymovies(result);
        }
    else 
        {
            displaymovies(Movies);
        }
}
searchmovie();

// To Create Div & give a class name in Javascript We Have To Do These Below Things... ex:- (<div class="hii"></div>)
                                                
// let A = document.createElement("div");
// A.classList.add('hii');

function displaymovies(data)
{
    document.getElementById("movielist").innerHTML="";

    let movieString = ``;

    for(let i=0;i<data.length;i++)

        movieString = movieString + `
        <div class="movies">
            <div class="overlay">
                <div class="trailer">

                </div>
                <div class="moviedetails">

                    <h1>${data[i].Name}</h1>
                    <h2>IMDB : ${data[i].rating}</h2>
                    <p><b>Cast : ${data[i].Cast}</b></p>

                </div>
            </div>
            <img class="salaar" src="${data[i].Poster}" alt="Salaar Poster">
        </div>`;
    
    document.getElementById("movielist").innerHTML=movieString;
}
displaymovies(Movies); 










// let movie=document.createElement("div");
//     movie.classList.add('movie');
   
//     let overlay=document.createElement("div");
//     overlay.classList.add('overlay');

//     movie.appendChild(overlay);
//     // console.log(movie);