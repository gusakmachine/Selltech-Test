import React, {FC} from 'react';
import {Props} from "./PrintJSONTypes";

const PrintJSON:FC<Props> = ({header, data}) => {
    return (
        <>
            <h1>{header}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default PrintJSON;