// Azure Cloud Shell Module — Unit 4: When to Use Azure Cloud Shell
// MS Learn: https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/4-when-to-use-azure-cloud-shell
// Maps to Schedule Day 4
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    4: {
      domain: 'D1',
      title: 'When to Use Azure Cloud Shell',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/4-when-to-use-azure-cloud-shell',
      sections: [

        {
          title: 'Decision Framework',
          content: `
<p>Azure Cloud Shell is a powerful tool, but it is not always the right choice. This unit helps you determine <strong>when to use Cloud Shell</strong> vs. other options — a concept the AZ-104 exam tests with scenario questions.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Quick Decision Guide</h4>

<div style="border:1px solid var(--border);border-radius:8px;padding:18px;background:var(--bg-input);margin:12px 0">
  <div style="font-size:14px;font-weight:600;margin-bottom:14px;color:var(--azure-blue)">Do you need to manage Azure resources?</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <div style="border:2px solid #107c10;border-radius:6px;padding:14px">
      <div style="color:#107c10;font-weight:700;margin-bottom:8px">✅ Use Cloud Shell when:</div>
      <ul style="margin:0;padding-left:16px;font-size:13px;line-height:2">
        <li>You need quick, on-demand access</li>
        <li>No local tools are installed</li>
        <li>Working from a shared/locked device</li>
        <li>Doing a one-off task</li>
        <li>Training or learning environment</li>
        <li>Demo or presentation</li>
        <li>Mobile access needed</li>
      </ul>
    </div>
    <div style="border:2px solid #d13438;border-radius:6px;padding:14px">
      <div style="color:#d13438;font-weight:700;margin-bottom:8px">❌ Consider local tools when:</div>
      <ul style="margin:0;padding-left:16px;font-size:13px;line-height:2">
        <li>Long-running automation tasks</li>
        <li>Session must stay alive &gt;20 min</li>
        <li>Non-standard tools required</li>
        <li>Full CI/CD pipeline integration</li>
        <li>Regulated environment restricts browser shells</li>
        <li>Complex multi-window workflows</li>
      </ul>
    </div>
  </div>
</div>`
        },

        {
          title: 'Scenario: No Local Installation Available',
          content: `
<p>This is the <strong>most common exam scenario</strong> for Cloud Shell: you need to manage Azure resources but cannot install tools locally.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Example Exam Scenarios</h4>

<div style="margin:12px 0">
  <div style="border-left:4px solid var(--azure-blue);padding:12px 16px;background:var(--bg-input);border-radius:0 6px 6px 0;margin-bottom:12px">
    <div style="font-weight:600;font-size:13px;margin-bottom:6px">📋 Scenario 1</div>
    <p style="font-size:13px;margin:0">A contractor needs to create a resource group in your Azure subscription from their laptop. They have a modern browser but <strong>cannot install software</strong> on the device. What is the <strong>least effort</strong> solution?</p>
    <div style="margin-top:8px;font-size:13px;color:#107c10;font-weight:600">✅ Answer: Use Azure Cloud Shell at shell.azure.com</div>
  </div>

  <div style="border-left:4px solid var(--azure-blue);padding:12px 16px;background:var(--bg-input);border-radius:0 6px 6px 0;margin-bottom:12px">
    <div style="font-weight:600;font-size:13px;margin-bottom:6px">📋 Scenario 2</div>
    <p style="font-size:13px;margin:0">An administrator is attending a conference and only has their phone. They need to quickly check whether a virtual machine is running and start it if not. What tool should they use?</p>
    <div style="margin-top:8px;font-size:13px;color:#107c10;font-weight:600">✅ Answer: Azure Cloud Shell via the Azure mobile app</div>
  </div>

  <div style="border-left:4px solid var(--azure-blue);padding:12px 16px;background:var(--bg-input);border-radius:0 6px 6px 0;margin-bottom:12px">
    <div style="font-weight:600;font-size:13px;margin-bottom:6px">📋 Scenario 3</div>
    <p style="font-size:13px;margin:0">You need to deploy an ARM template stored in a GitHub repository to Azure. You want to avoid setting up any local development environment. What is the best approach?</p>
    <div style="margin-top:8px;font-size:13px;color:#107c10;font-weight:600">✅ Answer: Open Cloud Shell, git clone the repository, then run <code>az deployment group create</code></div>
  </div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> When you see "least effort", "no local installation", "from any browser", or "managed service" — Cloud Shell is usually the correct answer. The exam often uses these phrases as signals.</span></div>`
        },

        {
          title: 'Scenario: Learning, Training & Demos',
          content: `
<p>Cloud Shell is the <strong>ideal environment for training</strong> — including the AZ-104 exam preparation labs and Microsoft Learn sandboxes.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Why Cloud Shell is Perfect for Learning</h4>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:16px 0">
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);text-align:center">
    <i class="fas fa-tools" style="font-size:22px;color:var(--azure-blue);margin-bottom:8px;display:block"></i>
    <strong style="font-size:13px">Zero Setup</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">No installation needed. Open a browser and start learning immediately.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);text-align:center">
    <i class="fas fa-shield-alt" style="font-size:22px;color:var(--azure-blue);margin-bottom:8px;display:block"></i>
    <strong style="font-size:13px">Safe Sandbox</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Experiments in Cloud Shell don't affect your local machine. Mess-ups stay in Azure.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);text-align:center">
    <i class="fas fa-sync-alt" style="font-size:22px;color:var(--azure-blue);margin-bottom:8px;display:block"></i>
    <strong style="font-size:13px">Always Updated</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Tools are always current. No need to run <code>az upgrade</code> or update PowerShell modules.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);text-align:center">
    <i class="fas fa-book-open" style="font-size:22px;color:var(--azure-blue);margin-bottom:8px;display:block"></i>
    <strong style="font-size:13px">MS Learn Integration</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">"Try it" buttons in MS Learn docs open Cloud Shell directly in the documentation.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);text-align:center">
    <i class="fas fa-desktop" style="font-size:22px;color:var(--azure-blue);margin-bottom:8px;display:block"></i>
    <strong style="font-size:13px">Demo-Ready</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Share your screen and demo Azure management without revealing local configs.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:14px;background:var(--bg-input);text-align:center">
    <i class="fas fa-laptop-code" style="font-size:22px;color:var(--azure-blue);margin-bottom:8px;display:block"></i>
    <strong style="font-size:13px">Consistent Environment</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Same tool versions for everyone on your team. No "works on my machine" issues.</p>
  </div>
</div>`
        },

        {
          title: 'Scenario: Quick & Ad-Hoc Administration',
          content: `
<p>Cloud Shell excels for <strong>quick, ad-hoc administrative tasks</strong> where spinning up a local environment is too much overhead.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Common Ad-Hoc Tasks in Cloud Shell</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Task</th>
    <th style="padding:8px;text-align:left">Example Command</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Check VM status</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az vm show -g MyRG -n MyVM --query "powerState"</code></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Start a stopped VM</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az vm start -g MyRG -n MyVM</code></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">List resource groups</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az group list --output table</code></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Resize a VM</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az vm resize -g MyRG -n MyVM --size Standard_D4s_v3</code></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Create a storage account</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az storage account create -n mystorageacct -g MyRG -l eastus</code></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Deploy ARM template</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az deployment group create -g MyRG --template-file template.json</code></td>
  </tr>
  <tr>
    <td style="padding:8px">Get storage account keys</td>
    <td style="padding:8px"><code>az storage account keys list -g MyRG -n mystorageacct</code></td>
  </tr>
</table>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Scenario questions may describe an admin who "rarely needs to run commands" or "occasionally manages resources from different locations." Cloud Shell is always the appropriate answer for these lightweight, on-demand use cases.</span></div>`
        },

        {
          title: 'When NOT to Use Cloud Shell',
          content: `
<p>Just as important as knowing when to use Cloud Shell is knowing when a <strong>local terminal or CI/CD pipeline</strong> is more appropriate.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Limitations of Cloud Shell</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Limitation</th>
    <th style="padding:8px;text-align:left">Why It Matters</th>
    <th style="padding:8px;text-align:left">Alternative</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>20-minute timeout</strong></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Long-running scripts get interrupted if idle</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Local terminal, Azure Automation Runbooks</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>No persistent compute</strong></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Can't host a running service or background process</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Azure Functions, Azure Automation, VMs</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Can't install custom software</strong></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">No root/admin access; limited package installs</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Local VM, DevContainer, GitHub Codespaces</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Requires internet + browser</strong></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Cannot use in air-gapped or restricted network</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Local Azure CLI/PowerShell</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Single terminal window</strong></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Limited multi-tasking; no tmux-style sessions built in</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Local terminal with multiple tabs/panes</td>
  </tr>
  <tr>
    <td style="padding:8px"><strong>Storage account cost</strong></td>
    <td style="padding:8px">Small but ongoing charge for Azure Files</td>
    <td style="padding:8px">Ephemeral mode (but files not saved)</td>
  </tr>
</table>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Better Alternatives for Automation</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Azure Automation Runbooks</strong> — For scheduled or triggered scripts that run unattended</li>
  <li><strong>GitHub Actions / Azure DevOps Pipelines</strong> — For CI/CD workflows with Azure CLI/PowerShell steps</li>
  <li><strong>Azure Functions</strong> — For event-driven, serverless task execution</li>
  <li><strong>Local Azure CLI / PowerShell</strong> — For developers who work with Azure daily from a fixed workstation</li>
</ul>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> If a scenario mentions an <strong>automated, unattended, scheduled, or long-running</strong> task, Cloud Shell is <strong>NOT</strong> the answer. Choose Azure Automation Runbooks or GitHub Actions instead. Cloud Shell requires a human to be present.</span></div>`
        },

        {
          title: 'Cloud Shell vs Local CLI — Comparison Table',
          content: `
<p>The exam may directly compare Cloud Shell with locally installed Azure CLI or Azure PowerShell. Here's the complete comparison:</p>

<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Feature</th>
    <th style="padding:8px;text-align:center">Azure Cloud Shell</th>
    <th style="padding:8px;text-align:center">Local Azure CLI / PowerShell</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Installation required</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">❌ None</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#d13438">✅ Yes</span></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Authentication</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">Automatic</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#d13438">Manual (<code>az login</code>)</span></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Tool updates</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">Microsoft managed</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#d13438">You manage</span></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Session persistence</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#ffaa44">20-min timeout</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">Always available</span></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Accessible from anywhere</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">✅ Any browser</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#d13438">Requires your machine</span></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Custom tool install</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#d13438">Limited</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">Full control</span></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Long-running scripts</td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#d13438">⚠️ 20-min limit</span></td>
    <td style="padding:8px;border-bottom:1px solid var(--border);text-align:center"><span style="color:#107c10">Unlimited</span></td>
  </tr>
  <tr>
    <td style="padding:8px">Cost</td>
    <td style="padding:8px;text-align:center"><span style="color:#107c10">Free compute + storage ~$0.06/GB</span></td>
    <td style="padding:8px;text-align:center">Free (open source)</td>
  </tr>
</table>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> The key differentiator for exam questions: Cloud Shell = zero-setup, browser-based, auto-authenticated. Local CLI = more control, better for automation. The phrase "with minimum effort" or "without configuring local tools" = Cloud Shell.</span></div>`
        }

      ]
    }

  });
})();
