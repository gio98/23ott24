console.clear();

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let myaudio = document.getElementById("myAudio");
const startBtn = document.querySelector('#start-button');
let btnOpacity = 1;
startBtn.style.opacity = btnOpacity;
let timer = 0;
const text = [
  "Feliz aniversario al amor de mi vida, gracias por existir, tú que eres la persona más increíble y extraordinaria de mi vida, que me completa en cada momento y que haces que mi corazón explote de infinita felicidad, que me das una fuerza infinita capaz de hacerme tocar el cielo con un dedo.",
  "Aquí estamos nuevamente este año con nuestro amor infinito, hemos llegado a nuestro hermoso día que llega como una sorpresa navideña y es un día extraordinario de celebración, como cada día hermoso y único que paso contigo a tu lado.",
  "Hoy estoy aquí amor de mi vida para decirte gracias inmensamente y lo haré en cada momento de mi vida y más allá por haber entrado en mi vida y por estar aquí a mi lado brindándome todo tu precioso amor, que cada día hace mi vida especial y me ha hecho cada día que pasa una mejor persona.",
  "Todo esto gracias a ti por la persona increíble que eres con tu dulce sonrisa, que hace que mi corazón lata más rápido y me deja sin aliento, tu infinita dulzura que me llena de felicidad y calma, que me hace sentir seguro, lejos de todo mal.",
  "Tu fuerza infinita que desde la pasión que pones desde tu precioso corazón puedes superar desafíos increíbles completando cada obstáculo que la vida te pone frente, y pones todo de ti en ello luchando con uñas y dientes y todo lo que haces.",
  "Cada momento entonces se vuelve único porque lo haces aplicando la pasión que llega al fondo de tu precioso corazón y te tomo como ejemplo desde tu grandiosa fuerza, y aún en esos momentos donde no sé qué hacer pienso en ti.",
  "Abriendo mi corazón y esto nunca me hace parar porque siento que te tengo aquí en mi corazón, unidos en el alma y juntos amor de mi vida somos capaces de afrontar y vencer todo, y sobre todo siempre recuerdas que todos los días eres la número uno en todo el universo.",
  "Hasta en los momentos más difíciles recuerda siempre que estaré aquí a tu lado, en las buenas y en las malas y quiero estar aquí a tu lado y proteger con todo de mí tu preciosa alma y tu precioso corazón.",
  "Gracias por cada uno de tus infinitos y cálidos abrazos, donde me siento como un niño envuelto a salvo de todo daño, y me encanta estar aquí todos los días para ser tu almohada mientras te protejo en mis cálidos abrazos.",
  "Gracias por cada uno de tus besos dulces y preciosos que más que oxígeno ese aliento me da vida y fuerza para levantarme de acostarnos y enfrentar la vida juntos.",
  "Amo por cada pequeño o gran hito que se combina con cada día increíble e inolvidable para celebrarlo, y sobre todo el amor más especial de mi vida es compartir cada momento contigo y regocijarnos juntos preservando ese momento juntos en nuestros corazones y mentes.",
  "Gracias por estar aquí y enseñarme cosas extraordinarias cada día, y con la fuerza infinita de nuestro amor mi corazón ha venido a hacerme hacer cosas que sin ti nunca hubiera hecho y lo extraordinario es ver tú feliz por todo lo que hago.",
  "Lo más lindo y extraordinario para mí es verte feliz y verte sentir bien, porque eso es lo más importante para mí todos los días.",
  "Felices 3 años juntos amor de mi vida, que este día como cada momento a tu lado sea extraordinario, y que dios proteja nuestra preciosa y extraordinaria relación que cada día se vuelve más increíble y extraordinaria.",
  "Quiero pasar cada día aquí a tu lado, tú quien eres y por siempre serás mi increíble, dulce y única compañera de vida, y nunca dejaré de decirte gracias por existir aquí a mi lado y por cómo cada día haces que mi vida sea extraordinaria y única.",
  "Te amo inmensamente desde el fondo de mi corazón que te ama desde el fondo y existe para acogerte aquí en el fondo, donde se encuentra mi alma que se une a la tuya convirtiéndose juntos en una sola persona.",
  "Te amo infinitamente desde lo más profundo de mi alma y de mi cuerpo, tú que eres mi corazón que como un motor me mantiene vivo para estar aquí a tu lado y protegerte con todo mi amor.",
  "Tú que eres más importante que el oxígeno que respiro, eres mi cuerpo, mi alma, cada molécula que me compone, tú que eres mi compañera de vida, mi pingüino precioso, mi ángel más increíble y único en todo el cielo, la estrella más hermosa, brillante y única en todo el universo, la persona más dulce, increíble y sorprendente de todo el universo, mi súper y sorprendente mogliettina, ¡mi todo!",
  "Pasaremos este día juntos, feliz aniversario, felices 3 años para nosotros mi mogliettina, de parte de tu pequeño topolino viziato!!",
  "A+G+GIOAN= hoy, por siempre y más allá!!"
];

const greetingText = document.querySelector('#greeting-container');
const greetingletter = document.querySelector('#greeting-letter');
const secretMessageText = document.querySelector('#greeting-container p');
const letter = document.querySelector('#greeting-letter div');
let greetingOpacity = 0;
let secretMsgOpacity = 0;
let letterOpacity = 0;
let letterpOpacity = 0;
let flag = false;
let secretMsg = false;
let letterMsg = false;
let letterp = false;
let index = 0;
let fireworksArr = [];
let explosionsArr = [];

class Firework {
  constructor(x, y, xVel, yVel, size, color) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.size = size;
    this.hue = color;
    this.color = `hsla(${color}, 100%, 75%, 1)`;
    this.gravity = 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.x += this.xVel;
    this.y += this.yVel;
    this.yVel += this.gravity;
    
    if (this.xVel > 0.1 && this.xVel < -0.1) {
      if (this.xVel > 0) {
        this.xVel -= 0.05;
      } else {
        this.xVel += 0.05;
      }
    }
  }
}

class Explosion {
  constructor(x, y, xVel, yVel, color) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.size = 0;
    this.opacity = 1;
    this.hue = color;
    this.color = `hsla(${this.hue}, 100%, 75%, ${this.opacity})`;
    this.gravity = 0.1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.x += this.xVel;
    this.y += this.yVel;
    this.yVel += this.gravity;
    this.opacity -= Math.random() * 0.03;
    
    this.color = `hsla(${this.hue}, 100%, 75%, ${this.opacity})`;
    
    if (this.xVel > 0.1 && this.xVel < -0.1) {
      if (this.xVel > 0) {
        this.xVel -= 0.05;
      } else {
        this.xVel += 0.05;
      }
    }
    
    if (this.size < Math.random() * 3 + 1) {
      this.size += 0.05;
    }
  }
}

window.onload = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const showGreeting = () => {
    if (greetingText.style.opacity < 1) {
      greetingOpacity += 0.01;
      greetingText.style.opacity = greetingOpacity;
      requestAnimationFrame(showGreeting);
    }
    if (greetingText.style.opacity > 1) greetingText.style.opacity = 1;
  }
  

  
  const showletter = () => {
    if (greetingletter.style.opacity < 1) {
      letterOpacity += 0.01;
      greetingletter.style.opacity = letterOpacity;
      requestAnimationFrame(showletter);
    }
    if (greetingletter.style.opacity > 1) greetingletter.style.opacity = 1;
  }
  const showSecretMsg = () => {
    console.log('secret message');
    if (secretMessageText.style.opacity < 1) {
      secretMsgOpacity += 0.01;
      secretMessageText.style.opacity = secretMsgOpacity;
      requestAnimationFrame(showSecretMsg);
    }
    if (greetingText.style.opacity > 1) greetingText.style.opacity = 1;
  }
  
  const showletterMsg = () => {
  
    if (letter.style.opacity < 1) {
      letterpOpacity += 0.01;
      letter.style.opacity = letterpOpacity;
      requestAnimationFrame(showletterMsg);
    }
    if (letter.style.opacity > 1) letter.style.opacity = 1;
  }

  const getYVelocity = () => {
    let yVel = Math.random() * (canvas.height / -80 - 10);
    if (yVel > -12 && yVel < -16) {
      yVel = Math.random() * -6 - 12;
      console.log(yVel);
      return yVel;
    } else {
      console.log(yVel);
      return yVel;
    }
  }
  
  const startTheShow = () => {
    ctx.fillStyle= 'rgba(0,0,0,0.1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    if (timer % Math.trunc(Math.random() * 25 + 30) === 0) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * (canvas.width * 0.5) + (canvas.width * 0.25);
      const y = canvas.height + size;
      const xVel = Math.random() * 4 - 2;
      const yVel = getYVelocity();
      const color = Math.floor(Math.random() * 360);
      fireworksArr.push(new Firework(x, y, xVel, yVel, size, color));
    }
    
    for (let i = 0; i < fireworksArr.length; i++) {
      fireworksArr[i].update();
      fireworksArr[i].draw();
      
      if (fireworksArr[i].yVel > Math.random() * 3) {
        for (let j = 0; j < Math.random() * 50 + 30; j++) {
          const x = fireworksArr[i].x;
          const y = fireworksArr[i].y;
          const xVel = Math.random() * 6 - 3;
          const yVel = Math.random() * 6 - 5;
          const color = fireworksArr[i].hue;
          explosionsArr.push(new Explosion(x, y, xVel, yVel, color));
        }
        fireworksArr.splice(i, 1);
        i--;
      }
    }
    
    
    for (let i = 0; i < explosionsArr.length; i++) {
      explosionsArr[i].update();
      explosionsArr[i].draw();
      
      if (explosionsArr[i].opacity < 0.01) {
        explosionsArr.splice(i, 1);
        //i--;
      }
    }
    
    if (timer > 100 && !flag && !secretMsg) {
      flag = true;
      showGreeting();
      secretMsg = true;
      showSecretMsg();
     
    }
    
    if (timer > 300 && !letterMsg && !letterp) {

      greetingOpacity = 0;
      greetingText.style.opacity = greetingOpacity;
 


      letterMsg=true;
      showletter();
      letterp = true;
      showletterMsg();
      //e.stopPropagation();
      myaudio.loop = true;
      myaudio.play();
      var text = $('.test').data('text');
      let groupSize = 5; 
      typeWriter(text, 0,groupSize);
    }

    // if (explosionsArr.length > 0) console.log(explosionsArr[0].opacity);
    
    timer++;
    requestAnimationFrame(startTheShow);
  }
  
  const decreaseOpacity = () => {
    if (startBtn.style.opacity > 0.05) {
      startBtn.style.opacity = Number.parseFloat(btnOpacity);
      btnOpacity -= 0.05;
      requestAnimationFrame(decreaseOpacity);
    } else {
      startBtn.style.display = 'none';
    }
  }
  
  const handleClick = () => {
    console.log('clicked');
    decreaseOpacity();
    startTheShow();
  }
  
  startBtn.addEventListener('click', handleClick);
 
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.height)
  })
  
 
  function typeWriter() { 
      if (index < text.length) {
          
            document.getElementById("test").innerHTML = text[index];
            index++;
            setTimeout(typeWriter, 16000); // Adjust the delay as needed
     
      } else {
          //index = 0; // Reset index to loop the text
          //setTimeout(typeWriter, 9000); // Adjust the delay as needed
         window.location = "/pl/dist/index.html" 
      }
  }

}