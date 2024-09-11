from rest_framework.serializers import ModelSerializer
from ..models import Post, Report, Form

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'question', 'answer', 'source')

class ReportSerializer(ModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'title', 'description', 'code')

class FormSerializer(ModelSerializer):
    class Meta:
        model = Form
        fields = ('id', 'firstName', 'middleName', 'lastName', 'dob', 'address', 'email', 'cellPhoneNumber', 'createdAt')

