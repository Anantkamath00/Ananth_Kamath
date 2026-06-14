document.addEventListener('DOMContentLoaded', () => {
  // --- 1. BOOT SEQUENCE LOADER ---
  const bootOverlay = document.getElementById('boot-loader');
  const bootLog = document.getElementById('boot-log');
  
  const bootLines = [
    "[*] CONNECTING TO PRJN26-161 C2 CORE...",
    "[+] SECURE CONNECTION ESTABLISHED // PORT: 443",
    "[*] RESOLVING SECURE DATA FOR SUBJECT: KAMATH, ANANTH...",
    "[+] VERIFIED: Specialized IAM & Application Security Engineer.",
    "[*] CALIBRATING BIO-VISOR GRAPHICS LAYERS...",
    "[+] DUAL SCANLINE FILTERS INTEGRATED... STATUS: OK",
    "[*] INITIALIZING COGNITIVE INTERFACE INTERACTION PROTOCOLS...",
    "[+] COGNITIVE INTERFACE RUNNING // ACCESS GRANTED."
  ];

  if (bootOverlay && bootLog) {
    let lineIndex = 0;
    
    function printBootLine() {
      if (lineIndex < bootLines.length) {
        bootLog.innerHTML += bootLines[lineIndex] + "\n";
        lineIndex++;
        
        // Random typing delay
        const delay = 100 + Math.random() * 150;
        setTimeout(printBootLine, delay);
      } else {
        // Complete sequence, fade out overlay
        setTimeout(() => {
          bootOverlay.classList.add('fade-out');
        }, 500);
      }
    }
    
    // Start printing after initial pause
    setTimeout(printBootLine, 200);
  }

  // --- 2. MATRIX BINARY RAIN CANVAS ---
  const rainCanvas = document.getElementById('matrix-rain');
  if (rainCanvas) {
    const ctx = rainCanvas.getContext('2d');
    
    // Size relative to container
    rainCanvas.width = rainCanvas.parentElement.clientWidth;
    rainCanvas.height = rainCanvas.parentElement.clientHeight;
    
    const binary = '01';
    const alphabet = binary.split('');
    const fontSize = 10;
    const columns = rainCanvas.width / fontSize;
    const rainDrops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
      ctx.fillStyle = 'rgba(10, 10, 12, 0.08)'; // Fade background
      ctx.fillRect(0, 0, rainCanvas.width, rainCanvas.height);
      
      ctx.fillStyle = '#00f5ff'; // Neon Cyan
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > rainCanvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    }
    
    setInterval(drawMatrix, 35);
  }

  // --- 3. SECURE HANDSHAKE CONTACT NODE ---
  const contactForm = document.getElementById('secure-contact-form');
  const contactLog = document.getElementById('contact-encryption-log');
  
  if (contactForm && contactLog) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('contact-email').value.trim();
      const payload = document.getElementById('contact-payload').value.trim();
      
      if (!email || !payload) return;
      
      contactLog.innerText = '';
      contactLog.style.display = 'block';
      
      const encryptionLines = [
        "[*] INTERCEPTING MESSAGE STREAM FROM RECIPIENT...",
        "[*] PACKING PAYLOAD: [Email: " + email + ", Len: " + payload.length + " bytes]",
        "[*] ENGAGING KEY EXCHANGE (ECDH X25519)... SUCCESS",
        "[*] GENERATING SYMMETRIC SESSION KEY FOR CIPHER VAULT...",
        "[*] ENCRYPTING MESSAGES WITH AES-256-GCM... [CYPHERTEXT SIGNED]",
        "[+] SECURE TRANSMISSION DISPATCHED TO GATEWAY GATE_08 // STATUS: OK"
      ];
      
      let lineIndex = 0;
      function printEncryptLog() {
        if (lineIndex < encryptionLines.length) {
          contactLog.innerText += encryptionLines[lineIndex] + "\n";
          lineIndex++;
          setTimeout(printEncryptLog, 250);
        } else {
          // Clear inputs after success
          setTimeout(() => {
            contactForm.reset();
          }, 1000);
        }
      }
      printEncryptLog();
    });
  }

  // --- 4. HOVER-TO-DECRYPT SCRAMBLE SCRIPT ---
  const scrambleElements = document.querySelectorAll('.decrypt-target');
  
  scrambleElements.forEach(elem => {
    // Store original text
    const originalText = elem.innerText;
    elem.setAttribute('data-original', originalText);
    
    let isScrambling = false;
    
    elem.addEventListener('mouseenter', () => {
      if (isScrambling) return;
      isScrambling = true;
      
      const chars = '0123456789ABCDEF0x#%&+_-$';
      let iterations = 0;
      const targetLength = originalText.length;
      
      const interval = setInterval(() => {
        elem.innerText = originalText
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n' || char === '/' || char === '>' || char === '-' || char === '[' || char === ']' || char === ':' || char === '(' || char === ')') {
              return char;
            }
            if (index < iterations) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        if (iterations >= targetLength) {
          clearInterval(interval);
          elem.innerText = originalText;
          isScrambling = false;
        }
        
        iterations += Math.ceil(targetLength / 8);
      }, 40);
    });
  });

  // --- 5. LIVE EVENT SIMULATION LOG TICKER ---
  const auditLogs = [
    "[10:14:02] SYS_INIT // Establishing secure socket to PRJN26-161 core...",
    "[10:14:04] AUTH_OK  // Federated OAuth mapping verified. Welcome, Guest.",
    "[10:14:09] ENCRYPT  // Field-level persistence layer hardened via AES-256.",
    "[10:14:15] SESSION  // Active JWKS signature rotation interval set to 3600s.",
    "[10:14:23] LOG_AUDIT // Event handler registered: integrity monitoring active.",
    "[10:14:31] TELEMETRY // Pushing system telemetry load metrics to Grafana dashboard.",
    "[10:14:45] ENTROPY  // AegisPass engine calibration: entropy threshold set to 4.0 bits.",
    "[10:14:52] SECURE   // TLS 1.3 negotiated: ECDHE-RSA-AES128-GCM-SHA256.",
    "[10:15:01] DB_CONN  // Postgres read-replica synchronization verified (0.01ms latency).",
    "[10:15:15] IAM_RULE // Policy engine evaluated: Step-Up verification enforced for resource /admin/secrets."
  ];

  const auditTicker = document.getElementById('live-audit-ticker');
  if (auditTicker) {
    let tickerHtml = '';
    const allLogs = [...auditLogs, ...auditLogs];
    allLogs.forEach((log, index) => {
      let styledLog = log;
      styledLog = styledLog.replace('SYS_INIT', '<span class="text-active">SYS_INIT</span>');
      styledLog = styledLog.replace('AUTH_OK', '<span class="text-active">AUTH_OK</span>');
      styledLog = styledLog.replace('ENCRYPT', '<span class="text-active">ENCRYPT</span>');
      styledLog = styledLog.replace('SECURE', '<span class="text-active">SECURE</span>');
      styledLog = styledLog.replace('WARNING', '<span class="text-warning">WARNING</span>');
      styledLog = styledLog.replace('IAM_RULE', '<span class="text-alert">IAM_RULE</span>');
      
      tickerHtml += `<span class="live-audit-item">${styledLog}</span>`;
    });
    auditTicker.innerHTML = tickerHtml;
  }

  // --- 6. TELEMETRY VISUALIZER (CANVAS GRAPH) ---
  const canvas = document.getElementById('telemetry-graph');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let dataPoints = Array(25).fill(40);
    
    function drawGraph() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;
      const padding = 12;
      
      const activeColor = '#00f5ff';
      const borderColor = 'rgba(0, 245, 255, 0.1)';
      const mutedColor = '#4a6080';
      
      // Draw grid lines
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      const vertGridCount = 8;
      for (let i = 0; i <= vertGridCount; i++) {
        const x = padding + (i * (width - 2 * padding)) / vertGridCount;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      const horizGridCount = 4;
      for (let i = 0; i <= horizGridCount; i++) {
        const y = padding + (i * (height - 2 * padding)) / horizGridCount;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      }
      
      // Shift data and push a new random-walk value
      dataPoints.shift();
      const lastVal = dataPoints[dataPoints.length - 1];
      let newVal = lastVal + (Math.random() - 0.5) * 12;
      newVal = Math.max(12, Math.min(height - 20, newVal));
      dataPoints.push(newVal);
      
      // Draw telemetry path
      ctx.strokeStyle = activeColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      
      const step = (width - 2 * padding) / (dataPoints.length - 1);
      
      dataPoints.forEach((val, i) => {
        const x = padding + i * step;
        const y = height - val;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();
      
      // Draw area fill
      ctx.fillStyle = 'rgba(0, 240, 255, 0.03)'; 
      ctx.lineTo(width - padding, height - padding);
      ctx.lineTo(padding, height - padding);
      ctx.closePath();
      ctx.fill();
      
      // Overlay dashboard text inside canvas
      ctx.fillStyle = mutedColor;
      ctx.font = '9px monospace';
      ctx.fillText('PORT: 443 // DEV_ENV: LIVE', padding + 5, padding + 10);
      
      const sysLoadPercent = Math.round(100 - (newVal / height) * 100);
      ctx.fillStyle = activeColor;
      ctx.fillText(`SYS_LOAD: ${sysLoadPercent}%`, width - padding - 85, padding + 10);
    }
    
    setInterval(drawGraph, 200);
  }

  // --- 7. LIVE BEHAVIORAL TELEMETRY FOOTER BAR ---
  const telemetryBar = document.getElementById('telemetry-footer');
  
  if (telemetryBar) {
    function bindTelemetryHover(selector, message) {
      const elems = document.querySelectorAll(selector);
      elems.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
          telemetryBar.innerText = message;
        });
        elem.addEventListener('mouseleave', () => {
          telemetryBar.innerText = "[SYS_LOG]: System active. Awaiting user interaction...";
        });
      });
    }
    
    bindTelemetryHover('#project-1', '[SYS_LOG]: Fetching access control schema for PRJN26-161...');
    bindTelemetryHover('#project-2', '[SYS_LOG]: Patched infiltration sweep parameters... OK');
    bindTelemetryHover('#project-3', '[SYS_LOG]: Initializing entropy validation matrices...');
    bindTelemetryHover('#skills-panel', '[SEC_TRACE]: Querying cryptographic signature authorities... OK');
    bindTelemetryHover('#entropy-input', '[SYS_LOG]: Reading credential input vector...');
    bindTelemetryHover('#terminal-input', '[C2_SHELL]: Opening interaction socket...');
    bindTelemetryHover('#download-cv-btn', '[DECRYPT_ENGINE]: Intercepting file payload for local keystore verification...');
    bindTelemetryHover('.btn-alert', '[NET_CONN]: Establishing secure bridge to LinkedIn API...');
    bindTelemetryHover('#contact-email', '[SEC_TRACE]: Resolving gateway handshake identifier...');
    bindTelemetryHover('#contact-payload', '[SYS_LOG]: Reading payload bytes buffer...');
    bindTelemetryHover('.contact-submit-btn', '[DECRYPT_ENGINE]: Encrypting handshake payload with AES-256-GCM...');
  }

  // --- 8. CREDENTIAL SECURITY & ENTROPY ANALYST (SANDBOX) ---
  const passwordInput = document.getElementById('entropy-input');
  
  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      const val = passwordInput.value;
      analyzeEntropy(val);
    });
  }
  
  function analyzeEntropy(str) {
    const bitsVal = document.getElementById('entropy-bits-val');
    const shannonVal = document.getElementById('entropy-shannon-val');
    const comboVal = document.getElementById('entropy-combo-val');
    const strengthBar = document.getElementById('entropy-strength-bar');
    const crackTime = document.getElementById('entropy-crack-time');
    const warnings = document.getElementById('entropy-warnings');
    
    if (!str) {
      bitsVal.innerText = '0.00';
      shannonVal.innerText = '0.00';
      comboVal.innerText = '0';
      strengthBar.style.width = '0%';
      strengthBar.style.backgroundColor = 'var(--neon-red)';
      crackTime.innerText = 'EST. TIME TO BRUTE-FORCE: Instant';
      warnings.style.display = 'none';
      return;
    }
    
    const len = str.length;
    const freq = {};
    for (let i = 0; i < len; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1;
    }
    let shannon = 0;
    for (const char in freq) {
      const p = freq[char] / len;
      shannon -= p * Math.log2(p);
    }
    
    let poolSize = 0;
    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;
    
    if (/[a-z]/.test(str)) { poolSize += 26; hasLower = true; }
    if (/[A-Z]/.test(str)) { poolSize += 26; hasUpper = true; }
    if (/[0-9]/.test(str)) { poolSize += 10; hasNumber = true; }
    if (/[^a-zA-Z0-9]/.test(str)) { poolSize += 32; hasSpecial = true; }
    
    const bits = len * Math.log2(poolSize || 1);
    const combinations = Math.pow(poolSize || 1, len);
    
    bitsVal.innerText = bits.toFixed(2);
    shannonVal.innerText = shannon.toFixed(2);
    
    if (combinations === Infinity) {
      comboVal.innerText = '10^' + Math.floor(len * Math.log10(poolSize));
    } else {
      comboVal.innerText = combinations.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }
    
    let strengthPercent = Math.min(100, (bits / 100) * 100);
    strengthBar.style.width = `${strengthPercent}%`;
    
    const activeColor = '#00f5ff';
    const alertColor = '#ff003c';
    
    if (bits < 40) {
      strengthBar.style.backgroundColor = alertColor;
    } else if (bits < 75) {
      strengthBar.style.backgroundColor = '#ffaa00'; // Warning Amber
    } else {
      strengthBar.style.backgroundColor = activeColor;
    }
    
    const guessesPerSec = 1e10; 
    const secondsToCrack = (combinations / 2) / guessesPerSec;
    
    let timeText = '';
    if (secondsToCrack < 0.001) {
      timeText = 'Instant (< 1 ms)';
    } else if (secondsToCrack < 1) {
      timeText = 'Sub-second';
    } else if (secondsToCrack < 60) {
      timeText = `${secondsToCrack.toFixed(2)} seconds`;
    } else if (secondsToCrack < 3600) {
      timeText = `${(secondsToCrack / 60).toFixed(1)} minutes`;
    } else if (secondsToCrack < 86400) {
      timeText = `${(secondsToCrack / 3600).toFixed(1)} hours`;
    } else if (secondsToCrack < 31536000) {
      timeText = `${(secondsToCrack / 86400).toFixed(1)} days`;
    } else if (secondsToCrack < 31536000000) {
      timeText = `${(secondsToCrack / 31536000).toFixed(1)} years`;
    } else {
      const powerOfTen = Math.floor(Math.log10(secondsToCrack / 31536000));
      timeText = `10^${powerOfTen} centuries`;
    }
    
    crackTime.innerText = `EST. TIME TO BRUTE-FORCE: ${timeText}`;
    
    let warningMessages = [];
    if (len < 8) {
      warningMessages.push('Length is under 8 characters (critical perimeter exposure).');
    }
    if (shannon < 2.5 && len > 4) {
      warningMessages.push('High character predictability / repetitive sequence pattern.');
    }
    if (!hasSpecial || !hasUpper) {
      warningMessages.push('Lacks diverse credentials (recommend adding symbols or capitals).');
    }
    
    if (warningMessages.length > 0) {
      warnings.innerHTML = warningMessages.map(msg => `<div>[!] ${msg}</div>`).join('');
      warnings.style.display = 'block';
    } else {
      warnings.style.display = 'none';
    }
  }

  // --- 9. INTERACTIVE TERMINAL SHELL EMULATOR ---
  const termLogs = document.getElementById('terminal-logs');
  const termInput = document.getElementById('terminal-input');
  
  if (termInput && termLogs) {
    appendTerminalLine('SYSTEM CORES STABLE. Secure Identity Command Dashboard initialized.', 'cyan');
    appendTerminalLine('Type "help" for a list of available CLI protocols.', 'muted');
    
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = termInput.value.trim();
        termInput.value = '';
        
        if (cmd) {
          processCommand(cmd);
        }
      }
    });
    
    const shell = document.querySelector('.terminal-shell');
    if (shell) {
      shell.addEventListener('click', () => {
        termInput.focus();
      });
    }
  }
  
  function appendTerminalLine(text, className = '') {
    if (!termLogs) return;
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    if (className === 'cyan') {
      line.innerHTML = `<span class="cyan">${text}</span>`;
    } else if (className === 'crimson') {
      line.innerHTML = `<span class="crimson">${text}</span>`;
    } else if (className === 'muted') {
      line.innerHTML = `<span class="muted">${text}</span>`;
    } else {
      line.innerHTML = text;
    }
    
    termLogs.appendChild(line);
    termLogs.scrollTop = termLogs.scrollHeight;
  }
  
  function processCommand(rawCmd) {
    appendTerminalLine(`ananth@c2:~$ ${rawCmd}`);
    
    const parts = rawCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    switch (cmd) {
      case 'help':
        appendTerminalLine('AVAILABLE COMMAND PROTOCOLS:');
        appendTerminalLine('  help            - Display this help module documentation.');
        appendTerminalLine('  skills          - Query specialized core technical domains.');
        appendTerminalLine('  projects        - Audit featured application security milestones.');
        appendTerminalLine('  system_scan     - Run structural integrity audit on virtual server cores.');
        appendTerminalLine('  entropy <val>   - Compute Shannon & Pool entropy metrics directly.');
        appendTerminalLine('  decrypt         - Unlock and verify secure CV payload.');
        appendTerminalLine('  clear           - Flush terminal output buffer.');
        break;
      case 'skills':
        appendTerminalLine('QUERYING SYSTEM CORES:');
        appendTerminalLine('  [Security]   IAM Protocols, OAuth2, SAML, TOTP, Step-Up Auth, TLS 1.3');
        appendTerminalLine('  [Backend]    Python 3.10+, Flask, ORM, REST, Cryptography (AES-256)');
        appendTerminalLine('  [DevSecOps]  Nginx, Docker Containerization, CI/CD Hardening, PCAP Inspection');
        break;
      case 'projects':
        appendTerminalLine('EXPLOIT ARCHIVE INVENTORY:');
        appendTerminalLine('  [01] Healthcare Identity Framework [PRJN26-161]');
        appendTerminalLine('  [02] IBM Internship & Tournament Placements');
        appendTerminalLine('  [03] AegisPass System Calculator');
        break;
      case 'system_scan':
        runSystemScan();
        break;
      case 'entropy':
        if (args.length === 0) {
          appendTerminalLine('[-] ERROR: Missing parameter. Usage: entropy <string>', 'crimson');
        } else {
          const pass = args.join(' ');
          let pool = 0;
          if (/[a-z]/.test(pass)) pool += 26;
          if (/[A-Z]/.test(pass)) pool += 26;
          if (/[0-9]/.test(pass)) pool += 10;
          if (/[^a-zA-Z0-9]/.test(pass)) pool += 32;
          const bits = pass.length * Math.log2(pool || 1);
          appendTerminalLine(`[+] Analyzed String: "${pass}"`);
          appendTerminalLine(`[+] Calculated Pool Bits: ${bits.toFixed(2)} bits`);
          appendTerminalLine(`[+] Security Rating: ${bits > 70 ? 'SECURE' : bits > 40 ? 'MEDIUM' : 'CRITICAL_RISK'}`);
        }
        break;
      case 'decrypt':
        triggerCvDecryption();
        break;
      case 'clear':
        if (termLogs) termLogs.innerHTML = '';
        break;
      default:
        appendTerminalLine(`[-] command not found: ${cmd}. Type "help" for support.`, 'crimson');
    }
  }
  
  function runSystemScan() {
    appendTerminalLine('[*] INITIATING SECURITY CORE SYSTEM SCAN...', 'cyan');
    let stages = [
      { text: '[+] Auditing TLS configurations... SECURE (TLS 1.3 enforced)', delay: 400 },
      { text: '[+] Inspecting IAM OAuth federated endpoints... STATUS_OK', delay: 800 },
      { text: '[+] Scanning database persistence layer for field leaks... 0 LEAKS DETECTED', delay: 1200 },
      { text: '[+] Validating firewall policies & socket integrity... ACTIVE', delay: 1600 },
      { text: '[+] SYSTEM INTEGRITY SCORE: 100% // Threat vectors: 0 active', delay: 2000 }
    ];
    
    stages.forEach(stage => {
      setTimeout(() => {
        appendTerminalLine(stage.text, stage.text.includes('100%') ? 'cyan' : '');
      }, stage.delay);
    });
  }

  // --- 10. CV DECRYPTOR SIMULATION & DOWNLOAD ---
  const downloadBtn = document.getElementById('download-cv-btn');
  let decryptInProgress = false;

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerCvDecryption();
    });
  }

  function triggerCvDecryption() {
    if (decryptInProgress) return;
    decryptInProgress = true;
    
    const shell = document.querySelector('.terminal-shell');
    if (shell) {
      shell.scrollIntoView({ behavior: 'smooth' });
    }
    
    appendTerminalLine(' ', '');
    appendTerminalLine('=================== DECRYPTION PROTOCOL ACTIVATED ===================', 'crimson');
    appendTerminalLine('[*] TARGET FILE: d:\\Certificates\\cyber-portfolio\\cv.pdf');
    appendTerminalLine('[*] Handshaking with secure key escrow vault...');
    
    setTimeout(() => {
      appendTerminalLine('[+] Cryptographic validation key resolved (SHA-256 key matching).');
      appendTerminalLine('[*] Processing memory payload decryption... please wait.');
      
      const progressLineId = 'progress-' + Date.now();
      const progressLine = document.createElement('div');
      progressLine.className = 'terminal-line';
      progressLine.innerHTML = `[decrypting] <div class="terminal-progress-bar"><div class="terminal-progress-fill" id="${progressLineId}"></div></div> <span id="${progressLineId}-pct">0%</span>`;
      termLogs.appendChild(progressLine);
      termLogs.scrollTop = termLogs.scrollHeight;
      
      const fillBar = document.getElementById(progressLineId);
      const fillPct = document.getElementById(progressLineId + '-pct');
      
      let pct = 0;
      const progressInterval = setInterval(() => {
        pct += 5;
        if (fillBar) fillBar.style.width = pct + '%';
        if (fillPct) fillPct.innerText = pct + '%';
        
        if (pct >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            appendTerminalLine('[+] INTEGRITY CHECK: SHA-256 signature verified matching remote key hash.', 'cyan');
            appendTerminalLine('[+] SUCCESS: CV payload decrypted in application memory.', 'cyan');
            appendTerminalLine('[*] Establishing download socket connection... stream pushed.', 'muted');
            
            const link = document.createElement('a');
            link.href = 'cv.pdf';
            link.download = 'Ananth_Kamath_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            decryptInProgress = false;
          }, 300);
        }
      }, 80);
      
    }, 600);
  }
});
