let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let game = document.querySelectorAll(".game");
let won = document.querySelector("#won");
let nwbtn= document.querySelector("#nwbtn");
let awon= document.querySelector(".afterwon");
let draw= document.querySelector("#draw")
let hovr=(bo)=>{
    bo.target.style.border="3px solid green";
}
let hovr_back=(bo)=>{
    bo.target.style.border="2px solid black";
}
box.forEach(b => {
    b.addEventListener("mouseover", hovr);
    b.addEventListener("mouseout", hovr_back);
});
let turn="o";
box.forEach(b=>{
    b.addEventListener("click",()=>{
        console.log("cliked");
        if (turn==="o"){
            turn="x";
            b.innerText="o";

        }else{
            turn="o";
            b.innerText="x";
        }
        b.disabled= true;
        winner();
    });
});


let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const dr=()=>{ //draw is not working
    let checdraw = true; 
    //for(let w1 of win){
    for(let w1=0; w1<=win.length-1; w1++){
        console.log(w1);

        if (box[w1].innerText===""){
            checdraw=false;
            break;

        }
    if(checdraw && !winner){
        draw.innerText="draw match!";
    }

/*
        let pos1=box[w1].innerText;
        let pos2=box[w1].innerText;
        let pos3=box[w1].innerText;
        let pos4=box[w1].innerText;
        let pos5=box[w1].innerText;
        let pos6=box[w1].innerText;
        let pos7=box[w1].innerText;
        let pos8=box[w1].innerText;
        let pos9=box[w1].innerText;
        if(pos1!= "" && pos2!="" && pos3!="" && pos3!= "" && pos4!="" && pos5!="" && pos6!= "" && pos7!="" && pos8!=""){
            draw.innerText="draww match!"; 
        }    */   
    }
}


const winner=()=>{
    for(let w1 of win){

        let pos1=box[w1[0]].innerText;
        let pos2=box[w1[1]].innerText;
        let pos3=box[w1[2]].innerText;
        if(pos1!= "" && pos2!="" && pos3!=""){
            console.log("clicked.");
            if(pos1===pos2 && pos2===pos3){
                console.log("winner ", pos1);
                showwin(pos1); 
                return true;


            }else{
                dr();
            }
        }

    }
};
const showwin=(winn)=>{
    won.innerText=`winner is ${winn}`;
    awon.classList.remove("afterwon");
    reset.classList.add("afterwon");
    disa();
};
const disa=()=>{
    for (let b of box){
        b.disabled= true;
    }
}
const enab=()=>{
    for (let b of box){
        b.disabled= false;
        b.innerText=" ";
    }
}
const resetgame=()=>{
    turn="o";
    enab();
    
    awon.classList.add("afterwon");
    reset.classList.remove("afterwon");
}
nwbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
