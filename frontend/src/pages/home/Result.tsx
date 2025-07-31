import { Link } from "react-router-dom"
import './Result.css';

function Result() {
    return (
        <div className="result-container">
            <div className="result-card">
                <h1 className="result-title">Scan Result</h1>

                <div className="result-image">
                    {/* Placeholder for the scanned image */}
                    <img
                        src="https://via.placeholder.com/300x200.png?text=Scanned+Item"
                        alt="Scanned item"
                    />
                </div>

                <div className="item-info">
                    <h2 className="item-name">Plastic Bottle</h2>
                    <p className="item-category">Category: <span className="category-tag">Recyclable</span></p>
                </div>

                <div className="llm-explanation">
                    <h3>Why?</h3>
                    <p>
                        This item is recyclable because it is made from PET plastic, which is commonly accepted in most municipal recycling programs.
                    </p>
                </div>

                <Link to="/home/centers">
                    <button className="center-button">Find Nearby Centers</button>
                </Link>
            </div>
        </div>
    )
}

export default Result