import React, { useEffect, useRef } from 'react'

function Optional() {

    const canvas: any = useRef();
    let ctx: any = null;
    const points =[
        { x: 750, y: 150, w: 8, h: 8, style: "red" },
        { x: 745, y: 170, w: 8, h: 8, style: "red" },
        { x: 580, y: 170, w: 8, h: 8, style: "red" },
        { x: 480, y: 190, w: 8, h: 8, style: "red" },
        { x: 465, y: 215, w: 8, h: 8, style: "red" },
        { x: 740, y: 175, w: 8, h: 8, style: "red" },
        { x: 726, y: 183, w: 8, h: 8, style: "red" },
        { x: 740, y: 188, w: 8, h: 8, style: "red" },
        { x: 755, y: 188, w: 8, h: 8, style: "red" },
        { x: 785, y: 192, w: 8, h: 8, style: "red" },
        { x: 800, y: 192, w: 8, h: 8, style: "white" },
        { x: 715, y: 210, w: 8, h: 8, style: "red" },
        { x: 760, y: 220, w: 8, h: 8, style: "red" },
        { x: 780, y: 230, w: 8, h: 8, style: "red" },
        { x: 720, y: 340, w: 8, h: 8, style: "red" },
        { x: 730, y: 350, w: 8, h: 8, style: "red" },
        { x: 745, y: 390, w: 8, h: 8, style: "red" },
        { x: 220, y: 420, w: 8, h: 8, style: "white" },
        { x: 210, y: 440, w: 8, h: 8, style: "white" },
        { x: 255, y: 450, w: 8, h: 8, style: "white" },
        { x: 240, y: 460, w: 8, h: 8, style: "white" },
        { x: 380, y: 460, w: 8, h: 8, style: "white" },
        { x: 265, y: 540, w: 8, h: 8, style: "white" },
        { x: 270, y: 550, w: 8, h: 8, style: "white" },
        { x: 258, y: 570, w: 8, h: 8, style: "white" },
        { x: 180, y: 610, w: 8, h: 8, style: "white" },
        { x: 360, y: 620, w: 8, h: 8, style: "white" },
        { x: 360, y: 660, w: 8, h: 8, style: "white" },
        { x: 310, y: 666, w: 8, h: 8, style: "white" },
    ]

    useEffect(() => {
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
    
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
        if (points.length > 0) {
            draw();
        }
    }, [points])

    // draw rectangle
    const draw = () => {
        points.map((info: any) => drawFillRect(info));
    }

    // draw rectangle with background
    const drawFillRect = (info: any) => {
        let canvas: any = document.getElementById('optCanvas');
        let ctx = canvas.getContext('2d');

        const { x, y, w, h } = info;

        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fillStyle = info.style;
        ctx.fillRect(x, y, w, h);
    }

    return (
        <div className="optionCanvas">
            <canvas id="optCanvas" width="900" height="900" style={{ background:"#000",border: "2px solid #d3d3d3" }}
                ref={canvas}
            >
            </canvas>
        </div>
    )
}

export default Optional
