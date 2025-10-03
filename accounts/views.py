from django.shortcuts import render

def login_view(request):
    return render(request, 'accounts/login.html')

def register_view(request):
    return render(request, 'accounts/register.html')

def education_level_view(request):
    return render(request, 'accounts/education-level.html')

def dashboard_view(request):
    return render(request, 'accounts/dashboard.html')