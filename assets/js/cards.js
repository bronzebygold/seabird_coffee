const cards = [
  {
    "img": "speedwell",
    "title": "Speedwell Coffee",
    "dates": ["September 2017", "August 2018"],
    "link": "https://speedwellcoffee.com/"
  },
  {
    "img": "gracenote",
    "title": "Gracenote Coffee",
    "dates": ["October 2017"],
    "link": "https://www.gracenotecoffee.com/"
  },
  {
    "img": "georgehowell",
    "title": "George Howell",
    "dates": ["November 2017"],
    "link": "http://www.georgehowellcoffee.com/"
  },
  {
    "img": "broadsheet",
    "title": "Broadsheet",
    "dates": ["December 2017"],
    "link": "https://www.broadsheetcoffee.com/"
  },
  {
    "img": "wolf",
    "title": "Little Wolf",
    "dates": ["January 2018"],
    "link": "https://littlewolf.coffee/"
  },
  {
    "img": "snowowl",
    "title": "Snow Owl",
    "dates": ["February 2018"],
    "link": "https://www.socoffee.co/"
  },
  {
    "img": "atomic",
    "title": "Atomic",
    "dates": ["March 2018"],
    "link": "http://www.atomicafe.com/"
  },
  {
    "img": "share",
    "title": "Share",
    "dates": ["April 2018"],
    "link": "https://www.sharecoffeeroasters.com/"
  },
  {
    "img": "barismo",
    "title": "Barismo",
    "dates": ["May 2018"],
    "link": "http://www.barismo.com/"
  },
  {
    "img": "barrington",
    "title": "Barrington",
    "dates": ["June 2018"],
    "link": "https://barringtoncoffee.com/"
  },
  {
    "img": "esselon",
    "title": "Esselon",
    "dates": ["July 2018"],
    "link": "https://www.esselon.com/"
  },
  {
    "img": "tandem",
    "title": "Tandem",
    "dates": ["September 2018"],
    "link": "https://www.tandemcoffee.com/"
  },
  {
    "img": "flight",
    "title": "Flight",
    "dates": ["October 2018"],
    "link": "https://flightcoffeeco.com/"
  },
  {
    "img": "bolt",
    "title": "Bolt",
    "dates": ["November 2018"],
    "link": "http://www.boltcoffeecompany.com/#home"
  }
]

$(document).ready(function() {

  $('.past__body').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })
.on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});

window.onload = function(){

  for (let i = 0; i < Object.keys(cards).length; ++i) {

    let divOuter = document.createElement("div");

    let nodeId = `${i}`.padStart((i<10) ? 2 : 3, '0');

    let childNode =  document.getElementById(`slick-slide${nodeId}`);
    childNode.appendChild(divOuter);

    let flex1 = document.createElement("div");
    flex1.setAttribute("id", "img-flex");
    divOuter.appendChild(flex1);

    let a = document.createElement("a");
    a.href = `${cards[i].link}`;
    flex1.appendChild(a);

    let dom_img = document.createElement("img");
    dom_img.src = `assets/media/photos/past_roasters/${cards[i].img}.png`;
    a.appendChild(dom_img);

    let flex2 = document.createElement("div");
    flex2.setAttribute("id", "text-flex");
    divOuter.appendChild(flex2);

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
