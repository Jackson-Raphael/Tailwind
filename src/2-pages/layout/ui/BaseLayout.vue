<!-- Just a super basic example header layout -->
<template>
    <div class="flex flex-col min-h-screen">
        <header class="bg-blue-100 py-4 px-4">
                <nav>
                    <ul class="flex space-x-6">
                        <!-- Router links. This might be why you were getting those reload 
                        issues on your layouts if you used <a> tags. -->
                        <li><router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link></li>
                        <li><router-link to="/about" class="text-gray-700 hover:text-blue-600">About</router-link></li>
                    </ul>
                </nav>
        </header>
        
        <main class="flex-1 bg-blue-200 py-4 px-4">
            <!-- The 'hole' where page content goes -->
            <router-view />
        </main>
        
    </div>
  </template>