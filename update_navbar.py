#!/usr/bin/env python3
"""
Script to update navigation links in all template files
"""
import os
import glob

def update_navbar_in_file(file_path):
    """Update navbar links in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip home.html, login.html, register.html as they're already updated
        filename = os.path.basename(file_path)
        if filename in ['home.html', 'login.html', 'register.html']:
            return False
            
        # Replace old navbar with new navbar
        old_navbar = '''                <a href="home.html" class="navbar-brand"><h1 class="text-primary display-6">VietJap</h1></a>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="home.html" class="nav-item nav-link">Home</a>
                        <a href="socialnetwork.html" class="nav-item nav-link">Social Network</a>
                        <a href="about.html" class="nav-item nav-link active">About</a>
                        <a href="shop.html" class="nav-item nav-link">Shop</a>
                        <a href="shop-detail.html" class="nav-item nav-link">Shop Detail</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <a href="cart.html" class="dropdown-item">Cart</a>
                                <a href="checkout.html" class="dropdown-item">Checkout</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <div class="d-flex m-3 me-0">
                        <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i class="fas fa-search text-primary"></i>
                        </button>
                        <div class="dropdown">
                            <a href="#" class="position-relative me-4 my-auto dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user fa-2x"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                <li><a class="dropdown-item" href="login.html"><i class="fas fa-sign-in-alt me-2"></i>Login</a></li>
                                <li><a class="dropdown-item" href="register.html"><i class="fas fa-user-plus me-2"></i>Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>'''
        
        new_navbar = '''                <a href="/" class="navbar-brand"><h1 class="text-primary display-6">VietJap</h1></a>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a href="/" class="nav-item nav-link">Home</a>
                        <a href="/social/" class="nav-item nav-link">Social Network</a>
                        <a href="/about/" class="nav-item nav-link">About</a>
                        <a href="#" class="nav-item nav-link">Shop</a>
                        <a href="#" class="nav-item nav-link">Shop Detail</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <a href="/cart/" class="dropdown-item">Cart</a>
                                <a href="/order/checkout/" class="dropdown-item">Checkout</a>
                                <a href="#" class="dropdown-item">Testimonial</a>
                                <a href="#" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="/contact/" class="nav-item nav-link">Contact</a>
                    </div>
                    <div class="d-flex m-3 me-0">
                        <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i class="fas fa-search text-primary"></i>
                        </button>
                        <div class="dropdown">
                            <a href="#" class="position-relative me-4 my-auto dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user fa-2x"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                <li id="loginMenu"><a class="dropdown-item" href="/auth/login/"><i class="fas fa-sign-in-alt me-2"></i>Login</a></li>
                                <li id="registerMenu"><a class="dropdown-item" href="/auth/register/"><i class="fas fa-user-plus me-2"></i>Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>'''
        
        if old_navbar in content:
            content = content.replace(old_navbar, new_navbar)
            
            # Write back the updated content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error updating {file_path}: {e}")
        return False

def main():
    """Update all template files"""
    template_dir = "templates"
    html_files = glob.glob(os.path.join(template_dir, "*.html"))
    
    updated_count = 0
    for file_path in html_files:
        if update_navbar_in_file(file_path):
            print(f"Updated: {os.path.basename(file_path)}")
            updated_count += 1
        else:
            print(f"Skipped: {os.path.basename(file_path)} (no changes needed)")
    
    print(f"\nTotal updated: {updated_count} files")

if __name__ == '__main__':
    main()
