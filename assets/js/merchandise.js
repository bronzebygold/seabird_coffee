window.onload = function(){
    const a = [

        `<div id=\"m1\">
            <div>
                <img src=\"assets/media/photos/m1.png\" alt=\"Seabird Crewneck Sweatshirt\">
            </div>
            <div>Seabird Crewneck Sweatshirt<br>$50</div>
        </div>`,

        `<div id=\"m2\">
            <div>
                <img src=\"assets/media/photos/m2.png\" alt=\"Seabird Hoodie\">
            </div>
            <div>Seabird Hoodie<br>$40</div>
        </div>`,

        `<div id=\"m3\">
            <div>
                <img src=\"assets/media/photos/m3.png\" alt=\"Seabird Adult T-Shirt\">
            </div>
            <div>Seabird Adult T-Shirt<br>$20</div>
        </div>`,

        `<div id=\"m4\">
            <div>
                <img src=\"assets/media/photos/m4.png\" alt=\"Seabird Toddler T-Shirt\">
            </div>
            <div>Seabird Toddler T-Shirt<br>$18</div>
        </div>`,

        `<div id=\"m5\">
            <div>
                <img src=\"assets/media/photos/m5.png\" alt=\"Seabird Youth T-Shirt\">
            </div>
            <div>Seabird Youth T-Shirt<br>$18</div>
        </div>`,

        `<div id=\"m6\">
            <div>
                <img src=\"assets/media/photos/m6.png\" alt=\"Mexican Blanket\">
            </div>
            <div>Mexican Blanket<br>$20</div>
        </div>`,

        `<div id=\"m7\">
            <div>
                <img src=\"assets/media/photos/m7.png\" alt=\"Seabird Gift Card\">
            </div>
            <div>Seabird Gift Card<br>$20</div>
        </div>`

        ];

    // for (var i = 0; i < 10; i++) {
    //     a.push("<div class=\"test-div\"></div>");
    // }
    console.log(a.join(""))
    document.querySelector(".merchandise__content").innerHTML = a.join("");
}