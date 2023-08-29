import { useState } from 'react';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully');
          // You can perform further actions after successful upload
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploadForm;



// const formData = new FormData();
//         formData.append('firstname', firstnameRef.current.value);
//         formData.append('lastname', lastnameRef.current.value);
//         formData.append('gender', genderRef.current.value);
//         formData.append('dateofbirth', dateofbirthRef.current.value);
//         formData.append('phone', phoneRef.current.value);
//         formData.append('indigenefile', indigenefileRef.current.value);
//         formData.append('residentialaddress', residentialaddressRef.current.value);
//         formData.append('district', districtRef.current.value);
//         formData.append('qualification', qualificationRef.current.value);
//         formData.append('yearofgraduation', yearofgraduationRef.current.value);
//         formData.append('course', courseRef.current.value);
//         formData.append('certificatefile', certificatefileRef.current.value);
//         formData.append('idtype', idtypeRef.current.value);
//         formData.append('idnumber', idnumberRef.current.value);
//         formData.append('idfile', idfileRef.current.value);