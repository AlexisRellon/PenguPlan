<template>
  <div class="min-h-screen" style="background-color: var(--primary-pure-white);">
    <!-- Navigation Header -->
    <header class="border-b" style="border-color: var(--border-light); background-color: var(--background-primary);">
      <div class="container mx-auto px-4 py-3">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-h2 font-bold font-primary" style="color: var(--text-primary);">
              🐧 PenguPlan
            </h1>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Navigation Links -->
            <NuxtLink 
              to="/" 
              class="text-secondary transition-colors hover:opacity-80"
              style="color: var(--text-secondary);"
            >
              Dashboard
            </NuxtLink>
            
            <!-- User Menu / Auth -->
            <div class="flex items-center space-x-2">
              <div v-if="user" class="flex items-center space-x-2">
                <span class="text-sm" style="color: var(--text-secondary);">
                  {{ user.email }}
                </span>
                <UiButton 
                  variant="secondary"
                  size="sm"
                  @click="signOut"
                >
                  Sign Out
                </UiButton>
              </div>
              <div v-else>
                <UiButton 
                  variant="primary"
                  size="sm"
                  @click="navigateTo('/auth/login')"
                >
                  Sign In
                </UiButton>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="container mx-auto px-4 py-6">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t mt-auto" style="border-color: var(--border-light); background-color: var(--background-primary);">
      <div class="container mx-auto px-4 py-4">
        <div class="text-center text-sm" style="color: var(--text-secondary);">
          © 2025 PenguPlan - Smart AI-powered task management
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const signOut = async () => {
  await supabase.auth.signOut()
  await navigateTo('/auth/login')
}
</script>