const teamContainer = document.querySelector('.team-container');


const team = [
    {
        img: '<img src="img/new-team-member-02.jpg">',
        nameSurname: 'Mark Bale',
        posiition: 'Co-Founder',
    },
    {
        img: '<img src="img/angela-caroll-chief-editor.jpg">',
        nameSurname: 'Angela Caroll',
        position: 'Chief editor',
    },
    {
        img: '<img src="img/angela-lopez-social-media-manager.jpg">',
        nameSurname: 'Angela Lopez',
        position: 'Social Media Managaer',
    },
    {
        img: '<img src="img/barbara-ramos-graphic-designer.jpg">',
        nameSurname: 'Barbara Ramos',
        position: 'Graphic Designer',
    },
    {
        img: '<img src="img/new-team-member-03.jpg">',
        nameSurname: 'Son Cino',
        position: 'Co-Founder',
    },
    {
        img: '<img src="img/walter-gordon-office-manager.jpg">',
        nameSurname: 'Walter Gordon',
        position: 'Office Manager',
    }
];

for (let i = 0; i < team.length; i++) {
    const worker = team[i];


    // let newDiv = document.createElement("div");
    // newDiv.classList.add("team-card");
    // teamContainer.append(newDiv);

    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
        ${worker.img}
        </div>
        <div class="card-text">
            <h3>${worker.nameSurname}</h3>
            <p>${worker.position}</p>
        </div>
    </div>
`
    // const teamCard = document.querySelector('.team-card');
    // // let newDivImg = document.createElement("div");
    // teamCard.innerHTML = `<div class="card-image"></div>`;
    // // newDivImg.classList.add("card-image");
    // // teamCard.appendChild(newDivImg);



    console.log(worker.img, worker.nameSurname, worker.position);

}
