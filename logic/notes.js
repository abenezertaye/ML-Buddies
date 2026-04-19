const pSection = document.getElementById('project-section');

data = [
  {
    src:"images/illustration-article.svg",
    subDate:"2026-15-4 (4 Days left)",
    title:"Titanic  Dataset project",
  },
  {
    src:"images/illustration-article.svg",
    subDate:"2026-15-4",
    title:"House Pricing Dataset",
  },
  {
    src:"images/illustration-article.svg",
    subDate:"2026-15-4",
    title:"Wine PQ Dataset Project",
  },
  {
    src:"images/illustration-article.svg",
    subDate:"2026-15-4",
    title:"Creative Member Project",
  },
  {
    src:"images/illustration-article.svg",
    subDate: "2026-15-4",
    title:"Diabetes Dataset Project",
  },
  {
    src:"images/illustration-article.svg",
    subDate: "2026-15-4",
    title:"Hadron-Gamma Project",
  },
]

function main(){
  cards = createComponent()
  renderComponents(cards)
  console.log(cards)
}

function createComponent(){
  cards = []
  data.forEach(data=>{
    card = createApps(data.src,data.subDate,data.title)
    cards.push(card)
  })
  return cards
}

function createApps(src,subDate,title){
  return `
    <div class="project">
      <div class="image-container">
        <img src="${src}" alt="" class="card-images">
      </div>
      <div class="project-content">
        <p id="content-${Date.now()}">${title}</p>
        <p class="submission-date">${subDate}</p>
        <button class="read-btn">Enter Project</button>
      </div>
    </div>
  `
}

function renderComponents(cards){
  cards.forEach(card=>{
    pSection.innerHTML += card
  })
}

main()