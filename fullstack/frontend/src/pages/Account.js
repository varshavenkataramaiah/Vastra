import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { API_BASE_URL } from '../api';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [profile, setProfile] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    mobile: currentUser?.mobile || '',
    gender: currentUser?.gender || '',
    dateOfBirth: currentUser?.dateOfBirth || '',
    location: currentUser?.location || '',
    alternateMobile: currentUser?.alternateMobile || '',
    hintName: currentUser?.hintName || '',
  });

  useEffect(() => {
    const token = localStorage.getItem('vastraToken');
    if (!token || currentUser) return;

    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Unable to load profile');
        }

        dispatch({ type: 'SET_CURRENT_USER', payload: data.user });
      } catch (error) {
        localStorage.removeItem('vastraToken');
        dispatch({ type: 'LOGOUT_USER' });
      }
    };

    fetchProfile();
  }, [currentUser, dispatch]);

  useEffect(() => {
    setProfile({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      mobile: currentUser?.mobile || '',
      gender: currentUser?.gender || '',
      dateOfBirth: currentUser?.dateOfBirth || '',
      location: currentUser?.location || '',
      alternateMobile: currentUser?.alternateMobile || '',
      hintName: currentUser?.hintName || '',
    });
  }, [currentUser]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
    navigate('/');
  };

  const handleSave = (event) => {
    event.preventDefault();
    setSaveError('');
    setIsSaving(true);

    const token = localStorage.getItem('vastraToken');
    fetch(`${API_BASE_URL}/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profile),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Unable to update profile');
        }
        dispatch({ type: 'SET_CURRENT_USER', payload: data.user });
        setIsEditing(false);
      })
      .catch((error) => {
        setSaveError(error.message || 'Unable to update profile');
      })
      .finally(() => setIsSaving(false));
  };

  return (
    <>
      <Navbar />
      <main className="container account-page py-4">
        {currentUser ? (
          <>
            <header className="account-heading">
              <h1>Account</h1>
              <p>Vastra User</p>
            </header>
            <div className="account-layout">
              <aside className="account-sidebar">
                <Link className="account-sidebar-active" to="/account">Overview</Link>
                <span className="account-sidebar-label">Orders</span>
                <Link to="/orders">Orders &amp; Returns</Link>
                <span className="account-sidebar-label">Credits</span>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart">Shopping Bag</Link>
                <span className="account-sidebar-label">Account</span>
                <Link className="account-sidebar-active" to="/account">Profile</Link>
                <button type="button" onClick={handleLogout}>Logout</button>
              </aside>
              <section className="account-details-panel">
                <div className="account-details-header">
                  <div>
                    <h2>Profile Details</h2>
                    <p>Manage your personal information</p>
                  </div>
                  {!isEditing && <button type="button" className="account-edit-button" onClick={() => setIsEditing(true)}>Edit</button>}
                </div>
                {isEditing ? (
                  <form className="account-edit-form" onSubmit={handleSave}>
                    {saveError && <p className="auth-error" role="alert">{saveError}</p>}
                    <label htmlFor="account-name">Full Name</label>
                    <input id="account-name" value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} required />
                    <label htmlFor="account-email">Email ID</label>
                    <input id="account-email" type="email" value={profile.email} onChange={(event) => setProfile({ ...profile, email: event.target.value })} required />
                    <label htmlFor="account-mobile">Mobile Number</label>
                    <input id="account-mobile" type="tel" value={profile.mobile} onChange={(event) => setProfile({ ...profile, mobile: event.target.value })} />
                    <label htmlFor="account-gender">Gender</label>
                    <select id="account-gender" value={profile.gender} onChange={(event) => setProfile({ ...profile, gender: event.target.value })}>
                      <option value="">Select gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                    <label htmlFor="account-date-of-birth">Date of Birth</label>
                    <input id="account-date-of-birth" type="date" value={profile.dateOfBirth} onChange={(event) => setProfile({ ...profile, dateOfBirth: event.target.value })} />
                    <label htmlFor="account-location">Location</label>
                    <input id="account-location" value={profile.location} onChange={(event) => setProfile({ ...profile, location: event.target.value })} />
                    <label htmlFor="account-alternate-mobile">Alternate Mobile</label>
                    <input id="account-alternate-mobile" type="tel" value={profile.alternateMobile} onChange={(event) => setProfile({ ...profile, alternateMobile: event.target.value })} />
                    <label htmlFor="account-hint-name">Hint Name</label>
                    <input id="account-hint-name" value={profile.hintName} onChange={(event) => setProfile({ ...profile, hintName: event.target.value })} />
                    <div className="account-edit-actions">
                      <button type="submit" className="btn btn-dark" disabled={isSaving}>{isSaving ? 'Saving...' : 'Save'}</button>
                      <button type="button" className="btn btn-outline-dark" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="profile-fields">
                    <div><span>Full Name</span><strong>{currentUser.name || '- not added -'}</strong></div>
                    <div><span>Mobile Number</span><strong>{currentUser.mobile || '- not added -'}</strong></div>
                    <div><span>Email ID</span><strong>{currentUser.email || '- not added -'}</strong></div>
                    <div><span>Gender</span><strong>{currentUser.gender || '- not added -'}</strong></div>
                    <div><span>Date of Birth</span><strong>{currentUser.dateOfBirth || '- not added -'}</strong></div>
                    <div><span>Location</span><strong>{currentUser.location || '- not added -'}</strong></div>
                    <div><span>Alternate Mobile</span><strong>{currentUser.alternateMobile || '- not added -'}</strong></div>
                    <div><span>Hint Name</span><strong>{currentUser.hintName || '- not added -'}</strong></div>
                  </div>
                )}
              </section>
            </div>
          </>
        ) : (
          <section className="empty-state text-center py-5">
            <h1 className="page-title">Sign in to view your account</h1>
            <p className="text-muted">Manage your profile and keep track of your orders.</p>
            <Link className="btn btn-dark me-2" to="/login">Login</Link>
            <Link className="btn btn-outline-dark" to="/signup">Create account</Link>
          </section>
        )}
      </main>
    </>
  );
}

export default Account;