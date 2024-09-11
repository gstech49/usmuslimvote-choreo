from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, ReportViewSet, FormViewSet

api_router = DefaultRouter()

api_router.register(r'posts', PostViewSet)
api_router.register(r'reports', ReportViewSet)
api_router.register(r'forms', FormViewSet)


