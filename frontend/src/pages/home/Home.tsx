import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="scan-container">
            <div className="scan-card">
                <h1 className="scan-title">Scan Waste Item</h1>

                <div className="upload-section">
                    <label htmlFor="image-upload" className="upload-label">
                        Upload Image
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="upload-input"
                    />
                </div>

                <div className="image-preview-box">
                    {/* In logic: Show preview here if image is uploaded */}
                    <p className="preview-placeholder">Image preview will appear here.</p>
                </div>
                <Link to="result">
                <button className="scan-button">Scan Item</button>
                </Link>
            </div>
        </div>
    )
}

export default Home