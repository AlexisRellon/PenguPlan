<template>
  <div id="app" class="min-h-screen" style="background-color: var(--primary-pure-white); color: var(--text-primary);">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup>
// Initialize Supabase client
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// Handle app initialization
onMounted(() => {
  console.log('PenguPlan app initialized')
  console.log('Supabase client:', !!supabase)
  console.log('User:', user.value)
})

// Set up page metadata
useHead({
  title: 'PenguPlan - Smart Task Management',
  meta: [
    { name: 'description', content: 'AI-powered task management app with smart planning features' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;500;600;700&display=swap' }
  ]
})
</script>
