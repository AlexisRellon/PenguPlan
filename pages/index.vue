<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="text-center space-y-4">
      <h1 class="text-h1 font-bold font-primary tracking-tightest" style="color: var(--text-primary);">
        Welcome to PenguPlan
      </h1>
      <p class="text-bodylg max-w-2xl mx-auto" style="color: var(--text-secondary);">
        Your smart AI-powered task management companion. Plan, organize, and achieve your goals with intelligent assistance.
      </p>
    </div>

    <!-- Connection Status -->
    <Card class="p-6">
      <h2 class="text-h3 font-semibold mb-4 font-primary" style="color: var(--text-primary);">System Status</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center space-x-3">
          <div 
            class="w-3 h-3 rounded-full"
            :style="{ backgroundColor: supabaseConnected ? 'var(--success-blue)' : 'var(--error-pink)' }"
          ></div>
          <span class="text-sm" style="color: var(--text-secondary);">
            Supabase: {{ supabaseConnected ? 'Connected' : 'Disconnected' }}
          </span>
        </div>
        
        <div class="flex items-center space-x-3">
          <div 
            class="w-3 h-3 rounded-full"
            :style="{ backgroundColor: user ? 'var(--success-blue)' : 'var(--warning-purple)' }"
          ></div>
          <span class="text-sm" style="color: var(--text-secondary);">
            Authentication: {{ user ? 'Signed In' : 'Not Signed In' }}
          </span>
        </div>
      </div>
    </Card>

    <!-- Quick Actions -->
    <Card class="p-6">
      <h2 class="text-h3 font-semibold mb-4 font-primary" style="color: var(--text-primary);">Quick Actions</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button 
          variant="outline"
          size="lg"
          class="h-auto p-4 flex-col items-start text-left"
          @click="createTask"
        >
          <div class="text-lg font-medium font-primary" style="color: var(--text-primary);">Create Task</div>
          <div class="text-sm mt-1" style="color: var(--text-secondary);">Add a new task to your list</div>
        </Button>
        
        <Button 
          variant="outline"
          size="lg"
          class="h-auto p-4 flex-col items-start text-left"
          @click="viewProjects"
        >
          <div class="text-lg font-medium font-primary" style="color: var(--text-primary);">View Projects</div>
          <div class="text-sm mt-1" style="color: var(--text-secondary);">Manage your project portfolios</div>
        </Button>
        
        <Button 
          variant="accent"
          size="lg"
          class="h-auto p-4 flex-col items-start text-left"
          @click="askAI"
        >
          <div class="text-lg font-medium font-primary" style="color: var(--text-primary);">Ask Pengu AI</div>
          <div class="text-sm mt-1" style="color: var(--text-primary); opacity: 0.8;">Get intelligent planning help</div>
        </Button>
      </div>
    </Card>

    <!-- Development Info -->
    <Card v-if="user" class="p-6">
      <h2 class="text-h3 font-semibold mb-4 font-primary" style="color: var(--text-primary);">User Information</h2>
      <div class="space-y-2">
        <p class="text-body"><strong style="color: var(--text-primary);">Email:</strong> <span style="color: var(--text-secondary);">{{ user.email }}</span></p>
        <p class="text-body"><strong style="color: var(--text-primary);">User ID:</strong> <span style="color: var(--text-secondary);">{{ user.id }}</span></p>
        <p class="text-body"><strong style="color: var(--text-primary);">Last Sign In:</strong> <span style="color: var(--text-secondary);">{{ formatDate(user.last_sign_in_at) }}</span></p>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { format } from 'date-fns'

const user = useSupabaseUser()
const supabase = useSupabaseClient()

// Check Supabase connection
const supabaseConnected = ref(false)

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('_realtime_status').select('*').limit(1)
    supabaseConnected.value = !error
  } catch (e) {
    // If the table doesn't exist, we're still connected to Supabase
    supabaseConnected.value = true
  }
})

// Quick action handlers
const createTask = () => {
  // TODO: Navigate to task creation page
  console.log('Create task clicked')
}

const viewProjects = () => {
  // TODO: Navigate to projects page
  console.log('View projects clicked')
}

const askAI = () => {
  // TODO: Navigate to AI chat page
  console.log('Ask Pengu AI clicked')
}

const formatDate = (dateString) => {
  if (!dateString) return 'Never'
  return format(new Date(dateString), 'PPpp')
}

// Page metadata
useHead({
  title: 'Dashboard - PenguPlan',
  meta: [
    { name: 'description', content: 'PenguPlan dashboard - manage your tasks and projects with AI assistance' }
  ]
})
</script>