const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople=Number(numberOfPeopleDiv.innerText);
const calculateBill = () => {
  let bill = Number(billInput.value);
  let tipPercentage = Number(tipInput.value) / 100;

  let tipAmount = bill * tipPercentage;
  let total = tipAmount + bill;
  let totalPerPerson = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${totalPerPerson.toFixed(1)}`;

  console.log(totalPerPerson)
}
const increasePeople = () => {
   numberOfPeople++;
  numberOfPeopleDiv.innerText=`${numberOfPeople}`;
  calculateBill();
}
const decreasePeople = () => {
  if(numberOfPeople<=1){
    alert("Hey! You cannot have less than 1 person!");
    return;
  }
  numberOfPeople-=1;
  numberOfPeopleDiv.innerText=`${numberOfPeople}`
  calculateBill();
}
