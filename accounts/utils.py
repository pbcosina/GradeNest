# accounts/utils.py
from .supabase_client import supabase
from django.contrib.auth import get_user_model

User = get_user_model()

def register_user(email, password, first_name, last_name):
    # 1. Register in Supabase
    try:
        response = supabase.auth.sign_up({
            "email": email,
            "password": password
        })
        user_data = response.user
    except Exception as e:
        return {"success": False, "error": str(e)}

    # 2. Register in Django database
    try:
        user = User.objects.create_user(
            email=email,
            first_name=first_name,
            last_name=last_name,
            password=password
        )
        user.save()
    except Exception as e:
        return {"success": False, "error": f"Django DB error: {str(e)}"}

    return {"success": True, "supabase_user": user_data, "django_user": user}
