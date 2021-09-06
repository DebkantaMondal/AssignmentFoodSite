import React from 'react';

import Recipe1 from '../assets/images/recipe1.jpeg';
import Recipe2 from '../assets/images/recipe2.jpeg';
import Recipe3 from '../assets/images/recipe3.jpeg';
import Recipe4 from '../assets/images/bThali.jpeg';

function Card() {
    return (
        <div className="deck_cards">
            <div className="card">
                <img src={Recipe1} />
                <div className="card-body">
                    <h2>Chicken Biriyani</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5>Price : ₹ 200/-</h5>
                </div>
            </div>
            <div className="card">
                <img src={Recipe2} />
                <div className="card-body">
                    <h2>Shami Kabab Thali</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5>Price : ₹ 800/-</h5>
                </div>
            </div>
            <div className="card">
                <img src={Recipe3} />
                <div className="card-body">
                    <h2>Fried Rice Thali</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5>Price : ₹ 700/-</h5>
                </div>
            </div>
            <div className="card">
                <img src={Recipe4} />
                <div className="card-body">
                    <h2>Bangali Special Thali</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5>Price : ₹ 600/-</h5>
                </div>
            </div>
        </div>
    )
}
export default Card;