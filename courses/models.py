from django.db import models
from django.utils.text import slugify

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50)
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(args, kwargs)

    def __str__(self):
        return f"{self.name}"
    
    class Meta:
        verbose_name_plural = "Category"

class Course(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    cover = models.ImageField(upload_to='images/', null=True)
    date = models.DateField(null=True)
    isActive = models.BooleanField(default=False)
    categories = models.ManyToManyField(Category)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(args, kwargs)

    def __str__(self):
        return f"{self.title} {self.date}"
    
    class Meta:
        verbose_name_plural = "Course"


