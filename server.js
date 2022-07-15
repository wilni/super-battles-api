const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const api_key = '5346880675380642';

app.use(cors());

app.get('/:name', (req, res) => {
    let name = req.params.name;
    let heroObj = {};
    axios.get(`https://superheroapi.com/api/${api_key}/search/${name}`)
    .then(response => {
        let heroData = response.data.results[0];
        heroObj = {
            id: heroData.id,
            name: heroData.name,
            powerstats: heroData.powerstats 
        }
        console.log(heroObj);
        return res.send(heroObj);
    })
    
})


//script to build up hero list
// function readheros() {
//     const herosData = fs.readFileSync('./heros.json');
//     const parsedHeros = JSON.parse(herosData);
//     console.log("parsed heros",parsedHeros);
//     return parsedHeros;
// }
// app.get('/heros2', (req, res) => {
//     console.log("we hit the heros2 route");
//     // let herosFile = [];
//     let herosFile = readheros();
//     let heros = [];
//     let heroList = [];
//   for (let i = 701; i <=731 ; i++) {
//     heros.push(axios.get(`https://superheroapi.com/api/5346880675380642/${i}`))
//   }
//   Promise.all(heros).then(res =>{
//       for(let i = 0; i < res.length; i++){
//           heroList.push({
//               name: res[i].data.name,
//               id: res[i].data.id,
//               publisher: res[i].data.biography.publisher
//           })
//       }
//       herosFile = [...herosFile, ...heroList];
//       fs.writeFileSync('./heros.json', JSON.stringify(herosFile));
//   }).catch(e => console.log(e))
//    res.send("hi");
// })


app.listen('8080', ()=> {
    console.log("listening from port 8080");
})