# **PenguPlan Design System Brief**

## **Color Palette**

### **Primary Colors**

* **Primary Soft Pink** \- \#FFD6FF (Main brand color for buttons, navigation, and primary actions)  
* **Primary Deep Purple** \- \#333333 (Primary text and high-contrast elements)  
* **Primary Pure White** \- \#FCFCFC (Clean backgrounds and content surfaces)

  ### **Secondary Colors**

* **Secondary Lavender** \- \#E7C6FF (Hover states and secondary interactive elements)  
* **Secondary Light Pink** \- \#FFD6FF with 40% opacity (Background highlights and selected states)  
* **Secondary Neutral** \- \#4A4A4A (Supporting text and neutral elements)

  ### **Accent Colors**

* **Accent Tertiary Purple** \- \#C8B6FF (Important notifications and Pengu AI interactions)  
* **Accent Interactive Blue** \- \#B8C0FF (Interactive elements and links)  
* **Accent Complementary Blue** \- \#BBD0FF (Success states and completed tasks)

  ### **Functional Colors**

* **Success Blue** \- \#BBD0FF (Task completion and positive feedback)  
* **Error Pink** \- \#FFB3D6 (Error states and destructive actions)  
* **Warning Purple** \- \#E7C6FF (Alerts and important notices)  
* **Info Blue** \- \#B8C0FF (Information and tips)

  ### **Neutral Colors**

* **Text Primary** \- \#333333 (Primary readable text)  
* **Text Secondary** \- \#4A4A4A (Secondary information and metadata)  
* **Text Tertiary** \- \#808080 (Disabled states and placeholder text)  
* **Border Light** \- \#F0F0F0 (Subtle borders and dividers)  
* **Border Medium** \- \#D0D0D0 (Standard borders and input fields)

  ### **Background Colors**

* **Background Primary** \- \#FFFFFF (Pure white for cards and main content)  
* **Background Secondary** \- \#F8FAFC (App background and subtle surfaces)  
* **Background Tertiary** \- \#F1F5F9 (Alternative background for variety)

  ## **Typography**

  ### **Font Family**

* **Primary Font**: Nunito (Main brand font for headings, buttons, and emphasis)  
* **Secondary Font**: Source Sans Pro (Body text and UI elements for optimal readability)  
* **System Fallback**: SF Pro Display (iOS) / Roboto (Android) for performance when web fonts fail

  ### **Font Weights**

* **Light**: 300 (Large display text only)  
* **Regular**: 400 (Standard body text)  
* **Medium**: 500 (Emphasis and labels)  
* **Semibold**: 600 (Subheadings and important text)  
* **Bold**: 700 (Main headings and strong emphasis)

  ### **Text Styles**

  #### **Headings**

* **H1**: 32px/40px, Bold, Letter spacing \-0.5px *Used for main screen titles and app branding*  
* **H2**: 28px/36px, Bold, Letter spacing \-0.3px *Used for section headers and major content blocks*  
* **H3**: 24px/32px, Semibold, Letter spacing \-0.2px *Used for card titles and subsection headers*  
* **H4**: 20px/28px, Semibold, Letter spacing \-0.1px *Used for task group headers and minor sections*

  #### **Body Text**

* **Body Large**: 18px/26px, Source Sans Pro Regular, Letter spacing 0px *Primary reading text for detailed content*  
* **Body**: 16px/24px, Source Sans Pro Regular, Letter spacing 0px *Standard UI text and descriptions*  
* **Body Small**: 14px/20px, Source Sans Pro Regular, Letter spacing 0.1px *Secondary information and supporting details*

  #### **Special Text**

* **Caption**: 12px/16px, Source Sans Pro Medium, Letter spacing 0.3px *Timestamps, metadata, and small labels*  
* **Button Text**: 16px/24px, Nunito Medium, Letter spacing 0.1px *All interactive button text*  
* **Link Text**: 16px/24px, Source Sans Pro Medium, Letter spacing 0px, Accent Interactive Blue *Clickable text and navigation elements*  
* **Pengu Text**: 16px/24px, Nunito Medium, Letter spacing 0px *AI assistant responses and playful content*

  ## **Component Styling**

  ### **Buttons**

  #### **Primary Button**

* **Background**: Primary Soft Pink (\#FFD6FF)  
* **Text**: Primary Deep Purple (\#333333)  
* **Height**: 52dp  
* **Corner Radius**: 12dp  
* **Padding**: 20dp horizontal, 16dp vertical  
* **Shadow**: Y-offset 2dp, Blur 8dp, Opacity 15%

  #### **Secondary Button**

* **Border**: 2dp Primary Soft Pink (\#FFD6FF)  
* **Text**: Primary Soft Pink (\#FFD6FF)  
* **Background**: Transparent  
* **Height**: 52dp  
* **Corner Radius**: 12dp  
* **Padding**: 18dp horizontal, 14dp vertical

  #### **Accent Button (Pengu Actions)**

* **Background**: Accent Tertiary Purple (\#C8B6FF)  
* **Text**: Primary Deep Purple (\#333333)  
* **Height**: 48dp  
* **Corner Radius**: 24dp (pill shape)  
* **Padding**: 24dp horizontal, 12dp vertical

  #### **Text Button**

* **Text**: Accent Interactive Blue (\#B8C0FF)  
* **Background**: None  
* **Height**: 44dp  
* **Padding**: 12dp horizontal

  ### **Cards**

  #### **Standard Card**

* **Background**: White (\#FFFFFF)  
* **Shadow**: Y-offset 1dp, Blur 12dp, Opacity 6%  
* **Corner Radius**: 16dp  
* **Padding**: 20dp  
* **Border**: None

  #### **Task Card**

* **Background**: White (\#FFFFFF)  
* **Shadow**: Y-offset 2dp, Blur 8dp, Opacity 8%  
* **Corner Radius**: 12dp  
* **Padding**: 16dp  
* **Left Border**: 4dp Accent Complementary Blue (completed) / Primary Soft Pink (active)

  #### **Pengu Card (AI Suggestions)**

* **Background**: Linear gradient from Secondary Lavender to White  
* **Shadow**: Y-offset 2dp, Blur 16dp, Opacity 10%  
* **Corner Radius**: 20dp  
* **Padding**: 20dp  
* **Border**: 1dp Accent Tertiary Purple with 30% opacity

  ### **Input Fields**

  #### **Standard Input**

* **Height**: 56dp  
* **Corner Radius**: 12dp  
* **Border**: 1.5dp Border Medium (\#CBD5E1)  
* **Active Border**: 2dp Primary Soft Pink (\#FFD6FF)  
* **Background**: White (\#FFFFFF)  
* **Text**: Text Primary (\#333333)  
* **Placeholder**: Text Tertiary (\#808080)  
* **Padding**: 16dp horizontal

  #### **Search Input**

* **Height**: 48dp  
* **Corner Radius**: 24dp (pill shape)  
* **Background**: Background Secondary (\#F8FAFC)  
* **Border**: None  
* **Active Border**: 2dp Primary Soft Pink (\#FFD6FF)  
* **Icon**: Search icon left-aligned, 20dp from edge

  ### **Icons**

  #### **Icon Sizes**

* **Micro Icons**: 16dp x 16dp (inline with text)  
* **Small Icons**: 20dp x 20dp (buttons and secondary actions)  
* **Standard Icons**: 24dp x 24dp (primary navigation and actions)  
* **Large Icons**: 32dp x 32dp (feature highlights and empty states)  
* **Pengu Avatar**: 40dp x 40dp (AI assistant representation)

  #### **Icon Colors**

* **Primary**: Primary Soft Pink (\#FFD6FF) for interactive elements  
* **Secondary**: Text Secondary (\#4A4A4A) for informational icons  
* **Accent**: Accent Tertiary Purple (\#C8B6FF) for Pengu-related icons  
* **Success**: Accent Complementary Blue (\#BBD0FF) for completed states

  ## **Spacing System**

* **2dp** \- Micro spacing (tight element relationships)  
* **4dp** \- Tiny spacing (icon to text alignment)  
* **8dp** \- Small spacing (internal component padding)  
* **12dp** \- Compact spacing (related element groups)  
* **16dp** \- Standard spacing (default margins and padding)  
* **20dp** \- Medium spacing (component separation)  
* **24dp** \- Large spacing (section boundaries)  
* **32dp** \- Extra large spacing (major content blocks)  
* **40dp** \- Screen padding (top/bottom margins)  
* **48dp** \- Maximum spacing (major section separation)

  ## **Motion & Animation**

  ### **Transition Timing**

* **Micro Interactions**: 150ms, Ease-in-out *Button taps, checkbox toggles, small state changes*  
* **Standard Transitions**: 250ms, Ease-out *Card expansions, modal appearances, navigation*  
* **Emphasis Animations**: 400ms, Spring (tension: 250, friction: 25\) *Pengu interactions, task completions, celebrations*  
* **Page Transitions**: 350ms, Custom cubic-bezier(0.25, 0.8, 0.25, 1\) *Screen navigation and major view changes*

  ### **Animation Principles**

* **Playful Bounces**: For Pengu interactions and positive feedback  
* **Smooth Slides**: For navigation and content transitions  
* **Gentle Fades**: For subtle state changes and loading states  
* **Physics-based**: All animations follow natural motion curves

  ### **Special Animations**

* **Task Completion**: Scale \+ bounce with confetti particles  
* **Pengu Appearance**: Slide up from bottom with gentle bounce  
* **Priority Pulse**: Subtle breathing animation for high-priority tasks  
* **Schedule Reorganization**: Smooth reordering with position tweening

  ## **Dark Mode Variants**

  ### **Background Colors**

* **Dark Primary**: \#1A1D23 (main app background)  
* **Dark Surface**: \#252A31 (card and content backgrounds)  
* **Dark Surface Elevated**: \#2D3339 (modal and overlay backgrounds)

  ### **Adapted Colors**

* **Dark Primary Pink**: \#FFB3E6 (enhanced contrast for dark backgrounds)  
* **Dark Text Primary**: \#F8FAFC (high contrast white text)  
* **Dark Text Secondary**: \#CBD5E1 (medium contrast gray text)  
* **Dark Border**: \#3F4853 (subtle borders and dividers)

  ### **Special Considerations**

* All accent colors maintain accessibility contrast ratios  
* Pengu avatar gets a subtle glow effect in dark mode  
* Card shadows become subtle light borders for definition  
* Success/error colors are slightly brighter for visibility

  ## **Accessibility Features**

  ### **Contrast Ratios**

* All text meets WCAG 2.1 AA standards (4.5:1 minimum)  
* Interactive elements meet AAA standards (7:1 minimum)  
* Focus indicators are 3px solid with high contrast

  ### **Touch Targets**

* Minimum 44dp x 44dp for all interactive elements  
* 8dp minimum spacing between adjacent touch targets  
* Clear visual feedback for all interactions

  ### **Semantic Structure**

* Proper heading hierarchy for screen readers  
* Descriptive labels for all icons and images  
* Clear focus order for keyboard navigation

---

# **PenguPlan Feature Design Brief**

## **Authentication & User Management**

### **Welcome Screen**

#### **Welcome Screen State 1 \- Initial Load**

* Full-screen background uses Primary Pure White (\#FCFCFC) with subtle gradient overlay using Secondary Light Pink at 20% opacity  
* Pengu mascot (40dp avatar) positioned center-top with gentle wave animation (400ms spring transition, repeating every 3 seconds)  
* App logo "PenguPlan" in H1 typography (32px Nunito Bold) using Primary Deep Purple (\#333333)  
* Primary tagline "Turn chaos into clarity" in Body Large (18px Source Sans Pro) using Text Secondary (\#4A4A4A)  
* Two CTAs: "Get Started" (Primary Button) and "Sign In" (Text Button) with 16dp vertical spacing  
* Pengu expressions cycle through happy, curious, and welcoming states with 150ms ease-in-out transitions

#### **Welcome Screen State 2 \- User Interaction**

* Pengu responds to button hover with scale animation (1.05x, 150ms ease-out)  
* "Get Started" button shows pressed state with scale down (0.98x) and Shadow Y-offset increases to 4dp  
* Micro-interaction feedback with haptic response on mobile devices  
* Loading state shows Pengu with animated thought bubble containing spinning dots

### **Registration Flow**

#### **Registration State 1 \- Email Input**

* Modal slides up from bottom (350ms custom cubic-bezier) with Background Primary (\#FFFFFF)  
* Pengu positioned top-right of form with "encouraging" expression  
* Single Standard Input field for email with floating label animation  
* Progress indicator (1/3) using Primary Soft Pink dots at modal top  
* Pengu reacts to input validation: happy expression for valid email format, concerned expression for errors  
* Error messages appear below input with Error Pink (\#FFB3D6) color and gentle fade-in (250ms)

#### **Registration State 2 \- Password Creation**

* Form transitions with slide-left animation (250ms ease-out)  
* Pengu expression changes to "focused" state with slight head tilt  
* Password strength indicator appears as colored bar below input (Error Pink → Warning Purple → Success Blue)  
* Real-time validation feedback with Pengu nodding for strong passwords  
* "Show/Hide" password toggle with eye icon (20dp) in Accent Interactive Blue

#### **Registration State 3 \- Confirmation & OAuth**

* Final form step with password confirmation field  
* Google OAuth button (Secondary Button) with Google logo icon (20dp) and "Continue with Google" text  
* Pengu shows "excited" expression anticipating account creation  
* Success state triggers Pengu celebration animation with confetti particles  
* Loading state during account creation shows Pengu with rotating loader animation

### **Login Experience**

#### **Login State 1 \- Returning User**

* Simplified form with email and password fields on single screen  
* Pengu in "sleeping" pose initially, "wakes up" with blink animation when user focuses any input  
* Remember me checkbox with custom styling using Primary Soft Pink  
* "Forgot Password" link in Accent Interactive Blue positioned below password field  
* Auto-focus on email field with 150ms delay after screen load

#### **Login State 2 \- Authentication Process**

* Loading state replaces form with Pengu showing "working" animation (typing on tiny keyboard)  
* Progress indication through Pengu's expressions: focused → hopeful → celebrating  
* Success state shows Pengu with thumbs up before transitioning to main app  
* Failed authentication triggers concerned Pengu expression with helpful error messaging

#### **Login State 3 \- Multi-Device Session Management**

* Dashboard accessible through user menu showing active sessions  
* Device cards display device type icons, location, and last active timestamp  
* "Sign out all devices" button in Error Pink for security actions  
* Pengu acts as security guide with shield icon when explaining session management

### **Password Reset Flow**

#### **Reset State 1 \- Email Request**

* Clean form with single email input and clear explanation text  
* Pengu holds mail icon with questioning expression  
* Submit button triggers hopeful Pengu animation  
* Success message with Pengu pointing to imaginary mailbox

#### **Reset State 2 \- Email Sent Confirmation**

* Full-screen confirmation with large mail icon and Pengu celebrating  
* Clear instructions for checking email with resend functionality  
* Timer countdown (60 seconds) before resend becomes available  
* Pengu shows waiting animation during countdown period

#### **Reset State 3 \- New Password Creation**

* Secure form with enhanced password requirements  
* Pengu in "protective" stance with shield imagery  
* Password strength requirements checklist with checkmark animations  
* Success creates new Pengu celebration sequence

## **Personalized Working Hours Configuration**

### **Onboarding Introduction**

#### **Hours Setup State 1 \- Introduction**

* Full-screen onboarding with Pengu holding clock icon and calendar  
* Clear headline "When do you work best?" in H2 typography  
* Explanatory text about schedule optimization benefits  
* Visual day/night cycle illustration with Pengu in appropriate states (active during day, sleepy at night)  
* Primary Button "Set My Hours" with confident Pengu expression

#### **Hours Setup State 2 \- Default Suggestion**

* Pre-selected 9 AM \- 5 PM schedule with visual time blocks  
* Time blocks use Primary Soft Pink with subtle gradient and 12dp corner radius  
* Pengu shows "suggesting" pose with raised finger  
* Edit suggestion allows immediate customization  
* Visual preview shows typical workday layout with Pengu activities

### **Time Selection Interface**

#### **Time Picker State 1 \- Interactive Selection**

* Dual time picker interface with 15-minute increment snapping  
* Smooth magnetic animation when time snaps to increments (150ms ease-out)  
* Visual time blocks update in real-time with smooth transitions  
* Pengu reacts to selections: approves reasonable hours, shows concern for excessive hours  
* Start/end time validation prevents overlapping or impossible combinations

#### **Time Picker State 2 \- Day-Specific Customization**

* Weekly view with individual day customization  
* Toggle switches for weekend availability with Pengu in casual vs. work attire  
* Different time blocks for different days with color-coded system  
* Pengu expressions match the intensity of each day's schedule

#### **Time Picker State 3 \- Irregular Schedule Support**

* Template options for shift work, part-time, and freelance schedules  
* Pengu wears different "job" accessories (hard hat, coffee cup, laptop)  
* Custom pattern builder with drag-and-drop time blocks  
* Rotation schedule support with calendar view preview

### **Confirmation & Preview**

#### **Confirmation State 1 \- Schedule Preview**

* Full weekly overview with color-coded working hours  
* Pengu gives thumbs up with satisfied expression  
* Summary statistics: total hours per week, busiest day, most productive time  
* Clear "Looks Good" primary action with option to modify

#### **Confirmation State 2 \- Timezone Handling**

* Automatic timezone detection with confirmation modal  
* Globe icon with Pengu holding it, showing current location  
* Manual timezone override option for travelers  
* DST awareness notification with clock-changing animation

#### **Confirmation State 3 \- Advanced Settings**

* Holiday and vacation mode toggle with calendar integration  
* Break time preferences with Pengu in relaxation pose  
* Energy level patterns configuration with morning/afternoon/evening indicators  
* Notification preferences for schedule changes

## **Core Task Management**

### **Task Creation Interface**

#### **Creation State 1 \- Quick Capture**

* Floating Action Button (52dp) positioned bottom-right with Primary Soft Pink background  
* FAB shows subtle pulsing animation (scale 1.0 to 1.05, 2-second cycle)  
* Tap triggers modal slide-up animation (350ms cubic-bezier) with Pengu peeking over form  
* Voice-style input field with microphone icon and "What needs to be done?" placeholder  
* Auto-focus on input with soft keyboard appearing smoothly on mobile

#### **Creation State 2 \- Basic Task Details**

* Task title input with character counter (appears after 40 characters)  
* Duration picker with common quick-select chips (15min, 30min, 1hr, 2hr) in Secondary Lavender  
* Default 30-minute duration pre-selected with Pengu showing "suggesting" expression  
* Priority selector with three levels: Low (calm Pengu), Medium (focused Pengu), High (urgent Pengu)  
* Color-coded priority indicators using gradients from Secondary Light Pink to Primary Soft Pink

#### **Creation State 3 \- Advanced Details (Progressive Disclosure)**

* "More Options" expander reveals description field, tags, and due date  
* Description field supports rich text with basic formatting toolbar  
* Tag system with autocomplete suggestions and color-coded categories  
* Due date picker with calendar widget and relative date shortcuts ("Today", "Tomorrow", "Next Week")  
* Pengu animations reflect task complexity: simple tasks show relaxed Pengu, complex tasks show focused Pengu

#### **Creation State 4 \- Auto-Save & Confirmation**

* Real-time auto-save with subtle saving indicator (tiny Pengu with floppy disk icon)  
* Save confirmation with Pengu celebration (scale \+ bounce animation with sparkle particles)  
* Task preview card appears in list/calendar with smooth fade-in transition  
* Option to "Add Another" task maintains modal state with form reset

### **Task Templates & Recurring Tasks**

#### **Template State 1 \- Template Library**

* Grid layout of pre-built templates with category organization  
* Templates show preview cards with estimated duration and Pengu recommendations  
* Categories include: Work, Personal, Health, Learning with distinct icons  
* Search functionality with real-time filtering and Pengu as search assistant

#### **Template State 2 \- Custom Template Creation**

* Template builder with reusable task components  
* Drag-and-drop interface for task ordering with snap-to-grid behavior  
* Template naming with icon selection (20dp icons in Primary Soft Pink)  
* Pengu shows "building" animation with tiny tools

#### **Template State 3 \- Recurring Task Setup**

* Frequency selector with visual calendar preview  
* Custom recurrence patterns with advanced options  
* End date/occurrence limit configuration  
* Pengu demonstrates recurrence with calendar flipping animation

### **Task Management Operations**

#### **Management State 1 \- Task List View**

* Card-based layout with Task Card styling (16dp corner radius, subtle shadows)  
* Left border color indicates priority level and completion status  
* Swipe gestures for quick actions: complete (right swipe), delete (left swipe)  
* Bulk selection mode with checkboxes and batch operation toolbar

#### **Management State 2 \- Task Editing**

* In-place editing for quick changes with inline form fields  
* Full edit modal for comprehensive changes  
* Change tracking with revision history for important tasks  
* Pengu provides context-aware suggestions during editing

#### **Management State 3 \- Task Completion**

* Completion animation with task card scaling down and fading out  
* Pengu celebration with confetti particles and thumbs up gesture  
* Completion statistics and achievement badges  
* Undo functionality with toast notification and worried Pengu expression

## **AI-Powered Schedule Optimization (Pengu)**

### **Optimization Trigger**

#### **Optimization State 1 \- Manual Trigger**

* "Optimize with Pengu" button prominently displayed with gentle pulsing animation (scale 1.0 to 1.03)  
* Button uses Accent Button styling with Accent Tertiary Purple background  
* Pengu icon within button shows "ready to help" expression with raised finger  
* Hover state increases shadow depth and shows Pengu with excited expression  
* Loading state replaces button text with spinner and focused Pengu animation

#### **Optimization State 2 \- Automatic Suggestions**

* Contextual optimization suggestions appear as Pengu Cards with gradient backgrounds  
* Trigger conditions: schedule conflicts, overloaded days, poor task distribution  
* Pengu proactively suggests optimization with gentle notification bubble  
* Dismissible suggestions with "Not now" option that shows understanding Pengu expression

### **Processing & Analysis**

#### **Processing State 1 \- Task Analysis**

* Full-screen processing overlay with Primary Pure White background at 95% opacity  
* Large Pengu avatar (60dp) in center with "thinking" pose and animated thought bubble  
* Progress indicator shows analysis phases: "Understanding tasks", "Checking constraints", "Finding optimal schedule"  
* Animated progress bar in Primary Soft Pink with percentage completion  
* Processing time estimation with Pengu tapping imaginary watch

#### **Processing State 2 \- Constraint Evaluation**

* Secondary progress phase showing Pengu with calendar and clock icons  
* Visual representation of constraints being checked (working hours, priorities, dependencies)  
* Real-time updates on optimization factors with checkmark animations  
* Estimated completion time updates based on complexity

#### **Processing State 3 \- Schedule Generation**

* Final processing phase with Pengu arranging miniature task blocks  
* Preview glimpses of optimized schedule appearing behind processing overlay  
* Success indicators building anticipation for reveal  
* Celebration preparation animation as optimization completes

### **Results Presentation**

#### **Results State 1 \- Before/After Comparison**

* Split-screen view showing original schedule vs. optimized version  
* Clear visual improvements highlighted with colored annotations  
* Improvement metrics: reduced conflicts, better energy alignment, optimized focus time  
* Pengu positioned between views pointing out key improvements with excited expressions

#### **Results State 2 \- Explanation & Rationale**

* Conversational explanation in Pengu's friendly voice using Pengu Text typography  
* Key optimization decisions explained in plain language  
* Visual callouts showing specific improvements with connecting lines  
* Benefits summary with icons: time saved, stress reduced, productivity increased

#### **Results State 3 \- Accept/Reject Interface**

* Clear primary actions: "Accept Schedule" (Primary Button) and "Keep Original" (Secondary Button)  
* Partial acceptance option allowing users to adopt specific suggestions  
* Feedback mechanism for Pengu learning with thumbs up/down options  
* Preview mode allowing exploration before commitment

### **Learning & Adaptation**

#### **Learning State 1 \- User Feedback Collection**

* Post-optimization feedback form with Pengu as interviewer  
* Simple rating system with star ratings and Pengu expressions matching each level  
* Optional detailed feedback with pre-written common responses  
* A/B testing different optimization approaches with user preference tracking

#### **Learning State 2 \- Pattern Recognition**

* Dashboard showing Pengu's learning progress with user-specific insights  
* Personalization indicators: energy patterns, preference trends, productivity metrics  
* Visual representation of AI improvement over time with ascending graph  
* User control over learning features with privacy-focused explanations

#### **Learning State 3 \- Advanced Customization**

* Expert mode unlock for power users with advanced constraint configuration  
* Custom optimization goals: minimize commute, maximize deep work, balance energy  
* Pengu personality customization affecting optimization style and communication  
* Integration with external calendars and productivity tools

## **15-Minute Granular Scheduling**

### **Calendar Grid Interface**

#### **Grid State 1 \- Time Visualization**

* Calendar grid with clear 15-minute time slots using subtle Border Light (\#F0F0F0) lines  
* Time labels on left axis using Caption typography (12px) in Text Secondary color  
* Hover states on empty slots show subtle Background Secondary fill with border highlight  
* Current time indicator as horizontal line in Accent Interactive Blue with gentle glow effect  
* Touch-friendly mobile adaptation with larger touch targets (minimum 44dp height)

#### **Grid State 2 \- Task Block Display**

* Task blocks snap perfectly to 15-minute boundaries with magnetic animation (150ms ease-out)  
* Task cards use rounded corners (8dp) and display title, duration, and priority color-coding  
* Overflow handling for long task names with ellipsis and tooltip on hover  
* Visual density adaptation based on zoom level: detailed view shows full info, zoomed out shows color blocks only  
* Priority indication through left border thickness and color saturation

#### **Grid State 3 \- Interactive Scheduling**

* Drag-and-drop functionality with real-time visual feedback and position indicators  
* Snap-to-grid behavior with satisfying magnetic animation and haptic feedback  
* Ghost image during drag operations showing destination position  
* Multi-touch support for mobile devices with gesture recognition  
* Accessibility keyboard navigation with clear focus indicators

### **Drag & Drop Operations**

#### **Drag State 1 \- Initiation**

* Long press or click-and-hold initiates drag mode with subtle scale animation (1.05x)  
* Task block gains elevated shadow (Y-offset 8dp, blur 16dp) and slight transparency  
* Other time slots highlight as potential drop zones with Background Tertiary fill  
* Pengu appears as scheduling assistant with encouraging expression  
* Screen auto-scroll when dragging near edges with smooth velocity curves

#### **Drag State 2 \- Conflict Detection**

* Real-time conflict detection with immediate visual feedback  
* Conflicting time slots show Error Pink overlay with warning icon  
* Pengu expression changes to "concerned" when conflicts detected  
* Alternative time suggestions appear as highlighted available slots  
* Conflict resolution tooltip provides options: "Replace", "Find alternative", "Split task"

#### **Drag State 3 \- Successful Placement**

* Drop animation with satisfying snap-to-grid effect and scale normalization  
* Task block settles into position with gentle bounce animation (400ms spring)  
* Pengu celebrates successful placement with thumbs up and sparkle effect  
* Auto-save confirmation with subtle toast notification  
* Undo option appears briefly with reverse animation capability

### **Time Conflict Resolution**

#### **Conflict State 1 \- Detection & Alert**

* Immediate conflict detection triggers Pengu mediator appearance with concerned expression  
* Conflict visualization shows overlapping tasks with Error Pink highlighting  
* Clear explanation of conflict with affected task names and times  
* Resolution options presented as action cards with distinct visual treatment  
* Severity indication through color intensity and Pengu expression urgency

#### **Conflict State 2 \- Resolution Options**

* "Auto-resolve" option with Pengu suggesting optimal rearrangement  
* Manual resolution tools: move conflicting task, split longer task, adjust duration  
* Preview mode showing resolution outcome before commitment  
* Side-by-side comparison of before/after states  
* Clear action buttons with Primary/Secondary button hierarchy

#### **Conflict State 3 \- Resolution Confirmation**

* Successful resolution triggers Pengu celebration with resolved task highlighting  
* Change summary showing what was modified with clear before/after states  
* Confirmation toast with undo option available for 10 seconds  
* Updated schedule view with smooth transition animations  
* Improvement metrics: conflicts resolved, time optimized, schedule efficiency gained

### **Buffer Time & Breaks**

#### **Buffer State 1 \- Automatic Suggestions**

* Pengu proactively suggests buffer time between demanding tasks  
* Buffer suggestions appear as semi-transparent time blocks in Warning Purple  
* Contextual recommendations based on task types: creative work needs more buffer, routine tasks need less  
* Visual indicators showing optimal break timing with energy level curves  
* One-click acceptance of buffer suggestions with confirmation animation

#### **Buffer State 2 \- Manual Buffer Configuration**

* Buffer time settings accessible through schedule preferences  
* Slider controls for default buffer durations (5, 10, 15 minutes) with live preview  
* Task-type specific buffer rules with category-based customization  
* Energy level integration showing when breaks are most beneficial  
* Pengu demonstrates break benefits with relaxation animations

#### **Buffer State 3 \- Break Optimization**

* Intelligent break placement considering energy patterns and task demands  
* Break activity suggestions: stretch, walk, meditate with appropriate icons  
* Integration with health apps for movement reminders and activity tracking  
* Customizable break types with duration and activity templates  
* Progress tracking for break adherence with gentle Pengu encouragement

## **Dual View System (Calendar/List)**

### **View Toggle Interface**

#### **Toggle State 1 \- Control Design**

* Prominent view toggle positioned in top navigation bar using segmented control design  
* Two options: "Calendar" and "List" with icons (calendar and list icons, 20dp)  
* Active state uses Primary Soft Pink background with smooth sliding animation (250ms ease-out)  
* Inactive state shows Text Secondary color with hover states in Secondary Lavender  
* Smooth transition animation between views with fade-out/fade-in sequence

#### **Toggle State 2 \- View Transition**

* Cross-fade animation between calendar and list views (350ms custom cubic-bezier)  
* Content transformation with stagger effect: items animate in sequence with 50ms delays  
* Maintains scroll position context where possible between views  
* Loading state during view switch with subtle Pengu animation  
* Orientation lock on mobile during transition to prevent layout issues

#### **Toggle State 3 \- Preference Persistence**

* User's preferred view remembered across app sessions with local storage  
* Welcome back message from Pengu acknowledging preferred view  
* View usage analytics to understand user patterns  
* Quick switch keyboard shortcut (Cmd/Ctrl \+ Tab) for power users  
* Accessibility announcements for screen reader users during view changes

### **Calendar View Features**

#### **Calendar State 1 \- Time Block Display**

* Task blocks display with color-coded priorities using brand color palette  
* Time stamps in Caption typography positioned at task block tops  
* Visual hierarchy through task block heights corresponding to duration  
* Priority indicators through left border colors: Low (Success Blue), Medium (Primary Soft Pink), High (Error Pink)  
* Pengu timestamp annotations appear on hover with time remaining/elapsed information

#### **Calendar State 2 \- Interactive Elements**

* Click to edit tasks in-place with inline editing capabilities  
* Hover states reveal quick action buttons: edit, complete, reschedule  
* Context menus accessible through right-click or long-press gestures  
* Multi-select capability with checkbox overlays for batch operations  
* Zoom controls for different time granularities: day, week, month views

#### **Calendar State 3 \- Real-time Updates**

* Live synchronization indicators with Pengu wifi/sync status icons  
* Optimistic UI updates with immediate visual feedback  
* Conflict detection with real-time visual warnings  
* Collaborative features showing other users' changes with distinct color coding  
* Offline mode indicators with clear capability explanations

### **List View Optimization**

#### **List State 1 \- Card-Based Layout**

* Task cards using standard Task Card styling with consistent 16dp padding  
* Clear visual hierarchy through typography scale and color contrast  
* Completion states indicated through card opacity and strikethrough text effects  
* Priority levels shown through colored left borders and subtle background tints  
* Efficient scrolling with virtual rendering for large task lists

#### **List State 2 \- Grouping & Organization**

* Smart grouping options: by priority, due date, project, or custom categories  
* Collapsible group headers with expansion/collapse animations  
* Drag-and-drop reordering within and between groups  
* Visual separators between groups using Border Light color  
* Group summary statistics with completion progress indicators

#### **List State 3 \- Search & Filtering**

* Global search bar with real-time filtering and Pengu search assistant  
* Advanced filtering options accessible through expandable filter panel  
* Filter tags with clear removal options and active filter indicators  
* Search result highlighting with matching text emphasis  
* Empty state illustrations with helpful Pengu guidance for refining searches

### **Cross-View Synchronization**

#### **Sync State 1 \- Real-time Updates**

* Instant synchronization between calendar and list views during editing  
* Visual indicators showing sync status with subtle animations  
* Conflict resolution when simultaneous edits occur across views  
* Change propagation with smooth animations maintaining user context  
* Offline queue management with priority-based sync ordering

#### **Sync State 2 \- Context Preservation**

* Scroll position and selection states maintained during view switches  
* Filter and search contexts preserved across view changes  
* Zoom level and time focus maintained in calendar view  
* Recently viewed tasks highlighted in both views  
* Breadcrumb navigation for complex task hierarchies

#### **Sync State 3 \- Performance Optimization**

* Lazy loading for large datasets with progressive enhancement  
* Efficient data structures minimizing re-rendering during updates  
* Background sync with minimal UI disruption  
* Caching strategies for offline capability and fast loading  
* Resource cleanup during view transitions for optimal performance

## **Cross-Device Synchronization**

### **Sync Status Interface**

#### **Status State 1 \- Connection Indicators**

* Persistent sync status indicator in top navigation using Pengu with connection icons  
* Four connection states: Online (happy Pengu with wifi), Syncing (focused Pengu with spinner), Offline (sleepy Pengu with airplane), Error (concerned Pengu with warning icon)  
* Status color coding: Success Blue (online), Primary Soft Pink (syncing), Text Tertiary (offline), Error Pink (error)  
* Tap to expand detailed sync information with last sync timestamp  
* Accessibility announcements for status changes with clear explanations

#### **Status State 2 \- Sync Progress Visualization**

* Progress indicators during active synchronization with percentage completion  
* Queue visualization showing pending changes with priority ordering  
* Real-time update count with smooth number transitions  
* Pengu animation states reflecting sync intensity and progress  
* Estimated completion time with dynamic updates based on connection speed

#### **Status State 3 \- Manual Sync Controls**

* Pull-to-refresh gesture on mobile with custom Pengu animation  
* Manual sync button for immediate synchronization with loading states  
* Sync preferences accessible through settings with granular control options  
* Background sync scheduling with user-configurable intervals  
* Developer mode showing detailed sync logs and debugging information

### **Offline Capabilities**

#### **Offline State 1 \- Mode Detection**

* Automatic offline detection with graceful degradation of features  
* Clear offline mode communication with Pengu in "airplane mode" pose  
* Feature availability matrix showing what works offline vs. online  
* Data caching strategy explanation with storage usage indicators  
* Offline queue visualization with pending changes and conflict preview

#### **Offline State 2 \- Local Data Management**

* Optimistic UI updates with immediate local storage persistence  
* Change tracking system with comprehensive edit history  
* Local search and filtering capabilities with full feature parity  
* Cache management interface with storage cleanup options  
* Export functionality for offline data backup and portability

#### **Offline State 3 \- Reconnection Handling**

* Automatic sync initiation upon connection restoration  
* Conflict detection and resolution for offline changes  
* Progress indication during large sync operations  
* Success celebration with Pengu catching up animation  
* Error recovery with detailed explanations and retry mechanisms

### **Multi-Device Handoff**

#### **Handoff State 1 \- Device Recognition**

* Automatic device detection with unique device identifiers  
* Welcome messages customized by device type and screen size  
* Recent activity summary when switching between devices  
* Pengu greeting adapted to device context (mobile, tablet, desktop)  
* Cross-device usage analytics with insights and recommendations

#### **Handoff State 2 \- Context Preservation**

* Active task preservation across device switches  
* Scroll position and view state synchronization  
* Draft content restoration with auto-save recovery  
* Recent search and filter history maintenance  
* Session continuity with seamless transition experiences

#### **Handoff State 3 \- Conflict Resolution**

* Multi-device conflict detection with clear resolution interfaces  
* Version comparison tools showing differences between device states  
* User choice preservation with conflict resolution preferences  
* Merge capabilities for non-conflicting simultaneous changes  
* Audit trail showing device-specific change history

### **Data Conflict Management**

#### **Conflict State 1 \- Detection & Analysis**

* Real-time conflict detection during sync operations  
* Conflict categorization: simple (timestamps), complex (content changes), critical (data loss potential)  
* Visual conflict indicators with Error Pink highlighting and warning icons  
* Pengu mediator appearance with concerned but helpful expression  
* Conflict impact assessment with affected data scope visualization

#### **Conflict State 2 \- Resolution Interface**

* Side-by-side comparison of conflicting versions with highlighted differences  
* Resolution options: keep local, accept remote, manual merge, create duplicate  
* Preview mode showing resolution outcome before commitment  
* Batch resolution for multiple conflicts with smart suggestion algorithms  
* Expert mode with granular field-level conflict resolution

#### **Conflict State 3 \- Resolution Confirmation**

* Clear confirmation of resolution choices with summary of changes  
* Undo capability for resolution decisions with rollback mechanisms  
* Success indicators with Pengu celebration for resolved conflicts  
* Learning system improving future conflict prediction and prevention  
* Documentation of resolution patterns for user education and improvement

## **PWA Capabilities & Offline Support**

### **Installation Experience**

#### **Install State 1 \- Contextual Prompts**

* Smart install prompt timing based on user engagement and return visits  
* Pengu encourages home screen addition with excited expression and gift box icon  
* Clear value proposition: "Access PenguPlan instantly from your home screen"  
* Dismissible prompt with "Not now" option showing understanding Pengu  
* Platform-specific install instructions with visual guides for iOS and Android

#### **Install State 2 \- Installation Process**

* Native install banner integration with custom Pengu branding  
* Progress indication during installation with Pengu "building" animation  
* Success confirmation with Pengu celebration and confetti effects  
* First launch experience optimized for installed PWA context  
* Icon customization options with different Pengu expressions for app icon

#### **Install State 3 \- Post-Installation Optimization**

* PWA-specific UI optimizations with native app feel  
* Splash screen featuring Pengu with brand colors and smooth transitions  
* Enhanced navigation patterns optimized for installed app usage  
* Push notification setup with clear permission explanations  
* App icon badge integration showing pending tasks or notifications

### **Offline Functionality Design**

#### **Offline State 1 \- Core Features Available**

* Task creation and editing with full offline capability  
* Local schedule optimization using cached AI models  
* Basic task management operations with immediate visual feedback  
* Data persistence using IndexedDB with robust error handling  
* Clear feature availability indicators with Pengu explanations

#### **Offline State 2 \- Intelligent Caching**

* Smart content caching based on user patterns and frequently accessed data  
* Cache management interface with storage usage visualization  
* Background fetch for recent tasks and schedule data  
* Predictive caching for likely-needed content with minimal storage impact  
* Cache cleanup automation with user control over storage preferences

#### **Offline State 3 \- Sync Queue Management**

* Offline action queuing with priority-based ordering  
* Visual queue representation showing pending changes with type indicators  
* Conflict prevention through optimistic UI design patterns  
* Retry logic with exponential backoff for failed sync attempts  
* Queue persistence across app sessions with restoration on restart

### **Performance Optimization**

#### **Performance State 1 \- Loading Strategies**

* Progressive enhancement with core functionality loading first  
* Skeleton screens with Pengu-themed loading animations  
* Lazy loading for non-critical features and heavy assets  
* Code splitting by feature with dynamic imports for optimal bundle sizes  
* Service worker caching strategies with intelligent cache invalidation

#### **Performance State 2 \- Runtime Optimization**

* Virtual scrolling for large task lists with smooth animations  
* Debounced search and filtering to prevent excessive re-rendering  
* Optimized re-rendering through React optimization patterns  
* Memory management with component cleanup and garbage collection  
* Performance monitoring with user experience metrics tracking

#### **Performance State 3 \- Network Resilience**

* Graceful degradation for poor network conditions  
* Adaptive loading based on connection speed and device capabilities  
* Background sync with intelligent retry mechanisms  
* Offline-first architecture with online enhancement  
* Network status integration with user-friendly status communication

### **Update Management**

#### **Update State 1 \- Version Detection**

* Automatic update detection with user-friendly notification system  
* Pengu announces updates with gift box icon and excitement animation  
* Clear update benefits communication with feature highlights  
* Non-disruptive update process with background installation  
* Version comparison showing new features and improvements

#### **Update State 2 \- Update Installation**

* Seamless update installation with minimal user disruption  
* Progress indication with Pengu "upgrading" animation  
* Rollback capability for problematic updates with safety mechanisms  
* Update scheduling options for user convenience  
* Data migration handling with integrity checks and backup creation

#### **Update State 3 \- Post-Update Experience**

* New feature introduction with Pengu-guided tours  
* Changelog presentation with visual highlights and animations  
* User feedback collection for update experience and feature reception  
* Settings migration with preference preservation  
* Performance improvement communication with before/after metrics