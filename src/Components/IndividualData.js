import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.pin}</th>
            <th>{individualData.age}</th>
            <th>{individualData.designation}</th>
            <th>{individualData.salary}</th>
        </tr>
    )
}
