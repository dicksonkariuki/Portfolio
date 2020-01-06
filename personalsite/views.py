from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404



# Create your views here.
def index(request):
    context={'classhome':"nav-current"}
    return render(request,'templates/index.html',context)

def projects(request):
    context={'classprojects':"nav-current"}
    return render(request,"templates/projects.html",context)