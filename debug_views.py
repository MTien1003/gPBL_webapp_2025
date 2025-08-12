"""
Debug utility to check and clear session
"""

from django.http import JsonResponse
from django.shortcuts import redirect

def debug_session(request):
    """Debug view to check session data"""
    return JsonResponse({
        'session_data': dict(request.session),
        'has_username': 'username' in request.session,
        'username': request.session.get('username', 'None'),
        'avatar_url': request.session.get('avatar_url', 'None'),
    })

def clear_session(request):
    """Clear all session data and redirect to home"""
    request.session.flush()
    return redirect('home')
