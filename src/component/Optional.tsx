import React, { useEffect, useRef, useState } from 'react'
import { Z_STREAM_ERROR } from 'zlib';

function Optional() {

    const canvas: any = useRef();
    let ctx: any = null;
    const [points, setPoints] = useState<any>([]);
    const [colorInput, setColorInput] = useState("");
    const [error, setError] = useState("");
    /* const points =[
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
    ] */

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

    const colorHandleSubmit = (e: any) => {
        e.preventDefault();
        const pointsTemp = [...points]
        if (colorInput.toLowerCase() === "red") {
            setError("");
            let x = Math.floor(Math.random() * (800 - 480 + 1)) + 480;
            let y = Math.floor(Math.random() * (390 - 170 + 1)) + 170;
            pointsTemp.push({ x: x, y: y, w: 8, h: 8, style: "red" })
            setPoints(pointsTemp);
        } else if (colorInput.toLowerCase() === "white") {
            setError("");
            let x = Math.floor(Math.random() * (360 - 180 + 1)) + 180;
            let y = Math.floor(Math.random() * (666 - 420 + 1)) + 420;
            pointsTemp.push({ x: x, y: y, w: 8, h: 8, style: "white" })
            setPoints(pointsTemp);
        } else {
            setError("Please enter only White or Red color")
        }
        draw()
    }


    return (
        <div className="optionCanvas">
            <canvas id="optCanvas" width="900" height="900" style={{ background: "#000", border: "2px solid #d3d3d3" }}
                ref={canvas}
            >
            </canvas>
            <div className="input_container">
                <form className="optionalInputValue" onSubmit={colorHandleSubmit}>
                    <input
                        type="text"
                        className="form-control w-75"
                        style={{ marginLeft: "15px" }}
                        placeholder="please enter color White or Red"
                        onChange={(e) => setColorInput(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p className="text-danger">{error}</p>
            </div>
        </div>
    )
}

export default Optional
