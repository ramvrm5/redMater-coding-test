import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

// REACT REDUCER COMPONENT
import { selectCanvasEvents, selectCanvasGate } from '../reducer/canvasSlice';

function JsonChallenge() {
    const [polygonGate, setPolygonGate] = useState<any>([])
    const eventsAray = useSelector(selectCanvasEvents);
    const gateArray = useSelector(selectCanvasGate);

    useEffect(() => {
        if (eventsAray && gateArray) {
            insidePolygon(eventsAray, gateArray)
        }
    }, [eventsAray, gateArray])

    const insidePolygon = (eventsArray: any, gateArray: any) => {
        console.log(eventsArray);
        console.log(gateArray);
        let temparray = [...polygonGate]
        for (let i = 0; eventsArray.length > i; i++) {
            for (let j = 0; gateArray.length > j; j++) {
                if (eventsArray[i][0] && eventsArray[i][1]) {
                    if ((eventsArray[i][0] < gateArray[j][0]) && (eventsArray[i][1] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][0], "fromTwo": eventsArray[i][1], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else if ((eventsArray[i][1] < gateArray[j][0]) && (eventsArray[i][0] < gateArray[j][1])) { 
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][1], "fromTwo": eventsArray[i][0], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else {  
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][0], "fromTwo": eventsArray[i][1], "bolleanRes": "false", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    }
                } else if (eventsArray[i][1] && eventsArray[i][2]) {
                    if ((eventsArray[i][1] < gateArray[j][0]) && (eventsArray[i][2] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][1], "fromTwo": eventsArray[i][2], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else if ((eventsArray[i][2] < gateArray[j][0]) && (eventsArray[1][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][2], "fromTwo": eventsArray[i][1], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][1], "fromTwo": eventsArray[i][2], "bolleanRes": "false", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    }
                } else if (eventsArray[i][2] && eventsArray[i][3]) {
                    if ((eventsArray[i][2] < gateArray[j][0]) && (eventsArray[i][3] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][2], "fromTwo": eventsArray[i][3], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else if ((eventsArray[i][3] < gateArray[j][0]) && (eventsArray[2][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][3], "fromTwo": eventsArray[i][2], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][2], "fromTwo": eventsArray[i][3], "bolleanRes": "false", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    }
                } else if (eventsArray[i][3] && eventsArray[i][1]) {
                    if ((eventsArray[i][3] < gateArray[j][0]) && (eventsArray[i][1] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][3], "fromTwo": eventsArray[i][1], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else if ((eventsArray[i][1] < gateArray[j][0]) && (eventsArray[3][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][1], "fromTwo": eventsArray[i][3], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][3], "fromTwo": eventsArray[i][1], "bolleanRes": "false", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    }
                } else if (eventsArray[i][3] && eventsArray[i][0]) {
                    if ((eventsArray[i][3] < gateArray[j][0]) && (eventsArray[i][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][3], "fromTwo": eventsArray[i][0], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else if ((eventsArray[i][0] < gateArray[j][0]) && (eventsArray[3][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][0], "fromTwo": eventsArray[i][3], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][3], "fromTwo": eventsArray[i][0], "bolleanRes": "false", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    }
                } else if (eventsArray[i][2] && eventsArray[i][0]) {
                    if ((eventsArray[i][2] < gateArray[j][0]) && (eventsArray[i][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][2], "fromTwo": eventsArray[i][0], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else if ((eventsArray[i][0] < gateArray[j][0]) && (eventsArray[2][0] < gateArray[j][1])) {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][0], "fromTwo": eventsArray[i][2], "bolleanRes": "true", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    } else {
                        temparray.push({ "objectCount":i, "fromOne": eventsArray[i][2], "fromTwo": eventsArray[i][0], "bolleanRes": "false", "betweenOne": gateArray[j][0], "betweenTwo": gateArray[j][1] })
                    }
                }
            }
        }
        console.log(polygonGate);
        setPolygonGate(temparray)
    }

    return (
        <div className="JsonItems">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Events Array Object</th>
                        <th scope="col">Event-pair</th>
                        <th scope="col">Gate-pair</th>
                        <th scope="col">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        polygonGate.map(({objectCount, fromOne,fromTwo,bolleanRes,betweenOne,betweenTwo}: any, i: number) => {
                            return (
                                <tr key={i}>
                                    <th>{objectCount}</th>
                                    <td>{fromOne},{fromTwo}</td>
                                    <td>{betweenOne},{betweenTwo}</td>
                                    <td>{bolleanRes}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* {
                polygonGate.map((object: any, i: number) => {
                    return (
                        <span key={i} className="border-darken-1 mb-2"
                        >{object}</span>
                    )
                })
            } */}
        </div>
    )
}

export default JsonChallenge
