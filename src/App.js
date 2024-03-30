import { useState } from 'react';
import List from "./components/List";
import imageSizeContext from "./context/Context";

export default function App() {
    const [isLarge, setIsLarge] = useState(false)
    const imageSize = isLarge ? 150 : 100
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <imageSizeContext.Provider value={imageSize}>
                <List />
            </imageSizeContext.Provider>
        </>
    )
}




