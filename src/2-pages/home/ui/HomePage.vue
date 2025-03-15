<script setup lang="ts" name="HomePage">
// No additional logic needed for this demo
</script>

<template>
    <h1 class="my-4 text-gray-600">
      Home Page
    </h1>
    <!-- Note the mobile first approach I mentioned tailwind takes. Default breakpoint is for mobile,
     then sm for larger screens like tablets, md for laptops, and so on.
     Thats what I meant by mobile first design. Breakpoints can be set in the tailwind theme as well. -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <!-- Red Box -->
      <div class="bg-red-500 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Box 1
      </div>
      
      <!-- Blue Box -->
      <div class="bg-blue-500 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Box 2
      </div>
    
      <!-- Green Box -->
      <div class="bg-green-500 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Box 3
      </div>
      
      <!-- Yellow Box -->
      <div class="bg-yellow-500 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Box 4
      </div>
      
      <!-- Purple Box -->
      <div class="bg-purple-500 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Box 5
      </div>
      
      <!-- Teal Box -->
      <div class="bg-teal-500 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Box 6
      </div>
    </div>
    
    <p class="mt-6 text-gray-600">
      Resize your browser window to see how the grid responds to different screen sizes.
    </p>
</template>

<!-- Since this is really just demo of the screen size reactivity I was describing I wont bother extracting it,
 but note the 'Box' concept above could easily be a more generic card component on a lower layer and we
 could massively simplify this page logic using a v-for loop to create the cards. -->