// import { render } from '@testing-library/react';
import React from 'react'
import {IState as IProps} from '../App'
  
//react functional components with the type of IProps
const List: React.FC<IProps> = ({people}) => {

    //needs to define a return element, otherwise void[] is inferred
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                <div className="List-header">
                    <img src={person.img} alt={person.description} className="List-img"/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}
export default List