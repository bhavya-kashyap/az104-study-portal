// Azure Cloud Shell Module — Unit 6: Summary
// MS Learn: https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/6-summary
// Maps to Schedule Day 6
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    6: {
      domain: 'D1',
      title: 'Azure Cloud Shell — Summary',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/6-summary',
      sections: [

        {
          title: 'Module Summary',
          content: `
<p>You have completed the <strong>Introduction to Azure Cloud Shell</strong> module. This is the official summary that mirrors the Microsoft Learn module's closing unit.</p>

<div style="border:2px solid var(--azure-blue);border-radius:8px;padding:20px;margin:16px 0;background:var(--bg-input)">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
    <i class="fas fa-check-circle" style="font-size:28px;color:#107c10"></i>
    <div>
      <div style="font-size:16px;font-weight:700">Module Complete</div>
      <div style="font-size:12px;color:var(--text-muted)">Introduction to Azure Cloud Shell — 6 Units</div>
    </div>
  </div>
  <p style="font-size:14px;margin:0">In this module, you explored Azure Cloud Shell — Microsoft's browser-based, authenticated, managed shell environment for administering Azure resources without any local setup.</p>
</div>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">What You Accomplished in This Module</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Learning Objective</th>
    <th style="padding:8px;text-align:left">Status</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Describe what Azure Cloud Shell is and what problems it solves</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);color:#107c10">✅ Covered in Unit 2</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Understand how Cloud Shell authenticates and stores files</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);color:#107c10">✅ Covered in Unit 3</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Identify when to use Cloud Shell vs. other tools</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);color:#107c10">✅ Covered in Unit 4</td>
  </tr>
  <tr>
    <td style="padding:8px">Test your knowledge with the official knowledge check</td>
    <td style="padding:8px;color:#107c10">✅ Covered in Unit 5</td>
  </tr>
</table>`
        },

        {
          title: 'Complete Key Concepts Recap',
          content: `
<p>This section consolidates all the key concepts from the entire module into one searchable reference.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Core Definition</h4>
<p style="font-size:14px"><strong>Azure Cloud Shell</strong> is a <em>browser-accessible, interactive, authenticated</em> shell for managing Azure resources. It runs on a temporary, Microsoft-managed Linux container and supports both <strong>Bash</strong> (Azure CLI) and <strong>PowerShell</strong> (Az module).</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Shell Environments</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Shell</th>
    <th style="padding:8px;text-align:left">Primary Tool</th>
    <th style="padding:8px;text-align:left">Command Style</th>
    <th style="padding:8px;text-align:left">Best For</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Bash</strong></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Azure CLI (<code>az</code>)</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az noun verb --args</code></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Cross-platform scripting</td>
  </tr>
  <tr>
    <td style="padding:8px"><strong>PowerShell</strong></td>
    <td style="padding:8px">Az module</td>
    <td style="padding:8px"><code>Verb-AzNoun -Param</code></td>
    <td style="padding:8px">Enterprise Windows scripting</td>
  </tr>
</table>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Access Points</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Azure Portal</strong> — <code>&gt;_</code> icon in top navigation bar</li>
  <li><strong>Direct URL</strong> — <a href="https://shell.azure.com" target="_blank" rel="noopener">shell.azure.com</a></li>
  <li><strong>Azure Mobile App</strong> — iOS and Android</li>
  <li><strong>VS Code</strong> — Azure Account extension</li>
  <li><strong>Microsoft Learn</strong> — "Try it" buttons in docs</li>
</ul>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Storage Model</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Component</th>
    <th style="padding:8px;text-align:left">Persistent?</th>
    <th style="padding:8px;text-align:left">Detail</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Compute container</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);color:#d13438">❌ Ephemeral</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Destroyed on session end/timeout</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>$HOME</code> directory</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);color:#107c10">✅ Persistent</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">5 GB disk image in Azure Files</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>$HOME/clouddrive</code></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);color:#107c10">✅ Persistent</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Directly maps to Azure Files share</td>
  </tr>
  <tr>
    <td style="padding:8px"><code>/tmp</code></td>
    <td style="padding:8px;color:#d13438">❌ Ephemeral</td>
    <td style="padding:8px">Destroyed on session end</td>
  </tr>
</table>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Session Lifecycle</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Session starts: container provisioned (~20 sec), files from Azure Files mounted</li>
  <li>Active session: full tool access, authenticated, connected to your subscription</li>
  <li>Idle timeout: <strong>20 minutes</strong> of inactivity → session terminated</li>
  <li>Session ends: container destroyed, Azure Files storage preserved</li>
</ul>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Tools Pre-installed</h4>
<p style="font-size:14px">Azure CLI, Azure PowerShell (Az module), Terraform, Ansible, Git, Python, Node.js, .NET, kubectl, Helm, Docker, MySQL/PostgreSQL/SQL clients, Monaco Editor (<code>code .</code>), vim, nano, emacs</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Security & Cost</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Authentication</strong> — Automatic (inherits Azure portal session; no <code>az login</code>)</li>
  <li><strong>Authorization</strong> — Subject to your RBAC permissions</li>
  <li><strong>Isolation</strong> — Per-user, per-session isolated container</li>
  <li><strong>Encryption</strong> — Azure Files storage encrypted at rest (AES-256)</li>
  <li><strong>Compute cost</strong> — Free</li>
  <li><strong>Storage cost</strong> — ~$0.06/GB/month for Azure Files</li>
</ul>`
        },

        {
          title: 'When to Use — Final Decision Guide',
          content: `
<h4 style="margin:0 0 14px;color:var(--azure-blue)">Use Cloud Shell ✅</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>No local tools installed</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>Working from any browser</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>Quick, ad-hoc tasks</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>Learning / training environment</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>Demo from any device</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>Shared/locked device</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>Mobile management</div>
  <div style="background:rgba(16,124,16,0.08);border:1px solid rgba(16,124,16,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-check" style="color:#107c10;margin-right:6px"></i>MS Learn labs ("Try it")</div>
</div>

<h4 style="margin:0 0 14px;color:var(--azure-blue)">Don't Use Cloud Shell ❌</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
  <div style="background:rgba(209,52,56,0.08);border:1px solid rgba(209,52,56,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-times" style="color:#d13438;margin-right:6px"></i>Long-running (&gt;20 min) automated tasks</div>
  <div style="background:rgba(209,52,56,0.08);border:1px solid rgba(209,52,56,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-times" style="color:#d13438;margin-right:6px"></i>Scheduled/unattended scripts</div>
  <div style="background:rgba(209,52,56,0.08);border:1px solid rgba(209,52,56,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-times" style="color:#d13438;margin-right:6px"></i>Custom tool installation required</div>
  <div style="background:rgba(209,52,56,0.08);border:1px solid rgba(209,52,56,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-times" style="color:#d13438;margin-right:6px"></i>Air-gapped / offline environment</div>
  <div style="background:rgba(209,52,56,0.08);border:1px solid rgba(209,52,56,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-times" style="color:#d13438;margin-right:6px"></i>CI/CD pipeline integration</div>
  <div style="background:rgba(209,52,56,0.08);border:1px solid rgba(209,52,56,0.3);border-radius:6px;padding:10px;font-size:13px"><i class="fas fa-times" style="color:#d13438;margin-right:6px"></i>Strict compliance restrictions</div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 AZ-104 Exam Signal Words:</strong> "least effort" → Cloud Shell. "no local installation" → Cloud Shell. "automated/scheduled/unattended" → Azure Automation Runbooks. "CI/CD" → GitHub Actions / Azure DevOps.</span></div>`
        },

        {
          title: 'Next Steps — Continuing Your AZ-104 Journey',
          content: `
<p>You have now completed the foundational Cloud Shell module. Here is what comes next in your AZ-104 preparation:</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Immediate Next Steps</h4>
<div style="display:flex;flex-direction:column;gap:10px;margin:12px 0">
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);display:flex;align-items:center;gap:14px">
    <span style="background:var(--azure-blue);color:#fff;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">1</span>
    <div>
      <strong style="font-size:14px">Practice in Azure Cloud Shell</strong>
      <p style="margin:4px 0 0;font-size:13px;color:var(--text-muted)">Open <a href="https://shell.azure.com" target="_blank" rel="noopener">shell.azure.com</a> and practice the commands shown in this module. Create a resource group, list VMs, explore the Azure: drive in PowerShell.</p>
    </div>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);display:flex;align-items:center;gap:14px">
    <span style="background:var(--azure-blue);color:#fff;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">2</span>
    <div>
      <strong style="font-size:14px">Begin Domain 1 — Identity &amp; Governance</strong>
      <p style="margin:4px 0 0;font-size:13px;color:var(--text-muted)">Continue with the Course Modules page to study Microsoft Entra ID, Users/Groups, RBAC, Azure Policy, and more. Use Cloud Shell to practice each concept.</p>
    </div>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);display:flex;align-items:center;gap:14px">
    <span style="background:var(--azure-blue);color:#fff;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">3</span>
    <div>
      <strong style="font-size:14px">Take the Domain 1 Quiz</strong>
      <p style="margin:4px 0 0;font-size:13px;color:var(--text-muted)">Test your knowledge with the Domain 1 quiz. Score ≥ 90% to mark this section complete and unlock the next domain.</p>
    </div>
  </div>
</div>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Useful Commands to Practice</h4>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Open Cloud Shell Editor
code .

# Check current subscription
az account show --query name -o tsv

# List all resource groups
az group list --output table

# Get VM list
az vm list --output table

# Create a test resource group
az group create --name TestRG --location eastus

# Delete the test resource group
az group delete --name TestRG --yes --no-wait

# PowerShell: Switch to Azure drive
cd Azure:
dir</pre>

<div class="alert alert-success mt-4"><i class="fas fa-trophy"></i><span><strong>🎉 Module Complete!</strong> You have finished "Introduction to Azure Cloud Shell." Cloud Shell will be your primary tool throughout the AZ-104 course. Use it to practice every concept you study!</span></div>`
        }

      ]
    }

  });
})();
