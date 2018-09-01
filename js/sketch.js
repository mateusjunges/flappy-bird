var bird; //var para receber o pássaro
var pipes = []; //array para armazenar os pipes
function setup() {
    let canvasWidth = 400;
    let canvasHeight = 600;
    createCanvas(canvasWidth, canvasHeight);
    bird = new Bird(); // cria um novo pássaro
}
function draw() {
    background(0);

    for (var i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].hits(bird))
            console.log("Você perdeu!");
        if (pipes[i].offscreen())
            pipes.splice(i, 1);
    }

    bird.update(); //reposiciona o pássaro
    bird.show(); //desenha o pássaro
    let frames_distance = 100;
    if (frameCount % frames_distance == 0){
        /*
        * Toda vez que o frame que entrou na tela for
        * divisivel por *frames_distance* eu adiciono um novo pipe
        * */
        pipes.push(new Pipe()); //coloca um novo pipe no vetor de pipes
    }


}
function keyPressed() {
    if (key == ' ');
        bird.up();
}