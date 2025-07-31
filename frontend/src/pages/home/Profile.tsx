import "./Profile.css";

function Profile() {
    return (
        <div className="profile-container">
            <h1 className="profile-title">Your Profile</h1>

            <div className="profile-card">
                <h2>User Information</h2>
                <p><strong>Username:</strong> eco_user123</p>
                <p><strong>Email:</strong> eco_user@example.com</p>
                <p><strong>Location:</strong> Mangalore, Karnataka</p>
            </div>

            <div className="badges-section">
                <h2>Achievements</h2>
                <div className="badges-list">
                    <div className="badge">♻️ Plastic Buster</div>
                    <div className="badge">🧠 Smart Sorter</div>
                    <div className="badge">🌍 Eco Warrior</div>
                </div>
            </div>

            <div className="history-section">
                <h2>Scan History</h2>
                <div className="history-list">
                    <div className="history-item">
                        <img src="https://via.placeholder.com/80" alt="Scanned" />
                        <div className="history-details">
                            <p><strong>Item:</strong> Plastic Bottle</p>
                            <p><strong>Category:</strong> Recyclable</p>
                            <p><strong>Date:</strong> 29 Jul 2025</p>
                        </div>
                    </div>

                    <div className="history-item">
                        <img src="https://via.placeholder.com/80" alt="Scanned" />
                        <div className="history-details">
                            <p><strong>Item:</strong> Old Charger</p>
                            <p><strong>Category:</strong> E-Waste</p>
                            <p><strong>Date:</strong> 25 Jul 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
