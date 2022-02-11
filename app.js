
let friends = ['Cat', 'James', 'Tommy', 'Rachel', 'Sonya'];
let btn = document.querySelector("#btn");
btn.addEventListener("click", sing);
let count = 0;


function sing() {
    for (let i = 0; i < friends.length; i++) {
        let div = document.createElement("div");
        div.className = "friend";
        document.body.appendChild(div);
        let h3 = document.createElement("h3");
        let h3Friend = document.createTextNode(friends[i]);
        h3.appendChild(h3Friend);
        div.appendChild(h3);


        for (let t = 99; t > 0; t--) {
            let p = document.createElement("p");

            if (t > 2) {
                let pSing = document.createTextNode([t] + " lines of code in the file,", +[t] + " lines of code;", +
                    h3Friend + " strikes one out, cleares it all out,", +[t - 1] + "lines of code in the file.");

                p.appendChild(pSing);
                div.appendChild(p);
            }

            if (t == 2) {
                let pSing = document.createTextNode(t + ' lines of code in the file,', t + ' lines of code;',
                    h3Friend, 'strikes one out, cleares it all out,', t - 1, 'line of code in the file.');

                p.appendChild(pSing);
                div.appendChild(p);
            };

            if (t == 1) {
                let pSing = document.createTextNode(t + ' line of code in the file,', t + ' line of code;',
                    h3Friend, 'strikes one out, cleares it all out, no more lines of code in the file.');

                p.appendChild(pSing);
                div.appendChild(p);
            }
        }
        count++;
    }
}




















































