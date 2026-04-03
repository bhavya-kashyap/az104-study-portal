// Azure Cloud Shell Module — Unit 2: What is Azure Cloud Shell?
// MS Learn: https://learn.microsoft.com/en-in/training/modules/intro-to-azure-cloud-shell/2-what-is-azure-cloud-shell
// Maps to Schedule Day 2
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    2: {
      domain: 'D1',
      title: 'What is Azure Cloud Shell?',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/2-what-is-azure-cloud-shell',
      sections: [

        {
          title: 'Definition & Core Identity',
          content: `
<p><strong>Azure Cloud Shell</strong> is a browser-accessible, interactive, authenticated terminal for managing Microsoft Azure resources. It is provided as a free, managed service by Microsoft — you do not need to install any software locally.</p>

<div style="border:2px solid var(--azure-blue);border-radius:8px;padding:20px;margin:16px 0;background:var(--bg-input)">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
    <i class="fas fa-terminal" style="font-size:32px;color:var(--azure-blue)"></i>
    <div>
      <div style="font-size:16px;font-weight:700">Azure Cloud Shell</div>
      <div style="font-size:12px;color:var(--text-muted)">Interactive • Browser-based • Authenticated • Managed</div>
    </div>
  </div>
  <ul style="margin:0;padding-left:20px;line-height:2;font-size:14px">
    <li>Runs entirely in your browser — no local install needed</li>
    <li>Automatically authenticated with your Azure identity</li>
    <li>Choice of <strong>Bash</strong> or <strong>PowerShell</strong> environment</li>
    <li>All tools pre-installed and maintained by Microsoft</li>
    <li>Persistent file storage via Azure Files</li>
  </ul>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Cloud Shell is <em>not</em> a locally installed tool. It runs on a temporary Microsoft-managed container. Each session is ephemeral but your files persist in Azure Files storage.</span></div>`
        },

        {
          title: 'Shell Types: Bash vs PowerShell',
          content: `
<p>Azure Cloud Shell supports two shell environments. You choose which one to use when you first open Cloud Shell, and you can switch at any time.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="border:2px solid #0078d4;border-radius:8px;padding:18px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <i class="fab fa-linux" style="font-size:24px;color:#0078d4"></i>
      <strong style="font-size:15px">Bash</strong>
    </div>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li>Linux shell environment</li>
      <li>Uses <strong>Azure CLI</strong> (<code>az</code> commands)</li>
      <li>Python, Node.js, Git available</li>
      <li>Terraform, Ansible, kubectl built-in</li>
      <li>Best for: scripting, cross-platform tasks</li>
    </ul>
    <div style="margin-top:12px;background:var(--bg-card);border-radius:4px;padding:10px;font-family:'Fira Code',monospace;font-size:12px">
      <span style="color:#888"># Example: Create a resource group</span><br>
      <span style="color:#0078d4">az</span> group create --name MyRG --location eastus
    </div>
  </div>
  <div style="border:2px solid #00b294;border-radius:8px;padding:18px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <i class="fab fa-windows" style="font-size:24px;color:#00b294"></i>
      <strong style="font-size:15px">PowerShell</strong>
    </div>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li>PowerShell 7+ environment</li>
      <li>Uses <strong>Az module</strong> (PowerShell cmdlets)</li>
      <li>Azure: drive for resource navigation</li>
      <li>All Az.* modules pre-installed</li>
      <li>Best for: Windows-centric, Enterprise scripting</li>
    </ul>
    <div style="margin-top:12px;background:var(--bg-card);border-radius:4px;padding:10px;font-family:'Fira Code',monospace;font-size:12px">
      <span style="color:#888"># Example: Create a resource group</span><br>
      <span style="color:#00b294">New-AzResourceGroup</span> -Name MyRG -Location EastUS
    </div>
  </div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Both Bash and PowerShell can manage Azure resources. Bash uses Azure CLI syntax (<code>az noun verb</code>). PowerShell uses Az module cmdlets (<code>Verb-AzNoun</code>). Know both styles for the exam.</span></div>`
        },

        {
          title: 'Access Points — Where to Open Cloud Shell',
          content: `
<p>Azure Cloud Shell can be accessed from multiple entry points. This flexibility is a key feature for AZ-104 admins:</p>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:16px 0">
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-cloud" style="color:var(--azure-blue);font-size:18px"></i>
      <strong style="font-size:13px">Azure Portal</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">Click the <code>&gt;_</code> icon in the top navigation bar of <a href="https://portal.azure.com" target="_blank" rel="noopener">portal.azure.com</a>. Opens as a panel at the bottom of the screen.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-globe" style="color:var(--azure-blue);font-size:18px"></i>
      <strong style="font-size:13px">Direct URL</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">Navigate directly to <a href="https://shell.azure.com" target="_blank" rel="noopener">shell.azure.com</a> for a full-screen Cloud Shell experience without the portal UI.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-mobile-alt" style="color:var(--azure-blue);font-size:18px"></i>
      <strong style="font-size:13px">Azure Mobile App</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">Full Cloud Shell available on the <strong>Azure mobile app</strong> for iOS and Android. Manage resources on the go.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-code" style="color:var(--azure-blue);font-size:18px"></i>
      <strong style="font-size:13px">VS Code Extension</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">Available via the <strong>Azure Account extension</strong> in Visual Studio Code. Integrates Cloud Shell directly into the VS Code terminal.</p>
  </div>
  <div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input);grid-column:span 2">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <i class="fas fa-book" style="color:var(--azure-blue);font-size:18px"></i>
      <strong style="font-size:13px">Microsoft Learn "Try It" Buttons</strong>
    </div>
    <p style="font-size:13px;margin:0;color:var(--text-secondary)">Interactive code samples on Microsoft Learn include <strong>"Try it"</strong> buttons that open a Cloud Shell session directly within the documentation page.</p>
  </div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> The exam may ask where Cloud Shell can be accessed. Remember all 5 access points. The portal's <code>&gt;_</code> icon is the most common. Direct URL <code>shell.azure.com</code> is useful when the portal is too slow.</span></div>`
        },

        {
          title: 'Persistent Storage — Azure Files Integration',
          content: `
<p>Cloud Shell provides two storage modes: <strong>persistent</strong> (with Azure Files) and <strong>ephemeral</strong> (no storage). Understanding this distinction is important for the exam.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Storage Architecture</h4>

<div style="border:1px solid var(--border);border-radius:8px;padding:18px;background:var(--bg-input);margin:12px 0">
  <div style="display:flex;align-items:center;justify-content:space-around;flex-wrap:wrap;gap:16px;text-align:center;font-size:13px">
    <div>
      <i class="fas fa-user-circle" style="font-size:28px;color:var(--azure-blue);display:block;margin-bottom:6px"></i>
      <strong>You (Browser)</strong><br><span style="color:var(--text-muted)">shell.azure.com</span>
    </div>
    <i class="fas fa-arrow-right" style="color:var(--text-muted)"></i>
    <div>
      <i class="fas fa-box" style="font-size:28px;color:#8764b8;display:block;margin-bottom:6px"></i>
      <strong>Cloud Shell Container</strong><br><span style="color:var(--text-muted)">Temporary Linux VM</span>
    </div>
    <i class="fas fa-arrow-right" style="color:var(--text-muted)"></i>
    <div>
      <i class="fas fa-hdd" style="font-size:28px;color:#00b294;display:block;margin-bottom:6px"></i>
      <strong>Azure Files Share</strong><br><span style="color:var(--text-muted)">$HOME persists here</span>
    </div>
    <i class="fas fa-arrow-right" style="color:var(--text-muted)"></i>
    <div>
      <i class="fas fa-database" style="font-size:28px;color:#ffaa44;display:block;margin-bottom:6px"></i>
      <strong>Storage Account</strong><br><span style="color:var(--text-muted)">In your subscription</span>
    </div>
  </div>
</div>

<table style="width:100%;font-size:13px;border-collapse:collapse;margin-top:16px">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Aspect</th>
    <th style="padding:8px;text-align:left">Persistent Mode</th>
    <th style="padding:8px;text-align:left">Ephemeral Mode</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Setup</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Requires an Azure Files share in a storage account</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">No storage setup required</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">$HOME directory</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)"><strong>5 GB disk image</strong> stored in Azure Files, persists across sessions</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Temporary — wiped when session ends</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Files / Scripts</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Saved between sessions — SSH keys, scripts, configs preserved</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Lost when session ends</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Cost</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Azure Files storage charged to your subscription (usually &lt;$1/month)</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Free (no storage)</td>
  </tr>
  <tr>
    <td style="padding:8px">Mount path</td>
    <td style="padding:8px"><code>$HOME/clouddrive</code> maps to your Azure Files share</td>
    <td style="padding:8px">N/A</td>
  </tr>
</table>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> On first launch, Cloud Shell prompts you to create a storage account and file share. This is a one-time setup. The file share provides <strong>persistence</strong> — if you close the session and reopen, your files are still there. The compute container is always ephemeral.</span></div>`
        },

        {
          title: 'Pre-installed Tools',
          content: `
<p>Cloud Shell comes with a rich set of tools pre-installed so you can start managing Azure immediately. Microsoft maintains and updates these tools — you never need to install or update them yourself.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div>
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">☁️ Azure Management</h4>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li><code>az</code> — Azure CLI</li>
      <li><code>Az</code> module — Azure PowerShell</li>
      <li>Azure classic CLI (legacy)</li>
    </ul>
  </div>
  <div>
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">📦 Infrastructure as Code</h4>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li><code>terraform</code> — Terraform IaC</li>
      <li><code>ansible</code> — Configuration management</li>
      <li><code>bicep</code> — Azure Bicep</li>
    </ul>
  </div>
  <div>
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">🐳 Container Tools</h4>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li><code>kubectl</code> — Kubernetes CLI</li>
      <li><code>helm</code> — Kubernetes package manager</li>
      <li><code>docker</code> — Container runtime</li>
    </ul>
  </div>
  <div>
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">👨‍💻 Development</h4>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li><code>git</code> — Version control</li>
      <li><code>python</code> / <code>python3</code></li>
      <li>Node.js, .NET, Java SDKs</li>
    </ul>
  </div>
  <div>
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">📝 Editors</h4>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li><code>code .</code> — Monaco editor (Cloud Shell Editor, graphical)</li>
      <li><code>vim</code> — Vi Improved</li>
      <li><code>nano</code> — Simple text editor</li>
      <li><code>emacs</code> — GNU Emacs</li>
    </ul>
  </div>
  <div>
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">🔧 Data & Database</h4>
    <ul style="margin:0;padding-left:16px;line-height:2;font-size:13px">
      <li><code>mysql</code> — MySQL client</li>
      <li><code>sqlcmd</code> — SQL Server CLI</li>
      <li><code>psql</code> — PostgreSQL client</li>
    </ul>
  </div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> The Cloud Shell Editor (<code>code .</code>) uses the Monaco editor — the same engine as VS Code. Use it to create and edit ARM templates, scripts, and YAML files directly in your browser without leaving Cloud Shell.</span></div>`
        },

        {
          title: 'Session Lifecycle & Security',
          content: `
<p>Understanding how Cloud Shell sessions work is important for both practical use and the exam.</p>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Session Timeline</h4>
<div style="border:1px solid var(--border);border-radius:8px;padding:16px;background:var(--bg-input);margin:12px 0">
  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:13px">
    <div style="text-align:center;flex:1">
      <i class="fas fa-sign-in-alt" style="font-size:20px;color:#107c10;display:block;margin-bottom:6px"></i>
      <strong>Launch</strong><br>Container provisioned<br>~20 seconds
    </div>
    <i class="fas fa-chevron-right" style="color:var(--text-muted)"></i>
    <div style="text-align:center;flex:1">
      <i class="fas fa-terminal" style="font-size:20px;color:var(--azure-blue);display:block;margin-bottom:6px"></i>
      <strong>Active</strong><br>Full tool access<br>Authenticated
    </div>
    <i class="fas fa-chevron-right" style="color:var(--text-muted)"></i>
    <div style="text-align:center;flex:1">
      <i class="fas fa-clock" style="font-size:20px;color:#ffaa44;display:block;margin-bottom:6px"></i>
      <strong>Idle</strong><br>20 minutes inactive<br>→ Session ends
    </div>
    <i class="fas fa-chevron-right" style="color:var(--text-muted)"></i>
    <div style="text-align:center;flex:1">
      <i class="fas fa-trash-alt" style="font-size:20px;color:#d13438;display:block;margin-bottom:6px"></i>
      <strong>Terminated</strong><br>Container destroyed<br>Files saved in Azure Files
    </div>
  </div>
</div>

<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Security Model</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)">
    <th style="padding:8px;text-align:left">Feature</th>
    <th style="padding:8px;text-align:left">Detail</th>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Authentication</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Automatically authenticated as your Azure portal/account identity. No <code>az login</code> needed.</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Authorization</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Operations are subject to your RBAC permissions — you can only do what your account is authorized to do.</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Isolation</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Each session runs in an isolated per-user, per-session container. No shared compute between users.</td>
  </tr>
  <tr>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Storage Encryption</td>
    <td style="padding:8px;border-bottom:1px solid var(--border)">Azure Files (your $HOME) is encrypted at rest using AES-256 by default.</td>
  </tr>
  <tr>
    <td style="padding:8px">Cost</td>
    <td style="padding:8px">The compute is <strong>free</strong>. You only pay for the Azure Files storage (~$0.06/GB/month).</td>
  </tr>
</table>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Cloud Shell session timeout = <strong>20 minutes</strong> of inactivity. The container is destroyed but your Azure Files storage persists. Running commands counts as activity and resets the timer.</span></div>`
        }

      ]
    }

  });
})();
