from django.shortcuts import render


def index_page(request):
    return render(request, 'home/index.html')
