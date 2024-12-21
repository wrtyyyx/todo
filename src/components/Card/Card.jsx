import React from 'react';
import './Card.css'

// eslint-disable-next-line react/prop-types
const Card = ({id, text,removeTodo}) => {

    return (
        <>
            <div className="card">
                <div className="header">
    <span className="icon">
      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"></path>
      </svg>
    </span>
                    <p className="alert">{id}</p>
                </div>

                <div className="message">
                    Task: {text}
                    <hr/>
                </div>

                <div className="actions">
                    <button className="mark-as-read" onClick={() => removeTodo(id)}>
                        Mark as done
                    </button>
                </div>
            </div>

        </>
    );
};

export default Card;