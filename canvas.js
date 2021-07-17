window.addEventListener("load",() => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    
    //ctx.fillRect(50, 50, 200, 500);
    /*ctx.strokeStyle = "red";
    ctx. lineWidth = 4;
    ctx.strokeRect(100, 100, 200, 500);
    ctx.strokeStyle = "blue";
    ctx. lineWidth = 7;
    ctx.strokeRect(200, 200, 200, 500);*/

    //variables
    let paiting = false;

    function startPosition() {
        paiting = true;
    }
    function finishedPosition() {
        paiting = false;
    }
    function draw(e) {
        if(!paiting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = "red";
        ctx.beginPath();

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, clientY);

    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    
    
});