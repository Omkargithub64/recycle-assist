import './Centers.css';


function Centers() {
    return (
        <div className="centers-container">
            <div className="centers-header">
                <h1>Nearby Centers</h1>
            </div>

            <div className="centers-list">
                {/* Sample Center Card 1 */}
                <div className="center-card">
                    <h3>Green Earth Recycling</h3>
                    <p><strong>Type:</strong> Recycle</p>
                    <p>12 Eco Street, Mangalore</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link">
                        View on Map
                    </a>
                </div>

                {/* Sample Center Card 2 */}
                <div className="center-card">
                    <h3>Second Life Store</h3>
                    <p><strong>Type:</strong> Donate / Sell</p>
                    <p>45 Reuse Lane, Mangalore</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link">
                        View on Map
                    </a>
                </div>

                {/* Add more center cards here... */}
            </div>
        </div>
    )
}

export default Centers