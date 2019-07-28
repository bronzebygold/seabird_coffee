const a = [

    `<div id=\"m1\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m1.png\" alt=\"Seabird Crewneck Sweatshirt\">
                </div>
                <div class=\"productTitle\">Seabird Crewneck Sweatshirt<br>$50</div>
            </div>
        </div>`,

    `<div id=\"m2\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m2.png\" alt=\"Seabird Hoodie\">
                </div>
                <div class=\"productTitle\">Seabird Hoodie<br>$40</div>
            </div>
        </div>`,

    `<div id=\"m3\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m3.png\" alt=\"Seabird Adult T-Shirt\">
                </div>
                <div class=\"productTitle\">Seabird Adult T-Shirt<br>$20</div>
            </div>
        </div>`,

    `<div id=\"m4\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m4.png\" alt=\"Seabird Toddler T-Shirt\">
                </div>
                <div class=\"productTitle\">Seabird Toddler T-Shirt<br>$18</div>
            </div>
        </div>`,

    `<div id=\"m5\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m5.png\" alt=\"Seabird Youth T-Shirt\">
                </div>
                <div class=\"productTitle\">Seabird Youth T-Shirt<br>$18</div>
            </div>
        </div>`,

    `<div id=\"m6\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m6.png\" alt=\"Mexican Blanket\">
                </div>
                <div class=\"productTitle\">Mexican Blanket<br>$20</div>
            </div>
        </div>`,

    `<div id=\"m7\" onclick=\"deleteNode(this)\">
            <div>
                <div>
                    <img src=\"assets/media/photos/m7.png\" alt=\"Seabird Gift Card\">
                </div>
                <div class=\"productTitle\">Seabird Gift Card<br>$20</div>
            </div>
        </div>`

];

let grid = '';

window.onload = function() {
    document.querySelector(".mcontent").innerHTML = a.join("");
    grid = document.querySelector('.mcontent');
    animateCSSGrid.wrapGrid(grid, {duration: 600, easing: 'easeInOut'});
};

function deleteNode(node) {
    $("div.productTitle").html("");
    const childNodeIDs = Array.from(grid.children, node => node.id);
    const thisNodeID = node.id;
    for (n of childNodeIDs) {
        if (n !== thisNodeID) {
            document.getElementById(n).classList.add("animated", "fadeOut");
        }
    }
    setTimeout(function () {
        for (n of childNodeIDs) {
            if (new RegExp('/' + n + '$/') < new RegExp('/' + thisNodeID + '$/')) {
                console.log("before: " + n);
                document.getElementById(n).remove();
            }
        }
        grid.classList.add("morph" + thisNodeID.slice(-1));
    }, 600);
    setTimeout(function () {
        for (n of childNodeIDs) {
            if (new RegExp('/' + n + '$/') > new RegExp('/' + thisNodeID + '$/')) {
                console.log("after: " + n);
                document.getElementById(n).remove();
            }
        }
    }, 1300);

    const product_description_html =
        `<div class="animated fadeIn slow">

                <a id=\"close\" title="Back" href="#" onclick="goBack();">&#10005</a>

                <div style="display: flex; flex-direction: column; justify-content: flex-start">

                    <h3 style="display: block; text-align-last: left; float: left;" id=\"product__description__header_h3\">Seabird Crewneck Sweatshirt</h3><br>

                    <div style="text-indent: 0; display: block; color: #D8D8D8; box-shadow: none; height: auto; width: auto; font-family: 'Source Sans Pro', sans-serif;">$50</div><br>
                    <div style="text-indent: 0; display: block; color: #D8D8D8; box-shadow: none; height: auto; width: auto; font-family: 'Source Sans Pro', sans-serif;">You WILL live in this. It's ok. No one will judge you.</div><br>
                    <br><br>
                    <ul style=\"list-style-type: disc; list-style-position: inside; text-indent: 0px;\">
                        <li>Grey Acid fleece is 6.5 oz., 52/48 combed and ringspun cotton/poly</li>
                        <li>Pre-laundered sponge fleece</li>
                    </ul>

                    <div class=\"product__description__form \">
                        <form action=\"/action_page.php\">
                            <select class="select-style">
                              <option value="xs">Size XS</option>
                              <option value="s">Size S</option>
                              <option value="m">Size M</option>
                              <option value="l">Size L</option>
                              <option value="xl">Size XL</option>
                            </select>

                            <select class="select-style">
                              <option value=\"Qty 1\">1</option>
                              <option value=\"Qty 2\">2</option>
                              <option value=\"Qty 3\">3</option>
                              <option value=\"Qty 4\">4</option>
                              <option value=\"Qty 5\">5</option>
                              <option value=\"Qty 6\">6</option>
                              <option value=\"Qty 7\">7</option>
                              <option value=\"Qty 8\">8</option>
                              <option value=\"Qty 9\">9</option>
                              <option value=\"Qty 10\">10</option>
                              <option value=\"Qty 11\">11</option>
                              <option value=\"Qty 12\">12</option>
                              <option value=\"Qty 13\">13</option>
                              <option value=\"Qty 14\">14</option>
                              <option value=\"Qty 15\">15</option>
                              <option value=\"Qty 16\">16</option>
                              <option value=\"Qty 17\">17</option>
                              <option value=\"Qty 18\">18</option>
                              <option value=\"Qty 19\">19</option>
                              <option value=\"Qty 20\">20</option>
                            </select>
                            <input style="width: 100px; height: 30px; padding: 0; color: white; background-color: #092844; border: none; border-radius: 100px" type=\"submit\">
                        </form>

                    </div>

                </div>

            </div>`;

    setTimeout(function () {
        grid.insertAdjacentHTML('beforeend', product_description_html);
    }, 1500);

}

function goBack() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = a.join("");
    grid.classList.remove("morph1", "morph2", "morph3", "morph4", "morph5", "morph6", "morph7");
}