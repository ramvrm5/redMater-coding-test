import React, { useState } from 'react'

// CANVAS COMPONENT IMPORT
import Canvas from '../component/canvas'

function Panel() {
    const [initId, setInitId] = useState<number>(0)
    const [addRectangle, setAddRectangle] = useState<any>([])

    const addRectangleOnCLick = () => {
        let randomNumber1 = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
        let randomNumber2 = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
        let newPush = [...addRectangle];
        newPush.push({ x: randomNumber1, y: randomNumber2, w: 400, h: 150, style: "#000", id: initId });
        setInitId(initId + 1);
        setAddRectangle(newPush);
    }

    const colorInputChange = (index: number) => {
        let newPush = [...addRectangle];
        newPush[index].style = (document.getElementById(index + "_input") as HTMLInputElement).value
        setAddRectangle(newPush);
    }

    const deleteRectangleOnClick = (index: number) => {
        let newPush = [...addRectangle];
        newPush.splice(index, 1)
        setAddRectangle(newPush);
    }


    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-lg-12 flexItems">
                    <button onClick={addRectangleOnCLick} className="btn btn-primary">Add Rectangle</button>
                    <Canvas addRectangleArray={addRectangle} />
                    { addRectangle.length > 0 && (<div className="buttonItems">
                        {
                            addRectangle.map((object: any, i: number) => {
                                return (
                                    <button key={i} className="btn btn-primary mb-2"
                                        onClick={() => deleteRectangleOnClick(i)}>{"Delete Rectangle " + (i+1)}</button>
                                )
                            })
                        }
                    </div>)}
                </div>
                {
                    addRectangle.map((object: any, i: number) => {
                        return (
                            <div key={i} className="col-lg-12 flexInputItems mt-2 mb-2">
                                <label>{"Reactangle " + (i + 1)}</label>
                                <input id={i + "_input"} type="text" className="w-25 p-1 form-control" value={object.style} onChange={() => colorInputChange(i)} placeholder={"Change color of reactangle " + (i + 1)} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Panel
