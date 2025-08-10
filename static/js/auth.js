// API Configuration
const API_BASE_URL = 'http://127.0.0.1:8000/api/auth';

// API Helper functions
class AuthAPI {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

    // Get CSRF Token for Django
    async getCSRFToken() {
        try {
            const response = await fetch('/api/csrf/', {
                credentials: 'include'
            });
            const data = await response.json();
            return data.csrfToken;
        } catch (error) {
            console.log('CSRF token not needed for session auth');
            return null;
        }
    }

    // Register new user
    async register(userData) {
        try {
            const response = await fetch(`${this.baseURL}/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data: data };
            } else {
                return { success: false, errors: data };
            }
        } catch (error) {
            return { success: false, errors: { network: 'Network error occurred' } };
        }
    }

    // Login user
    async login(credentials) {
        try {
            const response = await fetch(`${this.baseURL}/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(credentials)
            });

            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data: data };
            } else {
                return { success: false, errors: data };
            }
        } catch (error) {
            return { success: false, errors: { network: 'Network error occurred' } };
        }
    }

    // Logout user
    async logout() {
        try {
            const response = await fetch(`${this.baseURL}/logout/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data: data };
            } else {
                return { success: false, errors: data };
            }
        } catch (error) {
            return { success: false, errors: { network: 'Network error occurred' } };
        }
    }

    // Check if user is authenticated
    async checkAuth() {
        try {
            const response = await fetch(`${this.baseURL}/check-auth/`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                return { success: true, data: data };
            } else {
                return { success: false, authenticated: false };
            }
        } catch (error) {
            return { success: false, authenticated: false };
        }
    }

    // Get user profile
    async getProfile() {
        try {
            const response = await fetch(`${this.baseURL}/profile/`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                return { success: true, data: data };
            } else {
                return { success: false, errors: 'Failed to get profile' };
            }
        } catch (error) {
            return { success: false, errors: { network: 'Network error occurred' } };
        }
    }
}

// Create global instance
const authAPI = new AuthAPI();

// Utility functions for form handling
function showError(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger mt-2';
    errorDiv.textContent = message;
    
    // Remove existing error messages
    const existingError = element.parentNode.querySelector('.alert-danger');
    if (existingError) {
        existingError.remove();
    }
    
    element.parentNode.appendChild(errorDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

function showSuccess(element, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-2';
    successDiv.textContent = message;
    
    // Remove existing messages
    const existingMessages = element.parentNode.querySelectorAll('.alert');
    existingMessages.forEach(msg => msg.remove());
    
    element.parentNode.appendChild(successDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 3000);
}

function clearMessages(form) {
    const alerts = form.querySelectorAll('.alert');
    alerts.forEach(alert => alert.remove());
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AuthAPI, authAPI };
}
