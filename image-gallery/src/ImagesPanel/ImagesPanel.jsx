import { useEffect, useState } from "react";

const DATA_SOURCE = "http://167.71.69.158";

export function ImagesPanel() {
    const [images, setImages] = useState([]);

    const fetchData = () => {
        fetch("http://167.71.69.158/static/test.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            setImages(data.images);
        });
    }

    const downloadImage = (
        filePath
      ) => {
        console.log(DATA_SOURCE + filePath)
        fetch(DATA_SOURCE + filePath)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            console.log(url);
    
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = "randomName.png"
    
            document.body.appendChild(downloadLink);
    
            downloadLink.click();
    
            downloadLink.parentNode.removeChild(downloadLink);
          });
      };

    useEffect(() => {
        fetchData()
    }, []);

    if (!images){
        return null 
    }

    return (
        <div>
            {images.length > 0 && (
                <ul>
                    {images.map(image => (
                        <div>
                            <img src={DATA_SOURCE + image["image_url"]} width="300px"></img>
                            <button onClick={() => downloadImage(image["image_url"])}>Download</button>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}