

addEventListener("keydown", function(e){
    if (e.code == 'KeyD') vx = 5;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vx = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'KeyA') vx = -5;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyA') vx = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'KeyW') vy = -5;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyW') vy = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'KeyS') vy = 5;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyS') vy = 0;
    
})