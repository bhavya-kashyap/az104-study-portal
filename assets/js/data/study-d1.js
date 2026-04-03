// D1 per-day study lessons — Domain: Manage Azure Identities & Governance
// Each key is the schedule day number. Content is ready for the study viewer.
(function() {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    // ── Day 1: Course Orientation + Azure AD / Entra ID Fundamentals ─────────
    1: {
      domain: 'D1',
      title: 'Course Orientation + Microsoft Entra ID Fundamentals',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/paths/az-104-administrator-prerequisites/',
      sections: [
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
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Study tip:</strong> AZ-104 is heavily hands-on. After reading each concept, practice it in the <a href="https://portal.azure.com" target="_blank" rel="noopener">Azure free tier</a>. The exam tests applied knowledge, not just memorization.</span></div>`
        },
        {
          title: 'Azure Cloud Shell — Your Admin Toolkit',
          content: `
<p><strong>Azure Cloud Shell</strong> is a browser-based, authenticated shell environment for managing Azure resources — no local installation required. This is covered in the official Microsoft Learn prerequisite module: <em>Introduction to Azure Cloud Shell</em>.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Shell Environments</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Environment</th><th style="padding:8px;text-align:left">Tools &amp; Use Case</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Bash</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Linux shell with Azure CLI (<code>az</code>), Python, Git, Terraform, Ansible. Best for scripting and cross-platform tasks.</td></tr>
  <tr><td style="padding:8px"><strong>PowerShell</strong></td><td style="padding:8px">PowerShell 7+ with Az module pre-installed. Best for Windows-style cmdlets like <code>Get-AzVM</code>, <code>New-AzResourceGroup</code>.</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Access Points</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Azure Portal</strong> — Click the Cloud Shell icon (<code>&gt;_</code>) in the top navigation bar</li>
  <li><strong>Direct URL</strong> — <a href="https://shell.azure.com" target="_blank" rel="noopener">shell.azure.com</a></li>
  <li><strong>Azure Mobile App</strong> — Full Cloud Shell available on iOS and Android</li>
  <li><strong>VS Code</strong> — Via the Azure Account extension</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Persistent Storage (Azure Files)</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Cloud Shell mounts an <strong>Azure Files share</strong> at <code>$HOME/clouddrive</code> for persistence across sessions</li>
  <li>Your <code>$HOME</code> directory is a <strong>5 GB disk image</strong> stored in the file share — scripts, SSH keys, and configs are preserved</li>
  <li>First launch prompts you to create or attach a storage account in a region you choose</li>
  <li><strong>Ephemeral mode</strong> — Skip storage setup to get a temporary session; nothing is saved after the shell closes</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Built-in Tools (Pre-installed)</h4>
<p style="font-size:14px">Azure CLI, Azure PowerShell (Az module), Terraform, Ansible, Git, Python, Node.js, .NET, Docker, kubectl, Helm, and the Monaco-based in-browser editor (launch with <code>code .</code>).</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Cloud Shell is <strong>authenticated automatically</strong> — no <code>az login</code> needed. The shell runs on a managed, temporary Linux container backed by Microsoft. Each session times out after 20 minutes of inactivity. Storage costs (Azure Files) apply to the underlying share.</span></div>`
        },
        {
          title: 'ARM Templates — Infrastructure as Code Basics',
          content: `
<p><strong>Azure Resource Manager (ARM) templates</strong> are JSON files that declare the desired state of your Azure infrastructure. This is covered in the official Microsoft Learn prerequisite module: <em>Deploy Azure infrastructure by using JSON ARM templates</em>.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Template Structure</h4>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto">{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": { },
  "variables": { },
  "functions": [ ],
  "resources": [ ],
  "outputs": { }
}</pre>
<table style="width:100%;font-size:13px;border-collapse:collapse;margin-top:8px">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Section</th><th style="padding:8px;text-align:left">Purpose</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>$schema</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Identifies the template schema version for validation</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>contentVersion</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">User-defined version for change tracking (e.g., "1.0.0.0")</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>parameters</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Values supplied at deployment time — makes templates reusable (e.g., location, SKU)</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>variables</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Computed values used throughout the template to avoid repetition</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>functions</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Custom user-defined template functions for advanced reusability</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>resources</code></td><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Core section</strong> — defines which Azure resources to deploy and their configuration</td></tr>
  <tr><td style="padding:8px"><code>outputs</code></td><td style="padding:8px">Values returned after deployment (e.g., resource ID, connection string)</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Deployment Modes</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Mode</th><th style="padding:8px;text-align:left">Behaviour</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Incremental</strong> (default)</td><td style="padding:8px;border-bottom:1px solid var(--border)">Adds / updates resources in the template. Resources <em>not in the template</em> that already exist are <strong>left unchanged</strong>.</td></tr>
  <tr><td style="padding:8px"><strong>Complete</strong></td><td style="padding:8px">Makes the resource group look <em>exactly</em> like the template. Resources <em>not in the template</em> are <strong>deleted</strong>. Use with caution!</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Deploying a Template</h4>
<pre style="background:var(--bg-input);padding:12px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Azure CLI
az deployment group create \\
  --resource-group myRG \\
  --template-file azuredeploy.json \\
  --parameters @azuredeploy.parameters.json

# Azure PowerShell
New-AzResourceGroupDeployment \`
  -ResourceGroupName myRG \`
  -TemplateFile azuredeploy.json \`
  -TemplateParameterFile azuredeploy.parameters.json</pre>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Common Template Functions</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><code>parameters('name')</code> — Retrieve a parameter value</li>
  <li><code>variables('name')</code> — Retrieve a variable value</li>
  <li><code>concat('a', 'b')</code> — String concatenation</li>
  <li><code>resourceId('type', 'name')</code> — Get resource ID for cross-resource references</li>
  <li><code>uniqueString(resourceGroup().id)</code> — Deterministic hash for unique naming</li>
  <li><code>resourceGroup().location</code> — Reference the deployment resource group's region</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> <strong>Incremental</strong> mode is the default and safest. <strong>Complete</strong> mode deletes resources not in the template — dangerous in production. ARM templates are <strong>idempotent</strong>: running the same template repeatedly produces the same result. Use <code>dependsOn</code> to control resource deployment order.</span></div>`
        },
        {
          title: 'Microsoft Entra ID — What It Is',
          content: `
<p><strong>Microsoft Entra ID</strong> (formerly Azure Active Directory / Azure AD) is Microsoft's cloud-based Identity and Access Management (IAM) service.</p>
<ul style="margin:10px 0 12px 20px;line-height:2;font-size:14px">
  <li>Handles <strong>authentication</strong> (who you are) and <strong>authorisation</strong> (what you can do)</li>
  <li>Manages access to Azure, Microsoft 365, and thousands of third-party SaaS apps</li>
  <li>Cloud-native — not the same as on-premises Windows Server Active Directory (no LDAP, no Kerberos)</li>
  <li>Tenant = a dedicated, trusted instance of Entra ID for an organisation</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tip:</strong> Entra ID ≠ on-prem AD. It uses OAuth 2.0, OIDC, SAML — not LDAP/Kerberos. "Azure AD" and "Microsoft Entra ID" are the same thing on the exam.</span></div>`
        },
        {
          title: 'Entra ID Editions',
          content: `
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Edition</th><th style="padding:8px;text-align:left">Key Features</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Free</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">User/group mgmt, SSO for up to 10 apps, basic MFA</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>P1</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Conditional Access, SSPR, Hybrid Identity, Dynamic Groups, Group-based Licensing</td></tr>
  <tr><td style="padding:8px"><strong>P2</strong></td><td style="padding:8px">Everything in P1 + PIM, Identity Protection, Access Reviews</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">External Identities</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>B2B (Business-to-Business)</strong> — Invite external users (partners, vendors) as guests. They authenticate with their own org's credentials.</li>
  <li><strong>B2C (Business-to-Consumer)</strong> — Customer identity solution; fully separate from your Entra ID tenant. Used for apps that serve end-users.</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> PIM = P2 licence required. Conditional Access = P1 minimum. Guest users = B2B (not B2C). B2C is a completely separate Azure resource, not a feature of your existing tenant.</span></div>`
        }
      ]
    },

    // ── Day 2: Users, Groups & Licenses ──────────────────────────────────────
    2: {
      domain: 'D1',
      title: 'Users, Groups & Licenses in Microsoft Entra ID',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/manage-users-and-groups-in-aad/',
      sections: [
        {
          title: 'User Types',
          content: `
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Type</th><th style="padding:8px;text-align:left">Description</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Member</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Regular internal users; created in your tenant</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Guest</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">External users invited via B2B; authenticate with their home org</td></tr>
  <tr><td style="padding:8px"><strong>Service Principal</strong></td><td style="padding:8px">Identity for applications and automated services</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">User Principal Name (UPN)</h4>
<p style="font-size:14px">Format: <code>username@domain.onmicrosoft.com</code> or a custom verified domain. UPN must be unique per tenant.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Bulk Operations</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Create, invite, or delete users in bulk using a <strong>CSV template</strong> from the portal</li>
  <li>PowerShell: <code>New-AzureADUser</code> / <code>New-MgUser</code> (Microsoft Graph SDK)</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Global Administrator can restore deleted users within 30 days. Deleted users go to a "Deleted users" recycle bin. Guest users have limited directory read permissions by default.</span></div>`
        },
        {
          title: 'Group Types & Membership',
          content: `
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Group Type</th><th style="padding:8px;text-align:left">Purpose</th><th style="padding:8px;text-align:left">Membership</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Security</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">RBAC &amp; app access control</td><td style="padding:8px;border-bottom:1px solid var(--border)">Assigned or Dynamic</td></tr>
  <tr><td style="padding:8px"><strong>Microsoft 365</strong></td><td style="padding:8px">Teams, SharePoint, Exchange collaboration</td><td style="padding:8px">Assigned or Dynamic</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Membership Types</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Assigned</strong> — Members added manually</li>
  <li><strong>Dynamic User</strong> — Auto-membership based on user attributes (e.g., <code>department -eq "Sales"</code>). Requires <strong>P1</strong></li>
  <li><strong>Dynamic Device</strong> — Auto-membership based on device attributes. Requires P1</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Dynamic groups require P1/P2. Can't manually add members to a Dynamic group. Group-based licensing (assign a licence to a group) requires P1. Nested groups are supported for M365 groups but not all RBAC scenarios.</span></div>`
        },
        {
          title: 'Dynamic Group Rules — Syntax & Examples',
          content: `
<p>Dynamic membership rules automatically add or remove users/devices from groups based on attribute expressions. Rules use a PowerShell-like syntax evaluated continuously in the background.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Rule Syntax</h4>
<pre style="background:var(--bg-input);padding:12px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Single condition
(user.department -eq "Sales")

# AND — both must be true
(user.department -eq "Sales") -and (user.city -eq "London")

# OR — either must be true
(user.department -eq "IT") -or (user.department -eq "HR")

# Target all guest (B2B) users
(user.userType -eq "Guest")

# Target guests from a specific domain
(user.userType -eq "Guest") -and (user.mail -contains "@partner.com")

# Dynamic device group — Azure AD joined Windows devices
(device.deviceOSType -eq "Windows") -and (device.trustType -eq "AzureAD")</pre>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Common Attribute Operators</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Operator</th><th style="padding:8px;text-align:left">Meaning</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>-eq</code> / <code>-ne</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Equals / Not equals</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>-startsWith</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">String starts with value</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>-contains</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">String contains value (case-insensitive)</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>-match</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Regex match</td></tr>
  <tr><td style="padding:8px"><code>-in</code> / <code>-notIn</code></td><td style="padding:8px">Value in / not in a list: <code>user.department -in ["Sales","IT"]</code></td></tr>
</table>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Rule evaluation is asynchronous — changes can take minutes to propagate. Use <strong>Validate Rules</strong> in the portal to test before saving. Dynamic groups can't have manually added members. A group can be Dynamic User or Dynamic Device — not both.</span></div>`
        },
        {
          title: 'Administrative Units & Delegated Administration',
          content: `
<p><strong>Administrative Units (AUs)</strong> partition your Entra ID tenant into logical sub-scopes (e.g., by department or region), enabling delegated administration without granting tenant-wide permissions. Requires <strong>P1</strong>.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">How AUs Work</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>An AU contains users, groups, or devices</li>
  <li>You assign scoped admin roles to principals <em>for that AU only</em> — e.g., a Helpdesk Administrator who can only reset passwords for users in the "EMEA" AU</li>
  <li>AUs support <strong>dynamic membership</strong> (rule-based, like dynamic groups) — Requires P1</li>
  <li>Adding a <em>group</em> to an AU scopes the group object itself, not the group's members</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Example Delegated Roles per AU</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Role Scoped to AU</th><th style="padding:8px;text-align:left">What They Can Do</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">Helpdesk Administrator</td><td style="padding:8px;border-bottom:1px solid var(--border)">Reset passwords for AU members only</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)">User Administrator</td><td style="padding:8px;border-bottom:1px solid var(--border)">Create/update/delete users within AU only</td></tr>
  <tr><td style="padding:8px">Groups Administrator</td><td style="padding:8px">Manage groups within AU only</td></tr>
</table>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> AUs are for <em>directory role delegation</em>, not Azure RBAC. They limit which users/groups/devices an admin can manage — not what resources they can access. Global Admins always have full tenant scope regardless of AUs.</span></div>`
        },
        {
          title: 'Licence Assignment',
          content: `
<p>Licences (Microsoft 365, Entra ID P1/P2, etc.) can be assigned:</p>
<ul style="margin:10px 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Directly</strong> — Assign to individual users in the portal</li>
  <li><strong>Group-based licensing</strong> — Assign to a group; all members inherit the licence automatically. Requires <strong>P1</strong></li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Self-Service Group Management</h4>
<p style="font-size:14px">With P1, group owners can allow users to request group membership. Requires configuration in Entra ID → Groups → Self Service.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> If a user is removed from a group with group-based licensing, the licence is automatically removed. Location matters for licence assignment — some licences are not available in all regions.</span></div>`
        }
      ]
    },

    // ── Day 3: Authentication: MFA, SSPR, Conditional Access ─────────────────
    3: {
      domain: 'D1',
      title: 'Authentication: MFA, SSPR & Conditional Access',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/secure-aad-users-with-mfa/',
      sections: [
        {
          title: 'Multi-Factor Authentication (MFA)',
          content: `
<p>MFA requires users to verify their identity using two or more authentication methods.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Authentication Methods</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Microsoft Authenticator app</strong> — Push notification, number matching (most secure, recommended)</li>
  <li><strong>OATH TOTP tokens</strong> — Hardware or software time-based OTP tokens</li>
  <li><strong>SMS / Voice call</strong> — Less secure; phone-based fallback</li>
  <li><strong>Windows Hello for Business</strong> — Biometric or PIN, device-bound</li>
  <li><strong>FIDO2 security keys</strong> — Passwordless physical key</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">MFA Registration &amp; Per-User MFA</h4>
<p style="font-size:14px">Per-user MFA is a legacy approach (enable/enforce MFA for specific users). The modern approach is <strong>Conditional Access policies</strong> (P1 required) or <strong>Security Defaults</strong> (free, but less configurable).</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Security Defaults = free MFA for all users, blocks legacy auth. Conditional Access = granular control (P1). You cannot have both Security Defaults AND Conditional Access enabled simultaneously.</span></div>`
        },
        {
          title: 'Passwordless Authentication',
          content: `
<p>Passwordless methods replace passwords with something you <em>have</em> + something you <em>are</em>, eliminating credential theft risk. Managed via Entra ID → Authentication methods → Policies.</p>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Method</th><th style="padding:8px;text-align:left">How It Works</th><th style="padding:8px;text-align:left">Phishing-Resistant?</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>FIDO2 Security Keys</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Hardware key (e.g., YubiKey) with cryptographic challenge. User taps key + PIN/biometric.</td><td style="padding:8px;border-bottom:1px solid var(--border)">✅ Yes — private key never leaves device</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Windows Hello for Business</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Device-bound biometric (face/fingerprint) or PIN protected by TPM chip.</td><td style="padding:8px;border-bottom:1px solid var(--border)">✅ Yes — device-bound credentials</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Microsoft Authenticator (Passwordless)</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Push notification + biometric/PIN on phone. Number matching required.</td><td style="padding:8px;border-bottom:1px solid var(--border)">⚠️ Partial</td></tr>
  <tr><td style="padding:8px"><strong>Certificate-Based Auth (CBA)</strong></td><td style="padding:8px">X.509 certificate on smart card or device. Used for PIV/CAC compliance requirements.</td><td style="padding:8px">✅ Yes</td></tr>
</table>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> FIDO2 and WHfB are the strongest passwordless options — both are phishing-resistant. Conditional Access can enforce <strong>Authentication Strength</strong> policies to require phishing-resistant MFA for sensitive resources. Passwordless sign-in for FIDO2 is supported on Azure AD-joined and Hybrid Azure AD-joined devices.</span></div>`
        },
        {
          title: 'Self-Service Password Reset (SSPR)',
          content: `
<p>SSPR lets users reset their own passwords without involving the help desk. Requires <strong>P1</strong> for hybrid scenarios.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">SSPR Authentication Methods</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Mobile app notification / code</li>
  <li>Email (external email address)</li>
  <li>Mobile phone SMS / voice call</li>
  <li>Office phone</li>
  <li>Security questions (configurable, 3–5 required)</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">SSPR Scope</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>None</strong> — SSPR disabled</li>
  <li><strong>Selected</strong> — Enabled for specific groups (pilot rollout)</li>
  <li><strong>All</strong> — Enabled for all users</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> SSPR writeback to on-prem AD requires P1 + Azure AD Connect. Admins always require 2 authentication methods for SSPR regardless of policy settings. Users must register before they can use SSPR.</span></div>`
        },
        {
          title: 'Conditional Access',
          content: `
<p><strong>Conditional Access</strong> policies are if-then rules: <em>If user/condition, then require/block/grant</em>. Requires <strong>P1</strong>.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Conditions (Signals)</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>User / group / role</li>
  <li>Cloud apps or actions (e.g., "All cloud apps", specific SaaS)</li>
  <li>Location (named locations, IP ranges, countries)</li>
  <li>Device platform (Windows, iOS, Android, macOS)</li>
  <li>Device compliance / Hybrid Azure AD joined</li>
  <li>Sign-in risk / user risk (requires P2 Identity Protection)</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Grant Controls</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Require MFA</li>
  <li>Require compliant device</li>
  <li>Require Hybrid Azure AD joined device</li>
  <li>Require approved client app</li>
  <li>Block access</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Always test CA policies in <strong>Report-only mode</strong> first — never deploy directly to production. CA policies do NOT apply to the Break Glass (emergency access) accounts. Named locations use IP ranges or country/region GPS lookup.</span></div>`
        },
        {
          title: 'Conditional Access — Named Locations & Session Controls',
          content: `
<h4 style="margin:0 0 8px;color:var(--azure-blue)">Named Locations</h4>
<p style="font-size:14px">Named locations define trusted or untrusted network boundaries used as Conditional Access signals.</p>
<table style="width:100%;font-size:13px;border-collapse:collapse;margin-bottom:12px">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Type</th><th style="padding:8px;text-align:left">How Defined</th><th style="padding:8px;text-align:left">Use Case</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>IP ranges</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">IPv4/IPv6 CIDR blocks; mark as "Trusted"</td><td style="padding:8px;border-bottom:1px solid var(--border)">Corporate network / VPN exit IPs</td></tr>
  <tr><td style="padding:8px"><strong>Countries / Regions</strong></td><td style="padding:8px">GPS-based geolocation lookup</td><td style="padding:8px">Block sign-ins from specific countries</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Session Controls</h4>
<p style="font-size:14px">Session controls (in Conditional Access → Session) limit what users can do <em>during</em> a session, not just at sign-in:</p>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Sign-in frequency</strong> — Re-authenticate every N hours (e.g., 1 hour for high-risk apps)</li>
  <li><strong>Persistent browser session</strong> — Control whether browser sessions stay signed in</li>
  <li><strong>App-enforced restrictions</strong> — Pass device state to SharePoint/Exchange for limited access (view-only, no download) on unmanaged devices</li>
  <li><strong>Continuous Access Evaluation (CAE)</strong> — Real-time token revocation when user is disabled or location changes mid-session</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Use <strong>app-enforced restrictions</strong> to give unmanaged devices read-only access to SharePoint without blocking them entirely. Sign-in frequency forces re-auth but does NOT end the session. Marking a location as "Trusted" can exclude it from MFA requirements in CA policies.</span></div>`
        }
      ]
    },

    // ── Day 4: Azure RBAC ─────────────────────────────────────────────────────
    4: {
      domain: 'D1',
      title: 'Azure RBAC — Roles, Scopes & Custom Roles',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/',
      sections: [
        {
          title: 'RBAC Fundamentals',
          content: `
<p><strong>Azure RBAC</strong> controls who can do what on Azure resources. It operates at the resource-management plane (Azure Resource Manager). It is separate from Entra ID directory roles (like Global Administrator).</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Built-in Roles</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Role</th><th style="padding:8px;text-align:left">Permissions</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Owner</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Full access + can manage role assignments</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Contributor</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Full resource access; cannot manage access or assign roles</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Reader</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">View-only; no changes</td></tr>
  <tr><td style="padding:8px"><strong>User Access Administrator</strong></td><td style="padding:8px">Manage access (assign roles) only; no resource changes</td></tr>
</table>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> RBAC is additive — most permissive role wins. Deny Assignments (from Azure Blueprints) override role assignments. Global Admin ≠ Owner on subscriptions unless explicitly assigned. An Owner can assign any role including Owner.</span></div>`
        },
        {
          title: 'Scope Hierarchy & Role Assignment',
          content: `
<p><strong>Scope hierarchy:</strong> Management Group → Subscription → Resource Group → Resource</p>
<p style="margin-top:10px">Role assignments made at a higher scope <strong>flow down</strong> to all child scopes. A Contributor at the subscription level has Contributor on every resource group and resource within it.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Role Assignment Components</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Security principal</strong> — User, group, service principal, or managed identity</li>
  <li><strong>Role definition</strong> — Set of permissions (actions, notActions, dataActions)</li>
  <li><strong>Scope</strong> — The boundary at which the role applies</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Max 4,000 role assignments per subscription. Classic admin roles (Co-Administrator, Service Administrator) are legacy — avoid on the exam unless specifically asked. Use Entra ID groups for role assignment to manage at scale.</span></div>`
        },
        {
          title: 'Custom Roles',
          content: `
<p>When built-in roles don't fit, create <strong>custom roles</strong> with specific permissions.</p>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto">{
  "Name": "VM Operator",
  "Description": "Can start and stop VMs",
  "Actions": [
    "Microsoft.Compute/virtualMachines/start/action",
    "Microsoft.Compute/virtualMachines/deallocate/action",
    "Microsoft.Compute/virtualMachines/read"
  ],
  "NotActions": [],
  "AssignableScopes": ["/subscriptions/{subId}"]
}</pre>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Facts</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Maximum <strong>5,000 custom roles</strong> per tenant (Azure AD directory)</li>
  <li>Custom roles can be assigned at management group, subscription, resource group, or resource scope</li>
  <li>Use <code>AssignableScopes</code> to restrict where the role can be assigned</li>
  <li>Create via: Azure Portal, Azure CLI, PowerShell, or ARM template</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> <code>notActions</code> ≠ Deny — it just subtracts from Actions in the same role definition. A separate Deny Assignment still wins. dataActions / notDataActions control access to storage data, not management plane.</span></div>`
        },
        {
          title: 'Managed Identities & Service Principals',
          content: `
<p>Instead of storing credentials in code, give Azure resources a <strong>managed identity</strong> so they can authenticate to other services automatically. Azure rotates the credentials behind the scenes — no secrets to manage.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">System-Assigned vs. User-Assigned</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Property</th><th style="padding:8px;text-align:left">System-Assigned</th><th style="padding:8px;text-align:left">User-Assigned</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Creation</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Enabled directly on a resource (VM, App Service, etc.)</td><td style="padding:8px;border-bottom:1px solid var(--border)">Created as a standalone Azure resource first</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Lifecycle</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Deleted automatically when the resource is deleted</td><td style="padding:8px;border-bottom:1px solid var(--border)">Independent — persists even if attached resources are deleted</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Sharing</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">1:1 with resource — can't be shared</td><td style="padding:8px;border-bottom:1px solid var(--border)">Can be attached to multiple resources simultaneously</td></tr>
  <tr><td style="padding:8px"><strong>Best for</strong></td><td style="padding:8px">Simple single-resource scenarios, ephemeral workloads</td><td style="padding:8px">Shared permissions across a fleet of VMs or services</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Service Principal vs. Managed Identity</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Service Principal</strong> — App identity with manually managed secrets/certificates. Used when the workload runs <em>outside</em> Azure (on-prem CI/CD pipelines, third-party tools) or needs full credential control.</li>
  <li><strong>Managed Identity</strong> — A special type of service principal whose credentials are <em>managed by Azure</em>. Only available for Azure-hosted workloads. No secrets needed in code.</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Common Pattern</h4>
<pre style="background:var(--bg-input);padding:12px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Enable system-assigned managed identity on a VM (Azure CLI)
az vm identity assign --name myVM --resource-group myRG

# Grant the identity a role on a Key Vault
az role assignment create \
  --assignee-object-id &lt;identityPrincipalId&gt; \
  --role "Key Vault Secrets User" \
  --scope /subscriptions/{subId}/resourceGroups/myRG/providers/Microsoft.KeyVault/vaults/myKV</pre>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Managed identities are the <strong>recommended way</strong> to authenticate from Azure services — avoid storing credentials in code or config files. Assigning a role to a managed identity follows exactly the same RBAC process as for users. User-assigned identities survive resource deletion; system-assigned ones do not.</span></div>`
        }
      ]
    },

    // ── Day 5: Azure Policy & Initiatives ────────────────────────────────────
    5: {
      domain: 'D1',
      title: 'Azure Policy, Initiatives & Compliance',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/build-cloud-governance-strategy-azure/',
      sections: [
        {
          title: 'Azure Policy Fundamentals',
          content: `
<p><strong>Azure Policy</strong> enforces organisational standards and evaluates resource compliance. It works at the control plane (Azure Resource Manager) and can also govern resource properties at the data plane with some policies.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Policy vs RBAC</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>RBAC</strong> — Controls WHO can perform actions</li>
  <li><strong>Policy</strong> — Controls WHAT properties resources can have</li>
</ul>
<p><strong>Example:</strong> RBAC allows a user to create a VM. Policy enforces that VMs must be in a specific region or SKU.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Policies don't restrict actions by identity — they restrict resource configurations. Policy evaluation happens during resource creation and can be triggered manually via compliance scan.</span></div>`
        },
        {
          title: 'Policy Definition JSON Structure',
          content: `
<p>Every Azure Policy is a JSON document with a <code>policyRule</code> that uses <code>if</code>/<code>then</code> logic.</p>
<pre style="background:var(--bg-input);padding:14px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto">{
  "properties": {
    "displayName": "Allowed locations",
    "description": "Restricts deployment to approved regions.",
    "mode": "Indexed",
    "parameters": {
      "allowedLocations": {
        "type": "Array",
        "metadata": { "displayName": "Allowed Locations" },
        "defaultValue": ["eastus", "westeurope"]
      }
    },
    "policyRule": {
      "if": {
        "not": {
          "field": "location",
          "in": "[parameters('allowedLocations')]"
        }
      },
      "then": { "effect": "deny" }
    }
  }
}</pre>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Logical Operators</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Operator</th><th style="padding:8px;text-align:left">Meaning</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>allOf</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">AND — all conditions must be true</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>anyOf</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">OR — at least one condition must be true</td></tr>
  <tr><td style="padding:8px"><code>not</code></td><td style="padding:8px">Negates the nested condition</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Mode Values</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><code>Indexed</code> — Evaluates only resource types that support tags and location (most common)</li>
  <li><code>All</code> — Evaluates all resource types including resource groups and subscriptions</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Common condition operators: <code>equals</code>, <code>notEquals</code>, <code>in</code>, <code>notIn</code>, <code>contains</code>, <code>exists</code>, <code>like</code>. Use <code>parameters()</code> function to make policies reusable. The <code>field</code> keyword references resource properties (e.g., <code>location</code>, <code>type</code>, <code>tags[CostCenter]</code>).</span></div>`
        },
        {
          title: 'Policy Effects',
          content: `
<p>Effects determine what happens when a policy rule is matched. Evaluated in this priority order:</p>
<ol style="margin:10px 0 12px 20px;line-height:2.2;font-size:14px">
  <li><strong>Disabled</strong> — Policy rule is not evaluated</li>
  <li><strong>Append</strong> — Adds fields/values to the resource request during creation/update</li>
  <li><strong>Deny</strong> — Blocks the non-compliant resource creation or modification</li>
  <li><strong>Audit</strong> — Allows creation but logs a warning; doesn't block anything</li>
  <li><strong>AuditIfNotExists</strong> — Audits if a related resource (e.g., a diagnostic setting) is missing</li>
  <li><strong>DeployIfNotExists</strong> — Deploys a related resource if missing (e.g., auto-deploy diagnostic settings)</li>
  <li><strong>Modify</strong> — Add/update/remove tags or properties on existing resources during create/update</li>
</ol>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> <strong>DeployIfNotExists</strong> and <strong>Modify</strong> require a <strong>Managed Identity</strong> on the policy assignment (for permissions to make changes). Remediation tasks run DeployIfNotExists/Modify on existing non-compliant resources.</span></div>`
        },
        {
          title: 'Initiatives, Assignment & Compliance',
          content: `
<p><strong>Initiatives</strong> (also called Policy Sets) group multiple policies together and assign them as a unit. Example: "ISO 27001" initiative groups 50+ security policies.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Policy Assignment</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Assign at Management Group, Subscription, or Resource Group scope</li>
  <li><strong>Exclusions</strong> — Exclude specific child resources or resource groups from a policy</li>
  <li><strong>Parameters</strong> — Make policies reusable (e.g., allowed locations = parameter)</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Compliance View</h4>
<p style="font-size:14px">Azure Policy → Compliance shows per-resource, per-policy compliance state. States: Compliant, Non-compliant, Not started, Exempt.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Policies with Audit effect do NOT prevent resource creation — they only log non-compliance. Existing resources are not evaluated retroactively until you trigger a compliance scan or remediation. Policy compliance can take up to 30 minutes to update.</span></div>`
        },
        {
          title: 'Exemptions & Remediation Tasks',
          content: `
<h4 style="margin:0 0 8px;color:var(--azure-blue)">Policy Exemptions</h4>
<p style="font-size:14px">Exemptions exclude specific resources from a policy assignment without changing the policy itself. Managed under Policy → Assignments → Exemptions.</p>
<table style="width:100%;font-size:13px;border-collapse:collapse;margin-bottom:12px">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Category</th><th style="padding:8px;text-align:left">Meaning</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Waiver</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">The resource is acknowledged as non-compliant but accepted (business risk accepted)</td></tr>
  <tr><td style="padding:8px"><strong>Mitigated</strong></td><td style="padding:8px">Compliance is achieved through an alternative method not captured by the policy</td></tr>
</table>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Exemptions can have an <strong>expiration date</strong> — they auto-expire and the resource returns to evaluation</li>
  <li>Exemptions are visible in the Compliance dashboard with state "Exempt"</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Remediation Tasks</h4>
<p style="font-size:14px">For <strong>DeployIfNotExists</strong> and <strong>Modify</strong> effects, remediation tasks apply the policy's correction to <em>existing</em> non-compliant resources (new resources are fixed automatically at creation).</p>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Triggered manually from Policy → Compliance → Create Remediation Task, or automatically on assignment</li>
  <li>Require a <strong>Managed Identity</strong> on the policy assignment with sufficient RBAC permissions</li>
  <li>Track remediation progress in Policy → Remediation</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Exemptions ≠ Exclusions. An <em>Exclusion</em> is set on the assignment and applies to a scope (child resource group/resource). An <em>Exemption</em> is a separate resource targeting a specific resource. Only DeployIfNotExists and Modify can trigger automatic remediation.</span></div>`
        }
      ]
    },

    // ── Day 6: Resource Locks, Tags & Resource Groups ─────────────────────────
    6: {
      domain: 'D1',
      title: 'Resource Locks, Tags & Resource Groups',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/control-and-organize-with-azure-resource-manager/',
      sections: [
        {
          title: 'Resource Locks',
          content: `
<p>Resource Locks prevent accidental modifications or deletions. Applied at: Resource Group, Subscription, or Resource level.</p>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Lock Type</th><th style="padding:8px;text-align:left">Effect</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>CanNotDelete</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Read and modify allowed; delete is blocked</td></tr>
  <tr><td style="padding:8px"><strong>ReadOnly</strong></td><td style="padding:8px">Only reads allowed; no modifications or deletes</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Lock Scope &amp; Inheritance</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Locks applied to a Resource Group <strong>automatically apply to all resources</strong> in that group</li>
  <li>Locks applied to a Subscription apply to all resource groups and resources within it</li>
  <li>To remove a lock: Owner or User Access Administrator role is needed</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> ReadOnly on a storage account blocks listing keys (because listing keys is a write action on the management plane). ReadOnly does NOT prevent data-plane operations if the user has direct data-plane permissions. Lock applies to ALL users including Owners.</span></div>`
        },
        {
          title: 'Tags',
          content: `
<p>Tags are key-value pairs (metadata) applied to Azure resources for organisation, cost tracking, and automation.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Facts</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Maximum <strong>50 tags</strong> per resource</li>
  <li>Tag name max 512 characters; tag value max 256 characters</li>
  <li>Tags are <strong>NOT inherited</strong> by child resources by default</li>
  <li>Use <strong>Azure Policy</strong> (Append/Modify effect) to enforce tag inheritance or required tags</li>
  <li>Not all resource types support tags (e.g., classic resources)</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Common Tag Use Cases</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Cost centre tracking: <code>CostCenter: "Marketing"</code></li>
  <li>Environment: <code>Environment: "Production"</code></li>
  <li>Owner: <code>Owner: "admin@company.com"</code></li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Tags on a Resource Group do NOT automatically apply to resources inside it. Tags are visible in cost analysis reports and can be used to filter Cost Management billing data.</span></div>`
        },
        {
          title: 'Tagging Strategy & CLI/PowerShell Commands',
          content: `
<p>A consistent tagging taxonomy is key to governance, cost management, and automation at scale.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Recommended Tag Taxonomy</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Tag Key</th><th style="padding:8px;text-align:left">Purpose</th><th style="padding:8px;text-align:left">Example Value</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>Environment</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Lifecycle stage</td><td style="padding:8px;border-bottom:1px solid var(--border)">Production, Dev, Test</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>CostCenter</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Billing allocation</td><td style="padding:8px;border-bottom:1px solid var(--border)">CC-1001, Finance</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><code>Owner</code></td><td style="padding:8px;border-bottom:1px solid var(--border)">Responsible team/person</td><td style="padding:8px;border-bottom:1px solid var(--border)">team-platform@co.com</td></tr>
  <tr><td style="padding:8px"><code>Application</code></td><td style="padding:8px">Workload or app name</td><td style="padding:8px">ECommerceAPI</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Tag Commands</h4>
<pre style="background:var(--bg-input);padding:12px;border-radius:6px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto"># Azure CLI — set tags on a resource group
az group update --name myRG --tags Environment=Production CostCenter=CC1001

# Azure CLI — merge tags (add without overwriting existing)
az tag update --resource-id &lt;resourceId&gt; --operation Merge --tags Owner=ITOps

# Azure PowerShell — set tags on a resource group
Set-AzResourceGroup -Name "myRG" -Tag @{ Environment="Production"; CostCenter="CC1001" }

# Azure PowerShell — add tags to a resource
New-AzTag -ResourceId &lt;resourceId&gt; -Tag @{ Owner="ITOps"; Application="ECommerceAPI" }</pre>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> <code>az tag update --operation Merge</code> adds tags without deleting existing ones. <code>az group update --tags</code> <strong>replaces</strong> all tags on the resource group. Use Azure Policy with Modify/Append effects to enforce tags automatically rather than relying on manual tagging.</span></div>`
        },
        {
          title: 'Resource Groups',
          content: `
<p><strong>Resource Groups</strong> are logical containers for grouping related Azure resources. Every resource must belong to exactly one resource group.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Characteristics</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Resources in a group can be in <strong>different regions</strong> (the group itself has a metadata region)</li>
  <li>Deleting a Resource Group deletes ALL resources in it</li>
  <li>RBAC assignments and Locks on a Resource Group apply to all resources inside it</li>
  <li>Resources can be <strong>moved</strong> between resource groups (some restrictions apply)</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Moving Resources</h4>
<p style="font-size:14px">Use <code>Move-AzResource</code> (PowerShell) or the portal. Moving validates that the resource supports move and that the destination group supports it. The move is at the ARM level — the resource remains in its original region.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Resource Group's region only stores metadata. Not all resources can be moved (e.g., some VMs, ExpressRoute circuits). Moving a resource to a new subscription requires Owner or Contributor on both source and destination.</span></div>`
        },
        {
          title: 'Resource Group Design Patterns',
          content: `
<p>Choosing the right grouping strategy determines how easily you can manage lifecycle, access control, and cost allocation.</p>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Pattern</th><th style="padding:8px;text-align:left">Group resources by…</th><th style="padding:8px;text-align:left">Best for</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Lifecycle</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Same deployment / retirement cycle</td><td style="padding:8px;border-bottom:1px solid var(--border)">App tiers (frontend + backend + DB together)</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Environment</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Dev / Test / Prod</td><td style="padding:8px;border-bottom:1px solid var(--border)">Isolation between stages; different RBAC per env</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>Ownership / Team</strong></td><td style="padding:8px;border-bottom:1px solid var(--border)">Business unit or team</td><td style="padding:8px;border-bottom:1px solid var(--border)">Delegated RBAC; chargeback billing by team</td></tr>
  <tr><td style="padding:8px"><strong>Geography</strong></td><td style="padding:8px">Azure region</td><td style="padding:8px">Compliance, data residency requirements</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Naming Convention</h4>
<p style="font-size:14px">Microsoft recommends: <code>&lt;type&gt;-&lt;workload&gt;-&lt;env&gt;-&lt;region&gt;-&lt;instance&gt;</code></p>
<p style="font-size:14px;font-family:'Fira Code',monospace;background:var(--bg-input);padding:8px;border-radius:4px">Example: rg-ecommerceapi-prod-eastus2-001</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Resource groups cannot be nested. A resource can only belong to one resource group at a time. The lifecycle pattern is most common — delete the resource group to clean up all its resources in one operation. RBAC and Locks assigned to a resource group apply to all resources within it.</span></div>`
        }
      ]
    },

    // ── Day 7: Management Groups, Subscriptions & Cost Management ────────────
    7: {
      domain: 'D1',
      title: 'Management Groups, Subscriptions & Cost Management',
      msLearnUrl: 'https://learn.microsoft.com/en-us/azure/governance/management-groups/overview',
      sections: [
        {
          title: 'Management Groups',
          content: `
<p><strong>Management Groups</strong> organise multiple Azure subscriptions into a hierarchy, enabling policy and RBAC assignment at scale.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Hierarchy Facts</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Root Management Group (tenant-level) → child management groups → subscriptions</li>
  <li>Maximum <strong>6 levels</strong> of management group nesting (not counting root)</li>
  <li>A single management group can have up to <strong>10,000</strong> children</li>
  <li>Each subscription belongs to exactly <strong>one</strong> management group at a time</li>
  <li>Policies and RBAC roles assigned at a management group level are <strong>inherited</strong> by all child subscriptions</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> The Root Management Group cannot be moved or deleted. Global Administrators can elevate themselves to User Access Administrator on the root scope. Management Groups are only for governance — you cannot deploy resources directly to them.</span></div>`
        },
        {
          title: 'Azure Subscriptions',
          content: `
<p>A <strong>Subscription</strong> is a billing unit and a trust boundary in Azure. All resources belong to a subscription.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Subscription Types (Offer Types)</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Pay-as-you-go</strong> — No upfront commitment; billed monthly</li>
  <li><strong>Enterprise Agreement (EA)</strong> — Volume licensing for large organisations</li>
  <li><strong>Free Trial</strong> — $200 credit for 30 days; some services always free</li>
  <li><strong>Azure for Students</strong> — $100 credit, no credit card required</li>
  <li><strong>CSP (Cloud Solution Provider)</strong> — Through Microsoft partners</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Subscription Limits</h4>
<p style="font-size:14px">Each subscription has <strong>service limits (quotas)</strong>. E.g., 250 storage accounts per region, 980 resource groups per subscription. Soft limits can be raised via support tickets; hard limits cannot.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Transferring a subscription to a different Entra ID tenant changes billing and access. Moving a subscription between management groups does NOT change the billing owner.</span></div>`
        },
        {
          title: 'Azure Cost Management + Billing',
          content: `
<p><strong>Azure Cost Management</strong> helps you analyse, monitor, and optimise your Azure spending.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key Features</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Cost Analysis</strong> — View spending broken down by resource, resource group, tag, region, or time period</li>
  <li><strong>Budgets</strong> — Set spending alerts at subscription or resource group scope; trigger alerts or actions via Action Groups</li>
  <li><strong>Recommendations</strong> — Azure Advisor cost recommendations (rightsize VMs, delete idle resources, use reservations)</li>
  <li><strong>Exports</strong> — Schedule CSV exports to a storage account for billing reconciliation</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Cost Savings Levers</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Reserved Instances</strong> — 1- or 3-year commitment; up to 72% savings vs pay-as-you-go</li>
  <li><strong>Azure Hybrid Benefit</strong> — Use existing on-prem Windows Server / SQL Server licences in Azure</li>
  <li><strong>Spot VMs</strong> — Up to 90% discount; can be evicted with 30 seconds notice</li>
</ul>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Budget alerts do NOT automatically stop resources — they only notify. To automatically stop resources, combine budgets with Azure Automation or Logic Apps. Cost Management data may be delayed up to 72 hours for some resource types.</span></div>`
        }
      ]
    },

    // ── Day 8: Azure AD Connect, Hybrid Identity & PIM Intro ─────────────────
    8: {
      domain: 'D1',
      title: 'Azure AD Connect, Hybrid Identity & PIM Intro',
      msLearnUrl: 'https://learn.microsoft.com/en-us/entra/identity/hybrid/whatis-hybrid-identity',
      sections: [
        {
          title: 'Hybrid Identity & Azure AD Connect',
          content: `
<p><strong>Hybrid Identity</strong> links your on-premises Windows Server AD with Microsoft Entra ID, enabling single sign-on across both environments.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Authentication Methods</h4>
<table style="width:100%;font-size:13px;border-collapse:collapse">
  <tr style="background:var(--bg-input)"><th style="padding:8px;text-align:left">Method</th><th style="padding:8px;text-align:left">How It Works</th><th style="padding:8px;text-align:left">On-prem Needed?</th></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>PHS</strong> (Password Hash Sync)</td><td style="padding:8px;border-bottom:1px solid var(--border)">Hash of password hash synced to cloud; auth happens in cloud</td><td style="padding:8px;border-bottom:1px solid var(--border)">No (auth in cloud)</td></tr>
  <tr><td style="padding:8px;border-bottom:1px solid var(--border)"><strong>PTA</strong> (Pass-through Auth)</td><td style="padding:8px;border-bottom:1px solid var(--border)">Auth requests forwarded to on-prem AD via agents; no hash stored</td><td style="padding:8px;border-bottom:1px solid var(--border)">Yes (on-prem required)</td></tr>
  <tr><td style="padding:8px"><strong>Federation (ADFS)</strong></td><td style="padding:8px">Auth fully delegated to on-prem ADFS; Entra ID trusts ADFS claims</td><td style="padding:8px">Yes (ADFS required)</td></tr>
</table>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Seamless SSO</h4>
<p style="font-size:14px">Works with PHS and PTA. Silently signs in domain-joined users when on corporate network. Uses Kerberos ticket (on-prem) to obtain cloud token — no password prompt.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> PHS is most resilient — auth works even if on-prem is down. PTA requires on-prem agent availability. Federation is most complex. Seamless SSO does NOT work with Federation (ADFS handles SSO itself).</span></div>`
        },
        {
          title: 'Azure AD Connect Sync',
          content: `
<p>Azure AD Connect (now called <strong>Microsoft Entra Connect</strong>) is the tool that synchronises on-prem AD objects to Entra ID.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">What Gets Synced</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li>Users, groups, contacts, devices</li>
  <li>Password hashes (if PHS selected)</li>
  <li>Writeback: group writeback, device writeback, password writeback (requires P1)</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Sync Cycle</h4>
<p style="font-size:14px">Default sync interval: <strong>30 minutes</strong>. Force a sync: <code>Start-ADSyncSyncCycle -PolicyType Delta</code> (PowerShell).</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Filtering</h4>
<p style="font-size:14px">Sync only specific OUs, groups, or attributes. Configured in the Azure AD Connect Sync Rules Editor.</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> Password Writeback (SSPR to on-prem AD) requires Azure AD Connect + P1. Source of Authority — accounts synced from on-prem AD cannot be fully managed from the cloud (display name, attributes managed in on-prem AD). Cloud-only attributes (e.g., manager) can still be set in Entra ID.</span></div>`
        },
        {
          title: 'Privileged Identity Management (PIM)',
          content: `
<p><strong>PIM</strong> provides just-in-time (JIT) privileged access to Entra ID and Azure roles. Requires <strong>P2</strong>.</p>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">Key PIM Concepts</h4>
<ul style="margin:0 0 12px 20px;line-height:2;font-size:14px">
  <li><strong>Eligible roles</strong> — User has been granted the ability to activate a role but it is not active</li>
  <li><strong>Active roles</strong> — Role is currently activated; user has the permissions now</li>
  <li><strong>Time-bound access</strong> — Set start/end dates for role eligibility or active assignment</li>
  <li><strong>Activation</strong> — User activates eligible role; can require MFA, justification, approval</li>
  <li><strong>Approval workflows</strong> — Role activation can require manager or admin approval</li>
  <li><strong>Access reviews</strong> — Periodic reviews to verify who still needs privileged access</li>
  <li><strong>Audit logs</strong> — All PIM activations, approvals, and reviews are logged</li>
</ul>
<h4 style="margin:14px 0 8px;color:var(--azure-blue)">PIM Scope</h4>
<p style="font-size:14px">Works for Entra ID directory roles (e.g., Global Admin, User Admin) AND Azure RBAC roles (Owner, Contributor, custom roles).</p>
<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Exam Tips:</strong> PIM = P2. Use PIM instead of permanent role assignments for privileged roles (security best practice). Activation duration is configurable (e.g., max 8 hours). Global Administrator can always override PIM if needed using the "Activate my Azure AD roles" button.</span></div>`
        }
      ]
    }

  });
})();
