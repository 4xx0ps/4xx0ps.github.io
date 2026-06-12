/**
 * CORE COMPLIANCE INTERACTION MATRIX
 * Author: Godswill Tawia-Mante (3xpl0r3r)
 * Scope: Interactive Event Loop, Theme Operations, Terminal Display, Dynamic HUD Controls
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- INITIAL RESOURCING & CONSTANTS ---
    const bootScreen = document.getElementById("boot-screen");
    const bootContent = document.getElementById("boot-content");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const matrixCanvas = document.getElementById("matrix-canvas");
    const cursorOuter = document.getElementById("cursor-outer");
    const cursorInner = document.getElementById("cursor-inner");
    const contactForm = document.getElementById("cyber-contact-form");
    const formStatus = document.getElementById("form-status-telemetry");

    // --- TERMINAL INITIAL BOOT SEQUENCE DATA ---
    const bootLines = [
        "> Initializing profile...",
        "[ OK ] Identity Loaded",
        "[ OK ] Cybersecurity Operations",
        "[ OK ] IT Audit & Compliance",
        "[ OK ] Web Application Security",
        "[ OK ] Active Directory Security",
        "[ OK ] ISO 27001 Governance",
        "System Status: ONLINE",
        "Threat Monitoring: ACTIVE"
    ];

    // --- 1. BOOT TERMINAL SEQUENTIAL LINE DRIVER ---
    let lineIdx = 0;
    function printBootSequence() {
        if (lineIdx < bootLines.length) {
            const lineEl = document.createElement("div");
            lineEl.className = "boot-line";
            
            // Apply contextual styling to status metrics
            if (bootLines[lineIdx].includes("[ OK ]")) {
                lineEl.innerHTML = bootLines[lineIdx].replace("[ OK ]", "<span class='boot-success'>[ OK ]</span>");
            } else if (bootLines[lineIdx].includes("ONLINE") || bootLines[lineIdx].includes("ACTIVE")) {
                lineEl.innerHTML = bootLines[lineIdx].replace("ONLINE", "<span class='boot-success'>ONLINE</span>").replace("ACTIVE", "<span class='boot-success'>ACTIVE</span>");
            } else {
                lineEl.textContent = bootLines[lineIdx];
            }
            
            bootContent.appendChild(lineEl);
            lineIdx++;
            setTimeout(printBootSequence, 300);
        } else {
            // End of output sequence - trigger window wipe transition
            setTimeout(() => {
                bootScreen.style.opacity = "0";
                setTimeout(() => {
                    bootScreen.style.display = "none";
                    // Trigger analytics numerical telemetry acceleration once viewport clears
                    initializeCounters();
                }, 600);
            }, 1000);
        }
    }
    // Launch boot processing runtime
    printBootSequence();


    // --- 2. MATRIX DIGITAL ANIMATION LAYER ENGINE ---
    const ctx = matrixCanvas.getContext("2d");
    let columns = [];
    const charSet = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()_+-=[]{}|;':,./<>?".split("");
    const fontSize = 14;

    function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        const totalCols = Math.floor(matrixCanvas.width / fontSize);
        columns = [];
        for (let i = 0; i < totalCols; i++) {
            columns.push(Math.random() * -100); // Distributed offsets to stagger matrix drops
        }
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function drawMatrixSpectrum() {
        // Evaluate active color spectrum based on body classes to assure seamless light/dark rendering
        const isDark = document.body.classList.contains("dark-theme");
        
        ctx.fillStyle = isDark ? "rgba(10, 14, 20, 0.05)" : "rgba(244, 247, 246, 0.08)";
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        ctx.fillStyle = isDark ? "#00ff66" : "#008837";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < columns.length; i++) {
            const char = charSet[Math.floor(Math.random() * charSet.length)];
            const x = i * fontSize;
            const y = columns[i] * fontSize;

            // Only render visual element into visibility zone once positive tracking integers align
            if (y > 0) {
                ctx.fillText(char, x, y);
            }

            if (y > matrixCanvas.height && Math.random() > 0.975) {
                columns[i] = 0;
            }
            columns[i]++;
        }
        requestAnimationFrame(drawMatrixSpectrum);
    }
    // Begin continuous matrix visual frame cycle
    requestAnimationFrame(drawMatrixSpectrum);


    // --- 3. PREMIUM THEME SPECTRUM MANIFESTATION SYSTEMS ---
    const savedTheme = localStorage.getItem("sec-portfolio-theme") || "dark-theme";
    document.body.className = savedTheme;

    themeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("sec-portfolio-theme", "light-theme");
        } else {
            document.body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("sec-portfolio-theme", "dark-theme");
        }
    });


    // --- 4. HIGH-FIDELITY CUSTOM TARGETING CURSOR SYSTEM ---
    document.addEventListener("mousemove", (e) => {
        // Direct absolute matrix pixel alignment positioning
        cursorOuter.style.top = e.clientY + "px";
        cursorOuter.style.left = e.clientX + "px";
        
        cursorInner.style.top = e.clientY + "px";
        cursorInner.style.left = e.clientX + "px";
    });

    // Capture layout element targets to determine hover expansion states
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .project-card, .skill-modern-card");
    interactiveElements.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hovering");
        });
        elem.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hovering");
        });
    });


    // --- 5. INTERCEPTIVE MOBILE HAMBURGER MENU SYSTEM ---
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-active");
        hamburger.classList.toggle("active");
    });

    // Close on navigation click vectors
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("mobile-active");
            hamburger.classList.remove("active");
        });
    });


    // --- 6. SMOOTH NAVIGATION LINK SPY MONITORING ---
    const sections = document.querySelectorAll(".target-section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "root";
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active-link");
            }
        });
    });


    // --- 7. REALTIME METRIC INTERPOLATION ANIMATION COUNTER ---
    function initializeCounters() {
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => {
            counter.textContent = "0";
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const increment = target / 50; // Dynamic step adjustment calculation
            
            let currentVal = 0;
            const updateVal = () => {
                currentVal += increment;
                if (currentVal < target) {
                    counter.textContent = Math.ceil(currentVal);
                    setTimeout(updateVal, 25);
                } else {
                    counter.textContent = target;
                }
            };
            updateVal();
        });
    }


    // --- 8. ELEMENT SYSTEM SCROLL REVEAL DRIVER ---
    const revealNodes = document.querySelectorAll(".scroll-reveal-node");
    const checkReveal = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.5;
        revealNodes.forEach(node => {
            const nodeTop = node.getBoundingClientRect().top;
            if (nodeTop < triggerBottom) {
                node.classList.add("revealed");
            }
        });
    };
    window.addEventListener("scroll", checkReveal);
    // Execute default baseline intercept pass
    setTimeout(checkReveal, 800);


    // --- 9. SECURE TRANSMISSION FORM VALIDATION & EMAILJS INTEGRATION ---
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById("submit-btn");
        formStatus.className = "form-status-telemetry";
        formStatus.style.display = "none";
        
        // Lock UI interaction metrics during transit state
        submitBtn.disabled = true;
        submitBtn.textContent = "TRANSFERS IN PROGRESS... [HOLD]";

        /* * =========================================================================
         * INTEGRATION PLACEHOLDER RULES FOR EMAILJS WORKFLOW
         * To implement real-world functional transport connectivity:
         * 1. Embed the library block script within index.html:
         * <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/emailjs.min.js"></script>
         * 2. Replace the simulated setTimeout below with standard invocation metrics:
         * * emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
         * .then(() => { 
         * // Success Handling
         * }, (error) => {
         * // Error Handling
         * });
         * =========================================================================
         */

        setTimeout(() => {
            // Simulated validation assertion interceptor logic
            const emailField = document.getElementById("form-email").value;
            if (!emailField.includes("@")) {
                formStatus.textContent = "CRITICAL ERROR: Transmission pipeline routing corrupted. Invalid return vector email address architecture.";
                formStatus.classList.add("error");
                submitBtn.disabled = false;
                submitBtn.textContent = "Transmit Form Data _";
                return;
            }

            // Success Execution Payload Simulative Trigger
            formStatus.textContent = "[ SECURE COMPLIANCE TRANS-PACKET SHIPPED ]: Message data successfully packaged, encrypted, and multiplexed to Godswill Tawia-Mante's node queue.";
            formStatus.classList.add("success");
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = "Transmit Form Data _";
        }, 1500);
    });

    // Custom console calling-card validation print
    console.log("System Context: Authorized operational matrix running under root configuration access token.");
});
