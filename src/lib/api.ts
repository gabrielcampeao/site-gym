export interface Plan {
  id: number
  name: string
  price: number
  period: string
  description: string
  features: string[]
  highlighted: boolean
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
}

export async function fetchPlans(): Promise<Plan[]> {
  const res = await fetch('/api/plans')
  const json = await res.json()
  return json.data
}

export async function sendContact(form: ContactForm): Promise<{ success: boolean; message: string }> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  return res.json()
}
