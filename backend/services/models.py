from django.db import models
from django.utils.text import slugify

class Service(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    icon = models.CharField(max_length=100, help_text="Lucide React icon name, e.g. 'Home', 'Shirt'")
    description = models.TextField(help_text="Short description shown in card")
    long_description = models.TextField(blank=True)
    features = models.JSONField(default=list, help_text="List of features, e.g. ['Water Resistant', 'Custom Sizes']")
    
    # Order in which services appear
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class ServiceImage(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='services/%Y/%m/%d/')
    alt_text = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.service.name} - Image {self.order}"