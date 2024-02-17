import React from "react";


function List({info, upcoming, recent}){
    return (
        <ul>
            {info.map((person) => {
                return (
                    <li>
                        <div className="flex" style={{backgroundColor: upcoming ? "#ffe66d" : recent ? "#fa9be8" : "none"}}>
                            <img src={person.img} alt="img" />
                            <div className="title">
                                <h3 className="name">{person.name}</h3>
                                <h4 className="age">{person.birthday}</h4>
                            </div>
                        </div>
                    </li>
            )})}
        </ul>
    )
}

export default List;