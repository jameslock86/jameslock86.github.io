
function appendIcons(){

  let icons = [
    './Assets/icons/react.png',
    './Assets/icons/reactNative.png',
    './Assets/icons/jQuery.gif',
    './Assets/icons/htmlFive.png',
    './Assets/icons/CSSThree.png',
    './Assets/icons/aws.png',
    './Assets/icons/bootstrap.png',
    './Assets/icons/materialize.png',
    './Assets/icons/node.png',
    './Assets/icons/mongodb.png',
    './Assets/icons/node.png',
    './Assets/icons/heroku.png',
    './Assets/icons/knex.png',
    './Assets/icons/postman.png',
    './Assets/icons/wordpress.png',
    './Assets/icons/axios.png',
    './Assets/icons/api.png'
  ]

  icons.forEach((icon) => {
    $('#icons').append(`
      <div class="iconWrapper col-md-2">
          <img class="icon" src="${icon}">
      </div>
    `)
  })

}

$( document ).ready(
  appendIcons()
)