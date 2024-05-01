const det = {
    name:"My Buddies",
    brand: "brand/brand.png"
}
const d=document;

d.querySelector("title").innerHTML=det.name;

d.querySelector('[content-from-whom="true content deleted"]').addEventListener("click", () => {
    open("./friends.html")
});

function createFunction(functionOne, functionTwo) {
    functionOne({
        name: {
            nameOne: "Abdulla Rabee",
            nameTwo: "Ameen VP",
            nameThree: "BASIM ASLAM",
            nameFour: "FAHAD CP"
        },
        playingOn: {
            nameOne: "Home",
            nameTwo: "Free Fire",
            nameThree: "Home or doing the organization activities",
            nameFour: "CSL(Chathalloor Premiere League)"
        },
        make: (hero) => {
            if (hero) {
                open("https://"+hero+".com", "_blank")
            }else if(!(hero)){
               let howToFace= open("https://howtoface.com/car/", "_blank");
               howToFace.document.write("<h1>Hello</h1>")
            }
        }
    })
}
createFunction((unio) => {
    const helloOpeningBtn = document.querySelector("superBtn[makeSomeFunByNewFile]");
    helloOpeningBtn.addEventListener("click", () => {
        unio.make();
    });
})
document.querySelector("body").setAttribute("style", "display:none;")