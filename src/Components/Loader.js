import React from 'react'
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
// const loaderCSS = css`
//     margin: 0 auto;
// `;

const Loader = () => {
    return (
        <>
            <div className="loader">
                <div className="sweet-loading">
                    <SyncLoader color='rgb(23, 221, 211)' size={15} margin={2} />
                </div>
            </div>
        </>
    );
}

export default Loader
