import React from 'react';

const UserProfile = ({ name, age, isPremium }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      {isPremium && (
        <div style={{ 
          backgroundColor: 'gold', 
          color: 'black', 
          padding: '5px 10px', 
          borderRadius: '5px', 
          display: 'inline-block',
          marginTop: '10px',
          fontWeight: 'bold'
        }}>
          Premium Member
        </div>
      )}
    </div>
  );
};
export default UserProfile;