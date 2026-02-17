// ========================================
// OTP (One-Time Password) SYSTEM
// Secure password generation and validation
// ========================================

class OTPSystem {
    constructor() {
        this.storageKey = 'client_portfolio_otp';
        this.sessionKey = 'client_portfolio_authenticated';
    }

    // Generate a random 6-digit OTP
    generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Create and store OTP with expiration (20 minutes)
    createOTP() {
        const otp = this.generateOTP();
        const expiresAt = Date.now() + (20 * 60 * 1000); // 20 minutes from now
        
        const otpData = {
            code: otp,
            expiresAt: expiresAt,
            createdAt: Date.now()
        };

        // Store in localStorage (encrypted with simple obfuscation)
        localStorage.setItem(this.storageKey, this.encrypt(JSON.stringify(otpData)));
        
        return {
            code: otp,
            expiresIn: '20 minutes',
            expiresAt: new Date(expiresAt).toLocaleString()
        };
    }

    // Validate OTP
    validateOTP(inputCode) {
        const storedData = localStorage.getItem(this.storageKey);
        
        if (!storedData) {
            return { valid: false, message: 'No active OTP found. Please contact administrator.' };
        }

        try {
            const otpData = JSON.parse(this.decrypt(storedData));
            
            // Check if expired
            if (Date.now() > otpData.expiresAt) {
                localStorage.removeItem(this.storageKey);
                return { valid: false, message: 'OTP has expired. Please request a new one.' };
            }

            // Check if code matches
            if (inputCode === otpData.code) {
                // Create session
                sessionStorage.setItem(this.sessionKey, 'true');
                return { valid: true, message: 'Access granted!' };
            } else {
                return { valid: false, message: 'Invalid password. Please try again.' };
            }
        } catch (error) {
            return { valid: false, message: 'Error validating password.' };
        }
    }

    // Check if user is authenticated
    isAuthenticated() {
        return sessionStorage.getItem(this.sessionKey) === 'true';
    }

    // Logout
    logout() {
        sessionStorage.removeItem(this.sessionKey);
    }

    // Simple encryption (base64 + reverse for basic obfuscation)
    encrypt(text) {
        return btoa(text.split('').reverse().join(''));
    }

    // Simple decryption
    decrypt(encoded) {
        return atob(encoded).split('').reverse().join('');
    }

    // Get remaining time for current OTP
    getRemainingTime() {
        const storedData = localStorage.getItem(this.storageKey);
        
        if (!storedData) {
            return null;
        }

        try {
            const otpData = JSON.parse(this.decrypt(storedData));
            const remaining = otpData.expiresAt - Date.now();
            
            if (remaining <= 0) {
                localStorage.removeItem(this.storageKey);
                return null;
            }

            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            
            return { minutes, seconds, milliseconds: remaining };
        } catch (error) {
            return null;
        }
    }

    // Delete current OTP
    deleteOTP() {
        localStorage.removeItem(this.storageKey);
        this.logout();
    }
}

// Initialize OTP System
const otpSystem = new OTPSystem();
