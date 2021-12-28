import React from 'react'
import ChracterItem from './ChracterItem'

const CharacterGrid = ({items,loading}) => {
    return loading ? ( <h2>Loading...</h2> ) : (
        <section className="cards">

            {
                items.map( (item) =>(
                    <ChracterItem key={item.char_id} item={item}></ChracterItem>
                ))
            }


        </section>
        )
}

export default CharacterGrid
