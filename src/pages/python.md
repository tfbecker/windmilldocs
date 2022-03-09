---
title: Python Client
---

## Classes

<div className='api'>

### Client <a name="wmill.client.Client"/>

<div className='api__body'>

<div className='api__signature'>
class <span class="ident">Client</span>(base_url: str = 'http://localhost:8000/api', token: str = '')
</div>

<div className='api__description'>

<p>Client to interact with the Windmill API</p>
<p>Method generated by attrs for class Client.</p>

</div>

#### Class variables

<div className='api__body'>

<div id="wmill.client.Client.base_url" className='api__signature'>
var <span class="ident">base_url</span> : str
</div>

<div className='api__description'>

</div>

<div id="wmill.client.Client.token" className='api__signature'>
var <span class="ident">token</span> : str
</div>

<div className='api__description'>

</div>

</div>

#### Methods

<div className='api__body'>

<div className='api'>

#### get_job_status <a name="wmill.client.Client.get_job_status"/>

<div className='api__body'>
<div className='api__signature'>
def <span class="ident">get_job_status</span>(self, job_id: str) ‑> <a title="wmill.client.JobStatus" href="#wmill.client.JobStatus">JobStatus</a>
</div>

<div className='api__description'>

<p>Returns the status of a queued or completed job</p>

</div>
</div>

</div>
  
              
<div className='api'>

#### get_resource <a name="wmill.client.Client.get_resource"/>

<div className='api__body'>
<div className='api__signature'>
def <span class="ident">get_resource</span>(self, path: str) ‑> Dict[str, Any]
</div>

<div className='api__description'>

<p>Returns a resource at a given path as a python dict.</p>

</div>
</div>

</div>
  
              
<div className='api'>

#### get_result <a name="wmill.client.Client.get_result"/>

<div className='api__body'>
<div className='api__signature'>
def <span class="ident">get_result</span>(self, job_id: str) ‑> Dict[str, Any]
</div>

<div className='api__description'>

<p>Returns the result of a completed job</p>

</div>
</div>

</div>
  
              
<div className='api'>

#### get_version <a name="wmill.client.Client.get_version"/>

<div className='api__body'>
<div className='api__signature'>
def <span class="ident">get_version</span>(self) ‑> str
</div>

<div className='api__description'>

<p>Returns the current version of the backend</p>

</div>
</div>

</div>
  
              
<div className='api'>

#### run_script_async <a name="wmill.client.Client.run_script_async"/>

<div className='api__body'>
<div className='api__signature'>
def <span class="ident">run_script_async</span>(self, hash: str, args: Dict[str, Any] = {}, scheduled_in_secs: Optional[None] = None) ‑> str
</div>

<div className='api__description'>

<p>Launch the run of a script and return immediately its job id</p>

</div>
</div>

</div>
  
              
<div className='api'>

#### run_script_sync <a name="wmill.client.Client.run_script_sync"/>

<div className='api__body'>
<div className='api__signature'>
def <span class="ident">run_script_sync</span>(self, hash: str, args: Dict[str, Any] = {}, verbose: bool = False) ‑> Dict[str, Any]
</div>

<div className='api__description'>

<p>Run a script, wait for it to complete and return the result of the launched script</p>

</div>
</div>

</div>

</div>

</div>

</div>

<div className='api'>

### JobStatus <a name="wmill.client.JobStatus"/>

<div className='api__body'>

<div className='api__signature'>
class <span class="ident">JobStatus</span>(value, names=None, *, module=None, qualname=None, type=None, start=1)
</div>

<div className='api__description'>

<p>An enumeration.</p>

</div>

#### Class variables

<div className='api__body'>

<div id="wmill.client.JobStatus.COMPLETED" className='api__signature'>
var <span class="ident">COMPLETED</span>
</div>

<div className='api__description'>

</div>

<div id="wmill.client.JobStatus.RUNNING" className='api__signature'>
var <span class="ident">RUNNING</span>
</div>

<div className='api__description'>

</div>

<div id="wmill.client.JobStatus.WAITING" className='api__signature'>
var <span class="ident">WAITING</span>
</div>

<div className='api__description'>

</div>

</div>

#### Ancestors

- enum.Enum

</div>

</div>