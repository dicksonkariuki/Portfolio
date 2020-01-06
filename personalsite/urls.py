from django.conf.urls import url
from .import views
urlpatterns=[
    url('^$',views.index,name='index'),
    url('^$',views.projects,name='projects'),
    url('^$',views.contacts,name='contacts'),
]

