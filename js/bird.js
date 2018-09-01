function Bird() {

    this.y = height/2; //posiciona o pássaro no centro da janela, no eixo Y
    this.x = 64;      //distância do passáro em relação a borda esquerda da janela
    elipse_a = 36;    //
    elipse_b = 36;

    this.gravity = 0.6;//Força da gravidade, que faz com que o pássaro caia
                   // quando você não está controlando
    this.velocity = 0; // velocidade com que a queda aumenta
    this.lift = -15;//força que puxa o pássaro para cima

    this.show = function () {//desenha o pássaro
        fill(255);
        ellipse(this.x, this.y, elipse_a, elipse_b);

    }
    this.up = function () {//faz o pássaro subir
        this.velocity += this.lift;
    }


    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height){ // se o pássaro chega na borda inferior da tela, ele tem que parar de cair
            this.y = height;
            this.velocity = 0;//velocidade de queda vai a 0
        }
        if (this.y < 0){ // não permitir que o pássaro passe da borda superior da tela
            this.y = 0;
            this.velocity = 0; //velocidade de subida 0
        }
    }
}