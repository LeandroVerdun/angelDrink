import React, { useState } from 'react';
import defaultImage from '../img/deafult.png'

export const ChangeImg = () => {
    const [selectedImage, setSelectedImage] = useState(defaultImage);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="carta-imagen">
                
                {selectedImage && (
                    <div className="preview-image">
                        <img className="preview-img" src={selectedImage} alt="Selected" />
                    </div>
                )}
                
                <input placeholder=" " type="file" className='input-image' onChange={handleImageChange} />
                
            </div>
        </>
    );
};
