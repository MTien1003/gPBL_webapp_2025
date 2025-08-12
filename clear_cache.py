#!/usr/bin/env python3
"""
Script to clear browser cache by updating static file references with version numbers
"""

import os
import re
import time

def add_version_to_static_files():
    """Add version number to static file references in templates"""
    templates_dir = "templates"
    version = str(int(time.time()))  # Use current timestamp as version
    
    if not os.path.exists(templates_dir):
        print(f"❌ Templates directory not found: {templates_dir}")
        return
    
    print(f"🔄 Adding version {version} to static file references...")
    
    updated_count = 0
    
    for filename in os.listdir(templates_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(templates_dir, filename)
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # Add version to CSS files
                content = re.sub(
                    r'href="([^"]*\.css)"', 
                    f'href="\\1?v={version}"', 
                    content
                )
                
                # Add version to JS files
                content = re.sub(
                    r'src="([^"]*\.js)"', 
                    f'src="\\1?v={version}"', 
                    content
                )
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✅ Updated: {filename}")
                    updated_count += 1
                    
            except Exception as e:
                print(f"❌ Error processing {filename}: {e}")
    
    print(f"\n📊 Updated {updated_count} template files with version {version}")

def main():
    """Main function"""
    print("🧹 Clearing browser cache by versioning static files...")
    add_version_to_static_files()
    print("✅ Cache clearing complete! Please refresh your browser.")

if __name__ == "__main__":
    main()
