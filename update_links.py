#!/usr/bin/env python3
"""
Script to update all food links in home.html from .html?dish= format to /food/ format
"""

def update_food_links():
    # Read the home.html file
    with open('templates/home.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define dish ID mappings from .html?dish= to /food/
    dish_mappings = {
        'vietnamese-food-detail.html?dish=pho-bo': '/food/pho-bo/',
        'vietnamese-food-detail.html?dish=banh-mi': '/food/banh-mi/',
        'vietnamese-food-detail.html?dish=bun-cha': '/food/bun-cha/',
        'vietnamese-food-detail.html?dish=goi-cuon': '/food/goi-cuon/',
        'vietnamese-food-detail.html?dish=com-tam': '/food/com-tam/',
        'vietnamese-food-detail.html?dish=cao-lau': '/food/cao-lau/',
        'vietnamese-food-detail.html?dish=che-ba-mau': '/food/che-ba-mau/',
        'vietnamese-food-detail.html?dish=banh-flan': '/food/banh-flan/',
        'vietnamese-food-detail.html?dish=bun-bo-hue': '/food/bun-bo-hue/',
        'vietnamese-food-detail.html?dish=com-chien-duong-chau': '/food/com-chien-duong-chau/',
        'vietnamese-food-detail.html?dish=com-suon-nuong': '/food/com-suon-nuong/',
        'vietnamese-food-detail.html?dish=com-hen': '/food/com-hen/',
        'vietnamese-food-detail.html?dish=banh-xeo': '/food/banh-xeo/',
        'vietnamese-food-detail.html?dish=banh-it': '/food/banh-it/',
        'vietnamese-food-detail.html?dish=banh-chuoi-hap': '/food/banh-chuoi-hap/',
        'vietnamese-food-detail.html?dish=xoi-vo': '/food/xoi-vo/',
        'vietnamese-food-detail.html?dish=nom-bo-kho': '/food/nom-bo-kho/',
        'vietnamese-food-detail.html?dish=canh-chua': '/food/canh-chua/',
        'vietnamese-food-detail.html?dish=cha-gio': '/food/cha-gio/',
        'vietnamese-food-detail.html?dish=banh-chuoi': '/food/banh-chuoi/',
    }
    
    # Replace all dish links
    for old_link, new_link in dish_mappings.items():
        content = content.replace(old_link, new_link)
    
    # Write the updated content back
    with open('templates/home.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {len(dish_mappings)} food links in home.html")

if __name__ == '__main__':
    update_food_links()
