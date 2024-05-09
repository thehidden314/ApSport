const quit =  document.getElementById('cancel');
const quitToday =  document.getElementById('cancelToday');
const quitAllExercise =  document.getElementById('cancelAllExercise');
const quitSetting =  document.getElementById('cancelSetting');
const quitBurger =  document.getElementById('cancelBurger');
const today =  document.getElementById('today');
const allExercise =  document.getElementById('allExercise');
const setting =  document.getElementById('setting');
const tapsElement = document.querySelector('.taps');
//const openBurger = document.querySelector('#burger');
const todayTaps = document.querySelector('.today');
const allExerciseTaps = document.querySelector('.allExercise');
const settingTaps = document.querySelector('.setting');
const burgerPop = document.querySelector('.burger-pop');
const modeDeQuitte = document.querySelector('#canceling-mode');
const yogaService = document.querySelector('.yoga');
const kegelExerciseService = document.querySelector('.kegel-exercise');
const meditationService = document.querySelector('.meditation');
const idmeditationDescription = document.getElementById('meditationDescription');
const idyogaDescription = document.getElementById('yogaDescription');
const idrecommandationDescription = document.getElementById('recommandationDescription');
const recommandationService = document.querySelector('.recommandation');
const quitKegelExerciseService = document.getElementById('idquitKegelExericise');
const quitRecommandationService = document.getElementById('idquitRecommandation');
const quitMeditationService = document.getElementById('idquitMeditation');
const quitYogaService = document.getElementById('idquitYoga');
const idBurger = document.getElementById('burger');
const idKegelExercise = document.getElementById('idKegelExercise');
const idMeditation = document.getElementById('idMeditation');
const idRecommandation = document.getElementById('idRecom');
const idYoga = document.getElementById('idYoga');
const idPlay = document.getElementById('maskPlay');
const idPause = document.getElementById('maskPause');
const audio = document.getElementById("audioPlayer");


/*

    const idquit = document.getElementById('idquit');
    idquit.addEventListener('click', ()=>{
        console.log()
    })

*/


/*
    traitement play & pause button
*/
idPlay.addEventListener('click', () =>{
    document.querySelector('#maskPlay').style.display = 'none';
    document.querySelector('#maskPause').style.display = 'block';
    audio.play();
})
idPause.addEventListener('click', () =>{
    document.querySelector('#maskPause').style.display = 'none';
    document.querySelector('#maskPlay').style.display = 'block';
    audio.pause();
    
})
/*
    Ouverture des services
*/
idYoga.addEventListener('click', () =>{
    yogaService.classList.add('openService');
    yogaService.style.display = 'block';
});

quitYogaService.addEventListener('click', () => {
    yogaService.classList.remove('openService')
    //meditationService.classList.add('openService')
    yogaService.style.display = 'none';
});

idMeditation.addEventListener('click', () =>{
    meditationService.classList.add('openService')
    //meditationService.classList.add('openService')
    meditationService.style.display = 'block';
});

quitMeditationService.addEventListener('click', () => {
    meditationService.classList.remove('openService')
    //meditationService.classList.add('openService')
    meditationService.style.display = 'none';
});

idRecommandation.addEventListener('click', () =>{
    recommandationService.classList.add('openService')
    recommandationService.style.display = 'block';
});

quitRecommandationService.addEventListener('click', () => {
    recommandationService.classList.remove('openService')
    recommandationService.style.display = 'none';
});

/*document.getElementById('idquit').addEventListener('click', () => {
    meditationService.style.display = 'none';
})
idKegelExercise.addEventListener('click', () => {
    kegelExerciseService.style.display = 'block';
});*/

idKegelExercise.addEventListener('click', () =>{
    kegelExerciseService.classList.add('openService')
    //meditationService.classList.add('openService')
    kegelExerciseService.style.display = 'block';
});
quitKegelExerciseService.addEventListener('click', () => {
    kegelExerciseService.classList.remove('openService')
    //meditationService.classList.add('openService')
    kegelExerciseService.style.display = 'none';
});
/*
idRecommandation.addEventListener('click', () =>{
    recommandationService.style.display = 'block';
});
*/
/*
    Fermeture des services
*/

quit.addEventListener('click', () =>{
    tapsElement.style.display = 'none'
});
/*
    Ouverture et fermeture burger PopUp
*/
idBurger.addEventListener('click', () =>{
    burgerPop.classList.add('ouvertureBurger');
    burgerPop.style.display = 'block';
});
quitBurger.addEventListener('click', () =>{
    burgerPop.classList.remove('ouvertureBurger');
    /*
        burgerPop.classList.add('fermetureBurger');
    */
    burgerPop.style.display = 'none'
});
/*
    Ouverture et fermeture Today taps
*/
today.addEventListener('click', () =>{
    todayTaps.classList.add('openTaps')
    todayTaps.style.display = 'block'
});
quitToday.addEventListener('click', () =>{
    todayTaps.classList.remove('openTaps')
    /*
        todayTaps.classList.add('closeTaps')
        */
    todayTaps.style.display = 'none'
});
/*
    Ouverture et fermeture All Exercises taps
*/
allExercise.addEventListener('click', () =>{
    allExerciseTaps.classList.add('openTaps')
    allExerciseTaps.style.display = 'block'
});
quitAllExercise.addEventListener('click', () =>{
    allExerciseTaps.classList.remove('openTaps')
    /*allExerciseTaps.classList.add('closeTaps')*/
    allExerciseTaps.style.display = 'none'
});
/*
    Ouverture et fermeture Settings taps
*/
setting.addEventListener('click', () =>{
    settingTaps.classList.add('openTaps')
    settingTaps.style.display = 'block'
});
quitSetting.addEventListener('click', () =>{
    settingTaps.classList.remove('openTaps')
    /*settingTaps.classList.add('closeTaps')*/
    settingTaps.style.display = 'none'
});


/*
    Solution orientée objet
*/

const taps = [
    {
        id: 'idRecommandationDescription',
        serviceId: 'idRecommandation'
    },
    {
        id: 'idKegelExerciseDescription',
        serviceId: 'idKegelExercise'
    },
    {
        id: 'idMeditationDescription',
        serviceId: 'idMeditation'
    },
    {
        id: 'idYogaDescription',
        serviceId: 'idYoga'
    }
];

const services = [
    {
        id: 'idRecommandation',
        title: 'Recommandation',
        description: 'Description recommandation',
        audio: '/assets/audios/painaulait.m4a'
    },
    {
        id: 'idKegelExercise',
        title: 'Kegel exercises',
        description: 'Description Kegel Exercises',
        audio: '/assets/audios/painaulait.m4a'
    },
    {
        id: 'idMeditation',
        title: 'Meditation',
        description: 'Description Meditation',
        audio: '/assets/audios/painaulait.m4a'
    },
    {
        id: 'idYoga',
        title: 'Yoga',
        description: 'Description Yoga',
        audio: '/assets/audios/painaulait.m4a'
    }
];




/*
const servicesDescriptions = document.querySelector('.services-descriptions');

services.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add(service.id);
    serviceDiv.id = service.id;
    serviceDiv.innerHTML = `
        <div class="quit">
            <i class='bx bx-arrow-back back'></i>
        </div>
        <p>${service.description}</p>
    `;

    if (service.audio) {
        const audioPlayer = document.createElement('audio');
        audioPlayer.src = service.audio;
        audioPlayer.style.display = 'none';
        serviceDiv.appendChild(audioPlayer);

        const maskPlay = document.createElement('i');
        maskPlay.classList.add('bx', 'bx-play', 'maskPlay');
        maskPlay.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                maskPlay.style.display = 'none';
                maskPause.style.display = 'block';
            } else {
                audioPlayer.pause();
                maskPlay.style.display = 'block';
                maskPause.style.display = 'none';
            }
        });
        serviceDiv.appendChild(maskPlay);

        const maskPause = document.createElement('i');
        maskPause.classList.add('bx', 'bx-pause', 'maskPause');
        maskPause.style.display = 'none';
        serviceDiv.appendChild(maskPause);
    }

    servicesDescriptions.appendChild(serviceDiv);
});

taps.forEach(tap => {
    const tapElement = document.getElementById(tap.id);
    tapElement.addEventListener('click', () => {
        const service = services.find(s => s.id === tap.serviceId);
        if (service) {
            const descriptionElement = document.getElementById(service.id + 'Description');
            servicesDescriptions.appendChild(descriptionElement);
        }
    });
});
*/

