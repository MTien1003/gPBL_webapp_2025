#!/usr/bin/env python3
"""
Script to revert food links back to original .html?dish= format
"""

def revert_food_links():
    # Read the home.html file
    with open('templates/home.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define dish ID mappings from /food/ back to .html?dish=
    dish_mappings = {
        '/food/pho-bo/': 'vietnamese-food-detail.html?dish=pho-bo',
        '/food/banh-mi/': 'vietnamese-food-detail.html?dish=banh-mi',
        '/food/bun-cha/': 'vietnamese-food-detail.html?dish=bun-cha',
        '/food/goi-cuon/': 'vietnamese-food-detail.html?dish=goi-cuon',
        '/food/com-tam/': 'vietnamese-food-detail.html?dish=com-tam',
        '/food/cao-lau/': 'vietnamese-food-detail.html?dish=cao-lau',
        '/food/che-ba-mau/': 'vietnamese-food-detail.html?dish=che-ba-mau',
        '/food/banh-flan/': 'vietnamese-food-detail.html?dish=banh-flan',
        '/food/bun-bo-hue/': 'vietnamese-food-detail.html?dish=bun-bo-hue',
        '/food/com-chien-duong-chau/': 'vietnamese-food-detail.html?dish=com-chien-duong-chau',
        '/food/com-suon-nuong/': 'vietnamese-food-detail.html?dish=com-suon-nuong',
        '/food/com-hen/': 'vietnamese-food-detail.html?dish=com-hen',
        '/food/banh-xeo/': 'vietnamese-food-detail.html?dish=banh-xeo',
        '/food/banh-it/': 'vietnamese-food-detail.html?dish=banh-it',
        '/food/banh-chuoi-hap/': 'vietnamese-food-detail.html?dish=banh-chuoi-hap',
        '/food/xoi-vo/': 'vietnamese-food-detail.html?dish=xoi-vo',
        '/food/nom-bo-kho/': 'vietnamese-food-detail.html?dish=nom-bo-kho',
        '/food/canh-chua/': 'vietnamese-food-detail.html?dish=canh-chua',
        '/food/cha-gio/': 'vietnamese-food-detail.html?dish=cha-gio',
        '/food/banh-chuoi/': 'vietnamese-food-detail.html?dish=banh-chuoi',
    }
    
    # Replace all dish links back to original format
    for new_link, old_link in dish_mappings.items():
        content = content.replace(new_link, old_link)
    
    # Write the updated content back
    with open('templates/home.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Reverted {len(dish_mappings)} food links back to original format")

if __name__ == '__main__':
    revert_food_links()
