import React from 'react'
const ChracterItem = ({item}) => {
    console.log(item)
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong>{item.portrayed}
                        </li>
                        <li>
                            <strong>Nick Name:</strong>{item.nickname}
                        </li>
                        <li>
                            <strong>Birth Date:</strong>{item.birhtday}
                        </li>
                        <li>
                            <strong>Status:</strong>{item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChracterItem
