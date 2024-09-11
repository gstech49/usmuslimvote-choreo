from rest_framework.viewsets import ModelViewSet
from ..models import Post, Report, Form
from .serializers import PostSerializer, ReportSerializer, FormSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ReportViewSet(ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class FormViewSet(ModelViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer
