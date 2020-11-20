<template>
  <div>
    <h1>Welcome to user profile</h1>
    <pre style="word-break: break-all; white-space: pre-wrap">
      Token: {{ _token }}
    </pre>
    <hr />
    <pre style="word-break: break-all; white-space: pre-wrap">
      User: {{ _user }}
    </pre>
  </div>
</template>

<script>
export default {
  middleware: 'protected',
}
</script>
