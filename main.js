const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const imageURL = [
    "images/00sobadown0.png",
    "images/01sobadown1.png",
    "images/02sobaleft0.png",
    "images/03sobaleft1.png",
    "images/04sobaright0.png",
    "images/05sobaright1.png",
    "images/06sobaup0.png",
    "images/07sobaup1.png",
    "images/08wagyu.png",
    "images/09pond.png",
    "images/10ball.png",
    "images/11grassA.png",
    "images/12grassB.png",
    "images/13bush.png",
    "images/14satietyword0.png",
    "images/15satietyword1.png",
    "images/16hydrationword0.png",
    "images/17hydrationword1.png",
    "images/18happinessword0.png",
    "images/19happinessword1.png",
    "images/20.png",
    "images/21.png",
    "images/22.png",
    "images/23.png",
    "images/24.png",
    "images/25.png",
    "images/26.png",
    "images/27.png",
    "images/28.png",
    "images/29.png",
    "images/30satietymeter00.png",
    "images/31satietymeter01.png",
    "images/32satietymeter02.png",
    "images/33satietymeter03.png",
    "images/34satietymeter04.png",
    "images/35satietymeter05.png",
    "images/36satietymeter06.png",
    "images/37satietymeter07.png",
    "images/38satietymeter08.png",
    "images/39satietymeter09.png",
    "images/40satietymeter10.png",
    "images/41.png",
    "images/42.png",
    "images/43.png",
    "images/44.png",
    "images/45.png",
    "images/46.png",
    "images/47.png",
    "images/48.png",
    "images/49.png",
    "images/50hydrationmeter00.png",
    "images/51hydrationmeter01.png",
    "images/52hydrationmeter02.png",
    "images/53hydrationmeter03.png",
    "images/54hydrationmeter04.png",
    "images/55hydrationmeter05.png",
    "images/56shydrationmeter06.png",
    "images/57hydrationmeter07.png",
    "images/58hydrationmeter08.png",
    "images/59hydrationmeter09.png",
    "images/60hydrationmeter10.png",
    "images/61.png",
    "images/62.png",
    "images/63.png",
    "images/64.png",
    "images/65.png",
    "images/66.png",
    "images/67.png",
    "images/68.png",
    "images/69.png",
    "images/70happinessmeter00.png",
    "images/71happinessmeter01.png",
    "images/72happinessmeter02.png",
    "images/73happinessmeter03.png",
    "images/74happinessmeter04.png",
    "images/75happinessmeter05.png",
    "images/76happinessmeter06.png",
    "images/77happinessmeter07.png",
    "images/78happinessmeter08.png",
    "images/79happinessmeter09.png",
    "images/80happinessmeter10.png",
    "images/81startscreen600.png",
    "images/82rulesscreen600.png",
    "images/83endscreen600.png",
    "images/84pressspacetocontinue600.png",
    "images/85gameboard600.png",
    "images/86startscreensimple.png",
    "images/87rulesscreensimple.png",
    "images/88endscreensimple.png"
];
const images = []; /// array to hold images.
var imageCount = 0; // number of loaded images;

// load images
imageURL.forEach(src => {
    const image = new Image();
    image.src = src;
    image.onload = ()=>{ 
        imageCount += 1;
        if(imageCount === imageURL.length){
            allLoaded();
        }
    }
    images.push(image); 
});

// code to run once all images are loaded
function allLoaded(){
    let mode = 0;
    let interval;
    let satiety = 0;
    let hydration = 0;
    let happiness = 0;
    let board = [
        [images[14],images[15],images[30 + satiety],images[16],images[17],images[50 + hydration],images[18],images[19],images[70 + happiness],images[12]],
        [images[12],images[10],images[12],images[12],images[12],images[12],images[12],images[12],images[10],images[12]],
        [images[12],images[12],images[12],images[12],images[12],images[12],images[8],images[12],images[12],images[9]],
        [images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12]],
        [images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12]],
        [images[12],images[8],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12]],
        [images[9],images[12],images[12],images[12],images[12],images[12],images[10],images[12],images[12],images[12]],
        [images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[8],images[12]],
        [images[9],images[10],images[12],images[12],images[12],images[8],images[12],images[9],images[12],images[12]],
        [images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12],images[12]]
    ];
    let xPosition = 4;
    let yPosition = 4;


    document.addEventListener("keypress", keyPressHandler, false);

    board[yPosition][xPosition] = images[0];

    interval = setInterval(()=>{
        context.drawImage(images[86], 0, 0);
    }, 500);
    function drawBoard(){
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                    context.drawImage(board[i][j], j * 60, i * 60);
            }
        }
    }

    function keyPressHandler(event){
        if(event.key === "Enter" && mode === 0){
            clearInterval(interval);
            mode = 1;
            interval = setInterval(() => {
                context.drawImage(images[87], 0, 0);
            }, 500);
        
        }else if(event.key === "Enter" && mode === 1){
            clearInterval(interval);
            mode = 2;
            drawBoard();
        }else if(event.key === "Enter" && mode === 3){
            clearInterval(interval);
            mode = 0;
            interval = setInterval(() => {
                context.drawImage(images[86], 0, 0);
            }, 500)
        }else if(mode === 2 && event.key === "w" && yPosition > 1){
            board[yPosition][xPosition] = images[12];
            yPosition--;
            consume();
            board[yPosition][xPosition] = images[6];
            drawBoard();
            checkWin();
        }else if(mode === 2 && event.key === "a" && xPosition > 0){
            board[yPosition][xPosition] = images[12];
            xPosition--;
            consume();
            board[yPosition][xPosition] = images[2];
            drawBoard();
            checkWin();
        }else if(mode === 2 && event.key === "d" && xPosition < 9){
            board[yPosition][xPosition] = images[12];
            xPosition++;
            consume();
            board[yPosition][xPosition] = images[4];
            drawBoard();
            checkWin();
        }else if(mode === 2 && event.key === "s" && yPosition < 9){
            board[yPosition][xPosition] = images[12];
            yPosition++;
            consume();
            board[yPosition][xPosition] = images[0];
            drawBoard();
            checkWin();
        }
    }
    function consume(){
        if(board[yPosition][xPosition] == images[8]){
            satiety = satiety + 3;
            if(satiety >= 10){
                board[0][2] = images[40];
            }else{
                board[0][2] = images[30 + satiety];
            }
        }else if(board[yPosition][xPosition] == images[9]){
            hydration = hydration + 3;
            if(hydration >= 10){
                board[0][5] = images[60];
            }else{
                board[0][5] = images[50 + hydration];
            }
        }else if(board[yPosition][xPosition] == images[10]){
            happiness = happiness + 3;
            if(happiness >= 10){
                board[0][8] = images[80];
            }else{
                board[0][8] = images[70 + happiness];
            }
        }
    }

    function checkWin(){
        if(satiety >= 10 && hydration >= 10 && happiness >= 10 ){
            mode = 3;
            satiety = 0;
            hydration = 0;
            happiness = 0;
            board[xPosition][yPosition] = images[12];
            xPosition = 4;
            yPosition = 4;
            board[xPosition][yPosition] = images[0];
            board[0][2] = images[30];
            board[0][5] = images[50];
            board[0][8] = images[70];
            board[2][6] = images[8]; board[5][1] = images[8]; board[7][8] = images[8]; board[8][5] = images[8];
            board[2][9] = images[9]; board[6][0] = images[9]; board[8][0] = images[9]; board[8][7] = images[9];
            board[1][1] = images[10]; board[1][8] = images[10]; board[8][1] = images[10]; board[6][7] = images[10];
            interval = setInterval(() => {
                context.drawImage(images[88], 0, 0);
            }, 500);
        }
    }
}

