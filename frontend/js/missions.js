const missions = {

   "1-1": {
    world: 1,
    level: 1,
    title: "Cyber Security Basics",
    difficulty: "EASY",

    description:
        "Learn the basic idea behind protecting digital systems and information.",

    question:
        "What is the main goal of cyber security?",

    options: [
        "Playing online games",
        "Increasing internet speed",
        "Protecting computers and data",
        "Creating websites"
    ],

    answer: 2,

    hint:
        "Think about what cyber security is mainly trying to keep safe in the digital world.",

    reward: 100,
    coins: 20
},


"1-2": {
    world: 1,
    level: 2,
    title: "Understanding Data",
    difficulty: "EASY",

    description:
        "Learn why protecting digital information is an important part of cyber security.",

    question:
        "Which of the following is an example of sensitive personal information?",

    options: [
        "A public weather report",
        "A person's password",
        "A public news article",
        "A website's homepage"
    ],

    answer: 1,

    hint:
        "Think about which type of information could allow someone to access a person's account.",

    reward: 110,
    coins: 25
},


"1-3": {
    world: 1,
    level: 3,
    title: "Protect Personal Information",
    difficulty: "EASY",

    description:
        "Learn how to keep personal information safe while using digital services.",

    question:
        "Which information should you avoid sharing with strangers online?",

    options: [
        "Your favorite color",
        "A public website link",
        "Your password",
        "A general weather update"
    ],

    answer: 2,

    hint:
        "Think about information that could be used to access one of your accounts.",

    reward: 120,
    coins: 30
},


"1-4": {
    world: 1,
    level: 4,
    title: "Safe Browsing",
    difficulty: "EASY",

    description:
        "Learn how to identify safer habits while browsing websites and using online services.",

    question:
        "Which action is safest when visiting an unfamiliar website?",

    options: [
        "Download every file it offers",
        "Enter your password immediately",
        "Ignore browser security warnings",
        "Check the website carefully before sharing information"
    ],

    answer: 3,

    hint:
        "Before trusting an unfamiliar website, take a moment to check where you are and what it is asking for.",

    reward: 130,
    coins: 35
},


"1-5": {
    world: 1,
    level: 5,
    title: "Security Awareness",
    difficulty: "EASY",

    description:
        "Good cyber security starts with recognizing suspicious online behavior.",

    question:
        "What should you do if you receive a suspicious message asking for your password?",

    options: [
        "Reply with your password",
        "Forward the message to everyone",
        "Ignore the warning and click the link",
        "Do not share the password and verify the message"
    ],

    answer: 3,

    hint:
        "Never trust an unexpected request for your password without checking who really sent it.",

    reward: 140,
    coins: 40
},


"1-6": {
    world: 1,
    level: 6,
    title: "Device Security",
    difficulty: "EASY",

    description:
        "Keeping your devices updated and protected helps reduce common security risks.",

    question:
        "Which action helps keep your device more secure?",

    options: [
        "Disable security updates",
        "Install updates and security patches regularly",
        "Share your device password",
        "Install apps from unknown sources"
    ],

    answer: 1,

    hint:
        "Security fixes are often delivered through updates, so keeping your device updated matters.",

    reward: 150,
    coins: 45
},


"1-7": {
    world: 1,
    level: 7,
    title: "Online Accounts",
    difficulty: "EASY",

    description:
        "Secure online accounts need strong authentication and careful account management.",

    question:
        "Which practice helps protect an online account?",

    options: [
        "Using the same password everywhere",
        "Sharing your login details with friends",
        "Using a unique strong password",
        "Turning off account security features"
    ],

    answer: 2,

    hint:
        "A password that is strong and not reused across other accounts gives better protection.",

    reward: 160,
    coins: 50
},


"1-8": {
    world: 1,
    level: 8,
    title: "Suspicious Messages",
    difficulty: "EASY",

    description:
        "Suspicious messages can contain links or requests designed to trick users.",

    question:
        "You receive a message asking you to click an unknown link and enter your login details. What should you do?",

    options: [
        "Click the link and enter your details",
        "Share the message with everyone",
        "Verify the message through an official source before taking action",
        "Reply with your password"
    ],

    answer: 2,

    hint:
        "Do not trust an unknown link immediately; verify the request using a trusted official source.",

    reward: 170,
    coins: 55
},


"1-9": {
    world: 1,
    level: 9,
    title: "Cyber Threats",
    difficulty: "EASY",

    description:
        "Recognizing common cyber threats is an important part of staying safe online.",

    question:
        "Which of the following is a common cyber threat?",

    options: [
        "Phishing",
        "Creating a backup",
        "Installing security updates",
        "Using multi-factor authentication"
    ],

    answer: 0,

    hint:
        "Think about a threat that tricks users into revealing information through fake messages or websites.",

    reward: 180,
    coins: 60
},


"1-10": {
    world: 1,
    level: 10,
    title: "Digital Safety",
    difficulty: "EASY",

    description:
        "Final mission of the Digital Basics world. Apply the security habits you have learned.",

    question:
        "Which combination represents good basic cyber security practice?",

    options: [
        "Sharing passwords and ignoring updates",
        "Using weak passwords and unknown downloads",
        "Using strong passwords, keeping software updated and being careful with suspicious messages",
        "Disabling security features for convenience"
    ],

    answer: 2,

    hint:
        "Look for the combination that protects accounts, keeps devices updated and handles suspicious messages carefully.",

    reward: 300,
    coins: 75
},


"2-1": {
    world: 2,
    level: 1,
    title: "Know Your Network",
    difficulty: "NORMAL",

    description:
        "Every device connected to a network needs an identity so that data can reach the correct destination.",

    question:
        "Which address is commonly used to identify a device on a network?",

    options: [
        "MAC wallpaper",
        "IP address",
        "Username",
        "File extension"
    ],

    answer: 1,

    hint:
        "Think about the numerical network address used to identify a device and route network traffic.",

    reward: 350,
    coins: 80
},


"2-2": {
    world: 2,
    level: 2,
    title: "The Port Scanner",
    difficulty: "NORMAL",

    description:
        "Network services communicate through numbered ports. Some ports are commonly associated with specific protocols.",

    question:
        "Which port is commonly associated with HTTPS traffic?",

    options: [
        "Port 21",
        "Port 25",
        "Port 443",
        "Port 110"
    ],

    answer: 2,

    hint:
        "HTTPS uses the standard secure web-service port commonly associated with encrypted web traffic.",

    reward: 380,
    coins: 85
},


"2-3": {
    world: 2,
    level: 3,
    title: "Traffic Alert",
    difficulty: "NORMAL",

    description:
        "Network traffic can provide useful clues when suspicious activity occurs.",

    question:
        "You notice unusual network traffic from a workstation. What should you do first?",

    options: [
        "Investigate the traffic and review relevant network logs",
        "Delete all network logs",
        "Disconnect every device in the organization",
        "Ignore the activity"
    ],

    answer: 0,

    hint:
        "Start by gathering evidence about the unusual activity instead of deleting logs or taking unnecessary action.",

    reward: 410,
    coins: 90
},


"2-4": {
    world: 2,
    level: 4,
    title: "The Open Door",
    difficulty: "NORMAL",

    description:
        "Unnecessary open network ports can increase the attack surface of a system.",

    question:
        "What is a good security practice when a network port is not required?",

    options: [
        "Make the port publicly accessible",
        "Share the port number with everyone",
        "Disable or restrict the unused port",
        "Ignore the port completely"
    ],

    answer: 2,

    hint:
        "If a network service is not needed, reducing its exposure can reduce the system's attack surface.",

    reward: 440,
    coins: 95
},


"2-5": {
    world: 2,
    level: 5,
    title: "Packet Hunter",
    difficulty: "MEDIUM",

    description:
        "Network packets carry information between devices and can provide useful clues during security analysis.",

    question:
        "What does a network packet generally contain?",

    options: [
        "Only the computer's wallpaper",
        "Information being transmitted along with network-related details",
        "Only the user's password",
        "Only the device's battery status"
    ],

    answer: 1,

    hint:
        "Think about the data being sent between devices together with information needed to deliver and interpret it.",

    reward: 470,
    coins: 100
},


"2-6": {
    world: 2,
    level: 6,
    title: "Firewall Breach",
    difficulty: "MEDIUM",

    description:
        "A firewall controls network traffic according to configured security rules.",

    question:
        "What is the primary purpose of a firewall?",

    options: [
        "To filter and control network traffic",
        "To increase screen brightness",
        "To create user accounts",
        "To compress files"
    ],

    answer: 0,

    hint:
        "Think of a firewall as a security gate that decides which network traffic should be allowed or blocked.",

    reward: 500,
    coins: 110
},


"2-7": {
    world: 2,
    level: 7,
    title: "Suspicious Connection",
    difficulty: "MEDIUM",

    description:
        "A workstation is communicating with an unfamiliar external destination.",

    question:
        "What should a security analyst examine to investigate the suspicious connection?",

    options: [
        "Only the monitor model",
        "Only the desktop wallpaper",
        "Network logs, destination details and connection timestamps",
        "Only the keyboard settings"
    ],

    answer: 2,

    hint:
        "Look for evidence that shows where the connection went, when it happened and what the network recorded.",

    reward: 540,
    coins: 120
},


"2-8": {
    world: 2,
    level: 8,
    title: "Intruder Detected",
    difficulty: "HARD",

    description:
        "An intrusion detection system reports unusual activity involving an internal server.",

    question:
        "What is the main purpose of an intrusion detection system?",

    options: [
        "To replace the operating system",
        "To detect and alert about suspicious activity",
        "To create stronger passwords automatically",
        "To increase internet bandwidth"
    ],

    answer: 1,

    hint:
        "Its role is to watch for signs of suspicious or potentially malicious activity and raise an alert.",

    reward: 580,
    coins: 130
},


"2-9": {
    world: 2,
    level: 9,
    title: "Defend the Server",
    difficulty: "HARD",

    description:
        "A server is receiving repeated suspicious connections from an unknown source.",

    question:
        "What is an appropriate defensive response?",

    options: [
        "Allow all connections without checking",
        "Delete the server logs",
        "Share the server credentials",
        "Restrict suspicious traffic and investigate the related logs"
    ],

    answer: 3,

    hint:
        "A defensive response should reduce the suspicious activity while preserving and examining evidence.",

    reward: 630,
    coins: 145
},


"2-10": {
    world: 2,
    level: 10,
    title: "Network Under Attack",
    difficulty: "HARD",

    description:
        "FINAL MISSION OF NETWORK DEFENSE — Multiple alerts indicate suspicious activity across the network.",

    question:
        "What should a security team do when several network security alerts appear together?",

    options: [
        "Ignore the alerts until the problem disappears",
        "Delete the network logs",
        "Investigate the alerts, correlate the logs and contain suspicious activity",
        "Give the suspicious connections unrestricted access"
    ],

    answer: 2,

    hint:
        "Multiple alerts should be connected together by examining the evidence and taking steps to contain suspicious activity.",

    reward: 750,
    coins: 175
}, 
    // ==============================
    // WORLD 3 — WEB SECURITY
    // ==============================

    "3-1": {
    world: 3,
    level: 1,
    title: "The Web Gate",
    difficulty: "NORMAL",

    description:
        "Every website needs to protect the communication between users and the server.",

    question:
        "Which protocol is commonly used to securely communicate with a website?",

    options: [
        "FTP",
        "HTTPS",
        "HTTP",
        "SMTP"
    ],

    answer: 1,

    hint:
        "Look for the web protocol that encrypts communication between the browser and the website.",

    reward: 800,
    coins: 180
},


"3-2": {
    world: 3,
    level: 2,
    title: "Cookie Trail",
    difficulty: "NORMAL",

    description:
        "Websites use small pieces of data to remember information about users.",

    question:
        "What is a cookie mainly used for on a website?",

    options: [
        "Increasing screen brightness",
        "Scanning computer hardware",
        "Storing small pieces of browser-related information",
        "Deleting web pages"
    ],

    answer: 2,

    hint:
        "Think about the small data a website can store in your browser to remember information or preferences.",

    reward: 830,
    coins: 190
},


"3-3": {
    world: 3,
    level: 3,
    title: "The Login Trap",
    difficulty: "NORMAL",

    description:
        "Attackers sometimes create fake login pages to steal user credentials.",

    question:
        "What is a fake website designed to steal login credentials commonly associated with?",

    options: [
        "Phishing",
        "Compression",
        "Encryption",
        "Caching"
    ],

    answer: 0,

    hint:
        "Think of a social-engineering technique that uses fake websites or messages to trick users into revealing credentials.",

    reward: 860,
    coins: 200
},


"3-4": {
    world: 3,
    level: 4,
    title: "Script Attack",
    difficulty: "MEDIUM",

    description:
        "A web application may become vulnerable when untrusted input is displayed without proper protection.",

    question:
        "Which attack injects malicious scripts into web pages viewed by users?",

    options: [
        "DDoS",
        "Brute Force",
        "SQL Injection",
        "Cross-Site Scripting"
    ],

    answer: 3,

    hint:
        "Look for the web attack whose name refers to running scripts across another user's browser session.",

    reward: 900,
    coins: 210
},


"3-5": {
    world: 3,
    level: 5,
    title: "Database Intruder",
    difficulty: "MEDIUM",

    description:
        "Web applications often communicate with databases. Poorly handled input can expose database queries.",

    question:
        "Which attack attempts to manipulate database queries through malicious input?",

    options: [
        "SQL Injection",
        "Phishing",
        "Port Scanning",
        "Keylogging"
    ],

    answer: 0,

    hint:
        "Think about an attack that targets database queries by placing specially crafted input into an application.",

    reward: 950,
    coins: 220
},


"3-6": {
    world: 3,
    level: 6,
    title: "Request Forgery",
    difficulty: "MEDIUM",

    description:
        "Some attacks trick an authenticated user's browser into sending an unwanted request.",

    question:
        "What does CSRF primarily attempt to do?",

    options: [
        "Encrypt a database",
        "Force an authenticated user to perform an unwanted action",
        "Scan open network ports",
        "Install an antivirus"
    ],

    answer: 1,

    hint:
        "Think about an attack that abuses an already authenticated browser to make a request the user did not intentionally initiate.",

    reward: 1000,
    coins: 235
},


"3-7": {
    world: 3,
    level: 7,
    title: "Broken Access",
    difficulty: "HARD",

    description:
        "A secure application should ensure that users can access only the resources they are authorized to use.",

    question:
        "What security problem occurs when a user can access resources they should not be allowed to access?",

    options: [
        "Broken access control",
        "Data compression",
        "Network latency",
        "Cookie storage"
    ],

    answer: 0,

    hint:
        "The problem occurs when authorization rules fail to properly restrict what a user is allowed to access.",

    reward: 1060,
    coins: 250
},


"3-8": {
    world: 3,
    level: 8,
    title: "Hidden Information",
    difficulty: "HARD",

    description:
        "Developers sometimes accidentally expose sensitive information through application responses or configuration.",

    question:
        "Which information should NOT normally be exposed in a web application's public response?",

    options: [
        "Page title",
        "Public help text",
        "Database administrator password",
        "Navigation menu"
    ],

    answer: 2,

    hint:
        "Think about information that could give an attacker direct access to a highly privileged system account.",

    reward: 1120,
    coins: 265
},


"3-9": {
    world: 3,
    level: 9,
    title: "Session Hijack",
    difficulty: "HARD",

    description:
        "Web applications use sessions to maintain a user's authenticated state.",

    question:
        "What is a major goal of session hijacking?",

    options: [
        "Increase website speed",
        "Take control of another user's active session",
        "Create a website logo",
        "Compress server files"
    ],

    answer: 1,

    hint:
        "Think about an attacker trying to reuse or take over the authentication state of another user.",

    reward: 1200,
    coins: 280
},


"3-10": {
    world: 3,
    level: 10,
    title: "Web Fortress",
    difficulty: "EXPERT",

    description:
        "A security analyst must identify several weaknesses and choose the appropriate protection strategy.",

    question:
        "Which combination provides stronger protection for a web application?",

    options: [
        "Disable authentication and allow all requests",
        "Store passwords as plain text and trust every input",
        "Use input validation, secure authentication, authorization and HTTPS",
        "Expose database credentials to the browser"
    ],

    answer: 2,

    hint:
        "Look for the option that protects input, identity, permissions and communication rather than weakening security.",

    reward: 1350,
    coins: 320
},


// ==============================
// WORLD 4 — PASSWORD LAB
// ==============================

"4-1": {
    world: 4,
    level: 1,
    title: "Password Basics",
    difficulty: "NORMAL",

    description:
        "Passwords are the first layer of protection for many online accounts.",

    question:
        "Which password is generally stronger?",

    options: [
        "12345678",
        "password",
        "Tara@2007",
        "A9#kL2!xP7"
    ],

    answer: 3,

    hint:
        "Look for the password that is long, complex and does not obviously contain common personal information.",

    reward: 1400,
    coins: 340
},


"4-2": {
    world: 4,
    level: 2,
    title: "Strong Passwords",
    difficulty: "NORMAL",

    description:
        "A strong password should be difficult for attackers to guess.",

    question:
        "Which practice helps create a stronger password?",

    options: [
        "Using your birthday",
        "Using a long and unique password",
        "Using your name everywhere",
        "Using the same password for every account"
    ],

    answer: 1,

    hint:
        "Choose the practice that makes a password harder to guess and avoids reuse across accounts.",

    reward: 1440,
    coins: 350
},


"4-3": {
    world: 4,
    level: 3,
    title: "Password Attack",
    difficulty: "NORMAL",

    description:
        "Attackers can repeatedly try different password combinations to gain access to an account.",

    question:
        "Which attack tries many possible password combinations?",

    options: [
        "Brute-force attack",
        "Phishing",
        "DDoS",
        "Packet sniffing"
    ],

    answer: 0,

    hint:
        "Think about an attack that systematically tries many possible combinations until one works.",

    reward: 1480,
    coins: 360
},


"4-4": {
    world: 4,
    level: 4,
    title: "Brute Force",
    difficulty: "MEDIUM",

    description:
        "Weak passwords can be vulnerable to automated guessing attempts.",

    question:
        "Which measure can help reduce the impact of repeated login attempts?",

    options: [
        "Removing authentication",
        "Using shorter passwords",
        "Rate limiting login attempts",
        "Sharing passwords publicly"
    ],

    answer: 2,

    hint:
        "Think about a control that limits how frequently someone can repeatedly attempt to log in.",

    reward: 1530,
    coins: 375
},


"4-5": {
    world: 4,
    level: 5,
    title: "Credential Stuffing",
    difficulty: "MEDIUM",

    description:
        "Attackers sometimes reuse leaked username and password combinations against other websites.",

    question:
        "What is credential stuffing?",

    options: [
        "Creating encrypted backups",
        "Using stolen credentials on multiple services",
        "Blocking every network connection",
        "Changing a username"
    ],

    answer: 1,

    hint:
        "Think about attackers taking previously leaked login details and trying them on other websites.",

    reward: 1580,
    coins: 390
},


"4-6": {
    world: 4,
    level: 6,
    title: "Password Hashing",
    difficulty: "MEDIUM",

    description:
        "Secure systems should avoid storing users' passwords as plain readable text.",

    question:
        "What is commonly used to protect stored passwords by transforming them into a fixed representation?",

    options: [
        "Hashing",
        "Formatting",
        "Compression",
        "Caching"
    ],

    answer: 0,

    hint:
        "Think about the one-way transformation commonly used so passwords do not need to be stored as readable text.",

    reward: 1640,
    coins: 405
},


"4-7": {
    world: 4,
    level: 7,
    title: "The Salt Layer",
    difficulty: "HARD",

    description:
        "Security systems can add additional random data before hashing passwords.",

    question:
        "What is the purpose of a salt in password storage?",

    options: [
        "To make the website load faster",
        "To increase monitor brightness",
        "To add unique random data before hashing",
        "To remove the password"
    ],

    answer: 2,

    hint:
        "A salt adds extra random data so identical passwords do not produce the same stored hash.",

    reward: 1710,
    coins: 425
},


"4-8": {
    world: 4,
    level: 8,
    title: "Second Lock",
    difficulty: "HARD",

    description:
        "A password alone may not provide enough protection for an important account.",

    question:
        "What does multi-factor authentication add to account security?",

    options: [
        "An additional verification factor",
        "A public password",
        "An open network port",
        "A weaker login process"
    ],

    answer: 0,

    hint:
        "Think about adding another proof of identity beyond just entering the password.",

    reward: 1790,
    coins: 445
},


"4-9": {
    world: 4,
    level: 9,
    title: "Account Defense",
    difficulty: "HARD",

    description:
        "An account shows several suspicious login attempts from unfamiliar locations.",

    question:
        "What should a user do after detecting suspicious login activity?",

    options: [
        "Share the password with friends",
        "Ignore the activity",
        "Use the same password everywhere",
        "Change the password and review account security"
    ],

    answer: 3,

    hint:
        "Take steps to secure the account and investigate whether any unauthorized access may have occurred.",

    reward: 1880,
    coins: 470
},


"4-10": {
    world: 4,
    level: 10,
    title: "Password Fortress",
    difficulty: "EXPERT",

    description:
        "You are securing a high-value account against several common credential attacks.",

    question:
        "Which combination provides the strongest overall account protection?",

    options: [
        "Short password and shared credentials",
        "Unique strong password, MFA and secure password storage",
        "Same password across all accounts",
        "Password written publicly with no MFA"
    ],

    answer: 1,

    hint:
        "Think about combining a unique strong password, an additional verification factor and secure password storage.",

    reward: 2050,
    coins: 520
},
        // ==============================
    // WORLD 5 — SOCIAL ENGINEERING
    // ==============================

    "5-1": {
    world: 5,
    level: 1,
    title: "The Fake Message",
    difficulty: "NORMAL",

    description:
        "Attackers often use convincing messages to trick people into revealing sensitive information.",

    question:
        "What is phishing mainly designed to do?",

    options: [
        "Steal sensitive information by deception",
        "Improve internet speed",
        "Repair damaged files",
        "Increase storage space"
    ],

    answer: 0,

    hint:
        "Think about a deceptive message or website designed to trick someone into giving away sensitive information.",

    reward: 2150,
    coins: 540
},


"5-2": {
    world: 5,
    level: 2,
    title: "Urgent Request",
    difficulty: "NORMAL",

    description:
        "A message claims your account will be closed unless you immediately click a link.",

    question:
        "What should you do first when receiving a suspicious urgent message?",

    options: [
        "Click the link immediately",
        "Verify the message through an official source",
        "Forward it to everyone",
        "Enter your password"
    ],

    answer: 1,

    hint:
        "Urgency can be used to pressure you into acting quickly, so verify the request through a trusted source first.",

    reward: 2200,
    coins: 550
},


"5-3": {
    world: 5,
    level: 3,
    title: "The Impersonator",
    difficulty: "NORMAL",

    description:
        "An attacker pretends to be someone trustworthy to manipulate a victim.",

    question:
        "What is social engineering?",

    options: [
        "A method of compressing files",
        "A type of network cable",
        "Manipulating people into revealing information or taking an action",
        "A database backup method"
    ],

    answer: 2,

    hint:
        "This attack focuses on manipulating people rather than directly exploiting a technical system.",

    reward: 2250,
    coins: 560
},


"5-4": {
    world: 5,
    level: 4,
    title: "Voice of Deception",
    difficulty: "MEDIUM",

    description:
        "Social engineering can also happen through phone calls.",

    question:
        "What is vishing?",

    options: [
        "A virus scanning technique",
        "A secure login method",
        "A type of firewall",
        "Phishing conducted through voice or phone calls"
    ],

    answer: 3,

    hint:
        "Think about phishing delivered through a spoken conversation rather than a written message.",

    reward: 2310,
    coins: 575
},


"5-5": {
    world: 5,
    level: 5,
    title: "The Fake Text",
    difficulty: "MEDIUM",

    description:
        "Attackers may use text messages to direct victims toward malicious links or requests.",

    question:
        "What is smishing?",

    options: [
        "Phishing through SMS or text messages",
        "Encrypting a hard drive",
        "Scanning a server",
        "Creating a backup"
    ],

    answer: 0,

    hint:
        "The name combines phishing with the communication method commonly used for mobile text messages.",

    reward: 2380,
    coins: 590
},


"5-6": {
    world: 5,
    level: 6,
    title: "Trust Exploit",
    difficulty: "MEDIUM",

    description:
        "Attackers often use emotions such as fear, urgency or curiosity to influence victims.",

    question:
        "Which technique is commonly used in social engineering attacks?",

    options: [
        "Increasing RAM",
        "Creating stronger encryption",
        "Creating a sense of urgency",
        "Updating a browser"
    ],

    answer: 2,

    hint:
        "Attackers may pressure victims by making them feel that they must act immediately.",

    reward: 2450,
    coins: 610
},


"5-7": {
    world: 5,
    level: 7,
    title: "Tailgating",
    difficulty: "HARD",

    description:
        "Physical security can also be targeted when attackers try to enter restricted areas.",

    question:
        "What is tailgating in physical security?",

    options: [
        "Following an authorized person into a restricted area",
        "Blocking a website",
        "Stealing browser cookies",
        "Scanning an IP address"
    ],

    answer: 0,

    hint:
        "Think about someone entering a restricted place by taking advantage of a person who already has authorized access.",

    reward: 2530,
    coins: 630
},


"5-8": {
    world: 5,
    level: 8,
    title: "The Bait",
    difficulty: "HARD",

    description:
        "An attacker leaves something attractive in a location hoping someone will interact with it.",

    question:
        "Which social engineering technique uses an attractive lure to trick a victim?",

    options: [
        "Hashing",
        "Baiting",
        "Firewall filtering",
        "Encryption"
    ],

    answer: 1,

    hint:
        "Think about a social-engineering technique where an appealing offer or object is used as the trap.",

    reward: 2620,
    coins: 655
},


"5-9": {
    world: 5,
    level: 9,
    title: "Human Firewall",
    difficulty: "HARD",

    description:
        "Security awareness can prevent many attacks that technical controls alone may not stop.",

    question:
        "Which action best helps protect an organization from social engineering?",

    options: [
        "Sharing credentials with coworkers",
        "Ignoring suspicious requests",
        "Security awareness training and verification procedures",
        "Using the same password everywhere"
    ],

    answer: 2,

    hint:
        "People are better prepared to recognize manipulation when they receive security training and follow verification procedures.",

    reward: 2720,
    coins: 680
},


"5-10": {
    world: 5,
    level: 10,
    title: "Master Manipulator",
    difficulty: "EXPERT",

    description:
        "You receive a highly convincing request from someone claiming to be a senior administrator.",

    question:
        "The requester asks for confidential credentials and creates urgency. What is the safest response?",

    options: [
        "Provide the credentials immediately",
        "Verify the request through an independent trusted channel",
        "Forward the credentials to the requester",
        "Disable all security controls"
    ],

    answer: 1,

    hint:
        "Never trust an urgent request for confidential credentials without independently verifying who made the request.",

    reward: 2900,
    coins: 730
},


// ==============================
// WORLD 6 — MALWARE ZONE
// ==============================

"6-1": {
    world: 6,
    level: 1,
    title: "Malware Detected",
    difficulty: "NORMAL",

    description:
        "Malware is software designed to perform harmful or unwanted actions on a device.",

    question:
        "What does the term malware refer to?",

    options: [
        "Malicious software",
        "A secure password",
        "A network cable",
        "A backup system"
    ],

    answer: 0,

    hint:
        "The term refers to software created to perform harmful, unwanted or unauthorized actions.",

    reward: 3000,
    coins: 750
},


"6-2": {
    world: 6,
    level: 2,
    title: "The Virus",
    difficulty: "NORMAL",

    description:
        "Some malicious programs can attach themselves to files and spread when those files are executed.",

    question:
        "Which type of malware typically attaches itself to a file or program?",

    options: [
        "Firewall",
        "Virus",
        "VPN",
        "Cookie"
    ],

    answer: 1,

    hint:
        "Think about malware that attaches itself to another file or program and can spread when that file is executed.",

    reward: 3060,
    coins: 765
},


"6-3": {
    world: 6,
    level: 3,
    title: "The Worm",
    difficulty: "NORMAL",

    description:
        "Some malware can spread across networks without requiring a user to manually run an infected file.",

    question:
        "What is a key characteristic of a computer worm?",

    options: [
        "It only stores passwords",
        "It improves network speed",
        "It can spread automatically across networks",
        "It protects files from malware"
    ],

    answer: 2,

    hint:
        "Unlike malware that depends on a user opening an infected file, this type can spread itself across networks.",

    reward: 3120,
    coins: 780
},


"6-4": {
    world: 6,
    level: 4,
    title: "Trojan Horse",
    difficulty: "MEDIUM",

    description:
        "Some malicious programs pretend to be legitimate software to trick users into installing them.",

    question:
        "What is a Trojan horse in cybersecurity?",

    options: [
        "A type of secure encryption",
        "A network monitoring tool",
        "A legitimate operating system",
        "Malware disguised as legitimate software"
    ],

    answer: 3,

    hint:
        "Think about malware that hides behind the appearance of a legitimate or useful program.",

    reward: 3190,
    coins: 800
},


"6-5": {
    world: 6,
    level: 5,
    title: "Ransom Lock",
    difficulty: "MEDIUM",

    description:
        "Some attackers encrypt files and demand payment from victims.",

    question:
        "What does ransomware typically do?",

    options: [
        "Encrypts or blocks access to data and demands payment",
        "Improves computer performance",
        "Creates stronger passwords",
        "Removes all security threats"
    ],

    answer: 0,

    hint:
        "Think about malware that prevents access to files and then demands something from the victim to restore access.",

    reward: 3270,
    coins: 820
},


"6-6": {
    world: 6,
    level: 6,
    title: "Spyware Watch",
    difficulty: "MEDIUM",

    description:
        "Some malware secretly observes user activity and collects information.",

    question:
        "What is spyware primarily designed to do?",

    options: [
        "Protect private information",
        "Secretly monitor activity or collect information",
        "Increase storage capacity",
        "Repair corrupted files"
    ],

    answer: 1,

    hint:
        "Think about malware that operates quietly in the background to observe activity or gather information.",

    reward: 3350,
    coins: 840
},


"6-7": {
    world: 6,
    level: 7,
    title: "Keylogger",
    difficulty: "HARD",

    description:
        "A particular type of malicious software can record the keys typed by a user.",

    question:
        "What can a malicious keylogger capture?",

    options: [
        "Only screen brightness",
        "Network cables",
        "Keystrokes typed by a user",
        "Battery temperature"
    ],

    answer: 2,

    hint:
        "Think about what you type on your keyboard when entering passwords, messages or other information.",

    reward: 3440,
    coins: 865
},


"6-8": {
    world: 6,
    level: 8,
    title: "Botnet Control",
    difficulty: "HARD",

    description:
        "Attackers can compromise many devices and control them as a group.",

    question:
        "What is a botnet?",

    options: [
        "A collection of compromised devices controlled by an attacker",
        "A secure password manager",
        "A database backup",
        "A type of antivirus software"
    ],

    answer: 0,

    hint:
        "Think about many compromised devices that can be remotely controlled together as one group.",

    reward: 3540,
    coins: 890
},


"6-9": {
    world: 6,
    level: 9,
    title: "Malware Response",
    difficulty: "HARD",

    description:
        "A security analyst discovers malware on an organization's computer.",

    question:
        "What should be done first when malware is detected on a compromised device?",

    options: [
        "Share the infected files",
        "Ignore the alert",
        "Isolate the affected device and begin investigation",
        "Disable every security system"
    ],

    answer: 2,

    hint:
        "The first priority is to prevent the compromised device from helping the threat spread while preserving evidence for investigation.",

    reward: 3650,
    coins: 920
},


"6-10": {
    world: 6,
    level: 10,
    title: "Malware Mastermind",
    difficulty: "EXPERT",

    description:
        "A security team discovers multiple infected machines communicating with an unknown external server.",

    question:
        "Which response is most appropriate for containing a suspected malware outbreak?",

    options: [
        "Ignore the communication",
        "Disconnect affected systems, investigate indicators and contain the spread",
        "Delete all security logs",
        "Give infected machines unrestricted network access"
    ],

    answer: 1,

    hint:
        "For an outbreak, isolate affected systems, investigate the indicators and stop further spread.",

    reward: 3850,
    coins: 980
},
        // ==============================
    // WORLD 7 — DIGITAL INVESTIGATION
    // ==============================

   "7-1": {
    world: 7,
    level: 1,
    title: "The First Clue",
    difficulty: "HARD",

    description:
        "An employee reports that an unknown device accessed an internal account.",

    question:
        "Which evidence would be most useful for determining when the suspicious login occurred?",

    options: [
        "The computer wallpaper",
        "Authentication logs",
        "The monitor size",
        "The keyboard model"
    ],

    answer: 1,

    hint:
        "Look for records that keep track of account login activity, including when authentication events occurred.",

    reward: 3950,
    coins: 1000
},


"7-2": {
    world: 7,
    level: 2,
    title: "Log Hunter",
    difficulty: "HARD",

    description:
        "An investigator discovers several failed login attempts followed by a successful login.",

    question:
        "What should the investigator compare first to understand the suspicious activity?",

    options: [
        "Login timestamps, usernames and source IP addresses",
        "Screen resolution and brightness",
        "Computer wallpaper and theme",
        "Printer settings"
    ],

    answer: 0,

    hint:
        "Compare who logged in, when the attempts happened and where the requests originated.",

    reward: 4050,
    coins: 1025
},


"7-3": {
    world: 7,
    level: 3,
    title: "The Strange IP",
    difficulty: "HARD",

    description:
        "A server log shows an unusual connection from an unfamiliar external IP address.",

    question:
        "What should an analyst do before concluding that the IP address is malicious?",

    options: [
        "Immediately delete the server",
        "Ignore the connection",
        "Investigate the IP, timestamps and related activity",
        "Publish the IP address online"
    ],

    answer: 2,

    hint:
        "An unfamiliar address alone is not enough; examine its context, timing and related activity first.",

    reward: 4150,
    coins: 1050
},


"7-4": {
    world: 7,
    level: 4,
    title: "Evidence Chain",
    difficulty: "HARD",

    description:
        "Digital evidence must remain trustworthy throughout an investigation.",

    question:
        "Why is maintaining a chain of custody important during a digital investigation?",

    options: [
        "It increases internet speed",
        "It helps document who handled evidence and how",
        "It automatically removes malware",
        "It hides evidence from investigators"
    ],

    answer: 1,

    hint:
        "Think about keeping a documented record of who collected, handled or transferred the evidence.",

    reward: 4250,
    coins: 1075
},


"7-5": {
    world: 7,
    level: 5,
    title: "Timeline Reconstruction",
    difficulty: "HARD",

    description:
        "Several security events occurred at different times on a compromised machine.",

    question:
        "What is the main purpose of creating an event timeline during an investigation?",

    options: [
        "To understand the sequence of activities",
        "To increase disk capacity",
        "To change user passwords automatically",
        "To improve display quality"
    ],

    answer: 0,

    hint:
        "A timeline helps investigators see which events happened first, next and later during the incident.",

    reward: 4350,
    coins: 1100
},


"7-6": {
    world: 7,
    level: 6,
    title: "Deleted Evidence",
    difficulty: "HARD",

    description:
        "An attacker attempted to remove files after gaining unauthorized access.",

    question:
        "What should an investigator consider when files appear to have been deleted?",

    options: [
        "Only the desktop background",
        "Whether recoverable remnants or related logs still exist",
        "The monitor manufacturer",
        "The keyboard layout"
    ],

    answer: 1,

    hint:
        "Deleted files may leave traces, and related system or application logs can still provide useful evidence.",

    reward: 4450,
    coins: 1125
},


"7-7": {
    world: 7,
    level: 7,
    title: "Memory Trace",
    difficulty: "EXPERT",

    description:
        "A compromised system is still running and may contain useful information in volatile memory.",

    question:
        "Why can volatile memory be valuable during a forensic investigation?",

    options: [
        "It can contain temporary information that may disappear after shutdown",
        "It permanently stores every deleted file",
        "It automatically identifies the attacker",
        "It prevents all network attacks"
    ],

    answer: 0,

    hint:
        "Think about information that exists while a system is running but may disappear when the system is powered off.",

    reward: 4575,
    coins: 1160
},


"7-8": {
    world: 7,
    level: 8,
    title: "Attack Timeline",
    difficulty: "EXPERT",

    description:
        "An analyst has authentication logs, firewall logs and endpoint alerts from the same incident.",

    question:
        "What approach would best help correlate the evidence?",

    options: [
        "Examine each event without considering time",
        "Compare timestamps and related indicators across the different sources",
        "Delete duplicate logs immediately",
        "Use only the newest alert"
    ],

    answer: 1,

    hint:
        "Use common timestamps and indicators to connect events recorded by the different security sources.",

    reward: 4700,
    coins: 1190
},


"7-9": {
    world: 7,
    level: 9,
    title: "The Insider Clue",
    difficulty: "EXPERT",

    description:
        "A sensitive file was accessed shortly before it appeared outside the organization.",

    question:
        "Which combination of evidence would be most useful for investigating the incident?",

    options: [
        "User access logs, file access records and network activity",
        "Monitor brightness and keyboard model",
        "Wallpaper and desktop theme",
        "Printer color settings only"
    ],

    answer: 0,

    hint:
        "Connect who accessed the file, what happened to the file and whether related data moved across the network.",

    reward: 4850,
    coins: 1230
},


"7-10": {
    world: 7,
    level: 10,
    title: "Digital Detective",
    difficulty: "EXPERT",

    description:
        "You are investigating a suspected compromise. Multiple systems show unusual authentication, network and process activity.",

    question:
        "What is the strongest investigation approach?",

    options: [
        "Choose the first suspicious event and ignore everything else",
        "Delete suspicious logs to prevent confusion",
        "Correlate timestamps, authentication records, network activity and endpoint evidence",
        "Assume every unusual event is malicious without verification"
    ],

    answer: 2,

    hint:
        "Build the complete picture by connecting authentication, processes, network activity and timestamps.",

    reward: 5100,
    coins: 1300
},


// ==============================
// WORLD 8 — ADVANCED DEFENSE
// ==============================

"8-1": {
    world: 8,
    level: 1,
    title: "The First Response",
    difficulty: "EXPERT",

    description:
        "A security alert indicates that an employee workstation may be compromised.",

    question:
        "What is the most appropriate immediate defensive action?",

    options: [
        "Ignore the alert until the next day",
        "Isolate the affected system while preserving useful evidence",
        "Delete every log on the workstation",
        "Give the workstation unrestricted network access"
    ],

    answer: 1,

    hint:
        "Separate the potentially compromised system from the network while keeping useful evidence available for investigation.",

    reward: 5250,
    coins: 1340
},


"8-2": {
    world: 8,
    level: 2,
    title: "Vulnerability Scan",
    difficulty: "EXPERT",

    description:
        "A security team wants to identify weaknesses in systems before attackers exploit them.",

    question:
        "What is the primary purpose of vulnerability scanning?",

    options: [
        "Identify known security weaknesses in systems",
        "Create user passwords",
        "Delete system logs",
        "Increase CPU performance"
    ],

    answer: 0,

    hint:
        "The goal is to discover security weaknesses that may need to be fixed before they are exploited.",

    reward: 5350,
    coins: 1370
},


"8-3": {
    world: 8,
    level: 3,
    title: "Patch Priority",
    difficulty: "EXPERT",

    description:
        "A company discovers several vulnerabilities, but one is actively being exploited in the wild.",

    question:
        "Which vulnerability should generally receive immediate attention?",

    options: [
        "A cosmetic user-interface issue",
        "A low-impact issue with no known exploitation",
        "A vulnerability that is actively being exploited",
        "An outdated wallpaper"
    ],

    answer: 2,

    hint:
        "Pay particular attention to the weakness that attackers are already using against real systems.",

    reward: 5450,
    coins: 1400
},


"8-4": {
    world: 8,
    level: 4,
    title: "Intrusion Alert",
    difficulty: "EXPERT",

    description:
        "An intrusion detection system reports repeated suspicious connection attempts against a server.",

    question:
        "What should a security analyst do first?",

    options: [
        "Investigate the alert and correlate it with relevant logs",
        "Immediately shut down every company system",
        "Delete the IDS alert",
        "Ignore the repeated attempts"
    ],

    answer: 0,

    hint:
        "Start by examining the alert and checking other relevant logs for supporting evidence.",

    reward: 5550,
    coins: 1430
},


"8-5": {
    world: 8,
    level: 5,
    title: "Defense in Depth",
    difficulty: "EXPERT",

    description:
        "A company wants protection that does not depend on a single security control.",

    question:
        "What does defense in depth mean?",

    options: [
        "Using only one very strong password",
        "Using multiple layers of security controls",
        "Removing network security controls",
        "Allowing every user full access"
    ],

    answer: 1,

    hint:
        "Think about using several different security controls so that one failed control does not leave the system completely exposed.",

    reward: 5650,
    coins: 1460
},


"8-6": {
    world: 8,
    level: 6,
    title: "Zero Trust",
    difficulty: "EXPERT",

    description:
        "A security architecture assumes that users and devices should not automatically be trusted simply because they are inside the network.",

    question:
        "Which principle best describes Zero Trust?",

    options: [
        "Trust every internal device automatically",
        "Never use authentication",
        "Verify access continuously and grant only necessary permissions",
        "Give administrators unrestricted access"
    ],

    answer: 2,

    hint:
        "Zero Trust does not automatically trust a user or device; access should be verified and limited to what is necessary.",

    reward: 5750,
    coins: 1490
},


"8-7": {
    world: 8,
    level: 7,
    title: "Least Privilege",
    difficulty: "EXPERT",

    description:
        "An employee needs access to a database only for a specific task.",

    question:
        "Which access strategy follows the principle of least privilege?",

    options: [
        "Give the employee administrator access to every system",
        "Give only the permissions required for the task",
        "Give access to all company databases",
        "Share one administrator account"
    ],

    answer: 1,

    hint:
        "Give the user only the permissions needed to complete the specific task, and no unnecessary privileges.",

    reward: 5850,
    coins: 1520
},


"8-8": {
    world: 8,
    level: 8,
    title: "Incident Containment",
    difficulty: "EXPERT",

    description:
        "Multiple endpoints appear to be communicating with a suspicious command-and-control server.",

    question:
        "Which action is most appropriate for containment?",

    options: [
        "Allow the communication to continue",
        "Delete all forensic evidence",
        "Isolate affected endpoints and restrict the suspicious communication",
        "Disable all monitoring systems"
    ],

    answer: 2,

    hint:
        "Containment means separating affected systems and stopping the suspicious communication from continuing.",

    reward: 6000,
    coins: 1560
},


"8-9": {
    world: 8,
    level: 9,
    title: "The Security Gap",
    difficulty: "EXPERT",

    description:
        "A security review discovers that a critical application has excessive user permissions and outdated software.",

    question:
        "Which approach addresses both weaknesses most directly?",

    options: [
        "Apply necessary patches and reduce permissions to the required level",
        "Give users even more permissions",
        "Ignore the outdated software",
        "Disable authentication"
    ],

    answer: 0,

    hint:
        "Address the software weakness through updates and reduce access so users have only the permissions they actually need.",

    reward: 6150,
    coins: 1600
},


"8-10": {
    world: 8,
    level: 10,
    title: "Advanced Defense",
    difficulty: "MASTER",

    description:
        "A security team must respond to a coordinated attack involving suspicious logins, malware indicators and unusual network traffic.",

    question:
        "Which response best represents a coordinated defensive strategy?",

    options: [
        "Investigate only the first alert and ignore the others",
        "Disable logging to reduce noise",
        "Correlate alerts, isolate affected systems, preserve evidence and contain the attack",
        "Wait until the attack stops before taking action"
    ],

    answer: 2,

    hint:
        "A coordinated response should connect the alerts, isolate affected systems, preserve evidence and contain the threat.",

    reward: 6400,
    coins: 1680
},
    // ==============================
    // WORLD 9 — CYBER OPERATIONS
    // ==============================

    "9-1": {
    world: 9,
    level: 1,
    title: "Operation Blackout",
    difficulty: "MASTER",

    description:
        "A company suddenly experiences a large increase in traffic and legitimate users cannot access its public service.",

    question:
        "Which type of attack could cause this availability problem?",

    options: [
        "DDoS attack",
        "Password hashing",
        "Data encryption",
        "Secure authentication"
    ],

    answer: 0,

    hint:
        "Think about an attack that overwhelms a service with a large amount of traffic and prevents legitimate users from accessing it.",

    reward: 6550,
    coins: 1720
},


"9-2": {
    world: 9,
    level: 2,
    title: "Command Channel",
    difficulty: "MASTER",

    description:
        "Several compromised computers periodically communicate with the same unknown external server.",

    question:
        "What should a security analyst investigate first?",

    options: [
        "The computers' screen resolution",
        "The communication pattern, destination and related endpoint activity",
        "The keyboard manufacturer",
        "The desktop wallpaper"
    ],

    answer: 1,

    hint:
        "Look for a repeated communication pattern and examine where the systems are connecting and what they are doing.",

    reward: 6650,
    coins: 1750
},


"9-3": {
    world: 9,
    level: 3,
    title: "Privilege Escalation",
    difficulty: "MASTER",

    description:
        "An ordinary user account suddenly performs an action that normally requires administrator privileges.",

    question:
        "What security event should the analyst investigate?",

    options: [
        "Screen brightness change",
        "Browser cache cleanup",
        "Possible privilege escalation",
        "Printer configuration"
    ],

    answer: 2,

    hint:
        "An ordinary account suddenly performing a privileged action may indicate that higher permissions were obtained unexpectedly.",

    reward: 6750,
    coins: 1780
},


"9-4": {
    world: 9,
    level: 4,
    title: "Lateral Movement",
    difficulty: "MASTER",

    description:
        "After one workstation is compromised, unusual authentication activity appears on several internal systems.",

    question:
        "What type of attacker behavior might this indicate?",

    options: [
        "Lateral movement",
        "Password recovery",
        "Data compression",
        "Normal software updating"
    ],

    answer: 0,

    hint:
        "Think about an attacker moving from an already compromised system toward other systems inside the same network.",

    reward: 6850,
    coins: 1810
},


"9-5": {
    world: 9,
    level: 5,
    title: "The Data Vault",
    difficulty: "MASTER",

    description:
        "An attacker appears to have collected a large amount of sensitive information before sending it outside the organization.",

    question:
        "What security activity should the team investigate?",

    options: [
        "Screen calibration",
        "Data exfiltration",
        "Password formatting",
        "Operating system themes"
    ],

    answer: 1,

    hint:
        "Focus on the possibility that sensitive information was collected and transferred outside the organization's network.",

    reward: 6950,
    coins: 1840
},


"9-6": {
    world: 9,
    level: 6,
    title: "Threat Correlation",
    difficulty: "MASTER",

    description:
        "An organization has endpoint alerts, authentication logs and firewall events from the same time period.",

    question:
        "Why should analysts correlate these different sources?",

    options: [
        "To delete duplicate evidence",
        "To make the computer faster",
        "To identify relationships and reconstruct the attack sequence",
        "To disable security alerts"
    ],

    answer: 2,

    hint:
        "Combining different sources can reveal connections between events and help reconstruct what happened over time.",

    reward: 7050,
    coins: 1880
},


"9-7": {
    world: 9,
    level: 7,
    title: "False Signal",
    difficulty: "MASTER",

    description:
        "A detection system generates an alert, but the observed activity may have a legitimate explanation.",

    question:
        "What should an analyst do before declaring the event a confirmed attack?",

    options: [
        "Immediately accuse a user",
        "Delete the alert",
        "Disable the detection system",
        "Validate the alert using additional evidence and context"
    ],

    answer: 3,

    hint:
        "An alert alone may not tell the whole story, so check additional evidence and the surrounding context.",

    reward: 7150,
    coins: 1920
},


"9-8": {
    world: 9,
    level: 8,
    title: "Containment Decision",
    difficulty: "MASTER",

    description:
        "A critical server shows indicators of compromise, but isolating it may temporarily affect an important service.",

    question:
        "What should the incident response team primarily consider when deciding how to contain it?",

    options: [
        "Only the server's screen size",
        "The evidence of compromise, business impact and containment options",
        "Whether the server has a colorful interface",
        "The keyboard brand"
    ],

    answer: 1,

    hint:
        "Consider both the security evidence and the possible effect of containment on the important service.",

    reward: 7300,
    coins: 1960
},


"9-9": {
    world: 9,
    level: 9,
    title: "Attack Reconstruction",
    difficulty: "MASTER",

    description:
        "Investigators discover a phishing email, a successful login, a new process and an outbound connection occurring in sequence.",

    question:
        "What is the most useful next step?",

    options: [
        "Treat every event as unrelated",
        "Delete the email evidence",
        "Correlate the events to determine whether they form one attack chain",
        "Ignore the outbound connection"
    ],

    answer: 2,

    hint:
        "Look at the events together and check whether their order and timing form a connected sequence.",

    reward: 7450,
    coins: 2000
},


"9-10": {
    world: 9,
    level: 10,
    title: "Cyber Operations Command",
    difficulty: "MASTER",

    description:
        "A coordinated incident involves suspicious authentication, lateral movement, malware indicators and possible data exfiltration.",

    question:
        "Which response demonstrates the strongest incident-handling strategy?",

    options: [
        "Focus on only one alert and ignore the rest",
        "Erase compromised systems immediately without preserving evidence",
        "Correlate evidence, contain affected systems, preserve evidence and investigate the attack chain",
        "Wait until the attackers stop before responding"
    ],

    answer: 2,

    hint:
        "A complete response should connect the evidence, contain affected systems, preserve what investigators need and understand the attack path.",

    reward: 7800,
    coins: 2150
},


// ==============================
// WORLD 10 — CYBER MASTERMIND
// ==============================

"10-1": {
    world: 10,
    level: 1,
    title: "The Silent Breach",
    difficulty: "MASTER",

    description:
        "A company's monitoring system shows a successful login from an unusual location, followed by activity that the user normally never performs.",

    question:
        "What should the security team do first?",

    options: [
        "Assume the user is responsible",
        "Ignore the login because authentication succeeded",
        "Investigate the login context and related activity",
        "Delete the authentication logs"
    ],

    answer: 2,

    hint:
        "A successful login can still be suspicious, so examine where it came from and what happened after authentication.",

    reward: 8000,
    coins: 2200
},


"10-2": {
    world: 10,
    level: 2,
    title: "Multiple Signals",
    difficulty: "MASTER",

    description:
        "An endpoint alert, unusual login and suspicious network connection occur within a short period.",

    question:
        "What makes these events particularly important to investigate together?",

    options: [
        "They may represent related stages of one attack",
        "They happened on computers with different screen sizes",
        "They contain different usernames",
        "They were generated by different devices"
    ],

    answer: 0,

    hint:
        "Events occurring close together can be connected, so consider whether they are different stages of the same incident.",

    reward: 8150,
    coins: 2240
},


"10-3": {
    world: 10,
    level: 3,
    title: "The Compromised Account",
    difficulty: "MASTER",

    description:
        "An employee reports that their password was not changed, but security logs show activity from an unfamiliar location.",

    question:
        "Which combination would provide useful evidence for investigating the account compromise?",

    options: [
        "Monitor settings and wallpaper",
        "Login timestamps, source locations and account activity",
        "Keyboard model and screen size",
        "Printer configuration only"
    ],

    answer: 1,

    hint:
        "Compare when the account was used, where the activity came from and what actions occurred on the account.",

    reward: 8300,
    coins: 2280
},


"10-4": {
    world: 10,
    level: 4,
    title: "The Malware Chain",
    difficulty: "MASTER",

    description:
        "An employee opens a suspicious attachment. Minutes later, an unknown process starts and the device begins communicating with an unfamiliar server.",

    question:
        "What should an investigator examine to determine whether these events are connected?",

    options: [
        "Only the desktop wallpaper",
        "Only the employee's username",
        "Only the network speed",
        "File activity, process execution, timestamps and network connections"
    ],

    answer: 3,

    hint:
        "Compare what file was opened, what process started, when each event occurred and where the device connected.",

    reward: 8450,
    coins: 2320
},


"10-5": {
    world: 10,
    level: 5,
    title: "The Hidden Movement",
    difficulty: "MASTER",

    description:
        "After one workstation is compromised, the same account begins accessing several internal servers.",

    question:
        "Which hypothesis should the security team investigate?",

    options: [
        "The monitor is malfunctioning",
        "The attacker may be attempting lateral movement",
        "The printer has been compromised",
        "The operating system wallpaper changed"
    ],

    answer: 1,

    hint:
        "An account moving from one compromised workstation to several internal servers may indicate movement through the network.",

    reward: 8600,
    coins: 2360
},


"10-6": {
    world: 10,
    level: 6,
    title: "The Data Trail",
    difficulty: "MASTER",

    description:
        "A compromised server shows a large amount of data being transferred to an unfamiliar external destination.",

    question:
        "Which investigation should receive priority?",

    options: [
        "Checking the server's display resolution",
        "Changing the desktop theme",
        "Investigating possible data exfiltration and the destination",
        "Deleting the network logs"
    ],

    answer: 2,

    hint:
        "A large outbound transfer to an unfamiliar destination could indicate sensitive information leaving the organization.",

    reward: 8750,
    coins: 2400
},


"10-7": {
    world: 10,
    level: 7,
    title: "Contain or Investigate",
    difficulty: "MASTER",

    description:
        "A critical system appears compromised, but it contains valuable evidence that could help determine how the attacker entered.",

    question:
        "What should the response team consider when deciding how to proceed?",

    options: [
        "Balance containment needs with evidence preservation and incident impact",
        "Immediately erase the system without investigation",
        "Allow the attacker to continue for several days",
        "Disable all security monitoring"
    ],

    answer: 0,

    hint:
        "The team needs to balance stopping the threat with preserving evidence and considering the effect on the affected system.",

    reward: 8950,
    coins: 2450
},


"10-8": {
    world: 10,
    level: 8,
    title: "Attack Reconstruction",
    difficulty: "MASTER",

    description:
        "Investigators identify a phishing email, credential use, privilege escalation, internal movement and unusual outbound traffic.",

    question:
        "What is the most useful way to understand the incident?",

    options: [
        "Analyze each event independently and ignore timestamps",
        "Focus only on the phishing email",
        "Delete events that appear unrelated",
        "Build a timeline and correlate the evidence into an attack chain"
    ],

    answer: 3,

    hint:
        "Arrange the evidence in time and connect the events to understand how one stage of the attack led to another.",

    reward: 9150,
    coins: 2500
},


"10-9": {
    world: 10,
    level: 9,
    title: "The Final Decision",
    difficulty: "MASTER",

    description:
        "A coordinated attack is affecting several systems. The team has evidence of compromised accounts, malware and suspicious outbound traffic.",

    question:
        "Which response provides the most complete defensive approach?",

    options: [
        "Investigate only the compromised account",
        "Contain affected systems, preserve evidence, investigate the attack chain and recover securely",
        "Delete every affected system immediately",
        "Wait until all systems are compromised before responding"
    ],

    answer: 1,

    hint:
        "A complete response should contain the incident, preserve evidence, understand the attack path and safely restore affected systems.",

    reward: 9400,
    coins: 2580
},


"10-10": {
    world: 10,
    level: 10,
    title: "CYBER MASTERMIND",
    difficulty: "MASTER",

    description:
        "FINAL MISSION — A coordinated cyberattack has affected authentication, endpoints, internal systems and external communication. You are leading the response.",

    question:
        "What is the strongest overall strategy for handling the incident?",

    options: [
        "Focus on a single alert and ignore the remaining evidence",
        "Immediately delete every compromised system without preserving evidence",
        "Correlate evidence, contain the threat, preserve forensic data, remove the cause, recover systems and monitor for recurrence",
        "Wait for the attackers to leave before taking action"
    ],

    answer: 2,

    hint:
        "Think end-to-end: correlate the evidence, contain the threat, preserve forensics, remove the cause, recover and keep watching.",

    reward: 10000,
    coins: 3000
},

};