<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <div 
            class="fixed md:static h-full z-10"
        >
            <div class="p-4 font-bold text-xl">Your Logo</div>
            <nav class="mt-8">
                <ul>
                    <li class="mb-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded">Projects</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded">Tasks</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded">Calendar</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded">Reports</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col md:ml-0 transition-all duration-300 ease-in-out">
            <!-- Header -->
            <header class="bg-white shadow-md p-4 flex items-center">
                <button 
                    class="text-gray-500 focus:outline-none mr-4"
                >
                    <svg 
                        class="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <h1 class="text-xl font-semibold text-gray-700">Dashboard</h1>
                <div class="ml-auto flex items-center">
                    <div class="relative">
                        <button class="flex items-center text-gray-500 focus:outline-none">
                            <span class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="flex-1 overflow-y-auto p-4 bg-gray-100">
                <router-view />
            </main>
        </div>
    </div>
</template>