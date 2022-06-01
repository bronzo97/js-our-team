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

    console.log(worker.img, worker.nameSurname, worker.position);

}
