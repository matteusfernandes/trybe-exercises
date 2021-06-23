const wake = () => 'Acordando!!';
const brakefast = () => 'Bora Tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wake);
doingThings(brakefast);
doingThings(sleep);