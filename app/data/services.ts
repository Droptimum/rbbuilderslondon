import type { Component } from 'vue'
import { Bath, ChefHat, HousePlus, Warehouse, PaintRoller } from 'lucide-vue-next'

export interface Service {
  id: string
  title: string
  icon: Component
  summary: string
  description: string
  includes: string[]
  image?: { src: string; alt: string }
}

export const services: Service[] = [
  {
    id: 'bathrooms',
    title: 'Bathrooms',
    icon: Bath,
    summary: 'Full bathroom, en-suite and cloakroom fit-outs, from strip-out to the last bead of silicone.',
    description:
      'Bathrooms are where we started, and they are still the heart of what we do. We handle the whole job: removal of the old suite, first and second-fix plumbing, electrics, waterproofing, tiling and finishing. Walk-in showers, freestanding baths, wall-hung vanities, marble or mosaic, we will help you choose a layout that works for the room and the way you use it.',
    includes: [
      'Design advice and layout planning',
      'Strip-out and disposal of the old suite',
      'Plumbing, electrics and underfloor heating',
      'Tanking and waterproofing for wet rooms',
      'Wall and floor tiling, including marble and mosaic',
      'Sanitaryware, vanity units and towel rails fitted',
    ],
    image: { src: '/images/projects/walk-in-shower.jpg', alt: 'Frameless walk-in shower with chrome towel rail and grey tiling' },
  },
  {
    id: 'kitchens',
    title: 'Kitchens',
    icon: ChefHat,
    summary: 'New kitchens planned, built and fitted, with plumbing, electrics and finishes handled in-house.',
    description:
      'Whether you are replacing tired units or knocking through to create an open-plan kitchen and dining space, we manage the full build. We work with your chosen kitchen supplier or help you source one, then take care of the structural work, services, fitting, worktops and tiling so the room is ready to cook in.',
    includes: [
      'Layout planning and knock-throughs',
      'Plumbing and gas-safe appliance connections arranged',
      'Electrics, lighting and extra sockets',
      'Unit, worktop and appliance installation',
      'Splashbacks, flooring and decorating',
    ],
  },
  {
    id: 'extensions',
    title: 'Extensions',
    icon: HousePlus,
    summary: 'Rear, side-return and wrap-around extensions that add real space to your home.',
    description:
      'An extension is often the best way to gain space without moving. We build single-storey rear and side-return extensions that are typical of Walthamstow and East London terraces, coordinating with your architect and building control from groundworks through to the finished, decorated room.',
    includes: [
      'Groundworks and foundations',
      'Brickwork, steels and structural openings',
      'Roofing, skylights and bi-fold or sliding doors',
      'Insulation, plastering and first and second fix',
      'Liaison with architects and building control',
    ],
  },
  {
    id: 'loft-conversions',
    title: 'Loft conversions',
    icon: Warehouse,
    summary: 'Dormer and Velux loft conversions that turn unused roof space into bedrooms and bathrooms.',
    description:
      'Most London terraces have room to grow upwards. We convert lofts into extra bedrooms, home offices and en-suite bathrooms, taking care of the structure, stairs, insulation and fire safety requirements so the new floor feels like it was always part of the house.',
    includes: [
      'Dormer, hip-to-gable and Velux conversions',
      'Floor joists, steels and new staircase',
      'Insulation and fire-safety upgrades',
      'En-suite bathrooms and built-in storage',
      'Windows, electrics, plastering and decorating',
    ],
  },
  {
    id: 'refurbishments',
    title: 'Refurbishments',
    icon: PaintRoller,
    summary: 'Whole-house and single-room renovations, managed by one team from start to finish.',
    description:
      'From refreshing a single room to renovating a whole property before you move in, we coordinate every trade so you only deal with one point of contact. We are tidy, we keep you updated, and we stick to the agreed scope and budget.',
    includes: [
      'Whole-house and flat renovations',
      'Re-plastering, flooring and joinery',
      'Rewiring and replumbing',
      'Internal walls, doors and storage',
      'Decorating and snagging',
    ],
  },
]
