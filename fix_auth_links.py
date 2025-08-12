#!/usr/bin/env python3
"""
Script to fix authentication links in HTML templates
Replaces hardcoded URLs with Django template URL tags
"""

import os
import re

def fix_auth_links_in_file(file_path):
    """Fix authentication links in a single HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Replace login.html with {% url 'login' %}
        content = re.sub(r'href="login\.html"', r'href="{% url \'login\' %}"', content)
        
        # Replace register.html with {% url 'register' %}  
        content = re.sub(r'href="register\.html"', r'href="{% url \'register\' %}"', content)
        
        # Replace profile.html with {% url 'profile' %}
        content = re.sub(r'href="profile\.html"', r'href="{% url \'profile\' %}"', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed auth links in: {file_path}")
            return True
        else:
            print(f"ℹ️  No changes needed in: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all template files"""
    templates_dir = "templates"
    
    if not os.path.exists(templates_dir):
        print(f"❌ Templates directory not found: {templates_dir}")
        return
    
    print("🔧 Fixing authentication links in templates...")
    
    fixed_count = 0
    total_count = 0
    
    # Process all HTML files in templates directory
    for filename in os.listdir(templates_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(templates_dir, filename)
            total_count += 1
            if fix_auth_links_in_file(file_path):
                fixed_count += 1
    
    print(f"\n📊 Summary:")
    print(f"   - Total files processed: {total_count}")
    print(f"   - Files updated: {fixed_count}")
    print(f"   - Files unchanged: {total_count - fixed_count}")
    
    if fixed_count > 0:
        print(f"\n✅ Successfully fixed authentication links!")
    else:
        print(f"\nℹ️  All files were already using correct URL patterns.")

if __name__ == "__main__":
    main()
