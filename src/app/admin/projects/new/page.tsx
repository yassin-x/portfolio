import React from 'react'
import Form from './_components/Form'

export default function NewPage() {
  return (
    <main>
      <section className='section-gap-xl container'>
        <div className='bg-card element-center p-4 rounded-lg max-w-xl mx-auto flex flex-col gap-2'>
          <h1 className='text-2xl font-bold text-primary'>New Project</h1>
          <p className='text-muted-foreground text-sm'>Create a new project</p>
          <Form />
        </div>
      </section>
    </main>
  )
}
