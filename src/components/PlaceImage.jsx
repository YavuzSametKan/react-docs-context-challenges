import React, {useContext} from 'react';
import imageSizeContext from "../context/Context";
import { getImageUrl } from '../datas/utils.js';

function PlaceImage({ place }) {
    const imageSize = useContext(imageSizeContext)
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}


export default PlaceImage;