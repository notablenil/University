let shark = false;
const output = document.getElementById('Output');
const body = document.getElementById('theBody');
const id = document.getElementById('IdInput');
const sharkButton = document.getElementById('Shark');
const Button = document.getElementById('Button');
const buttonText = document.getElementById('buttonText');
const page = document.getElementById('Page');
id.value="5wzk7h";
let url = 'https://proxy.corsfix.com/https://www.southampton.ac.uk/people/';
const testurl = 'https://proxy.corsfix.com/https://www.southampton.ac.uk/people/5wk7h';

function grab(){
    try{
        fetch(testurl)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (e) {
        console.error (e)
    }
}

Button.addEventListener('click', (event) => {
    let Page = find(id.value)
    grab();
});

sharkButton.addEventListener('click', (event) => {
    Shark();
});

function display() {

}

function Shark(){
    shark = !shark;
    if (shark){
        body.style.backgroundColor = "#FFFFFF";
        body.style.backgroundImage = "url('spinning-blahaj.gif')";
        body.style.backgroundSize = "10%";
        console.log("shark enabled");
    }
    else{
        body.style.backgroundColor = "#FFFFFF;"
        body.style.backgroundImage = "";
        console.log("shark disabled");
    }
}


display();