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
const recommandationService = document.querySelector('.recommandation');
const idBurger = document.getElementById('burger');
const idKegelExercise = document.getElementById('idKegelExercise');
const idMeditation = document.getElementById('idMeditation');
const idRecommandation = document.getElementById('idRecom');
const idYoga = document.getElementById('idYoga');

/*
    Ouverture des services
*/
idYoga.addEventListener('click',() =>{
    
    yogaService.style.display = 'block';
});
idMeditation.addEventListener('click',() =>{
    meditationService.classList.add('openService')
    //meditationService.classList.add('openService')
    meditationService.style.display = 'block';
});
idKegelExercise.addEventListener('click',() =>{
    kegelExerciseService.style.display = 'block';
});
idRecommandation.addEventListener('click', () =>{
    recommandationService.style.display = 'block';
});

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
quitBurger.addEventListener('click',() =>{
    burgerPop.classList.remove('ouvertureBurger');
    burgerPop.classList.add('fermetureBurger');
    burgerPop.style.display = 'block'
});
/*
    Ouverture et fermeture Today taps
*/
today.addEventListener('click', () =>{
    todayTaps.classList.add('openTaps')
    todayTaps.style.display = 'block'
});
quitToday.addEventListener('click',()=>{
    todayTaps.classList.remove('openTaps')
    todayTaps.classList.add('closeTaps')
    todayTaps.style.display = 'block'
});
/*
    Ouverture et fermeture All Exercises taps
*/
allExercise.addEventListener('click', () =>{
    allExerciseTaps.classList.add('openTaps')
    allExerciseTaps.style.display = 'block'
});
quitAllExercise.addEventListener('click',()=>{
    allExerciseTaps.classList.remove('openTaps')
    allExerciseTaps.classList.add('closeTaps')
    allExerciseTaps.style.display = 'block'
});
/*
    Ouverture et fermeture Settings taps
*/
setting.addEventListener('click', () =>{
    settingTaps.classList.add('openTaps')
    settingTaps.style.display = 'block'
});
quitSetting.addEventListener('click',()=>{
    settingTaps.classList.remove('openTaps')
    settingTaps.classList.add('closeTaps')
    settingTaps.style.display = 'none'
});





