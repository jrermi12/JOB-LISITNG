import ClipLoader from "react-spinners/ClipLoader"
import React from 'react'
const override = {
    display: 'block',
    margin: '100px auto'
}
const Spinner = ({ Loading }) => {
    return (
        <ClipLoader
            color="#43338ca"
            loading={Loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinner