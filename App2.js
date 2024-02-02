import React from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState([{ director: '', movie: '' }]);
  
  const handleAddRow = () => {
    setFormData([...formData, { director: '', movie: '' }]);
  };

  const handleRemoveRow = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  return (
    <div className="form-page">
      <h2><strong>Directors and Movies</strong></h2>
      <table>
        <thead>
          <tr>
            <th>Director</th>
            <th>Movie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={data.director}
                  onChange={(e) => handleInputChange(index, 'director', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.movie}
                  onChange={(e) => handleInputChange(index, 'movie', e.target.value)}
                />
              </td>
              <td>
                <button onClick={handleAddRow}>Add</button>
                {formData.length > 1 && <button onClick={() => handleRemoveRow(index)}>Remove</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormPage;
