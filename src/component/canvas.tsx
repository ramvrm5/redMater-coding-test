import React, { useEffect, useRef } from 'react'

function Canvas(props: any) {

    const canvas: any = useRef();
    let ctx:any = null;
    let isDown: any = false;
    let dragTarget: any = null;
    let startX: any = null;
    let startY: any = null;

    useEffect(() => {
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
    
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
        if (props.addRectangleArray.length > 0) {
            draw();
        }
    }, [props.addRectangleArray])

    // draw rectangle
    const draw = () => {
        ctx.clearRect(0, 0, canvas.current.clientWidth, canvas.current.clientHeight);
        props.addRectangleArray.map((info: any) => drawFillRect(info));
    }

    // draw rectangle with background
    const drawFillRect = (info: any) => {
        let canvas: any = document.getElementById('mainCanvas');
        let ctx = canvas.getContext('2d');

        const { x, y, w, h } = info;

        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fillStyle = info.style;
        ctx.fillRect(x, y, w, h);
    }

    // identify the click event in the rectangle
    const hitBox = (x: any, y: any) => {
        let isTarget = null;
        for (let i = 0; i < props.addRectangleArray.length; i++) {
            const box = props.addRectangleArray[i];
            if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
                dragTarget = box;
                isTarget = true;
                break;
            }
        }
        return isTarget;
    }

    const handleMouseDown = (e: any) => {
        let startXTemp: any = e.nativeEvent.offsetX - canvas.current.clientLeft;
        let startYTemp: any = e.nativeEvent.offsetY - canvas.current.clientTop;
        startX = parseInt(startXTemp);
        startY = parseInt(startYTemp);

        isDown = hitBox(startX, startY);
    }

    const handleMouseMove = (e: any) => {
        if (!isDown) return;

        const mouseXTemp: any = e.nativeEvent.offsetX - canvas.current.clientLeft;
        const mouseYTemp: any = e.nativeEvent.offsetY - canvas.current.clientTop;
        const mouseX = parseInt(mouseXTemp);
        const mouseY = parseInt(mouseYTemp);
        const dx = mouseX - startX;
        const dy = mouseY - startY;
        startX = mouseX;
        startY = mouseY;
        dragTarget.x += dx;
        dragTarget.y += dy;
        draw();
    }
    const handleMouseUp = (e: any) => {
        dragTarget = null;
        isDown = false;
    }
    const handleMouseOut = (e: any) => {
        handleMouseUp(e);
    }


    return (
        <canvas id="mainCanvas" width="1000" height="600" style={{ border: "2px solid #d3d3d3" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            ref={canvas}
        >
            {
                props.addRectangleArray.map((object: any, i: number) => {
                    return (
                        <canvas key={i} id={i + "_canvas"} style={{ border: "2px solid #d3d3d3" }}></canvas>
                    )
                })
            }
        </canvas>
    )
}

export default Canvas
