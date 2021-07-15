const s = 1000;
const m = s * 60;
const h = m * 60;

const parse = (str) => {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    let match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    let n = parseFloat(match[1]);
    let type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
      default:
        return undefined;
    }
  }


// Set the date we're counting down to

function countdownTimeStart(){
  const input = document.getElementById('texty').value;
  
  const milliseconds = parse(input)
  if(!milliseconds || milliseconds > 86400000){
    document.getElementById('texty').style.setProperty('color', 'red')
    setTimeout(() => document.getElementById('texty').style.setProperty('color', 'white'), 450)
    return;
  }
  $('#butt').fadeOut(200)
  $('#texty').fadeOut(200)
  $('#demo').fadeOut(200)


  var countDownDate = new Date(Date.now() + milliseconds).getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000) + 2;
      
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";
      $('#demo').fadeIn(200)
      
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "Done!";
          new Audio('./sound.wav').play()
      }
  }, 1000);
  }
  
const input = () => {
  if(document.getElementById('texty').value.length === 0)
    $('#butt').fadeOut(200)

  else
    // document.getElementById('butt').fadeIn(1000)
    $('#butt').fadeIn(200)

}

