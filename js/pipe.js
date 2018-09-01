function Pipe() {
    this.top = random(height/2); // o pipe de cima fica com um valor para a parte de baixo entre altura o topo
    this.bottom = random(height/2); // a parte de baixo do pipe fica com um valor entre a altura e o meio da tela

    this.x = width;
    this.pipe_widht = 20;
    this.speed = 3; //velocidade com que a tela vai para esquerda

    this.highlight = false;

    this.show = function () { //mostra o pipe
        fill(255); //cor branca
        if (this.highlight)
            fill(255, 0, 0);
        rect(this.x, 0, this.pipe_widht, this.top); //retangulo  que representa o pipe superior
        rect(this.x, height-this.bottom, this.pipe_widht, this.bottom); // retangulo que representa o pipe de baixo
    }
    this.update = function () {
        this.x -= this.speed;
    }
    this.offscreen = function(){
        if (this.x < -this.pipe_widht)
            return true;
        return false;
    }
    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom)
            if (bird.x > this.x && bird.x < this.x + this.pipe_widht){
                this.highlight = true;
                return true;
            }
        this.highlight = false;
        return false;
    }
}