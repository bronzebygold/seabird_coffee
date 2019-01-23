const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14];

document.addEventListener("DOMContentLoaded", function() {
  for (let card in cards) {
    let divtest = document.createElement("div");
    let node = document.getElementById("js-past__body");
    node.appendChild(divtest);
  }
});
























// const cardTemplate = (
//   <div>
//
//   </div>
// );

// class Cards extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     <p>Hello, world!</p>;
//   }
// }


// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => <div>{number}</div>);
//   return (
//     <div>{listItems}</div>
//   );
// }
