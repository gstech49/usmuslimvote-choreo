from django.db import models
import uuid
# Create your models here.

class Post(models.Model):
    question = models.CharField(max_length=500)
    answer = models.TextField()
    source = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return f"Post: {self.question}"


class Report(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()
    code=models.CharField(blank=True, max_length=12)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)
    
    def save(self, *args, **kwargs):
        if not self.code:
            self.code = str(uuid.uuid4()).replace("-","").upper()[:12]
        super().save(*args, **kwargs)

class Form(models.Model):
    firstName = models.CharField(max_length=500)
    middleName = models.CharField(max_length=500)
    lastName = models.CharField(max_length=500)
    dob = models.DateField()
    address = models.TextField()
    email = models.EmailField()
    cellPhoneNumber = models.CharField(max_length=12) 
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.firstName)
    
    def save(self, *args, **kwargs):
        if not self.cellPhoneNumber:
            self.cellPhoneNumber = str(uuid.uuid4()).replace("-", "").upper()[:12]
        super().save(*args, **kwargs)

