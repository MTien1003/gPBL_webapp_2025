#!/usr/bin/env python3
"""
Script to update all template navigation links to remove 'accounts/' prefix
"""
import os
import glob

def update_template_links():
    """Update all template files to use simple .html URLs"""
    template_dir = "templates"
    html_files = glob.glob(os.path.join(template_dir, "*.html"))
    
    replacements = {
        # Remove accounts/ prefix from login/register links
        'href="accounts/login.html"': 'href="login.html"',
        'href="accounts/register.html"': 'href="register.html"',
        'href="accounts/profile.html"': 'href="profile.html"',
        'href="/auth/login/"': 'href="login.html"',
        'href="/auth/register/"': 'href="register.html"',
        'href="/auth/profile/"': 'href="profile.html"',
        
        # Update other navigation links
        'href="/"': 'href="home.html"',
        'href="/about/"': 'href="about.html"',
        'href="/contact/"': 'href="contact.html"',
        'href="/social/"': 'href="socialnetwork.html"',
        'href="/cart/"': 'href="cart/cart.html"',
        'href="/order/checkout/"': 'href="order/checkout.html"',
    }
    
    updated_count = 0
    for file_path in html_files:
        filename = os.path.basename(file_path)
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Apply all replacements
            for old_text, new_text in replacements.items():
                content = content.replace(old_text, new_text)
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated: {filename}")
                updated_count += 1
            else:
                print(f"No changes needed: {filename}")
                
        except Exception as e:
            print(f"Error updating {filename}: {e}")
    
    print(f"\nTotal files updated: {updated_count}")

if __name__ == '__main__':
    update_template_links()
