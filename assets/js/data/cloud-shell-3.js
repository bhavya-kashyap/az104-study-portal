// Azure Cloud Shell Module — Unit 3: How Azure Cloud Shell Works
// MS Learn: https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/3-how-azure-cloud-shell-works
// Maps to Schedule Day 3
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    3: {
      domain: 'D1',
      title: 'How Azure Cloud Shell Works',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/3-how-azure-cloud-shell-works',
      sections: [

        {
          title: 'Cloud Shell Architecture',
          content: `
<p>When you open Azure Cloud Shell, Microsoft provisions a <strong>temporary, isolated container</strong> just for your session. This container hosts your chosen shell environment and all pre-installed tools.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Architecture Diagram</h4>
<div style="border:1px solid var(--border);border-radius:8px;padding:20px;background:var(--bg-input);margin:12px 0">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;font-size:13px">
    <div style="border:1px solid #0078d4;border-radius:6px;padding:14px">
      <i class="fas fa-user-circle" style="font-size:24px;color:#0078d4;margin-bottom:8px;display:block"></i>
      <strong>Client Layer</strong>
      <ul style="list-style:none;margin:8px 0 0;padding:0;color:var(--text-muted);font-size:12px;line-height:1.8">
        <li>Azure Portal (>_ icon)</li>
        <li>shell.azure.com</li>
        <li>Mobile App</li>
        <li>VS Code Extension</li>
      </ul>
    </div>
    <div style="border:1px solid #8764b8;border-radius:6px;padding:14px">
      <i class="fas fa-cogs" style="font-size:24px;color:#8764b8;margin-bottom:8px;display:block"></i>
      <strong>Cloud Shell Service</strong>
      <ul style="list-style:none;margin:8px 0 0;padding:0;color:var(--text-muted);font-size:12px;line-height:1.8">
        <li>Authentication check</li>
        <li>Container provisioning</li>
        <li>Tool management</li>
        <li>Session management</li>
      </ul>
    </div>
    <div style="border:1px solid #00b294;border-radius:6px;padding:14px">
      <i class="fas fa-hdd" style="font-size:24px;color:#00b294;margin-bottom:8px;display:block"></i>
      <strong>Your Subscription</strong>
      <ul style="list-style:none;margin:8px 0 0;padding:0;color:var(--text-muted);font-size:12px;line-height:1.8">
        <li>Storage Account</li>
        <li>Azure Files share</li>
        <li>$HOME disk image</li>
        <li>Azure resources</li>
      </ul>
    </div>
  </div>
  <div style="text-align:center;margin-top:14px;font-size:12px;color:var(--text-muted)">
    <i class="fas fa-arrow-left" style="color:#0078d4"></i> HTTPS (WebSocket) 
    <span style="margin:0 12px">|</span> 
    <i class="fas fa-arrow-right" style="color:#00b294"></i> SMB (Azure Files mount)
  </div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> The Cloud Shell compute container is <strong>Microsoft-managed and ephemeral</strong>. Your $HOME data lives in your subscription's Azure Files share. This separation means the compute is free but storage costs apply to your subscription.</span></div>`
        },

        {
          title: 'How Authentication Works',
          content: `
<p>One of Cloud Shell's most powerful features is <strong>automatic authentication</strong>. You never need to run <code>az login</code> or <code>Connect-AzAccount</code> in Cloud Shell.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Authentication Flow</h4>
<ol style="margin:0 0 16px 20px;line-height:2;font-size:14px">
  <li>You sign in to <strong>portal.azure.com</strong> (or shell.azure.com) with your Azure account</li>
  <li>Cloud Shell inherits your <strong>Azure Active Directory / Entra ID token</strong></li>
  <li>The container is granted access using your identity and permissions</li>
  <li>Azure CLI and PowerShell are automatically authenticated with your credentials</li>
  <li>Every command you run acts under your RBAC permissions</li>
</ol>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">What This Means Practically</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">In Local Terminal</th>
    <th style="padding:8px;text-align:left">In Cloud Shell</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>az login</code> required first</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">✅ Already authenticated</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>Connect-AzAccount</code> required first</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">✅ Already connected</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Must manage credential refresh</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">✅ Tokens managed automatically</td>
  </tr>
  <tr>
    <td style="padding:8px">MFA challenges required</td>
    <td style="padding:8px">✅ Inherits portal MFA session</td>
  </tr>
</table>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Checking Your Active Subscription</h4>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Azure CLI — show current subscription
az account show

# Azure CLI — list all accessible subscriptions
az account list --output table

# Azure PowerShell — show current context
Get-AzContext

# Switch subscriptions (CLI)
az account set --subscription "My Subscription Name"</pre>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Cloud Shell is automatically authenticated. No <code>az login</code> needed. If you have multiple subscriptions, use <code>az account set</code> to switch. The identity used is the one you used to sign into the portal or shell.azure.com.</span></div>`
        },

        {
          title: 'Storage Setup — First Launch',
          content: `
<p>The first time you open Cloud Shell, Azure walks you through creating persistent storage. This is a one-time setup process.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">First-Launch Wizard Steps</h4>
<ol style="margin:0 0 16px 20px;line-height:2.2;font-size:14px">
  <li><strong>Choose shell type</strong> — Select Bash or PowerShell (can switch later)</li>
  <li><strong>Select subscription</strong> — Choose which subscription the storage account will be created in</li>
  <li><strong>Create storage</strong> — Azure auto-creates a storage account and Azure Files share</li>
  <li><strong>Mount and connect</strong> — The file share is mounted at <code>$HOME/clouddrive</code> and a 5 GB disk image is created for your <code>$HOME</code></li>
</ol>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">What Gets Created in Your Subscription</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Resource</th>
    <th style="padding:8px;text-align:left">Name Pattern</th>
    <th style="padding:8px;text-align:left">Purpose</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Resource Group</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>cloud-shell-storage-&lt;region&gt;</code></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Container for Cloud Shell storage resources</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Storage Account</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>cs&lt;random-id&gt;</code></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Hosts the Azure Files share</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Azure Files Share</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><code>cs-&lt;user-hash&gt;-&lt;region&gt;-files</code></td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Stores the $HOME disk image and clouddrive files</td>
  </tr>
  <tr>
    <td style="padding:8px">$HOME disk image</td>
    <td style="padding:8px"><code>acc_&lt;username&gt;.img</code></td>
    <td style="padding:8px">5 GB image file: your persistent home directory</td>
  </tr>
</table>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Advanced Storage Options</h4>
<p style="font-size:14px">You can use an <strong>existing storage account</strong> instead of letting Azure auto-create one. In the first-launch dialog, click <em>"Show advanced settings"</em> to specify:</p>
<ul style="margin:8px 0 12px 20px;line-height:2;font-size:14px">
  <li>Subscription</li>
  <li>Region (must match or be close to the storage account region)</li>
  <li>Resource Group name (new or existing)</li>
  <li>Storage Account name</li>
  <li>File Share name</li>
</ul>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Cloud Shell creates resources in <em>your</em> subscription. The storage account costs money (~$0.06/GB/month). You can delete the Cloud Shell storage account to stop charges, but you'll lose all saved files and settings.</span></div>`
        },

        {
          title: 'The Cloud Shell Editor (Monaco)',
          content: `
<p>Cloud Shell includes a fully featured, browser-based text editor called the <strong>Cloud Shell Editor</strong>, powered by the <strong>Monaco engine</strong> — the same editor that powers Visual Studio Code.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Launching the Editor</h4>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Open the current directory
code .

# Open a specific file
code mytemplate.json

# Open a file and focus on a specific line
code -g mytemplate.json:15</pre>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Editor Features</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
  <div style="border:1px solid var(--border);border-radius:6px;padding:12px;background:var(--bg-input)">
    <i class="fas fa-paint-brush" style="color:var(--azure-blue);margin-right:6px"></i>
    <strong style="font-size:13px">Syntax Highlighting</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">JSON, YAML, Bash, PowerShell, Python, and 40+ languages</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:6px;padding:12px;background:var(--bg-input)">
    <i class="fas fa-search" style="color:var(--azure-blue);margin-right:6px"></i>
    <strong style="font-size:13px">Find &amp; Replace</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">Ctrl+F to find, Ctrl+H to replace across files</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:6px;padding:12px;background:var(--bg-input)">
    <i class="fas fa-folder-open" style="color:var(--azure-blue);margin-right:6px"></i>
    <strong style="font-size:13px">File Explorer</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">Browse, create, rename, and delete files from the sidebar</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:6px;padding:12px;background:var(--bg-input)">
    <i class="fas fa-save" style="color:var(--azure-blue);margin-right:6px"></i>
    <strong style="font-size:13px">Auto-save</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">Files saved to your persistent Azure Files storage</p>
  </div>
</div>

<p style="font-size:14px">The editor is especially useful for creating and editing <strong>ARM templates</strong>, <strong>Bicep files</strong>, and shell scripts directly in the browser — a common exam task scenario.</p>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> The <code>code .</code> command opens the Monaco-based Cloud Shell Editor. This is a browser-based graphical editor — not a terminal editor like vim. It is the easiest way to edit JSON ARM templates or YAML files in Cloud Shell.</span></div>`
        },

        {
          title: 'PowerShell Specific: The Azure: Drive',
          content: `
<p>When using Cloud Shell in <strong>PowerShell mode</strong>, you get a special feature called the <strong>Azure: drive</strong> — a virtual filesystem that maps your Azure subscriptions as if they were folders on a disk.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Navigating the Azure: Drive</h4>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Switch to the Azure drive
cd Azure:

# List your subscriptions as top-level folders
dir

# Navigate into a subscription
cd 'My Production Subscription'

# Browse resource groups
cd ResourceGroups
dir

# Navigate back to home directory
cd ~</pre>

<p style="font-size:14px;margin-top:12px">This allows you to explore your Azure resource hierarchy using familiar filesystem commands (<code>dir</code>, <code>cd</code>, <code>ls</code>) instead of needing to memorize resource query commands.</p>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> The <code>Azure:</code> drive is a <strong>PowerShell-only</strong> feature in Cloud Shell. It provides a filesystem-like interface to browse Azure resources. Bash does not have an equivalent built-in feature.</span></div>`
        },

        {
          title: 'Uploading & Downloading Files',
          content: `
<p>Cloud Shell provides multiple ways to get files in and out of your session, which is critical for working with scripts, templates, and certificates.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">File Transfer Methods</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Method</th>
    <th style="padding:8px;text-align:left">Direction</th>
    <th style="padding:8px;text-align:left">How</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Portal Upload Button</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Local → Cloud Shell</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Click the upload icon (⬆) in the Cloud Shell toolbar. File goes to <code>$HOME</code></td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Portal Download Button</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Cloud Shell → Local</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Click download icon (⬇) and specify the file path to download</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Azure Files Share</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Bidirectional</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Mount the Azure Files share in Storage Explorer or Windows. Files appear at <code>$HOME/clouddrive</code></td>
  </tr>
  <tr>
    <td style="padding:8px"><code>git clone</code></td>
    <td style="padding:8px">Remote → Cloud Shell</td>
    <td style="padding:8px">Clone any public/private git repository directly into Cloud Shell</td>
  </tr>
</table>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Paths in Cloud Shell</h4>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto">$HOME              # Your persistent home directory (5 GB disk image)
$HOME/clouddrive   # Directly maps to your Azure Files share
/usr/local/bin     # Location of pre-installed tools (az, kubectl, etc.)
/tmp               # Temporary directory — NOT persistent</pre>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Files saved in <code>$HOME</code> are persistent (survive session restarts). Files in <code>/tmp</code> are <strong>NOT</strong> persistent. The <code>$HOME/clouddrive</code> path gives you direct access to your Azure Files share, which can also be accessed from Storage Explorer.</span></div>`
        }

      ]
    }

  });
})();
