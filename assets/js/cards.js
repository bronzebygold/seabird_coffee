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

$(document).ready(function() {
  $('.past__body').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

window.onload = function(){
  // for (let card of cards) {
  //   let divtest = document.createElement("div");
  //   let node = document.getElementById("js-past__body");
  //   node.appendChild(divtest);
  //
  //   let flex1 = document.createElement("div");
  //   divtest.appendChild(flex1);
  //
  //   let a = document.createElement("a");
  //   a.href = `${card.link}`;
  //   flex1.appendChild(a);
  //
  //   let dom_img = document.createElement("img");
  //   dom_img.src = `assets/media/photos/past_roasters/${card.img}.png`;
  //   a.appendChild(dom_img);
  //
  //   let flex2 = document.createElement("div");
  //   flex2.setAttribute("id", "text-flex")
  //   divtest.appendChild(flex2);
  //
  //   let subdiv = document.createElement("div");
  //   flex2.appendChild(subdiv);
  //
  //   subdiv.innerHTML = `<b>${card.title}</b>`;
  //
  //   const dts = card.dates;
  //   dts.forEach(function(d) {
  //     subdiv.insertAdjacentHTML('beforeend', `<br>${d}`);
  //   });
  // }

  for (let i = 0; i < Object.keys(cards).length; ++i) {

    let nodeId = `${i}`.padStart((i<10) ? 2 : 3, '0');

    console.log(nodeId);

    let childNode =  document.getElementById(`slick-slide${nodeId}`);
    console.log(childNode);

    let flex1 = document.createElement("div");
    childNode.appendChild(flex1);

    let a = document.createElement("a");
    a.href = `${cards[i].link}`;
    flex1.appendChild(a);

    let dom_img = document.createElement("img");
    dom_img.src = `assets/media/photos/past_roasters/${cards[i].img}.png`;
    a.appendChild(dom_img);

    let flex2 = document.createElement("div");
    flex2.setAttribute("id", "text-flex")
    childNode.appendChild(flex2);

    let subdiv = document.createElement("div");
    flex2.appendChild(subdiv);

    subdiv.innerHTML = `<b>${cards[i].title}</b>`;

    const dts = cards[i].dates;
    dts.forEach(function(d) {
      subdiv.insertAdjacentHTML('beforeend', `<br>${d}`);
    });

  }

};
























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
