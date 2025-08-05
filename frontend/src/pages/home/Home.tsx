import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../components/node_base_url";

function Home() {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');

    const [image, setImage] = useState<File | null>(null);
    const [imagePrev, setImagePrev] = useState<string | null>('');

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${base_url}/verify`, {
                withCredentials: true
            })
            .then((res) => {
                if (res.data.Status === "Sucess") {
                    setAuth(true);
                } else {
                    setAuth(false);
                    setMessage(res.data.Error);
                }
            })
            .catch(() => {
                setAuth(false);
                setMessage("Verification failed.");
            });
    }, []);


    const uploadGetResult = async () => {
        if (!image) return;

        const formdata = new FormData();
        formdata.append("file", image);
        formdata.append("upload_preset", "recycle-assist");
        formdata.append("folder", "recycle-assist");

        try {
            const cloudRes = await fetch(
                'https://api.cloudinary.com/v1_1/dfr9yu2mi/upload',
                {
                    method: "POST",
                    body: formdata
                }
            );

            const data = await cloudRes.json()
            // console.log("Uploaded to Cloudinary:", data.url);


            axios.post(`${base_url}/analyse`, { imageurl: data.url }, { withCredentials: true })
            .then(res=>{
                if(res.data.Status === "Sucess" ){
                    navigate(`result/${res.data.id}`)
                }else{
                    console.log(res.data.Error)
                }
            })





        } catch (err) {
            console.error("Error during upload or analysis:", err);
        }
    };

    return (
        <div className="scan-container">
            {auth ? (
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
                            onChange={e => {
                                if (e.target.files && e.target.files.length > 0) {
                                    const file = e.target.files[0];
                                    setImage(file);
                                    setImagePrev(URL.createObjectURL(file));
                                }
                            }}
                        />
                    </div>

                    <div className="image-preview-box">
                        {imagePrev ? (
                            <img src={imagePrev} />
                        ) : (
                            <p className="preview-placeholder">Image preview will appear here.</p>
                        )}
                    </div>

                    <button onClick={uploadGetResult} className="scan-button">Scan Item</button>
                </div>
            ) : (
                <div className="scan-card">
                    <Link to="/">
                        <h1 className="scan-title">{message}</h1>
                        <button className="scan-button">Login</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Home;
