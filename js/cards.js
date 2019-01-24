const cards = [
  {
    "img": "speedwell",
    "title": "Speedwell Coffee",
    "dates": ["September 2017", "August 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "gracenote",
    "title": "Gracenote Coffee",
    "dates": ["October 2017"],
    "link": "https://www.google.com/"
  },
  {
    "img": "georgehowell",
    "title": "George Howell",
    "dates": ["November 2017"],
    "link": "https://www.google.com/"
  },
  {
    "img": "broadsheet",
    "title": "Broadsheet",
    "dates": ["December 2017"],
    "link": "https://www.google.com/"
  },
  {
    "img": "wolf",
    "title": "Little Wolf",
    "dates": ["January 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "snowowl",
    "title": "Snow Owl",
    "dates": ["February 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "atomic",
    "title": "Atomic",
    "dates": ["March 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "share",
    "title": "Share",
    "dates": ["April 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "barismo",
    "title": "Barismo",
    "dates": ["May 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "barrington",
    "title": "Barrington",
    "dates": ["June 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "esselon",
    "title": "Esselon",
    "dates": ["July 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "tandem",
    "title": "Tandem",
    "dates": ["September 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "flight",
    "title": "Flight",
    "dates": ["October 2018"],
    "link": "https://www.google.com/"
  },
  {
    "img": "bolt",
    "title": "Bolt",
    "dates": ["November 2018"],
    "link": "https://www.google.com/"
  }
]

document.addEventListener("DOMContentLoaded", function() {
  for (let card of cards) {
    let divtest = document.createElement("div");
    let node = document.getElementById("js-past__body");
    node.appendChild(divtest);

    let flex1 = document.createElement("div");
    divtest.appendChild(flex1);

    let a = document.createElement("a");
    a.href = `${card.link}`;
    flex1.appendChild(a);

    let dom_img = document.createElement("img");
    dom_img.src = `media/photos/past_roasters/${card.img}.png`;
    a.appendChild(dom_img);

    let flex2 = document.createElement("div");
    flex2.setAttribute("id", "text-flex")
    divtest.appendChild(flex2);

    let subdiv = document.createElement("div");
    flex2.appendChild(subdiv);

    subdiv.innerHTML = `<b>${card.title}</b>`;

    const dts = card.dates;
    dts.forEach(function(d) {
      subdiv.insertAdjacentHTML('beforeend', `<br>${d}`);
    });
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
