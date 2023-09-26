<script setup lang="ts">
const email = useState(() => '')
const password = useState(() => '')
const name = useState(() => '')
const user = useState(() => null)

async function login() {
  await useFetch('/api/login', {
    method: 'post',
    body: {
      email: email.value,
      password: password.value,
      name: name.value,
    },
  })
  window.location.reload()
}

onMounted(async () => {
  try {
    const { data, error } = await useFetch('/api/profile', {
      method: 'get',
    })

    if (error.value) {
      return
    }
    user.value = data.value
  } catch (error: unknown) {}
})

async function logout() {
  await useFetch('/api/logout')
  window.location.reload()
}
</script>

<template>
  <div>
    User: {{ user?.name ?? 'Guest' }}
    <input v-if="!user" v-model="name" placeholder="Name" />
    <input v-if="!user" v-model="email" placeholder="Email" />
    <input
      v-if="!user"
      v-model="password"
      placeholder="Password"
      type="password"
    />
    <button v-if="!user" @click="login">Login</button>
    <button @click="logout" v-if="user">Logout</button>
  </div>
</template>
