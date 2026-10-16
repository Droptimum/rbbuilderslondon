<script setup lang="ts">
import { Send, LoaderCircle, CircleCheck, CircleAlert } from 'lucide-vue-next'
import { services } from '~/data/services'
import { site } from '~/data/site'

type Field = 'name' | 'email' | 'phone' | 'service' | 'message'

const form = reactive<Record<Field, string>>({ name: '', email: '', phone: '', service: '', message: '' })
const botField = ref('')
const errors = reactive<Partial<Record<Field, string>>>({})
const touched = reactive<Partial<Record<Field, boolean>>>({})
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const summary = ref<HTMLElement>()
const showSummary = ref(false)

const labels: Record<Field, string> = {
  name: 'Your name',
  email: 'Email address',
  phone: 'Phone number',
  service: 'What do you need?',
  message: 'Tell us about your project',
}

function validate(field: Field) {
  const v = form[field].trim()
  let msg = ''
  if (field === 'name' && !v) msg = 'Please enter your name.'
  if (field === 'email') {
    if (!v) msg = 'Please enter your email so we can reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = 'That email doesn’t look right — check for a missing @ or dot.'
  }
  if (field === 'phone' && v && !/^[+\d][\d\s()-]{7,}$/.test(v)) msg = 'Enter a UK phone number, e.g. 07123 456789.'
  if (field === 'message' && v.length < 10) msg = 'Give us a little detail about the job (at least 10 characters).'
  if (msg) errors[field] = msg
  else delete errors[field]
  return !msg
}

function onBlur(field: Field) {
  touched[field] = true
  validate(field)
}

const errorList = computed(() => (Object.keys(errors) as Field[]).map((f) => ({ field: f, message: errors[f]! })))

async function submit() {
  const fields: Field[] = ['name', 'email', 'phone', 'message']
  fields.forEach((f) => (touched[f] = true))
  const ok = fields.map(validate).every(Boolean)
  if (!ok) {
    showSummary.value = true
    await nextTick()
    summary.value?.focus()
    return
  }
  showSummary.value = false
  status.value = 'sending'
  try {
    const body = new URLSearchParams({ 'form-name': 'quote', 'bot-field': botField.value, ...form })
    // Netlify Forms picks up submissions posted to the static form definition in /public/__forms.html
    const res = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!res.ok) throw new Error(String(res.status))
    status.value = 'sent'
  } catch {
    status.value = 'error'
  }
}

function reset() {
  Object.assign(form, { name: '', email: '', phone: '', service: '', message: '' })
  Object.keys(touched).forEach((k) => delete touched[k as Field])
  status.value = 'idle'
}

const inputClass =
  'mt-2 block w-full min-h-12 border-0 bg-stone-50 px-4 py-3 text-base text-ink-900 ring-1 ring-ink-200 ring-inset placeholder:text-ink-500 transition-shadow focus:bg-white focus:ring-2 focus:ring-brand-600 focus:outline-none'
</script>

<template>
  <div>
    <div v-if="status === 'sent'" class="flex flex-col items-start gap-4 bg-brand-600/10 p-8 ring-1 ring-brand-600/30" role="status">
      <CircleCheck class="size-10 text-brand-600" aria-hidden="true" />
      <h3 class="text-3xl uppercase">Thanks, {{ form.name.split(' ')[0] }} — message received</h3>
      <p class="text-ink-700">We’ll get back to you shortly. If it’s urgent, call us on <a :href="site.phoneHref" class="font-semibold text-brand-700 underline">{{ site.phone }}</a>.</p>
      <button type="button" class="btn btn-outline-dark mt-2" @click="reset">Send another message</button>
    </div>

    <form
      v-else
      name="quote"
      method="POST"
      novalidate
      class="grid gap-6 sm:grid-cols-2"
      @submit.prevent="submit"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p class="hidden">
        <label>Don’t fill this out: <input v-model="botField" name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>

      <div
        v-if="showSummary && errorList.length"
        ref="summary"
        tabindex="-1"
        role="alert"
        class="bg-red-50 p-5 text-red-800 ring-1 ring-red-200 sm:col-span-2"
      >
        <p class="flex items-center gap-2 font-semibold">
          <CircleAlert class="size-5" aria-hidden="true" />
          Please fix {{ errorList.length === 1 ? 'this' : `these ${errorList.length}` }} before sending:
        </p>
        <ul class="mt-2 list-disc space-y-1 pl-9">
          <li v-for="e in errorList" :key="e.field">
            <a :href="`#f-${e.field}`" class="underline">{{ labels[e.field] }}</a> — {{ e.message }}
          </li>
        </ul>
      </div>

      <div v-for="f in (['name', 'email', 'phone'] as const)" :key="f" :class="f === 'phone' && 'sm:col-span-1'">
        <label :for="`f-${f}`" class="font-semibold text-ink-900">
          {{ labels[f] }}
          <span v-if="f !== 'phone'" class="text-red-700" aria-hidden="true">*</span>
          <span v-else class="font-normal text-ink-500">(optional)</span>
        </label>
        <input
          :id="`f-${f}`"
          v-model="form[f]"
          :name="f"
          :type="f === 'email' ? 'email' : f === 'phone' ? 'tel' : 'text'"
          :autocomplete="f === 'name' ? 'name' : f === 'email' ? 'email' : 'tel'"
          :required="f !== 'phone'"
          :aria-invalid="!!errors[f] && touched[f]"
          :aria-describedby="errors[f] && touched[f] ? `e-${f}` : undefined"
          :class="[inputClass, errors[f] && touched[f] && '!ring-2 !ring-red-600']"
          @blur="onBlur(f)"
          @input="touched[f] && validate(f)"
        />
        <p v-if="errors[f] && touched[f]" :id="`e-${f}`" class="mt-2 text-sm text-red-700">{{ errors[f] }}</p>
      </div>

      <div>
        <label for="f-service" class="font-semibold text-ink-900">
          {{ labels.service }} <span class="font-normal text-ink-500">(optional)</span>
        </label>
        <select id="f-service" v-model="form.service" name="service" :class="[inputClass, 'appearance-auto']">
          <option value="">Choose a service</option>
          <option v-for="s in services" :key="s.id" :value="s.title">{{ s.title }}</option>
          <option value="Other">Something else</option>
        </select>
      </div>

      <div class="sm:col-span-2">
        <label for="f-message" class="font-semibold text-ink-900">
          {{ labels.message }} <span class="text-red-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="f-message"
          v-model="form.message"
          name="message"
          rows="6"
          required
          placeholder="e.g. Full bathroom refit in a Victorian terrace, E17. Hoping to start in spring."
          :aria-invalid="!!errors.message && touched.message"
          :aria-describedby="errors.message && touched.message ? 'e-message' : 'h-message'"
          :class="[inputClass, 'resize-y', errors.message && touched.message && '!ring-2 !ring-red-600']"
          @blur="onBlur('message')"
          @input="touched.message && validate('message')"
        />
        <p v-if="errors.message && touched.message" id="e-message" class="mt-2 text-sm text-red-700">{{ errors.message }}</p>
        <p v-else id="h-message" class="mt-2 text-sm text-ink-500">Rough sizes, your postcode and ideal timings all help us quote accurately.</p>
      </div>

      <div class="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-ink-500"><span class="text-red-700">*</span> Required</p>
        <button type="submit" class="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60" :disabled="status === 'sending'">
          <template v-if="status === 'sending'">
            <LoaderCircle class="size-5 animate-spin" aria-hidden="true" />
            Sending…
          </template>
          <template v-else>
            Send enquiry
            <Send class="size-4" aria-hidden="true" />
          </template>
        </button>
      </div>

      <p v-if="status === 'error'" role="alert" class="flex items-start gap-2 bg-red-50 p-4 text-red-800 ring-1 ring-red-200 sm:col-span-2">
        <CircleAlert class="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <span>
          Sorry, your message didn’t send. Please try again, or email
          <a :href="`mailto:${site.email}`" class="font-semibold underline">{{ site.email }}</a> /
          call <a :href="site.phoneHref" class="font-semibold underline">{{ site.phone }}</a>.
        </span>
      </p>
    </form>
  </div>
</template>
