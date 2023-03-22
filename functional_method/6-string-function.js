// String function
const anime = ["NARUTO", "SEVEN_DEADLY_SINS", "ONE_PIECE", "JUJUSTU_KAISAN", "TOMODACHI_GAME", "BLACK_CLOVER"];
const anime_watchhours = [
    {
        anime_name: "NARUTO",
        total_hours: 10,
    },
    {
        anime_name: "SEVEN_DEADLY_SINS",
        total_hours: 5,
    },
    {
        anime_name: "ONE_PIECE",
        total_hours: 8,
    },
    {
        anime_name: "JUJUSTU_KAISAN",
        total_hours: 6,
    },
    {
        anime_name: "TOMODACHI_GAME",
        total_hours: 5,
    },
    {
        anime_name: "BLACK_CLOVER",
        total_hours: 0,
    }
]
console.log(anime);
console.log(anime_watchhours);


// indexof 
var index1 = anime.indexOf("NARUTO")
console.log(anime.indexOf("NARUTO") + " " + anime[index1]);


// lastindexof
var index2 = anime.lastIndexOf("BLACK_CLOVER")
console.log(anime.lastIndexOf("BLACK_CLOVER") + " " + anime[index2]);


// slice  
var new_anime_list = anime.slice(0, 3);
console.log(new_anime_list);


// splice
var removed_anime = anime.splice(4,2);
console.log(removed_anime);
console.log(anime);

// findindex
var number = [1,2,3,10,200,6000];
var output = number.findIndex( e=>{
    return (e >= 100);
})
console.log(output);
