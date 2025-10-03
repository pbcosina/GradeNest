from django.urls import path
from . import views

app_name = "accounts"  # ✅ This registers the namespace

urlpatterns = [
<<<<<<< HEAD
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('education-level/', views.education_level_view, name='education-level'),
]
=======
    path("login/", views.login_view, name="login"),
    path("register/", views.register_view, name="register"),
    # add other routes here
]
>>>>>>> register-update
