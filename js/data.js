/*
 * ============================================================
 *  PORTFOLIO CONTENT
 *  Edit this file to change anything on the site.
 *  You never need to touch index.html or main.js to add content.
 *
 *  Text tips:
 *   - Wrap words in **double stars** to make them bold.
 *   - Keep every item inside "double quotes" and end it with a comma.
 * ============================================================
 */

window.PORTFOLIO = {

  /* ---------- About you (hero section) ---------- */
  profile: {
    name: "Nazima Mansuri",
    title: "Android Developer",
    tagline: "EMM · MDM · Samsung Knox · AMAPI",
    availability: "Open to remote Android roles",
    intro: "For **10+ years** I've built native Android apps in Kotlin and Java. Today I build the apps that **control the device itself**: parental control, classrooms, kiosks and digital signage on managed fleets.",
    email: "mansoor.nazima20@gmail.com",
    linkedin: "https://www.linkedin.com/in/nazima-m-a665b7b5",
    linkedinLabel: "linkedin.com/in/nazima-m-a665b7b5",
    github: "",            // e.g. "https://github.com/nazima-mansoor" (leave empty to hide)
    contactText: "I'm looking for a remote Android role, especially in EMM, MDM or enterprise mobility. Email is the best way to reach me."
  },

  /* ---------- Numbers under the hero ---------- */
  stats: [
    { value: "10+", label: "years in Android" },
    { value: "25+", label: "apps built" },
    { value: "15+", label: "enterprise & MDM apps" },
    { value: "3",   label: "companies" }
  ],

  /* ---------- Scrolling tech strip ---------- */
  ticker: [
    "Kotlin", "Java", "Jetpack Compose", "Samsung Knox SDK", "Android Management API",
    "Device Owner", "VpnService", "InCallService", "ML Kit", "TensorFlow Lite",
    "Firebase", "Socket.IO", "Node.js", "FFmpeg"
  ],

  /* ---------- Featured projects ----------
   * To add a project, copy one { ... } block, paste it, and change the text.
   *
   * layout:       "hero" = big full-width card, "wide" = full width, "" = half width
   * icon:         shield | phone | scan | school | pin | screen | lock | chat | car
   * features:     small titled tiles (used on hero cards)
   * highlights:   bullet points
   * caseStudy:    problem / solution / result (shown under "Case study")
   * architecture: boxes in the diagram, left to right. "note" is the line under it.
   * playStore:    link, or "" to hide
   */
  featured: [
    {
      name: "Wingio",
      category: "Parental control · MDM",
      company: "Tabnova Solutions",
      icon: "shield",
      layout: "hero",
      summary: "A parental-control MDM app for child devices. Parents set the rules, and the device enforces them.",
      features: [
        { title: "App usage limits", text: "Tracks usage of server-defined apps, disables over-used ones and reports screen time." },
        { title: "Web filtering",    text: "Logs visited URLs through custom DNS and blocks URLs with a custom VPN." },
        { title: "Install control",  text: "Handles kids' app install requests, and blocks Play Store installs and user changes." },
        { title: "Device lockdown",  text: "Location tracking, kiosk mode and accessibility-based blocking." }
      ],
      caseStudy: {
        problem:  "Parents needed real control over a child's phone, and the child must not be able to remove or bypass it.",
        solution: "Applied AMAPI and Samsung Knox policies, built a custom VPN and DNS filter, and added accessibility-based blocking. Rules reach the device in real time over Socket.IO and FCM.",
        result:   "Parents manage apps, websites, screen time and installs from their own app, and the child device enforces every rule."
      },
      architecture: [
        { title: "Parent app",        sub: "Sets rules, approves requests", kind: "device" },
        { title: "Node.js backend",   sub: "MongoDB · AMAPI policies",      kind: "server" },
        { title: "Real-time channel", sub: "Socket.IO · FCM",               kind: "cloud" },
        { title: "Wingio on child device", sub: "Kotlin · Device Owner",    kind: "device" },
        { title: "Knox / AMAPI",      sub: "Policies applied",              kind: "policy" },
        { title: "Enforcement",       sub: "VPN & DNS filter · kiosk · app limits", kind: "policy" }
      ],
      architectureNote: "The child device reports screen time, visited URLs and location back to the parent app.",
      tags: ["Kotlin", "AMAPI", "Samsung Knox", "VPN", "Custom DNS", "Socket.IO", "FCM"],
      playStore: ""
    },
    {
      name: "Wingio Dialer",
      category: "Telephony",
      company: "Tabnova Solutions",
      icon: "phone",
      layout: "",
      summary: "Replaces the default phone and SMS app on child devices.",
      highlights: [
        "Enforces MDM contact restrictions, sleep mode and screen time limits.",
        "Monitors calls and messages in real time and uploads them to Firebase.",
        "Communicates both ways with the parent app."
      ],
      caseStudy: {
        problem:  "The built-in phone and SMS apps can't follow MDM rules, so a child could call or message anyone.",
        solution: "Built a replacement default dialer and SMS app in Kotlin and Jetpack Compose that checks every call and message against MDM rules.",
        result:   "Children can only contact approved people, and parents see calls and messages in real time."
      },
      architecture: [
        { title: "Call or SMS",     sub: "Incoming / outgoing",            kind: "device" },
        { title: "Wingio Dialer",   sub: "Default phone & SMS app",        kind: "device" },
        { title: "MDM rules check", sub: "Contacts · sleep · screen time", kind: "policy" },
        { title: "Firebase",        sub: "Realtime Database",              kind: "cloud" },
        { title: "Parent app",      sub: "Live calls & messages",          kind: "device" }
      ],
      architectureNote: "Commands from the parent app reach the dialer in real time.",
      tags: ["Kotlin", "Jetpack Compose", "Knox", "InCallService", "SMS/MMS", "Firebase"],
      playStore: ""
    },
    {
      name: "Content Detection",
      category: "On-device AI",
      company: "Tabnova Solutions",
      icon: "scan",
      layout: "",
      summary: "Detects unsafe content in images on the device, so nothing leaves the phone.",
      highlights: [
        "Scans photos from the device library and images captured with the camera.",
        "Detects nudity, violence and other unsafe content using Google ML Kit and TensorFlow Lite.",
        "Runs fully offline with on-device inference, so no images are uploaded."
      ],
      caseStudy: {
        problem:  "Unsafe images on children's devices needed to be found without sending private photos to a server.",
        solution: "Ran ML Kit and TensorFlow Lite models on the device to classify images from the gallery and camera.",
        result:   "Detection works offline, and no image ever leaves the phone."
      },
      architecture: [
        { title: "Image source",    sub: "Photo library · camera",      kind: "device" },
        { title: "On-device models", sub: "ML Kit · TensorFlow Lite",   kind: "policy" },
        { title: "Classification",  sub: "Nudity · violence · unsafe",  kind: "policy" },
        { title: "Result",          sub: "Flagged on the device",       kind: "device" }
      ],
      architectureNote: "Everything runs on the phone. No network call is needed.",
      tags: ["Kotlin", "ML Kit", "TensorFlow Lite", "CameraX"],
      playStore: ""
    },
    {
      name: "Samsung Classroom Management",
      category: "Education",
      company: "Tabnova Solutions",
      icon: "school",
      layout: "",
      summary: "A teacher and student app with two modes.",
      highlights: [
        "**Class mode:** shares courses and files over the same Wi-Fi, lets teachers lock student devices, and supports two-way screen sharing, hardware controls and VPN-based URL blocking.",
        "**Cloud mode:** connects teachers and students from anywhere with Jitsi calls, plus APIs to create courses and share materials."
      ],
      caseStudy: {
        problem:  "Teachers needed to control student tablets in class and also teach students who were not in the room.",
        solution: "Built Class mode for same-Wi-Fi control and Cloud mode with Jitsi calls and course APIs, using Knox for device control.",
        result:   "One app covers both classroom and remote teaching."
      },
      architecture: [
        { title: "Teacher tablet",  sub: "Courses · controls",                  kind: "device" },
        { title: "Connection",      sub: "Class mode (Wi-Fi) or Cloud mode (Jitsi)", kind: "cloud" },
        { title: "Student tablets", sub: "Screen share · files",                kind: "device" },
        { title: "Knox controls",   sub: "Device lock · VPN URL block",         kind: "policy" }
      ],
      architectureNote: "",
      tags: ["Samsung Knox", "VPN", "Jitsi", "Screen sharing"],
      playStore: "https://play.google.com/store/apps/details?id=com.tabnova.classroomapp"
    },
    {
      name: "UBMe",
      category: "Social networking",
      company: "LaNet Team Software Solutions",
      icon: "pin",
      layout: "",
      summary: "A location-based social app to discover nearby places, events and people.",
      highlights: [
        "Post section to create and upload posts with images, videos, location, hashtags and text.",
        "Image and video editing for posts using FFmpeg.",
        "Check-ins, feeds, events, live chat and one-to-one chat.",
        "Localisation support and in-app purchases."
      ],
      caseStudy: {
        problem:  "Users wanted to share what was happening around them with rich media, not just text.",
        solution: "Built the post flow with images, videos, location and hashtags, and added in-app image and video editing with FFmpeg.",
        result:   "Users create, edit and share posts in one place, alongside check-ins, events and chat."
      },
      architecture: [],
      architectureNote: "",
      tags: ["Java", "FFmpeg", "Location", "Chat", "In-App Purchases"],
      playStore: "https://play.google.com/store/apps/details?id=com.UBMe"
    },
    {
      name: "Video Site Looper",
      category: "Digital signage",
      company: "Tabnova Solutions",
      icon: "screen",
      layout: "",
      summary: "Digital signage app that plays MDM-configured videos on loop and as a screen saver. Optimised the release build with ProGuard.",
      highlights: [],
      caseStudy: {
        problem:  "Unattended screens had to show the right videos without anyone touching the device.",
        solution: "The app reads the playlist from MDM, downloads videos with Download Manager, and plays them on loop and as a screen saver.",
        result:   "Signage content is managed remotely, with no manual setup on each screen."
      },
      architecture: [],
      architectureNote: "",
      tags: ["MDM", "Download Manager", "ProGuard"],
      playStore: "https://play.google.com/store/apps/details?id=com.dev.site.videolooper"
    }
  ],

  /* ---------- Other apps (grouped by company) ---------- */
  otherApps: [
    {
      company: "Tabnova",
      apps: [
        { name: "DRM (Studio 100)",      text: "Enterprise Digital Rights Management solution for securely delivering movie content to mobile devices in the UK." },
        { name: "Kids Dashboard",        text: "Locks the device into a kiosk dashboard with only approved apps, and allows only approved URLs in the browser." },
        { name: "Package Disabler",      text: "Enables and disables apps, imports and exports package lists, disables bloatware and uninstalls packages." },
        { name: "Owner App",             text: "Enables and disables packages on non-Samsung devices using Device Owner." },
        { name: "Hardware Key Mapper",   text: "Maps hardware keys to uninstall an app, lock or reboot the device, and enable or disable apps." },
        { name: "Power On Boot",         text: "Automatically powers on Samsung devices when connected to power." },
        { name: "URL Blocker",           text: "Blocks browser URLs through a VPN using a JSON URL list or a URL list from a file." },
        { name: "WIPE and Power Cleaner", text: "Device cleaner apps that clear cache, files and cookies on managed devices." },
        { name: "Face Detection",        text: "Detects faces with Google ML Kit and counts viewers to manage access to specific videos." },
        { name: "Power Chat",            text: "Chat app with Firebase Realtime Database and Firebase Authentication for login and registration." }
      ]
    },
    {
      company: "Sassy Infotech",
      apps: [
        { name: "Haha Cars Rider & Partner", text: "Ride-hailing apps. Riders book trips with 2 to 4 stops and see routes as polylines. Drivers accept requests, manage online status and track document approval." },
        { name: "GOPark",          text: "Online marketplace for booking and hosting privately owned parking spaces." },
        { name: "Swadesh News",    text: "Gujarati newspaper app with Google Ads." },
        { name: "Vivaa",           text: "Dating app with partner-preference filters and Firebase chat between users." },
        { name: "Cupidknot",       text: "Matrimonial app with partner suggestions that users can approve or decline." },
        { name: "E-commerce apps", text: "Several online shopping apps for clients." }
      ]
    },
    {
      company: "LaNet",
      apps: [
        { name: "Rastrack CRT", text: "Transportation and delivery app to monitor vehicles, routes and details of each delivery." }
      ]
    }
  ],

  /* ---------- Work experience (newest first) ---------- */
  experience: [
    {
      company: "Tabnova Solutions Pvt. Ltd.",
      role: "Android Developer",
      dates: "Feb 2021 – Present",
      current: true,
      points: [
        "Build EMM, MDM and Samsung Knox apps, including the Wingio parental-control suite.",
        "Real-time parent-to-child communication with Socket.IO, FCM and Node.js.",
        "Led Google Play policy compliance and fixed critical crashes across managed fleets."
      ]
    },
    {
      company: "Sassy Infotech Pvt. Ltd.",
      role: "Android Developer",
      dates: "Feb 2019 – Feb 2021",
      points: [
        "Client apps in Kotlin and Java: ride-hailing, parking, news, dating and e-commerce, with Google Maps routing and Firebase chat."
      ]
    },
    {
      company: "LaNet Team Software Solutions Pvt. Ltd.",
      role: "Software Developer",
      dates: "Jul 2016 – Jan 2019",
      points: [
        "Java and Android projects with backend APIs and PostgreSQL. Main project: UBMe."
      ]
    }
  ],

  /* ---------- Education ---------- */
  education: [
    { year: "2016", score: "CGPA 8.43", degree: "B.E. Computer Engineering", school: "C.K. Pithawalla College of Engineering & Technology, Surat" },
    { year: "2013", score: "CGPA 8.02", degree: "Diploma in Computer Engineering", school: "Government Polytechnic for Girls, Surat" }
  ],

  /* ---------- Skills ---------- */
  skills: [
    { group: "Android", items: ["Kotlin", "Java", "Jetpack Compose", "XML", "MVVM / MVI", "Clean Architecture", "Coroutines & Flow", "Hilt", "Room", "DataStore", "WorkManager", "Navigation"] },
    { group: "Enterprise", items: ["AMAPI", "Device Owner APIs", "Samsung Knox SDK", "EMM / MDM", "Managed Configurations", "Kiosk mode", "VPN", "Custom DNS", "Microsoft Intune"] },
    { group: "Android platform", items: ["Foreground Services", "AccessibilityService", "VpnService", "InCallService", "SMS/MMS", "Photo Picker", "SAF", "Google Maps SDK", "FFmpeg"] },
    { group: "Backend & Cloud", items: ["Firebase", "FCM", "Node.js", "MongoDB", "PostgreSQL", "REST", "Socket.IO"] },
    { group: "AI / ML", items: ["ML Kit", "TensorFlow Lite", "On-device content detection", "Claude Code"] },
    { group: "Tools & more", items: ["Android Studio", "Git", "GitHub", "Play Console", "Gradle (Kotlin DSL)", "JavaScript", "React Native", "Expo"] }
  ]
};
