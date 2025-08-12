from django.contrib.auth import authenticate, login as auth_login
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, "Invalid email or password.")
            return render(request, "login.html")
        user_auth = authenticate(request, username=user.username, password=password)
        if user_auth is not None:
            auth_login(request, user_auth)
            return redirect(f"/home.html?username={user.username}")
        else:
            messages.error(request, "Invalid email or password.")
            return render(request, "login.html")
    return render(request, "login.html")

from django.shortcuts import render, redirect
from .models import Account
from django.contrib import messages

def register(request):
    return render(request, 'register.html')

def process_register(request):
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
        messages.success(request, "Registration successful!")
        # Redirect to home with username in query string
        return redirect(f"/home.html?username={username}")
    return redirect("register")
