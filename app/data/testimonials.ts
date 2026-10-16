// PLACEHOLDER CONTENT — replace these with real client reviews before going live.
// Entries with `placeholder: true` show a small "Sample review" tag on the site.
export interface Testimonial {
  quote: string
  name: string
  location: string
  project: string
  rating: number
  placeholder?: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Replace this with a real review from a bathroom client. Ask them what stood out: the finish, the tidiness, how they were kept updated.',
    name: 'Client name',
    location: 'Walthamstow, E17',
    project: 'Bathroom renovation',
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      'Replace this with a real review from a kitchen or extension client. Short, specific quotes read as the most genuine.',
    name: 'Client name',
    location: 'Leyton, E10',
    project: 'Kitchen & extension',
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      'Replace this with a real review from a loft conversion or refurbishment client. A first name and area is plenty.',
    name: 'Client name',
    location: 'Chingford, E4',
    project: 'Loft conversion',
    rating: 5,
    placeholder: true,
  },
  {
    quote: 'Replace this with a real review. Google, Checkatrade or Facebook reviews can be copied here with permission.',
    name: 'Client name',
    location: 'Leytonstone, E11',
    project: 'Full refurbishment',
    rating: 5,
    placeholder: true,
  },
]
