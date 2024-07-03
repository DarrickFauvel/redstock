"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { createLocation, updateLocation } from "@/utils/actions/location"
import { useEffect, useState } from "react"

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
})

const LocationForm = ({ location = { id: "", name: "", description: "" } }) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: location.id,
      name: location.name,
      description: location.description,
    },
  })

  useEffect(() => {
    form.reset()
  }, [isSubmitSuccessful])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.id) {
      await createLocation(values)
      setIsSubmitSuccessful(true)
    } else {
      await updateLocation(values)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" placeholder="id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
export default LocationForm
