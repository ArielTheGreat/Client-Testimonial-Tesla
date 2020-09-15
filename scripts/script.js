let counter = 0;
let imgArray = new Array();
imgArray[0] = 'url("images/andres.jpeg")';
imgArray[1] = 'url("images/marco.jpg")';
imgArray[2] = 'url("images/milan.jpg")';
imgArray[3] = 'url("images/rosa.jpg")';
let testimonialText = new Array();
testimonialText[0] = `La calidad exterior me parece correcta, con algunos puntos muy mejorables:

-Los cromados son lamentables, propios de un coche de 10000€. Es plástico del malo con pintura cromada, muy mal tacto y bastante endebles.

-La parte inferior del coche es de plástico sin pintar. Tiene toda la pinta de que se va a quedar gris en poco tiempo.

-Delante tiene un maletero donde en un coche normal va el motor. El maletero es majo, te caben un par de bolsas de viaje sin problema.`;
testimonialText[1] = ` A mí me parece que el coche tiene unos acabados más que buenos, aunque quizás no llega a los acabados de algún coche de 100.000e, pero son más que buenos. Tactos agradables y gomosos, nada cruje y todo en su sitio y cómodo. A destacar los asientos, que a pesar de no ser de cuero, son tremendamente cómodos y terriblemente fáciles de limpiar (y los míos son blancos). El volante tipo deportivo, pequeño pero con buen tacto y gran respuesta.`;
testimonialText[2] = `I know this is going to sound insane and I expect some backlash, but the premium trim Nissan Kicks got car audio right.

Hear me out, if you ever have time to go sit in a $20k car for two minutes, give it a listen. It embarrasses cars 3x the price. Even CNET, Kelley blue book, and car and driver were impressed.

After hearing that car I hear premium sound in other cars and I think, “You’re charging extra for this?”

`;
testimonialText[3] = `And just like that, you're in front of the car. It felt like a miracle - one that wouldn't have happened without a lot of saving, tons of research, and the invaluable help and support from a friend! Even having learned every detail and little oddity online, it's still an odd experience to climb into one for the first time. I'd thought for the longest time the car would be less intuitive than the gauges and buttons I'd been used to, but in fact, the opposite is true. It's like using your iPad - it's simple. It's MORE intuitive!`;

let pictureProfile = document.getElementById("picture");
pictureProfile.style.backgroundImage = imgArray[counter];

let text = document.getElementById("textimonial");
text.innerHTML = testimonialText[counter];

function goLeft()
{
    if (counter == 0)
    {
        counter = 3;
        pictureProfile.style.backgroundImage = imgArray[counter];
        text.innerHTML = testimonialText[counter];
    }
    else{
        counter--;
        pictureProfile.style.backgroundImage  =  imgArray[counter];
        text.innerHTML = testimonialText[counter];
    }
}
function goRight()
{
    if(counter == 3)
    {
        counter = 0;
        pictureProfile.style.backgroundImage = imgArray[counter];
        text.innerHTML = testimonialText[counter];
    }else{
        counter++;
        pictureProfile.style.backgroundImage = imgArray[counter];
        text.innerHTML = testimonialText[counter];
    }
}