import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="profile-bio-container">
      <div className="profile-section">
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4 className="profile-heading">Tags Watched</h4>
            <div className="tags-list">
              {currentProfile?.tags.map((tag) => (
                <p key={tag} className="tag">{tag}</p>
              ))}
            </div>
          </>
        ) : (
          <p className="empty-text">0 tags watched</p>
        )}
      </div>
      <div className="profile-section">
        {currentProfile?.about ? (
          <>
            <h4 className="profile-heading">About</h4>
            <p className="profile-description">{currentProfile?.about}</p>
          </>
        ) : (
          <p className="empty-text">No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;