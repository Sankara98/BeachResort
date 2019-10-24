import React, { Component } from 'react'
import defautlBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defautlBcg,
        }
    }

    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);

        if(!room) {
            return <div className="error">
                <h3> No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        const [mainImg,...defautlImg] = images;

        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner hero="roomHero" title={`${name} room`}>
                        <Link to="./rooms" className="btn-primary"> 
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className= "single-room-images">
                        {defautlImg.map((item, index) => {
                            return <img key={index} src ={item} alt={name}/> 
                        })}
                        <div className="single-room-info"> 
                            <article className="desc"> 
                                <h3>
                                    details
                                </h3>
                                <p>{description}</p>
                                <article>
                                    <h3>info</h3>
                                    <h6> price : ${price} </h6>
                                    <h6> size : ${size} </h6>
                                    <h6>  max capacity :{" "} {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                                    <h6> {pets? "pets allowed": "no pets allowed"}</h6>
                                    <h6> {breakfast && "free breakfast included"}</h6>
                                </article>
                            </article>   
                        </div>
                    </div>
                </section>
                <section className= "room-extras"> 
                    <h6>
                        extras
                    </h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

