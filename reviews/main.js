// App State
const reviews = [
{id:0, personaName: "Anna B.", job:"Web Designer", img: "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg?w=1380&t=st=1689343048~exp=1689343648~hmac=1242c72c9179307cd11083c1cbd2e20b96fec449e21ad9120812c42ef43bcda3", descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ullam, quisquam commodi unde aut esse, eaque illo vel fuga est quae nobis quia aliquid molestias. Accusantium excepturi culpa ullam atque?"},
{id:1, personaName: "Thanos A.", job:"Java Junior Designer", img: "https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg", descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ullam, quisquam commodi unde aut esse, eaque illo vel fuga est quae nobis quia aliquid molestias. Accusantium excepturi culpa ullam atque?"},
{id:2, personaName: "Sakis T.", job:"Senior Junior Designer", img: "https://img.freepik.com/free-photo/young-male-holding-cardboard-boxes-t-shirt-hat-looking-happy-front-view_176474-47418.jpg?w=1380&t=st=1689343212~exp=1689343812~hmac=0f995438999bf0f85010cd3cbe201e6b11e13252fd9253a83b49c8d564cc0fdf", descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ullam, quisquam commodi unde aut esse, eaque illo vel fuga est quae nobis quia aliquid molestias. Accusantium excepturi culpa ullam atque?"},
]

let personaId = Math.floor(Math.random() * reviews.length)

window.addEventListener('DOMContentLoaded', function() {
  showPersonaById(personaId)

  document.querySelector('#prevBtn').addEventListener('click', function() {
    onPrevBtnClicked()
  })
  document.querySelector('#nextBtn').addEventListener('click', function() {
    onNextBtnClicked()
  })
})

function showPersonaById(personaId) {
  const persona = reviews.find(p => p.id === personaId)
  const {personaName, job, img:image, descr} = persona
  document.querySelector('#personaImg').src = image
  document.querySelector('#personaName').innerHTML = personaName
  document.querySelector('#personaJob').innerHTML = job
  document.querySelector('#personaDesc').innerHTML = descr
}

/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */
function onPrevBtnClicked() {
  showPrevPersona()
}

/**
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClicked() {
  showNextPersona()
}

/**
 * Circulary finds the previous id and shows the persona.
 */
function showPrevPersona() {
  personaId = (personaId < 0) ? reviews.length -1 : --personaId
  showPersonaById(personaId)
}

/**
 * Circulary finds the next id and shows the persona.
 */
function showNextPersona() {
  personaId = (++personaId % reviews.length)
  showPersonaById(personaId)
}