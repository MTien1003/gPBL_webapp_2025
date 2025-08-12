from django.contrib.auth import authenticate, login as auth_login
from django.shortcuts import render, redirect
from .models import Account
from django.contrib import messages

def login_view(request):
    """Handle user login"""
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        try:
            account = Account.objects.get(username=username)
        except Account.DoesNotExist:
            messages.error(request, "Invalid username or password.")
            return render(request, "login.html")
        if account.password == password:
            # Store user info in session
            request.session['user_id'] = account.id
            request.session['username'] = account.username
            request.session['avatar_url'] = account.avatar_url or ''
            
            messages.success(request, f"Welcome back, {account.username}!")
            # Redirect to home - let JavaScript handle avatar display from session
            return redirect("home")
        else:
            messages.error(request, "Invalid username or password.")
            return render(request, "login.html")
    return render(request, "login.html")

def register(request):
    """Display registration form"""
    return render(request, 'register.html')

def logout_view(request):
    """Handle user logout"""
    # Clear all session data
    request.session.flush()
    
    # Create response with redirect
    response = redirect('home')
    
    # Clear any cookies that might be cached
    response.delete_cookie('sessionid')
    
    messages.success(request, "You have been logged out successfully.")
    return response

def profile_view(request):
    """Display user profile"""
    username = request.GET.get('username') or request.session.get('username')
    if username:
        try:
            account = Account.objects.get(username=username)
            return render(request, 'profile.html', {'account': account})
        except Account.DoesNotExist:
            messages.error(request, "User not found.")
            return redirect('/')
    messages.error(request, "Please login to view your profile.")
    return redirect('login')

def update_profile(request):
    """Handle profile updates"""
    if request.method == "POST":
        original_username = request.POST.get("original_username")
        if not original_username:
            messages.error(request, "Original username is required!")
            return redirect("profile")
            
        try:
            account = Account.objects.get(username=original_username)
            
            # Get the new username (in case it was changed)
            new_username = request.POST.get("username")
            if not new_username:
                messages.error(request, "Username is required!")
                return render(request, 'profile.html', {'account': account})
            
            # Update account fields
            account.username = new_username
            account.email = request.POST.get("email", "")
            account.full_name = request.POST.get("full_name", "")
            account.phone_number = request.POST.get("phone_number", "")
            account.avatar_url = request.POST.get("avatar_url", "")
            
            # Update password if provided
            new_password = request.POST.get("password")
            if new_password:
                confirm_password = request.POST.get("confirm_password")
                if new_password == confirm_password:
                    account.password = new_password
                    account.confirm_password = confirm_password
                else:
                    messages.error(request, "Passwords do not match!")
                    return render(request, 'profile.html', {'account': account})
            
            account.save()
            
            # Update session với thông tin mới
            request.session['user_id'] = account.id
            request.session['username'] = new_username
            request.session['avatar_url'] = account.avatar_url or ''
            
            messages.success(request, "Profile updated successfully!")
            
            # Redirect về trang chủ để hiển thị thông tin đã cập nhật
            return redirect("home")
            
        except Account.DoesNotExist:
            messages.error(request, "Account not found!")
            return redirect("profile")
    else:
        # Handle GET request - redirect to profile page
        messages.info(request, "Please use the profile page to update your information.")
        return redirect("profile")

def process_register(request):
    """Handle user registration"""
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")
        email = request.POST.get("email")
        full_name = request.POST.get("full_name")
        phone = request.POST.get("phone")

        if password != confirm_password:
            messages.error(request, "Passwords do not match!")
            return redirect("register")

        if Account.objects.filter(username=username).exists():
            messages.error(request, "Username already exists!")
            return redirect("register")
        if Account.objects.filter(email=email).exists():
            messages.error(request, "Email is already in use!")
            return redirect("register")

        account = Account.objects.create(
            username=username,
            password=password,
            confirm_password=confirm_password,
            email=email,
            full_name=full_name,
            phone_number=phone
        )
        account.save()
        
        # Store user info in session
        request.session['user_id'] = account.id
        request.session['username'] = account.username
        
        messages.success(request, "Registration successful!")
        # Redirect to home with username in query string
        return redirect(f"/?username={username}")
    return redirect("register")
