// Azure Cloud Shell Module — Unit 5: Knowledge Check
// MS Learn: https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/5-knowledge-check
// Maps to Schedule Day 5
(function () {
  if (!window.STUDY_LESSONS) window.STUDY_LESSONS = {};

  Object.assign(window.STUDY_LESSONS, {

    5: {
      domain: 'D1',
      title: 'Azure Cloud Shell — Knowledge Check',
      msLearnUrl: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/5-knowledge-check',
      sections: [

        {
          title: 'Official Knowledge Check Questions',
          content: `
<p>The following questions reflect the official knowledge check from the Microsoft Learn module. Read each question carefully, think of your answer, then expand the answer explanation.</p>

<div style="margin:16px 0">

  <!-- Q1 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q1</span>
      <strong style="font-size:14px">What is Azure Cloud Shell?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q1" style="margin-right:8px">A desktop application that must be installed on your local machine to manage Azure resources</label>
        <label style="cursor:pointer"><input type="radio" name="q1" style="margin-right:8px">A browser-accessible, interactive, authenticated shell for managing Azure resources</label>
        <label style="cursor:pointer"><input type="radio" name="q1" style="margin-right:8px">A virtual machine running in Azure that you connect to via RDP</label>
        <label style="cursor:pointer"><input type="radio" name="q1" style="margin-right:8px">A command-line interface that only supports Bash scripting</label>
      </div>
      <details style="margin-top:8px">
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: B — A browser-accessible, interactive, authenticated shell for managing Azure resources</strong>
          <p style="margin:8px 0 0;font-size:13px">Azure Cloud Shell runs entirely in a browser. It requires no local installation and is automatically authenticated with your Azure identity. It supports both Bash and PowerShell — not just Bash.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q2 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q2</span>
      <strong style="font-size:14px">What shell environments does Azure Cloud Shell support?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q2" style="margin-right:8px">A Only Bash</label>
        <label style="cursor:pointer"><input type="radio" name="q2" style="margin-right:8px">B Only PowerShell</label>
        <label style="cursor:pointer"><input type="radio" name="q2" style="margin-right:8px">C Both Bash and PowerShell</label>
        <label style="cursor:pointer"><input type="radio" name="q2" style="margin-right:8px">D Bash, PowerShell, and Zsh</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: C — Both Bash and PowerShell</strong>
          <p style="margin:8px 0 0;font-size:13px">Azure Cloud Shell offers both Bash (with Azure CLI) and PowerShell (with Az module). You can switch between them at any time. Zsh is not a supported Cloud Shell environment.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q3 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q3</span>
      <strong style="font-size:14px">Where are your Cloud Shell files persisted between sessions?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q3" style="margin-right:8px">A On the temporary Cloud Shell container</label>
        <label style="cursor:pointer"><input type="radio" name="q3" style="margin-right:8px">B On your local machine's hard drive</label>
        <label style="cursor:pointer"><input type="radio" name="q3" style="margin-right:8px">C In an Azure Blob Storage container</label>
        <label style="cursor:pointer"><input type="radio" name="q3" style="margin-right:8px">D In an Azure Files share mounted to your session</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: D — In an Azure Files share mounted to your session</strong>
          <p style="margin:8px 0 0;font-size:13px">Cloud Shell mounts an Azure Files share as your $HOME directory (a 5 GB disk image). This persists between sessions. The container itself is ephemeral and destroyed when the session ends. Files NOT in $HOME or $HOME/clouddrive are lost.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q4 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q4</span>
      <strong style="font-size:14px">How long does Azure Cloud Shell wait before terminating an idle session?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q4" style="margin-right:8px">A 5 minutes</label>
        <label style="cursor:pointer"><input type="radio" name="q4" style="margin-right:8px">B 10 minutes</label>
        <label style="cursor:pointer"><input type="radio" name="q4" style="margin-right:8px">C 20 minutes</label>
        <label style="cursor:pointer"><input type="radio" name="q4" style="margin-right:8px">D 60 minutes</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: C — 20 minutes</strong>
          <p style="margin:8px 0 0;font-size:13px">Azure Cloud Shell terminates after <strong>20 minutes of inactivity</strong>. Running commands resets this timer. After termination, the container is destroyed but your Azure Files storage persists. You can simply open a new session.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q5 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q5</span>
      <strong style="font-size:14px">A developer needs to manage Azure resources from a locked-down device where no software can be installed. What is the BEST solution?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q5" style="margin-right:8px">A Request IT to install Azure CLI on the device</label>
        <label style="cursor:pointer"><input type="radio" name="q5" style="margin-right:8px">B Use Azure Cloud Shell from a web browser</label>
        <label style="cursor:pointer"><input type="radio" name="q5" style="margin-right:8px">C Use the Azure Portal GUI only</label>
        <label style="cursor:pointer"><input type="radio" name="q5" style="margin-right:8px">D Create a VM in Azure and RDP into it</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: B — Use Azure Cloud Shell from a web browser</strong>
          <p style="margin:8px 0 0;font-size:13px">Cloud Shell requires no local installation — just a modern web browser. It provides full Azure CLI and PowerShell capability. Option A requires IT involvement. Option C is limited (GUI only). Option D is overkill and introduces unnecessary cost and complexity.</p>
        </div>
      </details>
    </div>
  </div>

</div>`
        },

        {
          title: 'Additional Practice Questions',
          content: `
<p>These additional questions cover concepts from all units of this module and appear in AZ-104 exam practice sets.</p>

<div style="margin:16px 0">

  <!-- Q6 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q6</span>
      <strong style="font-size:14px">Which command opens the Cloud Shell's built-in graphical text editor?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q6" style="margin-right:8px">A <code>vim .</code></label>
        <label style="cursor:pointer"><input type="radio" name="q6" style="margin-right:8px">B <code>nano .</code></label>
        <label style="cursor:pointer"><input type="radio" name="q6" style="margin-right:8px">C <code>code .</code></label>
        <label style="cursor:pointer"><input type="radio" name="q6" style="margin-right:8px">D <code>edit .</code></label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: C — <code>code .</code></strong>
          <p style="margin:8px 0 0;font-size:13px">The <code>code .</code> command opens the Cloud Shell Editor — a browser-based graphical Monaco editor (same engine as VS Code). <code>vim</code> and <code>nano</code> are also available but are terminal-based editors, not graphical ones.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q7 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q7</span>
      <strong style="font-size:14px">What happens to the Cloud Shell container when the session times out?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q7" style="margin-right:8px">A The container is paused and resumes when you reconnect</label>
        <label style="cursor:pointer"><input type="radio" name="q7" style="margin-right:8px">B The container is destroyed; files in $HOME are preserved in Azure Files</label>
        <label style="cursor:pointer"><input type="radio" name="q7" style="margin-right:8px">C The container is destroyed; all files including $HOME are lost</label>
        <label style="cursor:pointer"><input type="radio" name="q7" style="margin-right:8px">D The session is saved and automatically resumed the next day</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: B — Container destroyed; $HOME files preserved in Azure Files</strong>
          <p style="margin:8px 0 0;font-size:13px">The compute container is ephemeral and is destroyed on timeout. However, the $HOME directory is a disk image stored in your Azure Files share — so scripts, configs, and SSH keys survive session restarts.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q8 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q8</span>
      <strong style="font-size:14px">An admin wants to run a deployment script that takes 45 minutes using Azure CLI. Is Cloud Shell appropriate?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q8" style="margin-right:8px">A Yes, Cloud Shell has no time limits for running commands</label>
        <label style="cursor:pointer"><input type="radio" name="q8" style="margin-right:8px">B Yes, Cloud Shell can run commands as long as the browser tab stays open</label>
        <label style="cursor:pointer"><input type="radio" name="q8" style="margin-right:8px">C No, Cloud Shell should not be used for this; use Azure Automation Runbooks instead</label>
        <label style="cursor:pointer"><input type="radio" name="q8" style="margin-right:8px">D No, Cloud Shell maximum session duration is 10 minutes</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: C — No; use Azure Automation Runbooks</strong>
          <p style="margin:8px 0 0;font-size:13px">Cloud Shell times out after 20 minutes of <em>inactivity</em>. A 45-minute script that actively produces output may survive, but it is risky — the script could be interrupted. For reliable long-running scripts, use Azure Automation Runbooks or a local terminal. Note: Answer D is wrong — the timeout is 20 minutes of inactivity, not a 10-minute absolute limit.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q9 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q9</span>
      <strong style="font-size:14px">What is the Azure: drive in Cloud Shell?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q9" style="margin-right:8px">A The mounted Azure Files share at $HOME/clouddrive</label>
        <label style="cursor:pointer"><input type="radio" name="q9" style="margin-right:8px">B A virtual PowerShell drive that lets you browse Azure resources like a file system</label>
        <label style="cursor:pointer"><input type="radio" name="q9" style="margin-right:8px">C A Bash alias for the Azure CLI</label>
        <label style="cursor:pointer"><input type="radio" name="q9" style="margin-right:8px">D A network drive mapped to an Azure Blob Storage container</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: B — A virtual PowerShell drive for browsing Azure resources</strong>
          <p style="margin:8px 0 0;font-size:13px">The <code>Azure:</code> drive is a <strong>PowerShell-only</strong> feature. Use <code>cd Azure:</code> to enter it, then navigate subscriptions, resource groups, and resources as if they were folders. It's not available in Bash mode.</p>
        </div>
      </details>
    </div>
  </div>

  <!-- Q10 -->
  <div style="border:1px solid var(--border);border-radius:8px;margin-bottom:16px;overflow:hidden">
    <div style="background:var(--bg-input);padding:14px 18px">
      <span style="background:var(--azure-blue);color:#fff;border-radius:4px;padding:2px 8px;font-size:12px;margin-right:8px">Q10</span>
      <strong style="font-size:14px">Which of the following is NOT a place from which Azure Cloud Shell can be accessed?</strong>
    </div>
    <div style="padding:14px 18px;font-size:13px">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <label style="cursor:pointer"><input type="radio" name="q10" style="margin-right:8px">A The Azure Portal (portal.azure.com)</label>
        <label style="cursor:pointer"><input type="radio" name="q10" style="margin-right:8px">B shell.azure.com</label>
        <label style="cursor:pointer"><input type="radio" name="q10" style="margin-right:8px">C The Azure mobile app</label>
        <label style="cursor:pointer"><input type="radio" name="q10" style="margin-right:8px">D An SSH connection to an Azure Virtual Machine</label>
      </div>
      <details>
        <summary style="cursor:pointer;color:var(--azure-blue);font-weight:600;font-size:13px">Show Answer</summary>
        <div style="margin-top:10px;padding:12px;background:rgba(16,124,16,0.1);border-radius:6px;border-left:3px solid #107c10">
          <strong style="color:#107c10">✅ Answer: D — SSH to a VM</strong>
          <p style="margin:8px 0 0;font-size:13px">SSH-ing into an Azure VM gives you shell access to <em>that VM</em> — not Cloud Shell. Cloud Shell is accessed through Azure Portal, shell.azure.com, the Azure mobile app, and VS Code with the Azure Account extension.</p>
        </div>
      </details>
    </div>
  </div>

</div>`
        },

        {
          title: 'Quick Reference — Must-Know Facts',
          content: `
<p>Before your exam, memorize these critical Cloud Shell facts:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0">
  <div style="border:2px solid var(--azure-blue);border-radius:8px;padding:14px">
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">⏱️ Timing</h4>
    <ul style="margin:0;padding-left:16px;font-size:13px;line-height:2">
      <li>Idle timeout: <strong>20 minutes</strong></li>
      <li>Session startup: ~20 seconds</li>
      <li>Container lifespan: Per session (ephemeral)</li>
    </ul>
  </div>
  <div style="border:2px solid var(--azure-blue);border-radius:8px;padding:14px">
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">💾 Storage</h4>
    <ul style="margin:0;padding-left:16px;font-size:13px;line-height:2">
      <li>$HOME size: <strong>5 GB</strong> disk image</li>
      <li>Stored in: <strong>Azure Files</strong> share</li>
      <li>Mount path: <code>$HOME/clouddrive</code></li>
      <li>Cost: ~$0.06/GB/month</li>
    </ul>
  </div>
  <div style="border:2px solid var(--azure-blue);border-radius:8px;padding:14px">
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">🔐 Security</h4>
    <ul style="margin:0;padding-left:16px;font-size:13px;line-height:2">
      <li>Auto-authenticated (no login needed)</li>
      <li>Inherits your Azure RBAC permissions</li>
      <li>Files encrypted at rest (AES-256)</li>
      <li>Per-user isolated container</li>
    </ul>
  </div>
  <div style="border:2px solid var(--azure-blue);border-radius:8px;padding:14px">
    <h4 style="margin:0 0 10px;color:var(--azure-blue);font-size:13px">🌐 Access</h4>
    <ul style="margin:0;padding-left:16px;font-size:13px;line-height:2">
      <li>Azure Portal (<code>&gt;_</code> icon)</li>
      <li><code>shell.azure.com</code></li>
      <li>Azure Mobile App</li>
      <li>VS Code (Azure Account ext)</li>
      <li>MS Learn "Try it" buttons</li>
    </ul>
  </div>
</div>

<div class="alert alert-warning mt-4"><i class="fas fa-star"></i><span><strong>🎯 Final Study Tip:</strong> On the actual AZ-104 exam, Cloud Shell questions are straightforward. Focus on: the 20-minute timeout, Azure Files for persistence, automatic authentication, both Bash and PowerShell support, and that Cloud Shell is inappropriate for long-running automated tasks.</span></div>`
        }

      ]
    }

  });
})();
