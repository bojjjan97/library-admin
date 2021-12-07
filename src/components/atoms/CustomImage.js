import { useRecordContext } from "ra-core";
import * as React from "react";
const CustomImage = () => {
    const record = useRecordContext()
    if(record.image){
        return (
            <img style= {{width : "15%", height : "15%"}} src={process.env.REACT_APP_IMAGE_URL + record.image.photoUrl}/>
        )
    }
    return <div>No image</div>

} 

export default CustomImage