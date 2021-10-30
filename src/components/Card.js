import React from "react";

const Card = (props) => {
    // We can add name, email and id directly to 
    // parameter but i prefer like this
    const { name, email, id } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;