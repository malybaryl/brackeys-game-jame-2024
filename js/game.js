// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const main_menu_music_source = 'assets/audio/morning-funny-beat-pixabay.mp3';
const cut_scene_music_source = 'assets/audio/a-jazz-piano-pixabay.mp3';
const game_music_source = 'assets/audio/neon-fury-neura-flow-pixabay.mp3';
const scream_source = 'assets/audio/cartoon-scream-1-pixabay.mp3';

canvas.width = 400;
canvas.height = 320;

// functions
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function assetsObjects()
    {
        let assets = []
        // 11 x 18
        if (!assets[0]) {
            assets[0] = [];
        }

        // 16 x 16
        if (!assets[1]) {
            assets[1] = [];
        }

        // 16 x 32
        if (!assets[2]) {
            assets[2] = [];
        }
    
        // 16 x 32
        if (!assets[2]) {
            assets[2] = [];
        }

        // 20 x 32
        if (!assets[3]) {
            assets[3] = [];
        }

        // 32 x 16
        if (!assets[4]) {
            assets[4] = [];
        }

        // 32 x 32
        if (!assets[5]) {
            assets[5] = [];
        }

        // initialization array
        for (let i = 0; i <= 44; i++)
        {
            // 11 x 18
            if (i <= 0)
            {
                assets[0][i] = new Image();
                assets[0][i].src = 'assets/11x18/' + i.toString() +'.png';
            }
            // 16 x 16
            assets[1][i] = new Image();
            assets[1][i].src = 'assets/16x16/' + i.toString() +'.png';
            // 16 x 32
            if (i <= 12)
            {
                assets[2][i] = new Image();
                assets[2][i].src = 'assets/16x32/' + i.toString() +'.png';
            }
            // 20 x 32
            if (i <= 1)
            {
                assets[3][i] = new Image();
                assets[3][i].src = 'assets/20x32/' + i.toString() +'.png';
            }
            // 32 x 16
            if (i <= 2)
            {
                assets[4][i] = new Image();
                assets[4][i].src = 'assets/32x16/' + i.toString() +'.png';
            }
            // 32 x 32
            if (i <= 27)
            {
                assets[5][i] = new Image();
                assets[5][i].src = 'assets/32x32/' + i.toString() +'.png';
            }
        }
        
        return assets;
    }

function assetsWalkable()
{
    {
        let assets = []
        // box
        if (!assets[0]) {
            assets[0] = [];
        }

        // log
        if (!assets[1]) {
            assets[1] = [];
        }

        // path
        if (!assets[2]) {
            assets[2] = [];
        }

        // initialization array
        for (let i = 0; i <= 2; i++)
        {
            
            if (i <= 1)
            {
                assets[0][i] = new Image();
                assets[0][i].src = 'assets/walkable/box/' + i.toString() +'.png';
            }
            
            assets[1][i] = new Image();
            assets[1][i].src = 'assets/walkable/log/' + i.toString() +'.png';
            
            
            assets[2][i] = new Image();
            assets[2][i].src = 'assets/walkable/path/' + i.toString() +'.png';
            
        }
        
        return assets;
    }
}

function assetsBackground()
{
    {
        let assets = []
        // box
        if (!assets[0]) {
            assets[0] = [];
        }

        // log
        if (!assets[1]) {
            assets[1] = [];
        }

        // path
        if (!assets[2]) {
            assets[2] = [];
        }

        // initialization array
        for (let i = 0; i <= 3; i++)
        {
            
            if (i <= 2)
            {
                assets[0][i] = new Image();
                assets[0][i].src = 'assets/background/1.Close/' + i.toString() +'.png';
                assets[1][i] = new Image();
                assets[1][i].src = 'assets/background/2.Far/' + i.toString() +'.png';
            }
            
            assets[2][i] = new Image();
            assets[2][i].src = 'assets/background/3.Tornado/' + i.toString() +'.png';
            
        }
        
        return assets;
    }
}

function assetsCutscene()
{
    {
        let assets = []
        // box
        if (!assets[0]) {
            assets[0] = [];
        }

        // initialization array
        for (let i = 0; i <= 53; i++)
        {
            assets[i] = new Image();
            assets[i].src = 'assets/cutscene/' + i.toString() +'.png';  
        }
        
        return assets;
    }
}
// objects
const main_menu = 
{
    init: function(x = 0, y = 0, width = canvas.width, height = canvas.height) {
        this.assets = [
            [new Image(), new Image(), new Image(), new Image()], // logo
            [new Image(), new Image(), new Image(), new Image()], // UI
            [new Image(), new Image(), new Image(), new Image()], // Player
            [new Image(), new Image(), new Image(), new Image()], // City
            [new Image(), new Image(), new Image(), new Image()], // Path
            
        ];
        this.init_images();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.space_cliked = false
        this.anim_index = 0;
        this.image_to_show_1 = this.assets[0][0];
        this.image_to_show_2 = this.assets[1][0];
        this.image_to_show_3 = this.assets[2][0];
        this.image_to_show_4 = this.assets[3][0];
        this.image_to_show_5 = this.assets[4][0];
    },

    init_images: function() {
        if (this.assets != null) {
            // logo
            this.assets[0][0].src = 'assets/mainMenu/1.Logo/0.png';
            this.assets[0][1].src = 'assets/mainMenu/1.Logo/1.png';
            this.assets[0][2].src = 'assets/mainMenu/1.Logo/2.png';
            this.assets[0][3].src = 'assets/mainMenu/1.Logo/3.png';
            // UI
            this.assets[1][0].src = 'assets/mainMenu/2.UI/0.png';
            this.assets[1][1].src = 'assets/mainMenu/2.UI/1.png';
            this.assets[1][2].src = 'assets/mainMenu/2.UI/2.png';
            this.assets[1][3].src = 'assets/mainMenu/2.UI/3.png';
            // player
            this.assets[2][0].src = 'assets/mainMenu/3.Player/0.png';
            this.assets[2][1].src = 'assets/mainMenu/3.Player/1.png';
            this.assets[2][2].src = 'assets/mainMenu/3.Player/2.png';
            this.assets[2][3].src = 'assets/mainMenu/3.Player/3.png';
            // city
            this.assets[3][0].src = 'assets/mainMenu/4.City/0.png';
            this.assets[3][1].src = 'assets/mainMenu/4.City/1.png';
            this.assets[3][2].src = 'assets/mainMenu/4.City/2.png';
            this.assets[3][3].src = 'assets/mainMenu/4.City/3.png';
            // path
            this.assets[4][0].src = 'assets/mainMenu/5.Path/0.png';
            this.assets[4][1].src = 'assets/mainMenu/5.Path/1.png';
            this.assets[4][2].src = 'assets/mainMenu/5.Path/2.png';
            this.assets[4][3].src = 'assets/mainMenu/5.Path/3.png';
    
            // Ensure images are loaded
            this.assets.flat().forEach(img => {
                img.onload = () => console.log('Image loaded:', img.src);
                img.onerror = () => console.error('Failed to load image:', img.src);
            });
        } else {
            console.log("assets error: this.assets is null");
        }
    },

    update: function() {
        // Animations
        
        this.anim_index += 0.1; // animation speed
        if (Math.floor(this.anim_index) > 3) {
            this.anim_index = 0;
        }
        this.image_to_show_1 = this.assets[0][Math.floor(this.anim_index)];
        this.image_to_show_2 = this.assets[1][Math.floor(this.anim_index)];
        this.image_to_show_3 = this.assets[2][Math.floor(this.anim_index)];
        this.image_to_show_4 = this.assets[3][Math.floor(this.anim_index)];
        this.image_to_show_5 = this.assets[4][Math.floor(this.anim_index)];
    },

    draw: function(ctx) {
        if (this.image_to_show_1 && this.image_to_show_2 && this.image_to_show_3 && this.image_to_show_4 && this.image_to_show_5) {
            ctx.drawImage(this.image_to_show_5, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image_to_show_4, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image_to_show_3, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image_to_show_2, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image_to_show_1, this.x, this.y, this.width, this.height);

        } else {
            console.error('Image to show is not defined.');
        }
    }
}

const player = 
{
    init: function(x, y, width, height) {
        this.assets = [
            [new Image(), new Image(), new Image()], // idle
            [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()]  // run
        ];
        this.init_images();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
        this.velY = 0;
        this.jumping = false;
        this.running = false;
        this.anim_index = 0;
        this.image_to_show = this.assets[0][0];
        this.speed_animation = 0.1;
    },

    init_images: function() {
        if (this.assets != null) {
            // idle
            this.assets[0][0].src = 'assets/player/idle/0.png';
            this.assets[0][1].src = 'assets/player/idle/1.png';
            this.assets[0][2].src = 'assets/player/idle/2.png';
    
            // run
            this.assets[1][0].src = 'assets/player/run/0.png';
            this.assets[1][1].src = 'assets/player/run/1.png';
            this.assets[1][2].src = 'assets/player/run/2.png';
            this.assets[1][3].src = 'assets/player/run/3.png';
            this.assets[1][4].src = 'assets/player/run/4.png';
            this.assets[1][5].src = 'assets/player/run/5.png';
    
            // Ensure images are loaded
            this.assets.flat().forEach(img => {
                img.onload = () => console.log('Image loaded:', img.src);
                img.onerror = () => console.error('Failed to load image:', img.src);
            });
        } else {
            console.log("assets error: this.assets is null");
        }
    },

    update: function() {
        // Logika ruchu gracza
        this.y += this.velY;
        if (this.y + this.height >= canvas.height) {  // zakładamy wysokość canvas
            this.y = canvas.height - this.height;
            this.jumping = false;
        }

        // Poruszanie w lewo i w prawo
        if (keys['ArrowLeft'] || keys['a']) {
            this.x -= this.speed;
        }
        if (keys['ArrowRight'] || keys['d']) {
            this.x += this.speed;
        }

        // Animacje
        if (this.running) {
            this.anim_index += this.speed_animation; // animation speed
            if (Math.floor(this.anim_index) > 4) {
                this.anim_index = 0;
            }
            this.image_to_show = this.assets[1][Math.floor(this.anim_index)];
        } else {
            this.anim_index += this.speed_animation; // animation speed
            if (Math.floor(this.anim_index) > 2) {
                this.anim_index = 0;
            }
            this.image_to_show = this.assets[0][Math.floor(this.anim_index)];
        }
    },

    draw: function(ctx) {
        if (this.image_to_show) {
            ctx.drawImage(this.image_to_show, this.x, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
    }
};

const objectPrototype = {
    init: function(assets) {
        this.assets = assets;
        this.start_position_x = 432;
        this.end_position_x = -32;
        this.position_y = [-32, 0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352];
        this.start_position = [this.start_position_x, this.position_y[0]];
        this.choose_start_position();
        this.end_position = [this.end_position_x, this.position_y[0]];
        this.choose_end_position();
        this.speed = 1;
        this.max_first_stage_speed = 3;
        this.max_second_stage_speed = 5;
        this.max_third_stage_speed = 7;
        this.x = this.start_position[0];
        this.y = this.start_position[1];
        this.width = 16;
        this.height = 16;
        this.image_to_show = this.assets[0][0];
    },

    choose_start_position: function() {
        let random_y_position = this.position_y[Math.floor(Math.random() * (this.position_y.length - 6))];
        this.start_position[0] = this.start_position_x;
        this.start_position[1] = random_y_position;
    },

    choose_end_position: function() {
        let random_y_position = this.position_y[Math.floor(Math.random() * this.position_y.length)];
        this.end_position[0] = this.end_position_x;
        this.end_position[1] = random_y_position;
    },

    get_object: function(score) {
        let _11x18_chance, _16x16_chance, _16x32_chance, _20x32_chance, _32x16_chance, _32x32_chance; 
        let max_chance;
        
        if (score <= 100) {
            this.speed = getRandomInRange(1, this.max_first_stage_speed);
            _11x18_chance = 10;
            _16x16_chance = 70;
            _16x32_chance = 5;
            _20x32_chance = 5;
            _32x16_chance = 5;
            _32x32_chance = 5;       
        } else if (score <= 300) {
            this.speed = getRandomInRange(this.max_first_stage_speed, this.max_second_stage_speed);
            _11x18_chance = 10;
            _16x16_chance = 30;
            _16x32_chance = 10;
            _20x32_chance = 10;
            _32x16_chance = 10;
            _32x32_chance = 30;           
        } else {
            this.speed = getRandomInRange(this.max_second_stage_speed, this.max_third_stage_speed);
            _11x18_chance = 4;
            _16x16_chance = 4;
            _16x32_chance = 4;
            _20x32_chance = 4;
            _32x16_chance = 4;
            _32x32_chance = 80;             
        }

        max_chance = _11x18_chance + _16x16_chance + _16x32_chance + _20x32_chance + _32x16_chance + _32x32_chance; 
        let choose = getRandomInRange(0, max_chance);

        if (choose <= _11x18_chance) {
            this.width = 11;
            this.height = 18;
            this.image_to_show = this.assets[0][0];
        } else if (choose <= (_11x18_chance + _16x16_chance)) {
            this.width = 16;
            this.height = 16;
            this.image_to_show = this.assets[1][getRandomInRange(0, 44)];
        } else if (choose <= (_11x18_chance + _16x16_chance + _16x32_chance)) {
            this.width = 16;
            this.height = 32;
            this.image_to_show = this.assets[2][getRandomInRange(0, 12)];
        } else if (choose <= (_11x18_chance + _16x16_chance + _16x32_chance + _20x32_chance)) {
            this.width = 20;
            this.height = 32;
            this.image_to_show = this.assets[3][getRandomInRange(0, 1)];
        } else if (choose <= (_11x18_chance + _16x16_chance + _16x32_chance + _20x32_chance + _32x16_chance)) {
            this.width = 32;
            this.height = 16;
            this.image_to_show = this.assets[4][getRandomInRange(0, 2)];
        } else {
            this.width = 32;
            this.height = 32;
            this.image_to_show = this.assets[5][getRandomInRange(0, 27)];
        }
    },

    update: function() {
        
        const dx = this.end_position[0] - this.x;
        const dy = this.end_position[1] - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const stepX = (dx / distance) * this.speed;
        const stepY = (dy / distance) * this.speed;

        this.x += stepX;
        this.y += stepY;
        

        if (this.x <= this.end_position[0]) {
            this.get_object(score);
            this.choose_start_position();
            this.choose_end_position();
            this.x = this.start_position_x;
        }
    },

    draw: function(ctx) {
        if (this.image_to_show) {
            ctx.drawImage(this.image_to_show, this.x, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
    }
};

const path = 
{
    init: function(assets)
    {
        this.assets = assets;
        this.x = canvas.width + 32;
        this.y;
        this.choose_y(0);
        this.width = 32;
        this.height = 32;
        this.speed = 1;
        this.image_to_show = this.assets[2][0];
    },

    choose_y: function(score)
    {
            this.y = canvas.height - 32;
    },

    update: function()
    {
        this.x -= this.speed;
        if (this.x <= -32 - this.width)
        {
            this.x = canvas.width + 16;
            this.choose_y(score);
            if (score > 100 && score <= 300)
            {
        
                this.image_to_show = this.assets[2][1];
            }
            else if (score > 300)
            {
        
                this.image_to_show = this.assets[2][2];
            }
        }
        
    },

    draw: function(ctx) {
        if (this.image_to_show) {
            ctx.drawImage(this.image_to_show, this.x, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
    }
}

const background = 
{
    init: function(assets)
    {
        this.assets = assets;
        this.x_tornado = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.animation_speed = 0.05;
        this.anim_index = 0;
        this.image_to_show_tornado = this.assets[2][0];

        this.x_far_layer = 0;
        this.x_far_layer_2 = -canvas.width;
        this.speed_far_layer = 0.5; 
        this.image_to_show_far_layer = this.assets[1][0]; 
        this.image_to_show_far_layer_2 = this.assets[1][0]; 

        this.x_close_layer = 0;
        this.x_close_layer_2 = -canvas.width;
        this.speed_close_layer = 1; 
        this.image_to_show_close_layer = this.assets[0][0]; 
        this.image_to_show_close_layer_2 = this.assets[0][0]; 
    },


    update: function(score)
    {
        if (score <= 100)
        {
            this.speed_far_layer = 0.5;
            this.image_to_show_far_layer = this.assets[1][0]; 
            this.image_to_show_far_layer_2 = this.assets[1][0]; 
            this.speed_close_layer = 1;
            this.image_to_show_close_layer = this.assets[0][0]; 
            this.image_to_show_close_layer_2 = this.assets[0][0]; 
        }
        else if (score <= 300)
        {
            this.speed_far_layer = 1;
            this.speed_close_layer = 2;
        }
        else
        {
            this.speed_far_layer = 2;
            this.speed_close_layer = 4;
        }

        // animation tornado
        this.anim_index += this.animation_speed;
        if (this.anim_index > 3.5)
        {
            this.anim_index = 0;
        }
        this.image_to_show_tornado = this.assets[2][Math.floor(this.anim_index)];
      
        this.x_far_layer += this.speed_far_layer;
        this.x_far_layer_2 += this.speed_far_layer;
        this.x_close_layer -= this.speed_close_layer;
        this.x_close_layer_2 -= this.speed_close_layer;

        if (this.x_far_layer >= canvas.width)
        {
            this.x_far_layer = -canvas.width;
            if (score <= 100)
            {
                this.image_to_show_far_layer = this.assets[1][0]; 
            } 
            else if(score <= 300)
            {
                this.image_to_show_far_layer = this.assets[1][1]; 
            }
            else if (score > 300)
            {
                this.image_to_show_far_layer = this.assets[1][2]; 
            }
        }
        if (this.x_far_layer_2 >= canvas.width)
        {
            this.x_far_layer_2 = -canvas.width;
            if (score <= 100)
            {
                this.image_to_show_far_layer_2 = this.assets[1][0]; 
            } 
            else if(score <= 300)
            {
                this.image_to_show_far_layer_2 = this.assets[1][1]; 
            }
            else if (score > 300)
            {
                this.image_to_show_far_layer_2 = this.assets[1][2]; 
            }
        }
        if (this.x_far_layer >= canvas.width)
        {
            this.x_far_layer = -canvas.width;
            if (score <= 100)
            {
                this.image_to_show_far_layer = this.assets[1][0]; 
            } 
            else if(score <= 300)
            {
                this.image_to_show_far_layer = this.assets[1][1]; 
            }
            else if (score > 300)
            {
                this.image_to_show_far_layer = this.assets[1][2]; 
            }
        }
        if (this.x_far_layer_2 >= canvas.width)
        {
            this.x_far_layer_2 = -canvas.width;
            if (score <= 100)
            {
                this.image_to_show_far_layer_2 = this.assets[1][0]; 
            } 
            else if(score <= 300)
            {
                this.image_to_show_far_layer_2 = this.assets[1][1]; 
            }
            else if (score > 300)
            {
                this.image_to_show_far_layer_2 = this.assets[1][2]; 
            }
        }
        if (this.x_close_layer <= -canvas.width)
        {
            this.x_close_layer = canvas.width;
            if (score <= 100)
            {
                this.image_to_show_close_layer = this.assets[0][0]; 
            } 
            else if(score <= 300)
            {
                this.image_to_show_close_layer = this.assets[0][1]; 
            }
            else if (score > 300)
            {
                this.image_to_show_close_layer = this.assets[0][2]; 
            }
        }
        if (this.x_close_layer_2 <= -canvas.width)
        {
            this.x_close_layer_2 = canvas.width;
            if (score <= 100)
            {
                this.image_to_show_close_layer_2 = this.assets[0][0]; 
            } 
            else if(score <= 300)
            {
                this.image_to_show_close_layer_2 = this.assets[0][1]; 
            }
            else if (score > 300)
            {
                this.image_to_show_close_layer_2 = this.assets[0][2]; 
            }
        }

    },

    draw: function(ctx) {
        if (this.image_to_show_tornado) {
            ctx.drawImage(this.image_to_show_tornado, this.x_tornado, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
        if (this.image_to_show_far_layer) {
            ctx.drawImage(this.image_to_show_far_layer, this.x_far_layer, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
        if (this.image_to_show_far_layer_2) {
            ctx.drawImage(this.image_to_show_far_layer_2, this.x_far_layer_2, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
        if (this.image_to_show_close_layer) {
            ctx.drawImage(this.image_to_show_close_layer, this.x_close_layer, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
        if (this.image_to_show_close_layer_2) {
            ctx.drawImage(this.image_to_show_close_layer_2, this.x_close_layer_2, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not defined.');
        }
    }
}


const score_text = 
{
    init: function(y)
    {
        this.x;
        this.y = y;
        this.text = '0';
    },

    refresh_score: function(score)
    {
        this.text = score.toString();
        this.x = Math.floor(canvas.width/2);
    },

    draw: function(ctx)
    {
        ctx.font = '30px Pixelify Sans'; // Ustawienie czcionki i rozmiaru
        ctx.fillStyle = 'white'; // Ustawienie koloru tekstu
        ctx.textAlign = 'center'; // Ustawienie wyrównania tekstu na środku
        ctx.fillText(this.text, this.x, this.y); // Rysowanie tekstu na płótnie
    }
}

const cutscene = {
    init: function(assets) {
        this.assets = assets;
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;  
        this.index = 0;
        this.speed_animation = 0.1;
        this.image_to_show = this.assets[0];    
    },

    update: function() {
        this.index += this.speed_animation;
        if (this.index >= 53.6) {
            this.index = 0;
            return false;
        }
        if (Math.floor(this.index) == 20) {
            playMusic(scream_source, false);
        }
        this.image_to_show = this.assets[Math.floor(this.index)];
        return true;
    },

    draw: function(ctx) {
        if (this.image_to_show) {
            ctx.drawImage(this.image_to_show, this.x, this.y, this.width, this.height);
        } else {
            console.error('Image to show is not a valid image type.');
        }
    }
};

const last_score_text = 
{
    init: function(x, y)
    {
        this.x = x;
        this.y = y;
        this.text = 'LS:' + last_score.toString();
    },

    refresh_score: function(last_score)
    {
        this.text = 'LS:' + last_score.toString();
    },

    draw: function(ctx)
    {
        ctx.font = '30px Pixelify Sans'; // Ustawienie czcionki i rozmiaru
        ctx.fillStyle = 'white'; // Ustawienie koloru tekstu
        ctx.textAlign = 'left'; // Ustawienie wyrównania tekstu na środku
        ctx.fillText(this.text, this.x, this.y); // Rysowanie tekstu na płótnie
    }
}

const high_score_text =
{
    init: function(x, y)
    {
        this.x = x;
        this.y = y;
        this.text = 'HS:' + high_score.toString();
    },

    refresh_score: function(high_score)
    {
        this.text = 'HS:' + high_score.toString()
    },

    draw: function(ctx)
    {
        ctx.font = '30px Pixelify Sans'; // Ustawienie czcionki i rozmiaru
        ctx.fillStyle = 'white'; // Ustawienie koloru tekstu
        ctx.textAlign = 'left'; // Ustawienie wyrównania tekstu na środku
        ctx.fillText(this.text, this.x, this.y); // Rysowanie tekstu na płótnie
    }
}

const cutscene_info_text =
{
    init: function(x, y)
    {
        this.x = x;
        this.y = y;
        this.text = '"S" TO SKIP';
    },

    draw: function(ctx)
    {
        ctx.font = '30px Pixelify Sans'; // Ustawienie czcionki i rozmiaru
        ctx.fillStyle = 'white'; // Ustawienie koloru tekstu
        ctx.textAlign = 'right'; // Ustawienie wyrównania tekstu na środku
        ctx.fillText(this.text, this.x, this.y); // Rysowanie tekstu na płótnie
    }
}

// game variables
let game_is_on = false;
let cutscene_on = false;
let keys = [];
let score = 0;
let number_of_items = getRandomInRange(2,4);
let second_stage = true;
let third_stage = true;
let assets_objects = assetsObjects();
let assets_walkable = assetsWalkable();
let assets_background = assetsBackground();
let cutscene_assets = assetsCutscene();
let objects = []; // Lista obiektów
let paths = []
let current_music;
let handle_main_menu_music = true;
let handle_cutscene_music = true;
let handle_game_music = true;
let last_score = 0;
let high_score = 0;




// Obsługa klawiszy
window.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

window.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});


// initialization
main_menu.init();
player.init(32, canvas.height - 64, 32, 32);
player.running = true;
score_text.init(32);
background.init(assets_background);
cutscene.init(cutscene_assets);
last_score_text.init(2, 44);
high_score_text.init(2, 22);
cutscene_info_text.init(canvas.width - 2, canvas.height - 2);


// Funkcja dodawania nowych obiektów
function initObjects() 
{
    for (let i = 0; i < number_of_items; i++) {
        const newObj = Object.create(objectPrototype); 
        newObj.init(assets_objects);
        newObj.get_object(score);
        objects.push(newObj);
    }
}

function addObjects(number_of_objects) 
{

    for (let i = 0; i < number_of_objects; i++) {
        const newObj = Object.create(objectPrototype); 
        newObj.init(assets_objects);
        newObj.get_object(score);
        objects.push(newObj);
    }
}

function initPath()
{
    for (let i = -32; i <= canvas.width + 32; i = i + 32) {
        const newPath = Object.create(path); 
        newPath.init(assets_walkable);
        newPath.x = i;
        paths.push(newPath);
    }
}

function playMusic(source, loop = true) {
    // Jeśli już odtwarzamy jakąś muzykę, zatrzymaj ją
    if (current_music) {
        current_music.pause();
        current_music.currentTime = 0;
    }

    // Tworzymy nowy obiekt audio
    current_music = new Audio(source);
    if (loop == true)
    {
        current_music.loop = true; // Ustawienie pętli
    }
    current_music.play(); // Odtwarzanie muzyki
}

// Funkcja sprawdzająca kolizję
function checkCollision(player, object) {
    return (
        player.x < object.x + object.width &&
        player.x + player.width > object.x &&
        player.y < object.y + object.height &&
        player.y + player.height > object.y
    );
}

function handlePathCollision(player, path) {
    // Sprawdzenie, czy gracz dotyka path od góry
    if (
        player.y + player.height <= path.y + 8 + player.velY &&
        player.y + player.height >= path.y + 8 &&
        player.x + player.width > path.x &&
        player.x < path.x + path.width
    ) {
        // Gracz jest na szczycie ścieżki
        player.y = path.y + 8 - player.height - 2;
        player.jumping = false;
        player.velY = 0;
    }
    // Sprawdzenie kolizji z bokami lub od dołu
    else if (
        player.x + player.width > path.x &&
        player.x < path.x + path.width &&
        player.y < path.y + 8 + path.height &&
        player.y + player.height > path.y + 8
    ) {
        // Kolizja z boku lub od dołu - koniec gry
        game_is_on = false;
        console.log("Game Over!");
    }
}



// main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Grawitacja
    player.velY += 1.5;
    player.y += player.velY*2/3;

    // Kolizja z podłożem
    if (player.y + player.height >= canvas.height) {
        player.y = canvas.height - player.height;
        player.jumping = false;
    }
    if (player.x + player.width >= canvas.width) {
        player.x = canvas.width - player.width;
    }
    else if (player.x <= 0) {
        player.x = 0;
    }

    // Skakanie
    if ((keys['ArrowUp'] || keys[' '] || keys['w']) && !player.jumping) {
        if (game_is_on) {
            player.jumping = true;
            player.velY = -15;
        } else {
            cutscene_on = true;
            score = 0;
            objects = [];
            paths = []
            player.speed_animation = 0.1;
            player.speed = 5
            initObjects();
            initPath();
            second_stage = true;
            third_stage = true;
            handle_main_menu_music = true;
            handle_cutscene_music = true;
            handle_game_music = true;
        }
    }

    // update
    if (game_is_on) {
        if (handle_game_music == true)
        {
            playMusic(game_music_source);            
            handle_game_music = false;
        }
        player.update();
        paths.forEach(obj => obj.update())
        objects.forEach(obj => obj.update());
        score += 0.1;
        score_text.refresh_score(Math.floor(score));
        background.update(score);
        // Sprawdzanie kolizji
        objects.forEach(obj => {
            if (checkCollision(player, obj)) 
                {
                game_is_on = false; 
                last_score = Math.floor(score);
                if (last_score >= high_score)
                {
                    high_score = last_score;
                }
                last_score_text.refresh_score(last_score);
                high_score_text.refresh_score(high_score);
            }
        paths.forEach(obj => 
            {
                handlePathCollision(player, obj);
            })
        });

        if (score >= 100 && score <= 300 && second_stage) {
            second_stage = false;
            player.speed_animation = 0.2; 
            number_of_items = getRandomInRange(1, 4);
            player.speed += 2;
            addObjects(number_of_items);
            paths.forEach(obj => 
            {
                obj.speed = 2;
            })
        } else if (score > 300 && third_stage) {
            third_stage = false;
            player.speed_animation = 0.4; 
            number_of_items = getRandomInRange(1, 4);
            addObjects(number_of_items);
            player.speed += 4;
            paths.forEach(obj => 
            {
                obj.speed = 4;
            })
        }
    }
    else if (cutscene_on == true)
    {
        if (handle_cutscene_music == true)
            {
            playMusic(cut_scene_music_source);
            handle_cutscene_music = false;
        }
        cutscene_on = cutscene.update();
        if (keys['s'])
        {
            cutscene_on = false;
            cutscene.index = 0;
        }
        if (cutscene_on == false)
            {
                game_is_on = true;
            }
    } 
    else 
    {
        main_menu.update(); 
        if (handle_main_menu_music == true)
        {
            playMusic(main_menu_music_source);
            handle_main_menu_music = false;
        }
    }

    // Drawing
    if (game_is_on) {
        background.draw(ctx);
        paths.forEach(obj => obj.draw(ctx))
        player.draw(ctx);
        objects.forEach(obj => obj.draw(ctx));
        score_text.draw(ctx);
    } 
    else if (cutscene_on == true)
    {
        cutscene.draw(ctx);
        cutscene_info_text.draw(ctx);
    }
    else 
    {
        main_menu.draw(ctx);
        high_score_text.draw(ctx);
        last_score_text.draw(ctx);
    }

    requestAnimationFrame(gameLoop);
}

// Start gry
gameLoop();
