function scuberGreetingForFeet(rideDistance){
  let result;
  if (rideDistance <= 400) {
    result = 'This one is on me!';
  } else if (rideDistance > 400) {
      if (rideDistance < 2000) {
        result = 'That will be twenty bucks.';
      } else if (rideDistance > 2000) {
        if (rideDistance > 2500) {
          result = 'No can do.';
        } else {
          result = 'I will gladly take your thirty bucks.';
        }
      }
  }
  return result;
}

function ternaryCheckCity(city){
  let result;
  result = (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
  return result;
}

function switchOnCharmFromTip(tip){
  let result;
  switch (tip) {
    case tip = 'generous':
      result = 'Thank you so much.'
      break;
    case tip ='not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
  }
  return result;
}