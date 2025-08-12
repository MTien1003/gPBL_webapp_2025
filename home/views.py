from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404

def get_user_context(request):
    """Helper function to get user context from session"""
    username = request.session.get('username')
    avatar_url = request.session.get('avatar_url', '')
    
    context = {}
    if username:
        context['logged_in_user'] = {
            'username': username,
            'avatar_url': avatar_url
        }
    return context

def home(request):
    """Home page view"""
    context = get_user_context(request)
    return render(request, 'home.html', context)

def about(request):
    """About page view"""
    context = get_user_context(request)
    return render(request, 'about.html', context)

def social(request):
    """Social network page view"""
    context = get_user_context(request)
    return render(request, 'socialnetwork.html', context)

def contact(request):
    """Contact page view"""
    context = get_user_context(request)
    return render(request, 'contact.html', context)

def food_detail(request, dish_id=None):
    """Vietnamese food detail page view"""
    # Get dish_id from URL parameter or GET parameter for backward compatibility
    if not dish_id:
        dish_id = request.GET.get('dish')
    
    # Context data for different dishes
    dishes_data = {
        'pho-bo': {
            'name': 'Pho Bo (Beef Noodle Soup)',
            'description': 'Traditional Vietnamese beef noodle soup with aromatic broth, rice noodles, and fresh herbs',
            'image': 'https://cdn.asiastreetfood.com/uploads/Vietnam-Pho-Bo-Hanoi3-9277-2.jpg',
            'ingredients': ['Beef bones', 'Rice noodles', 'Beef slices', 'Onions', 'Star anise', 'Cinnamon', 'Fish sauce'],
            'prep_time': '4 hours',
            'serves': '4-6 people'
        },
        'banh-mi': {
            'name': 'Banh Mi (Vietnamese Sandwich)',
            'description': 'Crispy baguette filled with Vietnamese cold cuts, pâté, vegetables, and fresh herbs',
            'image': 'https://cdn.antoursvietnam.com/wp-content/uploads/2024/04/Top-5-best-Banh-Mi-in-Saigon.jpg',
            'ingredients': ['Baguette', 'Vietnamese ham', 'Pâté', 'Pickled vegetables', 'Cilantro', 'Cucumber'],
            'prep_time': '15 minutes',
            'serves': '1 person'
        },
        # Add more dishes as needed
    }
    
    dish_data = dishes_data.get(dish_id, {
        'name': 'Vietnamese Dish',
        'description': 'Delicious Vietnamese cuisine',
        'image': 'https://via.placeholder.com/800x600/81c408/ffffff?text=Vietnamese+Food',
        'ingredients': ['Traditional ingredients'],
        'prep_time': 'Varies',
        'serves': 'Multiple people'
    })
    
    context = {
        'dish': dish_data,
        'dish_id': dish_id
    }
    
    return render(request, 'vietnamese-food-detail.html', context)
