from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views import View
from .forms import PostForm
from .models import Post
from django.http import HttpResponse

def socialnetwork(request):
    if request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save() 
            return JsonResponse({
                'status': 'success',
                'post_id': post.id,
                'text': post.text,
                'image_url': post.image.url if post.image else None,
                'created_at': post.created_at.strftime('%Y-%m-%d %H:%M:%S')
                })
        else:
            return JsonResponse({'status': 'error', 'errors': form.errors})
    return render(request, 'socialnetwork.html', {'form': PostForm()})

        