import React from 'react'
import Navbar from '@/Components/Navbar'
import { Link, Head } from '@inertiajs/react';

function AboutPage() {
  return (
    <div>
      <Head title="About" />
      <Navbar />
      <div className="my-32">
        <h1>About Page</h1>
      </div>
    </div>
  )
}

export default AboutPage
