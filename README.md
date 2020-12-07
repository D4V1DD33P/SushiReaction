# SushiReaction

########## Setup Clean Architecture ##########
Go to your project folder 
dotnet new sln
dotnet new classlib -n Domain
dotnet new classlib -n Application
dotnet new classlib -n Persistence
dotnet new webapi -n API

########## Adding References ##########
dotnet sln add Domain/ 
dotnet sln add Application/
dotnet sln add Persistence /
dotnet sln add API/
dotnet sln list 
cd Application/
dotnet add reference ../Domain/
dotnet add reference ../Persistence/
cd ..
cd API/
dotnet add reference ../Application/
cd ..
cd Persistence/
dotnet add reference ../Domain/
cd ..
