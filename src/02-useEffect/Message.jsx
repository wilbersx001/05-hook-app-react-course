import { useEffect, useState } from "react"


export const Message = () => {

 const [coords, setCoords] = useState({x: 0, y: 0})


    useEffect(() => {
        const OnMouseNove = ({x,y}) => {
        // const coords = {x,y};
        setCoords({x,y});
    }

    window.addEventListener('mousemove', OnMouseNove);

  return () => {
    // window.removeEventListener('mousemove', OnMouseNove);
  }
}, [])

  return (
    <>
        <h2>Usuario ya existe</h2>
        {JSON.stringify( coords )}
    
    </>
  )
}
