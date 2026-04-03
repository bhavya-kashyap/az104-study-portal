// Azure Cloud Shell Module — Unit 1: Introduction
// MS Learn: https://learn.microsoft.com/en-in/training/modules/intro-to-azure-cloud-shell/1-introduction
// Maps to Schedule Day 1
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    1: {
      domain: 'D1',
      title: 'Azure Cloud Shell — Introduction',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/',
      sections: [

        {
          title: 'Module Overview',
          content: `
<p>This unit is Unit 1 of the official Microsoft Learn module <strong>"Introduction to Azure Cloud Shell"</strong> — a prerequisite module for the AZ-104 exam path.</p>

<div style="border:2px solid var(--azure-blue);border-radius:8px;padding:20px;margin:16px 0;background:var(--bg-input)">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
    <i class="fas fa-terminal" style="font-size:28px;color:var(--azure-blue)"></i>
    <div>
      <div style="font-size:18px;font-weight:700">Introduction to Azure Cloud Shell</div>
      <div style="font-size:13px;color:var(--text-muted)">Microsoft Learn — Prerequisite Module</div>
    </div>
  </div>
  <p style="margin:0;font-size:14px">Azure Cloud Shell is an <strong>interactive, browser-accessible terminal</strong> for managing Azure resources — no local installation or configuration required.</p>
</div>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">What You Will Learn in This Module (6 Units)</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Unit</th>
    <th style="padding:8px;text-align:left">Title</th>
    <th style="padding:8px;text-align:left">Day</th>
  </tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">1</td><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Introduction</strong> (this unit)</td><td style="padding:8px;border-bottom:1px solid var(--border)">Day 1</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">2</td><td style="padding:8px;border-bottom:1px solid var(--border)">What is Azure Cloud Shell?</td><td style="padding:8px;border-bottom:1px solid var(--border)">Day 2</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">3</td><td style="padding:8px;border-bottom:1px solid var(--border)">How Azure Cloud Shell Works</td><td style="padding:8px;border-bottom:1px solid var(--border)">Day 3</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">4</td><td style="padding:8px;border-bottom:1px solid var(--border)">When to Use Azure Cloud Shell</td><td style="padding:8px;border-bottom:1px solid var(--border)">Day 4</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">5</td><td style="padding:8px;border-bottom:1px solid var(--border)">Knowledge Check</td><td style="padding:8px;border-bottom:1px solid var(--border)">Day 5</td></tr>
  <tr><td style="padding:8px">6</td><td style="padding:8px">Summary</td><td style="padding:8px">Day 6</td></tr>
</table>`
        },

        {
          title: 'Learning Objectives',
          content: `
<p>After completing this module you will be able to:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-check-circle" style="color:#107c10"></i>
      <strong style="font-size:13px">Describe</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">What Azure Cloud Shell is and what problems it solves for Azure administrators.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-check-circle" style="color:#107c10"></i>
      <strong style="font-size:13px">Understand Functionality</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">How Cloud Shell authenticates, stores files, and provides pre-installed tooling.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-check-circle" style="color:#107c10"></i>
      <strong style="font-size:13px">Determine Scenarios</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">When Cloud Shell is the right tool vs when a local terminal is more appropriate.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-check-circle" style="color:#107c10"></i>
      <strong style="font-size:13px">Use Cloud Shell</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">Launch Cloud Shell, choose Bash or PowerShell, and persist files across sessions.</p>
  </div>
</div>`
        },

        {
          title: 'Why Cloud Shell Matters for AZ-104',
          content: `
<p>The AZ-104 Azure Administrator exam is <strong>heavily hands-on</strong>. Cloud Shell is your primary tool for managing Azure resources from both the exam perspective and in day-to-day operations.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">AZ-104 Exam Context</h4>
<p style="font-size:14px">The exam tests whether you can <em>implement</em> and <em>manage</em> Azure resources, not just describe them. Cloud Shell is explicitly mentioned in the prerequisites learning path:</p>

<div style="background:var(--bg-input);border-left:4px solid var(--azure-blue);padding:14px 18px;border-radius:0 6px 6px 0;margin:12px 0;font-size:14px;font-style:italic">
  "Familiarity with cloud-based command-line tools is expected. You should be comfortable running Azure CLI and Azure PowerShell commands in Cloud Shell."
  <div style="font-size:12px;color:var(--text-muted);margin-top:8px">— Microsoft AZ-104 Exam Prerequisites</div>
</div>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Two Tool Families You Must Know</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Tool</th>
    <th style="padding:8px;text-align:left">Shell</th>
    <th style="padding:8px;text-align:left">Example Command</th>
    <th style="padding:8px;text-align:left">Style</th>
  </tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Azure CLI</td><td style="padding:8px;border-bottom:1px solid var(--border)">Bash (or any)</td><td style="padding:8px;border-bottom:1px solid var(--border)"><code>az vm create</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Verb-Noun, lowercase</td></tr>
  <tr><td style="padding:8px">Azure PowerShell</td><td style="padding:8px">PowerShell</td><td style="padding:8px"><code>New-AzVM</code></td><td style="padding:8px">Verb-AzNoun, PascalCase</td></tr>
</table>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Both CLI and PowerShell commands appear in exam questions. Cloud Shell lets you practice both without any local setup. If the question says "with the least effort" for a one-off task from a browser — Cloud Shell is the answer.</span></div>`
        },

        {
          title: 'AZ-104 Exam Overview',
          content: `
<p>The AZ-104 Microsoft Azure Administrator exam tests your ability to implement, manage, and monitor Azure environments. It covers five domains:</p>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Domain</th><th style="padding:8px;text-align:left">Name</th><th style="padding:8px;text-align:left">Weight</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">D1</td><td style="padding:8px;border-bottom:1px solid var(--border)">Manage Azure Identities &amp; Governance</td><td style="padding:8px;border-bottom:1px solid var(--border)">20–25%</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">D2</td><td style="padding:8px;border-bottom:1px solid var(--border)">Implement &amp; Manage Storage</td><td style="padding:8px;border-bottom:1px solid var(--border)">15–20%</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">D3</td><td style="padding:8px;border-bottom:1px solid var(--border)">Deploy &amp; Manage Azure Compute Resources</td><td style="padding:8px;border-bottom:1px solid var(--border)">20–25%</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">D4</td><td style="padding:8px;border-bottom:1px solid var(--border)">Implement &amp; Manage Virtual Networking</td><td style="padding:8px;border-bottom:1px solid var(--border)">15–20%</td></tr>
  <tr><td style="padding:8px">D5</td><td style="padding:8px">Monitor &amp; Maintain Azure Resources</td><td style="padding:8px">10–15%</td></tr>
</table>
<p style="margin-top:12px"><strong>Format:</strong> 40–60 questions | 115 minutes | Passing score: 700/1000</p>
<p style="margin-top:8px"><strong>Question types:</strong> Multiple choice, multi-select, drag-and-drop, case studies, and hot-area questions.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Study Tip:</strong> AZ-104 is heavily hands-on. After reading each concept, practice it in the <a href="https://portal.azure.com" target="_blank" rel="noopener">Azure free tier</a>. The exam tests applied knowledge, not just memorization.</span></div>`
        }

      ]
    }

  });
})();
