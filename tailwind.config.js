/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],

  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontFamily: {
  		primary: [
  			'Nunito',
  			'Arial',
  			'sans-serif'
  		],
  		secondary: [
  			'Source Sans Pro',
  			'Arial',
  			'sans-serif'
  		],
  		system: [
  			'SF Pro Display',
  			'Roboto',
  			'Arial',
  			'sans-serif'
  		]
  	},
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				dark: '#FFB3E6',
  				contrast: '#333333',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: 'rgba(255,214,255,0.4)',
  				neutral: '#4A4A4A',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				purple: '#C8B6FF',
  				blue: '#B8C0FF',
  				complementary: '#BBD0FF',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			success: '#BBD0FF',
  			error: '#FFB3D6',
  			warning: '#E7C6FF',
  			info: '#B8C0FF',
  			text: {
  				primary: '#333333',
  				secondary: '#4A4A4A',
  				tertiary: '#808080'
  			},
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'1': '4px',
  			'2': '8px',
  			'3': '12px',
  			'4': '16px',
  			'5': '20px',
  			'6': '24px',
  			'8': '32px',
  			'10': '40px',
  			'12': '48px',
  			'0.5': '2px'
  		},
  		height: {
  			'11': '44px',
  			'13': '52px',
  			'14': '56px'
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '20px',
  			full: '9999px'
  		},
  		fontSize: {
  			h1: [
  				'32px',
  				'40px'
  			],
  			h2: [
  				'28px',
  				'36px'
  			],
  			h3: [
  				'24px',
  				'32px'
  			],
  			h4: [
  				'20px',
  				'28px'
  			],
  			bodylg: [
  				'18px',
  				'26px'
  			],
  			body: [
  				'16px',
  				'24px'
  			],
  			bodysm: [
  				'14px',
  				'20px'
  			],
  			caption: [
  				'12px',
  				'16px'
  			],
  			button: [
  				'16px',
  				'24px'
  			],
  			link: [
  				'16px',
  				'24px'
  			],
  			pengu: [
  				'16px',
  				'24px'
  			]
  		},
  		fontWeight: {
  			light: 300,
  			normal: 400,
  			medium: 500,
  			semibold: 600,
  			bold: 700
  		},
  		letterSpacing: {
  			tightest: '-0.5px',
  			tighter: '-0.3px',
  			tight: '-0.2px',
  			normal: '0px',
  			wide: '0.1px',
  			wider: '0.3px'
  		},
  		boxShadow: {
  			card: '0 1px 12px 0 rgba(51,51,51,0.06)',
  			task: '0 2px 8px 0 rgba(51,51,51,0.08)',
  			pengu: '0 2px 16px 0 rgba(200,182,255,0.10)',
  			button: '0 2px 8px 0 rgba(51,51,51,0.15)'
  		},
  		outline: {
  			focus: [
  				'3px solid #B8C0FF',
  				'2px'
  			]
  		},
  		transitionTimingFunction: {
  			'in-out': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
  			spring: 'cubic-bezier(0.25, 1.5, 0.5, 1)'
  		},
  		transitionDuration: {
  			'150': '150ms',
  			'250': '250ms',
  			'350': '350ms',
  			'400': '400ms'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
