// Test script to verify our setup
console.log('🐧 PenguPlan Setup Test');
console.log('======================');

// Check if required modules are installed
const requiredModules = [
  '@nuxtjs/supabase',
  '@nuxtjs/tailwindcss', 
  'shadcn-nuxt',
  'zod',
  '@pinia/nuxt',
  'pinia',
  'date-fns',
  'date-fns-tz',
  '@vite-pwa/nuxt'
];

console.log('\n📦 Checking dependencies...');
let allInstalled = true;

requiredModules.forEach(module => {
  try {
    require.resolve(module);
    console.log(`✅ ${module}`);
  } catch (e) {
    console.log(`❌ ${module} - NOT FOUND`);
    allInstalled = false;
  }
});

// Check environment variables
console.log('\n🌍 Checking environment variables...');
require('dotenv').config();

const requiredEnvVars = [
  'SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'GOOGLE_API_KEY'
];

requiredEnvVars.forEach(envVar => {
  if (process.env[envVar]) {
    console.log(`✅ ${envVar} - SET`);
  } else {
    console.log(`❌ ${envVar} - NOT SET`);
  }
});

console.log('\n🔧 Setup Status:');
console.log(`Dependencies: ${allInstalled ? '✅ ALL INSTALLED' : '❌ MISSING SOME'}`);
console.log(`Environment: ${requiredEnvVars.every(v => process.env[v]) ? '✅ CONFIGURED' : '⚠️ PARTIAL'}`);

if (allInstalled) {
  console.log('\n🎉 Setup appears to be complete!');
  console.log('You can now run: npm run dev');
} else {
  console.log('\n🚨 Some dependencies are missing. Run: npm install');
}
