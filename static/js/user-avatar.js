// Global JavaScript for user avatar management across all pages
(function() {
    'use strict';

    // Function to get user info from URL parameters
    function getUserFromParams() {
        const params = new URLSearchParams(window.location.search);
        const username = params.get('username');
        const avatar = params.get('avatar');
        const updated = params.get('updated');
        
        return { username, avatar, updated };
    }

    // Function to get user data from localStorage
    function getUserData(username) {
        if (!username) return null;
        const storedUser = localStorage.getItem(`user_${username}`);
        if (storedUser) {
            return JSON.parse(storedUser);
        }
        return null;
    }

    // Function to get user avatar from localStorage
    function getUserAvatar(username) {
        const userData = getUserData(username);
        return userData ? userData.avatar_url : null;
    }

    // Function to update header avatar and username
    function updateHeaderAvatar(username, avatarUrl) {
        const userDropdown = document.getElementById('userDropdown');
        
        if (userDropdown && username) {
            // Update the dropdown trigger to show user info
            if (avatarUrl) {
                const avatarImg = `<img src="${avatarUrl}" alt="Avatar" class="rounded-circle me-2" style="width: 40px; height: 40px; object-fit: cover; border: 2px solid #81c408;">`;
                const usernameSpan = `<span id="headerUsername" class="ms-2">${username}</span>`;
                userDropdown.innerHTML = avatarImg + usernameSpan;
            } else {
                userDropdown.innerHTML = `<i class="fas fa-user fa-2x"></i> <span id="headerUsername" class="ms-2">${username}</span>`;
            }
            
            // Update dropdown menu to show Profile/Logout instead of Login/Register
            updateUserDropdownMenu(username);
            
            // Hide login/register menu items and show user is logged in
            const loginMenu = document.getElementById('loginMenu');
            const registerMenu = document.getElementById('registerMenu');
            if (loginMenu) loginMenu.style.display = 'none';
            if (registerMenu) registerMenu.style.display = 'none';
        }
    }

    // Function to update user dropdown menu
    function updateUserDropdownMenu(username) {
        const dropdownMenu = document.querySelector('.dropdown-menu[aria-labelledby="userDropdown"]');
        if (dropdownMenu) {
            dropdownMenu.innerHTML = `
                <li><a class="dropdown-item" href="/profile/?username=${username}"><i class="fas fa-user-circle me-2"></i>Profile</a></li>
                <li><a class="dropdown-item" href="/"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
            `;
        }
    }

    // Function to save user data to localStorage
    function saveUserData(username, avatarUrl, fullName) {
        if (username) {
            localStorage.setItem(`user_${username}`, JSON.stringify({
                username: username,
                avatar_url: avatarUrl || '',
                full_name: fullName || '',
                updated_at: new Date().toISOString()
            }));
        }
    }

    // Function to show success notification for profile update
    function showProfileUpdateSuccess() {
        const notification = document.createElement('div');
        notification.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3 shadow';
        notification.style.zIndex = 9999;
        notification.innerHTML = '<strong>Success!</strong> Profile updated successfully! Your changes are now visible across all pages.';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    }

    // Initialize header avatar on page load
    document.addEventListener('DOMContentLoaded', function() {
        const urlData = getUserFromParams();
        const username = urlData.username;
        
        if (username) {
            let avatarUrl = urlData.avatar;
            
            // If no avatar in URL, try to get from localStorage
            if (!avatarUrl) {
                const userData = getUserData(username);
                avatarUrl = userData ? userData.avatar_url : null;
            }
            
            // Update header with user info
            updateHeaderAvatar(username, avatarUrl);
            
            // Save to localStorage if not already there or if updated
            if (urlData.updated === '1' || !getUserData(username)) {
                saveUserData(username, avatarUrl);
                
                // Show success message if this is after a profile update
                if (urlData.updated === '1') {
                    setTimeout(() => {
                        showProfileUpdateSuccess();
                    }, 500);
                }
            }
        }
    });

    // Listen for storage changes (when avatar is updated on another page/tab)
    window.addEventListener('storage', function(e) {
        if (e.key && e.key.startsWith('user_')) {
            try {
                const userData = JSON.parse(e.newValue);
                if (userData && userData.username) {
                    updateHeaderAvatar(userData.username, userData.avatar_url);
                }
            } catch (error) {
                console.log('Error parsing storage data:', error);
            }
        }
        
        // Handle user update trigger for cross-tab synchronization
        if (e.key === 'user_update_trigger') {
            // Find the current user and refresh their data
            const params = new URLSearchParams(window.location.search);
            const currentUser = params.get('username');
            if (currentUser) {
                const userData = getUserData(currentUser);
                if (userData) {
                    updateHeaderAvatar(userData.username, userData.avatar_url);
                }
            }
        }
    });

    // Listen for page visibility change to sync data when tab becomes active
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            const params = new URLSearchParams(window.location.search);
            const username = params.get('username');
            if (username) {
                const userData = getUserData(username);
                if (userData) {
                    updateHeaderAvatar(userData.username, userData.avatar_url);
                }
            }
        }
    });

    // Make functions globally available
    window.updateHeaderAvatar = updateHeaderAvatar;
    window.saveUserData = saveUserData;
    window.getUserAvatar = getUserAvatar;
    window.getUserData = getUserData;

})();
