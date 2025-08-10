import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { FiUser, FiMail, FiCalendar, FiEdit2, FiSave, FiX } from 'react-icons/fi';

const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await updateUserProfile(formData.displayName, formData.photoURL);
            setMessage('Profile updated successfully!');
            setIsEditing(false);

            // Clear message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            setMessage('Failed to update profile. Please try again.');
            console.error('Profile update error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            displayName: user?.displayName || '',
            photoURL: user?.photoURL || ''
        });
        setIsEditing(false);
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Please log in to view your profile
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="relative">
                                <img
                                    src={user.photoURL || 'https://via.placeholder.com/150x150?text=User'}
                                    alt={user.displayName || 'User'}
                                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                                />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                                <h1 className="text-3xl font-bold text-white">
                                    {user.displayName || 'User Profile'}
                                </h1>
                                <p className="text-blue-100 mt-1">
                                    Member since {new Date(user.metadata.creationTime).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                        {message && (
                            <div className={`mb-6 p-4 rounded-lg ${message.includes('successfully')
                                    ? 'bg-green-100 border border-green-400 text-green-700'
                                    : 'bg-red-100 border border-red-400 text-red-700'
                                }`}>
                                {message}
                            </div>
                        )}

                        {/* Profile Information */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Basic Info */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Basic Information
                                    </h2>
                                    {!isEditing && (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center"
                                        >
                                            <FiEdit2 className="w-4 h-4 mr-1" />
                                            Edit
                                        </button>
                                    )}
                                </div>

                                {isEditing ? (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Display Name
                                            </label>
                                            <input
                                                type="text"
                                                name="displayName"
                                                value={formData.displayName}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                placeholder="Enter your display name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Profile Photo URL
                                            </label>
                                            <input
                                                type="url"
                                                name="photoURL"
                                                value={formData.photoURL}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                placeholder="https://example.com/photo.jpg"
                                            />
                                        </div>

                                        <div className="flex space-x-3">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50"
                                            >
                                                <FiSave className="w-4 h-4 mr-2" />
                                                {loading ? 'Saving...' : 'Save Changes'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCancel}
                                                className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                            >
                                                <FiX className="w-4 h-4 mr-2" />
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <FiUser className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Display Name</p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {user.displayName || 'Not set'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <FiMail className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Email Address</p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <FiCalendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Account Created</p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <FiCalendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Last Sign In</p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {new Date(user.metadata.lastSignInTime).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Account Statistics */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                    Account Statistics
                                </h2>
                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                        <h3 className="font-medium text-blue-900 dark:text-blue-100">
                                            Account Status
                                        </h3>
                                        <p className="text-blue-700 dark:text-blue-300 mt-1">
                                            {user.emailVerified ? '✅ Verified' : '⚠️ Not Verified'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                                        <h3 className="font-medium text-green-900 dark:text-green-100">
                                            Provider
                                        </h3>
                                        <p className="text-green-700 dark:text-green-300 mt-1">
                                            {user.providerData[0]?.providerId === 'google.com' ? 'Google' : 'Email/Password'}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
                                        <h3 className="font-medium text-purple-900 dark:text-purple-100">
                                            User ID
                                        </h3>
                                        <p className="text-purple-700 dark:text-purple-300 mt-1 text-sm font-mono break-all">
                                            {user.uid}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
