let calls = 0;
let ids = [];

function chose(id) {
   if(calls < 5) {
      const card = document.getElementById(id);
      card.style.display = 'none';
      let element = [];
      element.push(id[0]);
      element.push(id[1]);
      element.push(id[2]);
      ids.push(element);
      const clone = card.cloneNode(true);
      clone.style.display = 'inline';
      calls++;
      const mySet = document.getElementById('_set');
      mySet.append(clone);
   }
   if(calls === 5) {
      check();
   }
}

function reset() {
   window.location.reload();
}

function check() {

   let [firstCard, secondCard, thirdCard, fourthCard, fifthCard] = ids;
   let symbolsArray = [
      firstCard[2],
      secondCard[2],
      thirdCard[2],
      fourthCard[2],
      fifthCard[2],
   ];

   if(firstCard[0] === secondCard[0] && secondCard[0] === thirdCard[0] &&
      thirdCard[0] === fourthCard[0] && fourthCard[0] === fifthCard[0]) {
      if(symbolsArray.includes('0') && symbolsArray.includes('J') && // is Royal Flush
         symbolsArray.includes('Q') && symbolsArray.includes('K') &&
         symbolsArray.includes('A')) {

         document.getElementById('mB').innerText = 'Royal Flush';

      } else {
         document.getElementById('mB').innerText = 'Flush';
      }
      if(symbolsArray.includes('2') && symbolsArray.includes('3') && //is Straight flush
         symbolsArray.includes('4') && symbolsArray.includes('5') &&
         symbolsArray.includes('6') ||
         symbolsArray.includes('3') && symbolsArray.includes('4') &&
         symbolsArray.includes('5') && symbolsArray.includes('6') &&
         symbolsArray.includes('7') ||
         symbolsArray.includes('4') && symbolsArray.includes('5') &&
         symbolsArray.includes('6') && symbolsArray.includes('7') &&
         symbolsArray.includes('8') ||
         symbolsArray.includes('5') && symbolsArray.includes('6') &&
         symbolsArray.includes('7') && symbolsArray.includes('8') &&
         symbolsArray.includes('9') ||
         symbolsArray.includes('6') && symbolsArray.includes('7') &&
         symbolsArray.includes('8') && symbolsArray.includes('9') &&
         symbolsArray.includes('0') ||
         symbolsArray.includes('7') && symbolsArray.includes('8') &&
         symbolsArray.includes('9') && symbolsArray.includes('0') &&
         symbolsArray.includes('J') ||
         symbolsArray.includes('8') && symbolsArray.includes('9') &&
         symbolsArray.includes('0') && symbolsArray.includes('J') &&
         symbolsArray.includes('Q') ||
         symbolsArray.includes('9') && symbolsArray.includes('0') &&
         symbolsArray.includes('J') &&
         symbolsArray.includes('Q') && symbolsArray.includes('K')) {

         document.getElementById('mB').innerText = 'Straight Flush';
      }
   } else if(symbolsArray[0] === symbolsArray[1] && symbolsArray[1] ===
             symbolsArray[2] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[1] && symbolsArray[1] ===
             symbolsArray[2] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[1] && symbolsArray[1] ===
             symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[2] ===
             symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[1] === symbolsArray[2] && symbolsArray[2] ===
             symbolsArray[3] && symbolsArray[3] === symbolsArray[4]) {      //kareta

      document.getElementById('mB').innerText = 'Four of a kind';

   } else if(symbolsArray[0] === symbolsArray[1] && symbolsArray[2] ===
             symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[1] ===
             symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[3] && symbolsArray[1] ===
             symbolsArray[2] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[4] && symbolsArray[1] ===
             symbolsArray[2] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[1] === symbolsArray[2] && symbolsArray[0] ===
             symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[1] === symbolsArray[3] && symbolsArray[0] ===
             symbolsArray[2] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[1] === symbolsArray[4] && symbolsArray[0] ===
             symbolsArray[2] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[2] === symbolsArray[3] && symbolsArray[0] ===
             symbolsArray[1] && symbolsArray[1] === symbolsArray[4] ||
             symbolsArray[2] === symbolsArray[4] && symbolsArray[0] ===
             symbolsArray[1] && symbolsArray[1] === symbolsArray[3] ||
             symbolsArray[3] === symbolsArray[4] && symbolsArray[0] ===
             symbolsArray[1] && symbolsArray[1] === symbolsArray[2]) {//full

      document.getElementById('mB').innerText = 'Full';

   } else if(symbolsArray.includes('2') && symbolsArray.includes('3') && // Straight
             symbolsArray.includes('4') && symbolsArray.includes('5') &&
             symbolsArray.includes('6') ||
             symbolsArray.includes('3') && symbolsArray.includes('4') &&
             symbolsArray.includes('5') && symbolsArray.includes('6') &&
             symbolsArray.includes('7') ||
             symbolsArray.includes('4') && symbolsArray.includes('5') &&
             symbolsArray.includes('6') && symbolsArray.includes('7') &&
             symbolsArray.includes('8') ||
             symbolsArray.includes('5') && symbolsArray.includes('6') &&
             symbolsArray.includes('7') && symbolsArray.includes('8') &&
             symbolsArray.includes('9') ||
             symbolsArray.includes('6') && symbolsArray.includes('7') &&
             symbolsArray.includes('8') && symbolsArray.includes('9') &&
             symbolsArray.includes('0') ||
             symbolsArray.includes('7') && symbolsArray.includes('8') &&
             symbolsArray.includes('9') && symbolsArray.includes('0') &&
             symbolsArray.includes('J') ||
             symbolsArray.includes('8') && symbolsArray.includes('9') &&
             symbolsArray.includes('0') && symbolsArray.includes('J') &&
             symbolsArray.includes('Q') ||
             symbolsArray.includes('9') && symbolsArray.includes('0') &&
             symbolsArray.includes('J') &&
             symbolsArray.includes('Q') && symbolsArray.includes('K')) {

      document.getElementById('mB').innerText = 'Straight';

   } else if(symbolsArray[0] === symbolsArray[1] && symbolsArray[1] === symbolsArray[2] ||
             symbolsArray[0] === symbolsArray[1] && symbolsArray[1] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[1] && symbolsArray[1] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[1] === symbolsArray[2] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[1] === symbolsArray[2] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[1] === symbolsArray[3] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[2] === symbolsArray[3] && symbolsArray[3] === symbolsArray[4]) {

      document.getElementById('mB').innerText = 'Three of a kind';

   } else if(symbolsArray[0] === symbolsArray[1] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[1] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[1] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[1] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[1] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[2] && symbolsArray[3] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[3] && symbolsArray[1] === symbolsArray[2] ||
             symbolsArray[0] === symbolsArray[3] && symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[3] && symbolsArray[1] === symbolsArray[4] ||
             symbolsArray[0] === symbolsArray[4] && symbolsArray[1] === symbolsArray[2] ||
             symbolsArray[0] === symbolsArray[4] && symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[4] && symbolsArray[1] === symbolsArray[3] ||
             symbolsArray[1] === symbolsArray[4] && symbolsArray[2] === symbolsArray[3]) {

      document.getElementById('mB').innerText = 'Two pair';

   } else if(symbolsArray[0] === symbolsArray[1] ||
             symbolsArray[0] === symbolsArray[2] ||
             symbolsArray[0] === symbolsArray[3] ||
             symbolsArray[0] === symbolsArray[4] ||
             symbolsArray[1] === symbolsArray[2] ||
             symbolsArray[1] === symbolsArray[3] ||
             symbolsArray[1] === symbolsArray[4] ||
             symbolsArray[2] === symbolsArray[3] ||
             symbolsArray[2] === symbolsArray[4] ||
             symbolsArray[3] === symbolsArray[4]) {

      document.getElementById('mB').innerText = 'One pair';

   } else {
      let symbol;
      if(symbolsArray.includes('A')) {
         symbol = 'Ace';
      } else if(symbolsArray.includes('K')) {
         symbol = 'King';
      } else if(symbolsArray.includes('Q')) {
         symbol = 'Queen';
      } else if(symbolsArray.includes('J')) {
         symbol = 'Jack';
      } else if(symbolsArray.includes('0')) {
         symbol = '10';
      } else if(symbolsArray.includes('9')) {
         symbol = '9';
      } else if(symbolsArray.includes('8')) {
         symbol = '8';
      } else if(symbolsArray.includes('7')) {
         symbol = '7';
      }

      document.getElementById('mB').innerText = `High card: ${symbol}`;
   }

}
