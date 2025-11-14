/**
 * Centralized authentication error handler
 * Maps Firebase auth error codes to user-friendly messages
 */

export interface AuthErrorInfo {
  title: string;
  message: string;
}

export function getAuthErrorMessage(errorCode: string): AuthErrorInfo {
  const errorMap: Record<string, AuthErrorInfo> = {
    // Email/Password errors
    'auth/email-already-in-use': {
      title: 'Email Already Registered',
      message: 'This email is already associated with an account. Please sign in or use a different email.',
    },
    'auth/invalid-email': {
      title: 'Invalid Email',
      message: 'Please enter a valid email address.',
    },
    'auth/user-not-found': {
      title: 'Account Not Found',
      message: 'No account exists with this email. Please check your email or sign up.',
    },
    'auth/wrong-password': {
      title: 'Incorrect Password',
      message: 'The password you entered is incorrect. Please try again.',
    },
    'auth/weak-password': {
      title: 'Weak Password',
      message: 'Password should be at least 6 characters long.',
    },
    'auth/invalid-credential': {
      title: 'Invalid Credentials',
      message: 'The email or password you entered is incorrect. Please try again.',
    },
    
    // Account status errors
    'auth/user-disabled': {
      title: 'Account Disabled',
      message: 'This account has been disabled. Please contact support.',
    },
    'auth/too-many-requests': {
      title: 'Too Many Attempts',
      message: 'Too many failed login attempts. Please try again later or reset your password.',
    },
    
    // Network errors
    'auth/network-request-failed': {
      title: 'Network Error',
      message: 'Unable to connect. Please check your internet connection and try again.',
    },
    
    // Google OAuth errors
    'auth/popup-closed-by-user': {
      title: 'Sign-In Cancelled',
      message: 'The sign-in popup was closed. Please try again.',
    },
    'auth/cancelled-popup-request': {
      title: 'Sign-In Cancelled',
      message: 'Sign-in was cancelled. Please try again.',
    },
    'auth/popup-blocked': {
      title: 'Popup Blocked',
      message: 'Sign-in popup was blocked by your browser. Please allow popups and try again.',
    },
    'auth/unauthorized-domain': {
      title: 'Unauthorized Domain',
      message: 'This domain is not authorized for OAuth operations.',
    },
    'auth/operation-not-allowed': {
      title: 'Operation Not Allowed',
      message: 'This sign-in method is not enabled. Please contact support.',
    },
    
    // Session errors
    'auth/requires-recent-login': {
      title: 'Session Expired',
      message: 'Please sign in again to continue.',
    },
    'auth/invalid-action-code': {
      title: 'Invalid Link',
      message: 'This link is invalid or has expired. Please request a new one.',
    },
    'auth/expired-action-code': {
      title: 'Link Expired',
      message: 'This link has expired. Please request a new one.',
    },
  };

  return errorMap[errorCode] || {
    title: 'Authentication Error',
    message: 'An unexpected error occurred. Please try again.',
  };
}

/**
 * Extract error code from Firebase error
 */
export function extractErrorCode(error: any): string {
  return error?.code || 'unknown';
}
