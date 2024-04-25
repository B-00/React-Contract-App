import { useState, useEffect, DragEvent } from 'react'
import FileUploadIcon from '../../assets/upload-alt-3-svgrepo-com.svg'
import './UploadCert.css'

export default function UploadCert() {
  const [files, setFiles] = useState<File[]>([])

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setFiles(Array.from(e.dataTransfer.files))
  }

  useEffect(() => {
    console.log(Array.from(files))
  }, [files])

  return (
    <div className="upload-container">
      <div className="upload-layout">
        <div className="drop-layout" onDragOver={handleDragOver} onDrop={handleDrop}>
          <img src={FileUploadIcon} alt="File Upload Icon" width="60rem" height="60rem"/>
          <h1>Drag and Drop Files to Upload</h1>
          <h2>OR</h2>
          <button className="drop-btn">Browse Files</button>
        </div>
        <ul>
          {files.map((entry, idx) => (
            <li key={idx}>
              <ul style={{margin: '0 1rem'}}>
                <li>{entry.name}</li>
                <li>{entry.size}</li>
                <li>{entry.type}</li>
                <li>{entry.lastModified}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
