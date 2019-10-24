import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from "../components/Title";
// get all unique values
const getUniqueSelectors = (items, value) => {
    return [...new Set(items.map(item=>item[value]))];
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, 
        price, minPrice, maxPrice, 
        minSize, maxSize, breakfast,
        pets
    } = context 
    // get Uniques types
    let roomTypes = getUniqueSelectors(rooms, 'type');
    roomTypes = ['all' ,...roomTypes];
    //map to jsx 
    roomTypes = roomTypes.map((item, index) => {
        return <option value ={item} key={index}> {item} </option> 
    })
    let people = getUniqueSelectors(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title = "search rooms"/>
            <form className="filter-form">
                {/* select type */}
                    <div className ="form-group">
                        <label htmlFor="type"> room type</label>
                        <select 
                            name="type" 
                            id="type" 
                            className = "form-control"
                            onChange={handleChange}
                            value = {type}
                            >
                            {roomTypes}
                        </select>
                    </div>
                {/* end of select type */}
                {/* select guest */}
                        <div className ="form-group">
                            <label htmlFor="capacity">Guest</label>
                            <select 
                                name="capacity" 
                                id="capacity" 
                                className = "form-control"
                                onChange={handleChange}
                                value = {capacity}
                                >
                                {people}
                            </select>
                        </div>
                {/* end of guest select */}
                {/** Room Price */}
                    <div className="form-group">
                        <label htmlFor="price">
                            room price: ${price}
                        </label>
                        <input type="range" name="price" min={minPrice} 
                               max={maxPrice} value={price} onChange={handleChange} className = "form-control">
                        </input>
                    </div>
                {/** End of Room Price*/}
                {/** size */}
                    <div className = "form-group">
                        <label htmlFor="size">
                            room size
                        </label>
                        <div className="size-inputs">
                            <input 
                            type="number" 
                            name="minSize" 
                            id="size"
                            value={minSize} 
                            onChange={handleChange} 
                            className={"size-input"}/>

                            <input type="number" 
                            name="maxSize" 
                            id="size"
                            value={maxSize} 
                            onChange={handleChange} 
                            className={"size-input"}/> 
                        </div>
                    </div>        
                {/** end size */}
                {/** extras */}
                    <div className= "single-extra">
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange} 
                        />
                        <label htmlFor="breakfast"> breakfast </label>
                    </div>
                    <div className= "single-extra">
                        <input 
                            type="checkbox" 
                            name="pets" 
                            id="pets"
                            checked={pets}
                            onChange={handleChange} 
                        />
                        <label htmlFor="pets"> pets </label>
                    </div>
                    
                    {/** end extras */}
            </form>
        </section>
    )
}
