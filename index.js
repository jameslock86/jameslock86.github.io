// function getRandomNumber(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function appendRainDrops() {
//   for(let i = 0; i < 30; i++){
//     $('#raindrops').append(
//       `
//       <div class="raindrop" style="width:300px;top:${getRandomNumber(600)}px;left:${getRandomNumber(99)}%" >
//         <div style ="
//           width: 7px;
//           height: 7px;
//           background: white;
//           -moz-border-radius: 50px;
//           -webkit-border-radius: 50px;
//           border-radius: 50px;
//         ">
//         </div>
//       </div>
//       `
//     )
//   }
// }

function appendIcons(){

  let icons = [
    ['purple', './Assets/icons/react.png'],
    ['blue', './Assets/icons/reactNative.png'],
    ['pink', './Assets/icons/jQuery.gif'],
    ['green', './Assets/icons/htmlFive.png'],
    ['pink', './Assets/icons/CSSThree.png'],
    ['green', './Assets/icons/aws.png'],
    ['blue', './Assets/icons/bootstrap.png'],
    ['pink', './Assets/icons/materialize.png'],
   	['pink', './Assets/icons/postgresql.png'],
    ['pink', './Assets/icons/mongodb.png'],
    ['pink', './Assets/icons/strikingly.png'],
    ['purple', './Assets/icons/node.png'],
    ['blue', './Assets/icons/heroku.png'],
    ['pink', './Assets/icons/knex.png'],
    ['green', './Assets/icons/postman.png'],
    ['pink', './Assets/icons/wordpress.png'],
    ['blue', './Assets/icons/axios.png'],
    ['purple', './Assets/icons/api.png'],
      ['purple', './Assets/icons/expoXDE.png'],
    ['blue', './Assets/icons/shopify.jpeg'],
    ['pink', './Assets/icons/MySQL.png'],
    ['pink', './Assets/icons/firebase.png'],
  ]

  icons.forEach((icon) => {
      $('#icons').append(`
      <div class="iconWrapper col-md-2 ${icon[0]}">
            <img class="icon" src="${icon[1]}">
      </div>
    `)
  })

}

$( document ).ready(
  appendIcons()
)




