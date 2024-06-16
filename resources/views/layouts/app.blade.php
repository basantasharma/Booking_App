<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
</head>
<body class="font-sans">
    <div class="flex">
        <div class="w-56 bg-gray-100 h-screen shadow-md">
            <div class=mt-5>
                <img class="bg-white w-10/12 mx-auto rounded-lg py-2"src=""alt="Logo">
            </div>
            <div class="mt-12">
                <a href=" "class="block text-xl pl-4 py-2 border-b-2 border-red-300 hover:bg-blue-600 hover:text-white">Dashboard</a>
                <a href="" class="block text-xl pl-4 py-2 border-b-2 border-red-300 hover:bg-blue-600 hover:text-white">Categories</a>
                <a href="" class="block text-xl pl-4 py-2 border-b-2 border-red-300 hover:bg-blue-600 hover:text-white">Bus Profile</a>
                <a href="" class="block text-xl pl-4 py-2 border-b-2 border-red-300 hover:bg-blue-600 hover:text-white">Gallery</a>
                <a href="" class="block text-xl pl-4 py-2 border-b-2 border-red-300 hover:bg-blue-600 hover:text-white">Advertisement</a>
                {{-- <form action="{{route('logout')}}" method="POST" class="block text-xl pl-4 py-2 border-b-2 border-red-300 hover:bg-blue-600 hover:text-white">
                    @csrf
                    <input type="submit" value="Logout" class="w-full text-left ">
                </form> --}}
        </div>
        <div class="flex-1">
            @yield('content')

        </div>
    </div>
    
</body>
</html>