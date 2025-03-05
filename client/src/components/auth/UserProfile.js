import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <h2>Perfil de Usuario</h2>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* ...otros campos de usuario... */}
        </div>
    );
};

export default UserProfile;
