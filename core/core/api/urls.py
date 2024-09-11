from rest_framework.routers import DefaultRouter
from posts.api.urls import api_router
from django.urls import path, include

router = DefaultRouter()
#posts
router.registry.extend(api_router.registry)
#report

urlpatterns = [
    path('', include(router.urls))
]

#comments